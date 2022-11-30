import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment'; 
import { ConfigService } from 'src/app/service/config.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PrintingService } from '../service/printing.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  outletId: any;
  loading: boolean = false;
  api: string = environment.api; 
  myUUID: any;
  isStillLogin: boolean = false; 
  memberId: string = ""; 
  member: any = []; 
  loginSuccess: boolean = false;
  kioskUuid: any = localStorage.getItem(this.configService.myUUID());  
  private _docSub: any;
  storeOutlesId: string = "";
  terminalId: string = "";
  constructor( 
    private configService: ConfigService, 
    private router: Router, 
    private printing: PrintingService,
    config: NgbModalConfig,
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }
  printerName : any ;

  ngOnInit(): void { 

    this._docSub = this.configService.getMessage().subscribe(
      (data: { [x: string]: any; }) => { 
        if(data['action'] == 'turnOn'){
            if(data['msg'] == '0'){
              this.router.navigate(['offline']);
              localStorage.removeItem('t1_kioskUuid');
            } 
        }

        if(data['action']=='paid' && data['kioskUuid'] == localStorage.getItem(this.configService.myUUID()) ){
          localStorage.removeItem(this.configService.myUUID()); 
          this.loading = false;
          this.router.navigate(['cart/finish/', data['id']]).then(
            () => {
              this.printing.print(data['id']);
            }
          ) 
        }
      }
    );
 
    if (localStorage.getItem(this.configService.deviceUuid()) === null) {
      alert("NO KEY");
      this.router.navigate(['./']);
    }

    if (localStorage.getItem(this.configService.myUUID()) !== null) {
      this.isStillLogin = true;
      this.myUUID = localStorage.getItem(this.configService.myUUID());
    }
    this.httpGet();
    this.configService.httpAccount().subscribe(
      data => {   
       
        if (data['systemOnline'] == false || data['turnOn'] == 0) {
          this.router.navigate(['offline']);
        }
        this.storeOutlesId = data['storeOutlesId'];
        this.terminalId = data['terminalId'];
        
      },
      e => {
        console.log(e);
      },
    );
  } 

  httpGet() {
    this.printerName = localStorage.getItem(this.configService.printerName());
  } 

  ngOnDestroy() {
    this._docSub.unsubscribe();
  }


 

}
