import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/service/config.service';
import { PrintingService } from '../service/printing.service';

declare var window: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class PaymentComponent implements OnInit {
  loading: boolean = false;
  api: string = environment.api;
  items: any = [];
  error: boolean = false;
  final: number = 0;
  paymentStatus: number = 1;
  paymentTypeId: number = 0;
  storeOutlesPaymentType: any = [];
  t1_thank_you_display: any;
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


  uuidKios: any = localStorage.getItem(this.configService.myUUID());
  storeOutlesId: string = "";
  terminalId: string = "";


  ngOnInit(): void {
    this.configService.httpAccount().subscribe(
      data => {
        this.storeOutlesId = data['storeOutlesId'];
        this.terminalId = data['terminalId'];
        this.t1_thank_you_display = data['account'][data['account'].findIndex(((obj: { id: number; }) => obj.id == 1004))]['value'];
        if (data['systemOnline'] == false) {
          this.router.navigate(['offline']);
        }
      }
    )
    if (localStorage.getItem(this.configService.myUUID())) {

      console.log("SILAKAN BELANJA!");
      this.httpGet();
      this.httpCart();
    } else {
      this.router.navigate(['login']);
    }
  }
  help() {
    const msg = {
      terminalId: this.terminalId,
    }
    this.configService.help(msg);
  }
  httpGet() {
    this.loading = true;
    let url = this.api + 'kioskPayment/index/?uuid=' + localStorage.getItem(this.configService.myUUID());
    console.log(url);
    this.http.get<any>(url,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        this.loading = false;
        console.log(data);
        this.final = data['summary']['final'];
        this.storeOutlesPaymentType = data['storeOutlesPaymentType'];
      },
      e => {
        console.log(e);
      },
    );
  }

  httpCart() {
    this.loading = true;
    let url = this.api + 'kioskCart/index/?uuid=' + localStorage.getItem(this.configService.myUUID()) + "&storeOutlesId=" + localStorage.getItem('storeOutlesId') + "&terminalId=" + localStorage.getItem('terminalId');

    this.http.get<any>(url,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        this.loading = false;
        console.log(data);

      },
      e => {
        console.log(e);
      },
    );
  }

  payment(x: any, content: any) {
    if (x.paymentTypeId == 'QRT001') {
      this.router.navigate(['payment/qristelkom/', x.paymentTypeId]);
    } else {
      console.log(x);
      this.paymentStatus = 1;
      this.loading = true;
      this.paymentTypeId = x.paymentTypeId;
      this.modalService.open(content, { centered: true });
    }
  }

  testBCADebit(){
    this.router.navigate(['payment/bcaDebit']);
  }
  testBCAQris(){

  }

  fnProcessPaymentFake() {
    const body = {
      paymentTypeId: this.paymentTypeId,
      kioskUuid: localStorage.getItem(this.configService.myUUID()),
      storeOutlesId: localStorage.getItem('storeOutlesId'),
      terminalId: localStorage.getItem('terminalId'),
    }
    this.loading = true;
    console.log(body);
    this.http.post<any>(this.api + 'kioskPayment/fnProcessPaymentFake/', body,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        console.log(data);
        localStorage.removeItem(this.configService.myUUID());
        this.modalService.dismissAll();
        this.loading = false;
        this.router.navigate(['cart/finish/', data['id']]).then(
          () => {
            this.print(data['id']);
          }
        ) 

      },
      e => {
        console.log(e);
      },
    );

  }


  printerName: any;
  bill: any;
  print(id:string) {

    let url = this.api + 'KioskPrint/printDetail/?id=' + id;
    console.log(url);
    this.http.get<any>(url,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        this.bill = data;
        let message = this.printing.template(this.bill);
        this.printerName = localStorage.getItem(this.configService.printerName());
        if (this.printerName == "" || this.printerName == null) {
          alert("NO PRINTING SELECT");
        } else {

          window['cordova'].plugins.UsbPrinter.connect(this.printerName, (result: any) => {
            console.log(result);
            window['cordova'].plugins.UsbPrinter.print(this.printerName, message, (result: any) => {
              console.log("result of usb print action", result);
            }, (err: any) => {
              console.error('Error in usb print action', err)
            });

          }, (err: any) => {
            console.error(err);
          });
        }
      },
      e => {
        console.log(e);
      },
    );


  }

  finishShopping() {
    this.modalService.dismissAll();
    this.router.navigate(['login']);
  }
}
