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

  note: string = "";
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
    this.comClear();
    this._docSub = this.configService.getMessage().subscribe(
      (data: { [x: string]: any; }) => {
        console.log(data);
        if (data['respCode'] == '00') {
          this.comClose();
          this.fnProcessPaymentReal(data); 
          this.note = "Payment Success";
        } 
 
        if (data['respCode'] == '54') {  
          this.comClose();
          this.note = "Decline Expired Card " + data['respCode'];
        }
        if (data['respCode'] == '55') {   
          this.comClose();
          this.note = "Decline Incorrect PIN " + data['respCode'];
        }
        if (data['respCode'] == 'P2') {   
          this.comClose();
          this.note = " Read Card Error" + data['respCode'];
        }

        if (data['respCode'] == 'P3') {   
          this.comClose();
          this.note = " User press Cancel on EDC" + data['respCode'];
        }
       
        if (data['respCode'] == 'Z3') {   
          this.comClose();
          this.note = " EMV Card Decline" + data['respCode'];
        }
       
        if (data['respCode'] == 'CE') {   
          this.comClose();
          this.note = " Connection Error/Line Busy " + data['respCode'];
        }

        if (data['respCode'] == 'TO') {   
          this.comClose();
          this.note = " Connection Timeout " + data['respCode'];
        }

        if (data['respCode'] == 'PT') {   
          this.comClose();
          this.note = " EDC Problem" + data['respCode'];
        }

        if (data['respCode'] == 'aa' || data['respCode'] == 'AA') {   
          this.comClose();
          this.note = "aa Decline (aa represent two digit alphanumeric value from EDC)" + data['respCode'];
        }

        if (data['respCode'] == 'S2') {   
          this.comClose();
          this.note = " TRANSAKSI GAGAL, ULANGI TRANSAKSI DI EDC" + data['respCode'];
        }

        if (data['respCode'] == 'S3') {   
          this.comClose();
          this.note = " TXN BLM DIPROSES, MINTA SCAN QR, S4 TXN EXPIRED" + data['respCode'];
        } 
        if (data['respCode'] == 'ERRCON' ) {
          this.comClose();
          this.note =   data['respCode']+" ERROR CONNECTION, ECR is not connect!";
        } 
       
      }
    );
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

  fnBcaECR(transType: string = "",dummyCC :boolean = false) {

    const body = {
      paymentTypeId: 'bca01',
      kioskUuid: localStorage.getItem(this.configService.myUUID()),
      transType: transType,
      dummyCC : dummyCC,
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
      msg: 'ercClear',
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
}
