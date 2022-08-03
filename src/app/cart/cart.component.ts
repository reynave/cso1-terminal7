import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  loading: boolean = false;
  api: string = environment.api;
  barcode: string = "";
  items: any = [];
  adminMode: boolean = false;
  userId: string = "";
  // Demo 0000022
  error: boolean = false;
  noteScanner: string = "";
  item: any = {
    name: "",
    barcode: "",
    price: 0,
  }
  itemsList: any = [];
  member: any = [];
  summary: any = {
    BKP: 0,
    DPP: 0,
    nonBKP: 0,
    discount: 0,
    subtotal: 0,
    totalAterTax: 0
  }
  constructor(
    private modalService: NgbModal,
    private http: HttpClient,
    private configService: ConfigService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }
  callServer: any;
  ngOnInit(): void {
    if (localStorage.getItem(this.configService.myUUID())) {
      console.log("SILAKAN BELANJA!");
      this.httpGet();
    //  this.callHttpServer();
    } else {
      this.router.navigate(['login']);
    }
  }

  callHttpServer() {
    this.callServer = setInterval(() => {
      const d = new Date();
      console.log(d);
      this.httpGet();
    }, 3000)
  }

  ngOnDestroy() {
    clearInterval(this.callServer);
  }

  httpGet() {
    this.loading = true;
    this.http.get<any>(this.api + 'kioskCart/index/?uuid=' + localStorage.getItem(this.configService.myUUID()),
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        this.loading = false;
        console.log(data);
        this.items = data['items'];
        this.itemsList = data['itemsList'];
        this.member = data['member'];
        this.summary = {
          BKP: data['summary']['BKP'],
          DPP: data['summary']['DPP'],
          nonBKP: data['summary']['nonBKP'],
          discount: data['summary']['discount'],
          subtotal: data['summary']['subtotal'],
          totalAterTax: data['summary']['totalAterTax'],
        }
      },
      e => {
        console.log(e);
      },
    );
  }

  fnVoid(x: any) {
    this.http.post<any>(this.api + 'kioskCart/fnVoid/', x,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        this.httpGet();
        this.loading = false;
        console.log(data);
      },
    );
  }

  scanner() {
    this.loading = true;
    this.noteScanner = "";
    const body = {
      itemId: this.barcode,
      kioskUuid: localStorage.getItem(this.configService.myUUID()),
    }
    if (this.barcode != "") {


      this.http.post<any>(this.api + 'kioskCart/scanner/', body,
        { headers: this.configService.headers() }
      ).subscribe(
        data => {
          this.loading = false;
          if (data['error'] == false) {
            this.httpGet();
            this.barcode = "";
            this.error = false;
            if (data['admin'] == false) {
              this.item = {
                name: data['items']['description'],
                barcode: data['items']['barcode'],
                price: data['items']['price'],
              }
            } else {
              this.noteScanner = data['note'];
              this.adminMode = true;
              this.userId = data['userId'];
            }

          } else {
            this.noteScanner = data['note'];
            this.error = true;
          }
          //console.log(data['promo'][0]);
        },
      );
    }
  }

  fnUpdate(x: any) {
    const body = {
      items: x,
    }
    console.log(body);
    this.http.post<any>(this.api + 'kioskCart/fnUpdate/', body,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        this.httpGet();
        console.log(data);
      },
    );
  }

  fnPromotionFreeItem() {
    const body = {
      uuid: localStorage.getItem(this.configService.myUUID()),
    }

    this.http.post<any>(this.api + 'kioskCart/fnPromotionFreeItem/', body,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        this.httpGet();
        console.log(data);
      },
    );
  }
  fnCloseCart() {
    const body = {
      uuid: localStorage.getItem(this.configService.myUUID()),
    }

    this.http.post<any>(this.api + 'kioskCart/fnPromotionFreeItem/', body,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        this.router.navigate(['bill']);
        console.log(data);
      },
    );
  }

  fnAddQty(x: any, qty: number) {
    const body = {
      items: x,
      qty: qty,
      userId: this.userId,
      uuid: localStorage.getItem(this.configService.myUUID()),
    }
    console.log(body);
    this.http.post<any>(this.api + 'kioskCart/fnAddQty/', body,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        this.httpGet();
        console.log(data);
      },
    );
  }

  modal(content: any) {
    this.modalService.open(content, { size: 'xl' });
  }

  fnLogoutVisitor() {
    this.modalService.dismissAll();
    localStorage.removeItem(this.configService.myUUID());
    this.router.navigate(['login']);
  }

}
function ngOnDestroy() {
  throw new Error('Function not implemented.');
}

