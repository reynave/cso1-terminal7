import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('action', { static: true }) action: NgxScannerQrcodeComponent | undefined;
  terminalId: any;
  public output: any;

  loading: boolean = false;
  api: string = environment.api;
  myUUID: any;
  isStillLogin: boolean = false;
  interval: any;
  memberId: string = "";
  loop: number = 0;
  notes : string = "";
  kioskMessage  : any;

  constructor(
    private modalService: NgbModal,
    private http: HttpClient,
    private configService: ConfigService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.kioskMessage   = {
      member_not_found_display : localStorage.getItem("t1_member_not_found_display"),
      visitor_login_display : localStorage.getItem("t1_visitor_login_display"),
      welcome_screen : localStorage.getItem("t1_welcome_screen"),
      customerphoto :  localStorage.getItem("t1_customerphoto") ?  localStorage.getItem("t1_customerphoto") : 0 ,
    }

    this.terminalId = localStorage.getItem(this.configService.myTerminalId());
    console.log('action : ' + this.action, " output :" + this.output);
    if (localStorage.getItem(this.configService.myUUID()) !== null) {
      this.isStillLogin = true;
      this.myUUID = localStorage.getItem(this.configService.myUUID());
    }
  } 

  runQrcode() {
    this.notes  = "";
    this.action?.toggleCamera();
    let loop = 0;
    this.interval = setInterval(() => {
      loop += 1;
      console.log(loop, '  ', this.output);
     
      if (this.output != undefined && this.output != '') {
       // this.fnCheckMemberId(this.output);
        this.loginMember(this.output);
        // this.output  = "";
      }

      if(loop > 50 ){
        console.log("Stop loop");
        this.stopQrcode();
      }

    }, 1000);
  }
 
  stopQrcode() {
    this.action?.stop();
    clearInterval(this.interval);
  }
 
  open(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  public onError(e: any): void {
    alert(e);
  }

  loginVisitor() {
    this.stopQrcode();
    this.loading = true;
    const body = {
      terminalId: this.terminalId,
    }
    this.http.post<any>(this.api + 'kioskLogin/loginVisitor/', body,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        this.loading = false;
        this.goToCart(data); 
      },
      e => {
        console.log(e);
      },
    );
  }

  loginMember(memberId: string) {
    this.loading = true;
    const body = {
      terminalId: this.terminalId,
      memberId: memberId,
    }
    this.http.post<any>(this.api + 'kioskLogin/loginMember/', body,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        this.loading = false;
        console.log(data);
        clearInterval(this.interval); 
        this.action?.stop(); 

        if (data['error'] == false) { 
          this.goToCart(data); 
        }else{ 
          this.output = "";
          this.notes =  this.kioskMessage.member_not_found_display;
          console.log("MEMBER ID NOT FOUND");
        }


      },
      e => {
        console.log(e);
      },
    );
  }

  goToCart(data:any){
    localStorage.setItem("t1_kioskUuid", data['insert']['kioskUuid']);
    if(data['photoRequred'] == 1){
      this.router.navigate(['photo'], { queryParams: { kioskUuid: data['insert']['kioskUuid'] }, });
    }else{
      this.router.navigate(['cart'], { queryParams: { kioskUuid: data['insert']['kioskUuid'] }, });
    }
   
  }

}
