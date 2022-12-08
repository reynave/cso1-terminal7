import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/service/config.service';
import { PrintingService } from 'src/app/service/printing.service';
@Component({
  selector: 'app-payment-bca-qris32',
  templateUrl: './payment-bca-qris32.component.html',
  styleUrls: ['./payment-bca-qris32.component.css']
})
export class PaymentBcaQris32Component implements OnInit {
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
  transType: string = '0';
  hex: string = "";
  btnShow : boolean = false;
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
  ercError: boolean = false;
  finish: boolean = false;
  ongoingpaymentType: string = "31";
  i: number = 0; 
  n:number = 0;
  timer : any;
  loop: any;
  ngOnInit(): void {
    this.loading = true;
    this.comConn();
    this.fnQrisCheck();

    let self = this;
    this.loop = setInterval(function () {
      self.i = 0;
      console.log(self.i);
    }, 1000);

    this.timer = setTimeout(() => {
      self.btnShow = true; 
    }, 2000);


    this._docSub = this.configService.getMessage().subscribe(
      (data: { [x: string]: any; }) => {

        console.log(this.i, ' subscribe : ', data, 'this.transType :' + this.transType);
        this.note = data['respCode'] ? this.configService.ecrRespCode(data['respCode']) : 'Tekan tombol OK / Hijau dimesin EDISI';

        if (data['respCode'] == '00') {
          if (this.i == 0) {
            this.fnQrisUpdate(data);
          }
        } 
        if (data['respCode'] != '00') {
          this.ercError = true;
        }
        this.i++;
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
      paymentTypeId: 'BCA31',
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
            clearInterval(this.myInterval);
            clearInterval(this.i);
            clearInterval(this.timer);
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
        if (data['data']['reffNo']) {
          console.log("fnQrisCheck", data);
          this.reffNo = data['data']['reffNo'];
          this.hex = data['hex']['hex'];
        } else {
          console.log("ERROR");
          this.note = 'Data <b>REFF NO</b> tidak ditemukan, silakan hubungi admin!';
        }

      },
      e => {
        console.log(e);
      },
    );
  }

  fnQrisUpdate(data: any = []) {
    this.loading = true;
    const body = {
      data: data,
      kioskUuid: localStorage.getItem(this.configService.myUUID()),
      status: 1,
      reffNo: this.reffNo,
    }
    console.log("fnQrisUpdate ", body);
    this.http.post<any>(this.api + 'kioskPaymentBca/fnQrisUpdate/', body,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        console.log(data);
        if (data['id'] && data['update'] != false) {
          this.fnProcessPaymentReal(body['data']);
        }
        this.loading = false;
      },
      e => {
        console.log(e);
      },
    );
  }

  fnBcaECR32() {
    this.btnShow = false;
    const msg = {
      action: 'ajax',
      msg: 'transType31',
      reffNo: this.reffNo,
      hex: this.hex,
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
    clearInterval(this.loop);
    clearInterval(this.timer);
    
    this.comClose();
    this._docSub.unsubscribe();
    this.modalService.dismissAll();
  }

  modal(content: any) {
    this.modalService.open(content, { centered: true });
  }
  fnLogoutVisitor() {
    const body = {
      kioskUuid: localStorage.getItem(this.configService.myUUID()),
    }
    console.log(body);
    this.http.post<any>(this.api + 'kioskCart/fnLogoutVisitor/', body,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        this.modalService.dismissAll();
        localStorage.removeItem(this.configService.myUUID());
        this.router.navigate(['login']);
      },
    );

  }
} 
