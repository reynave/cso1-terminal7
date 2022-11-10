import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/service/config.service';
import { PrintingService } from 'src/app/service/printing.service';
@Component({
  selector: 'app-payment-bca-debit',
  templateUrl: './payment-bca-debit.component.html',
  styleUrls: ['./payment-bca-debit.component.css']
})
export class PaymentBcaDebitComponent implements OnInit {
  loading: boolean = false;
  api: string = environment.api;
  items: any = [];
  error: boolean = false;
  final: number = 0;
  paymentStatus: number = 1;
  paymentTypeId: number = 0;
  storeOutlesPaymentType: any = [];
  t1_thank_you_display: any;


  uuidKios: any = localStorage.getItem(this.configService.myUUID());
  storeOutlesId: string = "";
  terminalId: string = "";
  ilock: boolean = false;
  private _docSub: any;
  constructor(
    private http: HttpClient,
    config: NgbModalConfig,
    private modalService: NgbModal,
    private configService: ConfigService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private printing: PrintingService,
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }

  ngOnInit(): void {
    this._docSub = this.configService.getMessage().subscribe(
      (data: { [x: string]: any; }) => {
       // if (data['action'] == 'reload' && data['to'] == 'terminal') {
         // this.httpGet();
         
        //}
        console.log("SOCKET getMessage : ",data);
      }
    );

    if (localStorage.getItem(this.configService.myUUID())) {
     // this.httpGet();
     // this.callHttpServer();
      this.configService.httpAccount().subscribe(
        data=>{ 
          this.storeOutlesId = data['storeOutlesId'];
          this.terminalId  = data['terminalId'];
          if (data['systemOnline'] == false) {
            this.router.navigate(['offline']);
          }
        }
      )
    } else {
      this.router.navigate(['login']);
    }
  }

  help(){ 
    const msg = {
      terminalId: this.terminalId,
    }
    this.configService.help(msg);
  }
  sendReload(){
    const msg = {
      to: 'supervisor',
      msg: 'bcaCash',
      action : 'ajax',
    }
    this.configService.sendMessage(msg);
  }

  fnBcaCash(){
    const msg = {  
      msg: 'bcaCash',
      uuidKios : this.uuidKios,
      txt : 'P010000005500000000000000001688700627201892   251000000000000000  N00000                                                                              ',
      action : 'ajax',
    }
    this.configService.sendMessage(msg);
  }
}
