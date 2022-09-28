import { Component, OnDestroy, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
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
export class CartComponent implements OnInit, OnDestroy {
  @ViewChild('formRow') rows: ElementRef | any;
  resultbox : boolean = false;
  loading: boolean = false;
  api: string = environment.api; 
  barcode: string = "";
  items: any = [];
  adminMode: boolean = false;
  userId: string = "";
  addItem : boolean = false;
  // Demo 0000022
  error: boolean = false;
  noteScanner: string = "";
  item: any = {
    name: "",
    barcode: "",
    price: 0,
  }
  freeItem : any = [];
  itemsList: any = [];
  itemsListfreeItem : any = [];
  member: any = [];
  summary: any = {
    BKP: 0,
    DPP: 0,
    nonBKP: 0,
    discount: 0,
    subtotal: 0,
    totalAterTax: 0
  }
  supervisor : any = {
    name : "",
    id : 0,
  }
  uuidKios : any  = localStorage.getItem(this.configService.myUUID());
  storeOutlesId : any  = localStorage.getItem('storeOutlesId');
  terminalId : any  = localStorage.getItem('terminalId');
  
  constructor(
    private modalService: NgbModal,
    private http: HttpClient,
    private configService: ConfigService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }


  ngOnInit(): void {
    if (localStorage.getItem(this.configService.myUUID())) {
      console.log("SILAKAN BELANJA!");
      this.httpGet();
      this.callHttpServer();
    } else {
      this.router.navigate(['login']);
    }
  }


  callServer: any; 
  callHttpServer() {
    this.callServer = setInterval(() => { 
      this.rows.nativeElement.focus(); 
    }, 300);
  } 
  ngOnDestroy() {
    clearInterval(this.callServer);
    console.log("DESTRT");
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
        this.freeItem = data['freeItem'];

        this.itemsList = data['itemsList'];
        this.itemsListfreeItem = data['itemsListfreeItem'];

        this.member = data['member'];
        this.summary = { 
          final: data['summary']['final'], 
          discount: data['summary']['discount'],
          total: data['summary']['total'] == null ? 0 : data['summary']['total'] , 
        }
      },
      e => {
        console.log(e);
      },
    );
  }

  fnVoid(x: any) {
    const body = {
      items: x,
      userId : this.supervisor['id'],
    }
    this.http.post<any>(this.api + 'kioskCart/fnVoid/', body,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        this.httpGet();
        this.loading = false;
        console.log(data);
      },
    );
  }

  fnVoidFreeItem(x: any) {
    const body = {
      items: x,
      userId : this.supervisor['id'],
    }
    this.http.post<any>(this.api + 'kioskCart/fnVoidFreeItem/', body,
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
    this.resultbox = true;
    const body = {
      barcode: this.barcode,
      kioskUuid: localStorage.getItem(this.configService.myUUID()),
      memberId : 0,
    }
    console.log(body);
    if (this.barcode != "") {
      this.addItem = true;

      this.http.post<any>(this.api + 'kioskCart/scanner/', body,
        { headers: this.configService.headers() }
      ).subscribe(
        data => {
          this.loading = false;
          if (data['error'] == false) {
            this.httpGet(); 
            this.error = false;
            if (data['admin'] == false) {
              this.item = {
                name: data['items']['description'],
                barcode: data['items']['barcode'],
                price: data['items']['price'],
                images :data['items']['images'],
              } 
            } else {
              this.noteScanner = this.barcode+" "+data['note'];
              this.adminMode = true;
              this.userId = data['userId'];
              this.supervisor = data['supervisor'];
            }
          
          } else {
          
            this.error = true;
          }
          this.barcode = "";

          this.noteScanner = data['note'];
          console.log(data);
        },
      );
    }
  }

  fnUpdate(x: any) {
    const body = {
      items: x,
      userId : this.supervisor['id'],
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

  
  fnCloseCart() {
    const body = {
      uuid: localStorage.getItem(this.configService.myUUID()),
    } 
    this.http.post<any>(this.api + 'kioskCart/fnCloseCart/', body,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
       this.router.navigate(['bill']);
        console.log(data);
      },
    );
  }
  
  modal(content: any) {
    this.modalService.open(content, { centered: true  });
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
 
