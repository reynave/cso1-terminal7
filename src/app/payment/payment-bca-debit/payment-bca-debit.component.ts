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
  finish: boolean = false;
  ngOnInit(): void {
    this.comConn();

    this._docSub = this.configService.getMessage().subscribe(
      (data: { [x: string]: any; }) => {
       
        this.note = this.configService.ecrRespCode(data['respCode']);
        if (data['respCode'] == '00') {
          if (this.finish == false) {
            this.fnProcessPaymentReal(data);
            this.finish = true;
          }
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

        console.log(data);
        if (data['respCode'] != '' && data['respCode']) {
         // this.fnSaveLog(data);
        }

      }
    );
  }
  fnSaveLog(data: any) {
    const body = {
      data : data,
      kioskUuid: localStorage.getItem(this.configService.myUUID()),
    }
    this.http.post(environment.api + 'kioskPaymentBca/fnSaveLog/', body,
      { headers: this.configService.headers() }
    ).subscribe(
      data =>{
        console.log(data);
      },
      e => {
        console.log(e);
      },
    );
  }


  comConn() {
    const msg = {
      port: 80,
      host: localStorage.getItem("env_ecr"),
      action: 'ajax',
      msg: 'comConn',
    }
   
    this.configService.sendMessage(msg);
  }

  fnProcessPaymentReal(data: any) {
    const body = {
      paymentTypeId: 'BCA' + data['transType'],
      kioskUuid: localStorage.getItem(this.configService.myUUID()),
      data: data,
    }
    this.loading = true; 
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

  fnBcaECR(transType: string = "", dummyCC: boolean = false) {

    const body = {
      paymentTypeId: 'bca01',
      kioskUuid: localStorage.getItem(this.configService.myUUID()),
      transType: transType,
      dummyCC: dummyCC,
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
    
    this.configService.sendMessage(msg);
  }

  comClear() {
    const msg = {
      action: 'ajax',
      msg: 'comClear',
    }
   
    this.configService.sendMessage(msg);
  }

  comTest() {
    const msg = {
      action: 'ajax',
      msg: 'comTest',
    }
   
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
    this.comClose();
    this._docSub.unsubscribe();
    this.modalService.dismissAll();
  }
}
