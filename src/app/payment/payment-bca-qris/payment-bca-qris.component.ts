import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/service/config.service';
import { PrintingService } from 'src/app/service/printing.service';
import { trigger } from '@angular/animations';
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
  myInterval: any;
  hex: string = "";
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
    // this.fnQrisCheck();
    this.loading = true;
    this.comConn();
    this.fnQrisCheck();

    this._docSub = this.configService.getMessage().subscribe(
      (data: { [x: string]: any; }) => {
        console.log('subscribe : ', data);

        this.note = this.configService.ecrRespCode(data['respCode']);

        if (data['respCode'] == '00' && data['transType'] == '32') {
          if (this.finish == false) {
            this.fnProcessPaymentReal(data);
            this.finish = true;
          }
        }
        if (data['respCode'] == '00' && data['transType'] == '31') {
          this.fnQrisInsert(data);
        }

        if (data['respCode'] == '54') {
          setTimeout(() => {
            this.back();
          }, 1000);
        }
        if (data['respCode'] == 'ER01') {
          setTimeout(() => {
            this.back();
          }, 3000);
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

  fnProcessPaymentReal(data: any) {
    const body = {
      paymentTypeId: 'BCA' + data['transType'],
      kioskUuid: localStorage.getItem(this.configService.myUUID()),
      data: data,
    }
    this.loading = true;
    console.log(body);
    this.http.post<any>(this.api + 'kioskPayment/fnProcessPaymentReal/', body,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        console.log(data);
        localStorage.removeItem(this.configService.myUUID());
        this.loading = false;
        /**
         * status payment disini
         */
        // this.paymentStatus = 2; 
        this.router.navigate(['cart/finish/', data['id']]).then(
          () => {
            this.printing.print(data['id']);
          }
        )
      },
      e => {
        console.log(e);
      },
    );

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
        console.log(data);
        if (data['data'] != false) {
          this.ongoingpaymentType = '32';
          this.reffNo = data['data']['reffNo'];
          this.hex = data['hex']['hex'];
          this.generateQris = false;
          this.fnBcaECR32();
        }
        this.loading = false;
      },
      e => {
        console.log(e);
      },
    );
  }

  fnQrisInsert(data: any = []) {
    this.loading = true;
    this.ongoingpaymentType = '32';
    this.note = "";
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
        this.reffNo = data['refNo'];
        if(data['refNo']){
          this.fnQrisCheck();
        }
        this.loading = false;
      },
      e => {
        console.log(e);
      },
    );
  }



  fnBcaECR32() { 
    const msg = {
      action: 'ajax',
      msg: 'transType31',
      reffNo: this.reffNo,
      hex : this.hex,
    } 
    this.configService.sendMessage(msg);
     

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
  }
}
