import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/service/config.service';
import { PrintingService } from 'src/app/service/printing.service';
 
@Component({
  selector: 'app-payment-fake',
  templateUrl: './payment-fake.component.html',
  styleUrls: ['./payment-fake.component.css']
})
export class PaymentFakeComponent implements OnInit {
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
 
      this.httpGet();
      this.httpCart();
    } else {
      this.router.navigate(['login']);
    }
  }

  modal(content: any) {
    this.modalService.open(content, { centered: true });
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
 
    this.http.get<any>(url,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        this.loading = false; 
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

      },
      e => {
        console.log(e);
      },
    );
  }

    

  fnProcessPaymentFake() {
    const body = {
      paymentTypeId: this.paymentTypeId,
      kioskUuid: localStorage.getItem(this.configService.myUUID()), 
    }
    this.loading = true; 
    this.http.post<any>(this.api + 'kioskPayment/fnProcessPaymentFake/', body,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
     
        localStorage.removeItem(this.configService.myUUID());
        this.modalService.dismissAll();
        this.loading = false;
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
 
  finishShopping() {
    this.modalService.dismissAll();
    this.router.navigate(['login']);
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

  back(){
    history.back();
  }
}
