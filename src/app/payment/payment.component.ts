import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/service/config.service';

declare var imei : any;

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
  final : number = 0;
  paymentStatus : number = 1;
  paymentTypeId : number = 0;
  storeOutlesPaymentType : any = [];
  t1_thank_you_display : any;
  constructor(
    private http: HttpClient,
    config: NgbModalConfig, 
    private modalService: NgbModal,
    private configService: ConfigService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { 
    config.backdrop = 'static';
    config.keyboard = false; 
  }

  storeOutlesId : any = localStorage.getItem("storeOutlesId");
  uuidKios : any  = localStorage.getItem(this.configService.myUUID()); 
  terminalId : any  = localStorage.getItem('terminalId');
  

  ngOnInit(): void {
    this.t1_thank_you_display  = localStorage.getItem("t1_thank_you_display");

    if (localStorage.getItem(this.configService.myUUID())) {
     
      console.log("SILAKAN BELANJA!");
      this.httpGet();
      this.httpCart();
    } else {
      this.router.navigate(['login']); 
    }
  }
 
  httpGet() {
    this.loading = true;
    let url = this.api + 'kioskPayment/index/?uuid=' + localStorage.getItem(this.configService.myUUID())+"&imei="+imei;
    console.log(url);
    this.http.get<any>(url,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        this.loading = false;
        console.log(data);
        this.final =  data['summary']['final'];
        this.storeOutlesPaymentType = data['storeOutlesPaymentType'];
      },
      e => {
        console.log(e);
      },
    );
  }

  httpCart() {
    this.loading = true;
    this.http.get<any>(this.api + 'kioskCart/index/?uuid=' + localStorage.getItem(this.configService.myUUID()),
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

  payment(x:any, content:any) {
    this.paymentStatus = 1;
    this.loading = true;
    this.paymentTypeId = x.paymentTypeId;
    this.modalService.open(content,{centered:true});  
  }

  fnProcessPaymentFake(){
    const body = {
      paymentTypeId : this.paymentTypeId,
      kioskUuid : localStorage.getItem(this.configService.myUUID()),
      imei : imei,
      memberId : 0,
    }
    this.loading = true;
    console.log(body);
    this.http.post<any>(this.api + 'kioskPayment/fnProcessPaymentFake/',body,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        console.log(data);
        localStorage.removeItem(this.configService.myUUID());
        this.modalService.dismissAll();
        this.loading = false;
        /**
         * status payment disini
         */
        // this.paymentStatus = 2; 
        this.router.navigate(['cart/finish/',data['id']]);
      },
      e => {
        console.log(e);
      },
    );
    
  }


  finishShopping(){
     this.modalService.dismissAll();
     this.router.navigate(['login']);
  }
}
