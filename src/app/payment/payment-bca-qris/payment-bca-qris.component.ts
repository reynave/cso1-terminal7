import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/service/config.service';
import { PrintingService } from 'src/app/service/printing.service'; 
@Component({
  selector: 'app-payment-bca-qris',
  templateUrl: './payment-bca-qris.component.html',
  styleUrls: ['./payment-bca-qris.component.css']
})
export class PaymentBcaQrisComponent implements OnInit {
  loading: boolean = false;
  api: string = environment.api;
  items: any = [];
  error: boolean = false;
  final: number = 0;
  paymentStatus: number = 1;
  paymentTypeId: number = 0;
  storeOutlesPaymentType: any = [];
  t1_thank_you_display: any;
  reffNo: string = ""; 
  note: string = "Generate QRIS, please wait...";
  uuidKios: any = localStorage.getItem(this.configService.myUUID());
  storeOutlesId: string = "";
  terminalId: string = "";
  ilock: boolean = false;
  generateQris: boolean = true;
  private _docSub: any;
  developerMode :boolean = environment.developerMode;
  myInterval: any;
  transType : string = '0';
  hex: string = "";
  myTimeout  : any;
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

  finish: boolean = false;
  ongoingpaymentType: string = "31";
  ngOnInit(): void { 
    this.loading = true;
    this.comConn();
    this.fnQrisCheck();

    this._docSub = this.configService.getMessage().subscribe(
      (data: { [x: string]: any; }) => { 
        console.log('subscribe : ', data, 'this.transType :'+this.transType); 
        this.note = data['respCode'] ? this.configService.ecrRespCode(data['respCode']) : 'Silakan tekan tombol <b>OK</b> atau <b>Hijau</b> pada mesin Edisi BCA<br><br>Tunggu sampai mesin mencetak QRCODE';

        if (data['respCode'] == '00') { 
          this.fnQrisInsert(data); 
        }
 
        if (data['respCode'] == '54') {
          this.myTimeout = setTimeout(() => {
            this.back();
          }, 10000);
        }
        if (data['respCode'] == 'ER01') {
          this.myTimeout = setTimeout(() => {
            this.back();
          }, 10000);
        }

      }
    );
  }

  comConn() {
    const msg = {
      port: 80,
      host: localStorage.getItem("env_ecr"),
      action: 'ajax',
      msg: 'comConn',
    }
    console.log(msg);
    this.configService.sendMessage(msg);
  }

  

  help() {
    const msg = {
      terminalId: this.terminalId,
    }
    this.configService.help(msg);
  }

  fnBcaECR(transType: string = "") {

    const body = {
      paymentTypeId: 'bca31',
      kioskUuid: localStorage.getItem(this.configService.myUUID()),
      transType: transType,
      dummyCC: false,
    }
    this.loading = true;

    this.http.post<any>(this.api + 'kioskPaymentBca/fnBcaEcr/', body,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {

        console.log(data);
        this.com(data['data']['hex'], transType);
        this.loading = false;
      },
      e => {
        console.log(e);
      },
    );
  }


  fnQrisCheck() { 
    this.loading = true;
    const body = {
      kioskUuid: this.uuidKios,
    }
    this.http.post<any>(this.api + 'kioskPaymentBca/fnQrisCheck/', body,
      { headers: this.configService.headers() }
    ).subscribe(
      data => { 
        this.loading = false;
        console.log("fnQrisCheck", data);
        if (data['data'] == false) { 
        //  this.reffNo = data['data']['reffNo'];
       //   this.hex = data['hex']['hex'];
          this.generateQris = false;
           this.fnBcaECR('31');
        }else{ 
          this.router.navigate(["payment/bcaQris/32"], { queryParams: { reffNo: data['data']['reffNo'] } });
        }
      
      },
      e => {
        console.log(e);
      },
    );
  }

  fnQrisInsert(data: any = []) {
    this.loading = true;
    this.ongoingpaymentType = '32';
  //  this.note = "";
    console.log("ongoingpaymentType  : ", this.ongoingpaymentType);
    const body = {
      data: data,
      kioskUuid: localStorage.getItem(this.configService.myUUID()),
    }
    this.http.post<any>(this.api + 'kioskPaymentBca/fnQrisInsert/', body,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        console.log(data);
        this.reffNo = data['reffNo'];
        if(data['reffNo']){
          this.fnQrisCheck(); 
        }
        this.loading = false;
      },
      e => {
        console.log(e);
      },
    );
  }
 
  com(hex: string, transType: string) {
    const msg = {
      action: 'ajax',
      msg: 'bcaEcrCom',
      transType: transType,
      uuidKios: this.uuidKios,
      txt: hex,
    }
    console.log(msg);
    this.configService.sendMessage(msg);
  }

  comClear() {
    const msg = {
      action: 'ajax',
      msg: 'comClear',
    }
    console.log(msg);
    this.configService.sendMessage(msg);
  }

  comTest() {
    const msg = {
      action: 'ajax',
      msg: 'comTest',
    }
    console.log(msg);
    this.configService.sendMessage(msg);
  }

  comClose() {
    const msg = {
      msg: 'comClose',
      action: 'ajax',
    }
    this.configService.sendMessage(msg);
  }
  back() { 
     history.back();
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    clearInterval(this.myInterval);
    this.comClose();
    this._docSub.unsubscribe();
    this.modalService.dismissAll(); 
    clearTimeout(this.myTimeout);
  }
}
