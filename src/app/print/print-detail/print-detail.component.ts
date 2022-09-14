import { AfterViewChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-print-detail',
  templateUrl: './print-detail.component.html',
  styleUrls: ['./print-detail.component.css']
})
export class PrintDetailComponent implements OnInit, AfterViewChecked {
  loading: boolean = false;
  api: string = environment.api;
  barcode: string = "";
  items: any = [];
  itemsList: any = [];
  freeItem : any = [];
  uuid : any;
  freeItemWaitingScanFail : any = [];
  adminMode : boolean = false;
  id : string= "";
  summary: any = {
    Final: 0,
    NonBkp: 0,
    bkp: 0,
    discount: 0,
    dpp: 0,
    memberDiscount: 0,
    ppn: 0,
    total: 0,
    voucer: 0,
  }
  printable : boolean = false;
  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void { 
    this.httpGet();  
    console.log(this.activatedRoute.snapshot.params['id'])
  }

  ngAfterViewChecked() : void{
    console.log('ngAfterViewChecked');
    this.printable = true;
  }

  print(){
    window.print();
  }
  date : string = "";
  template : any = {
    companyName : '',
    companyAddress : '',
    companyPhone : '',
    footer : '',
  }
  httpGet() {
    this.loading = true;
    this.http.get<any>(this.api + 'KioskPrint/printDetail/?id=' +this.activatedRoute.snapshot.params['id'] ,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        this.id = data['id'];
        this.date = data['date'];
        this.template = {
          companyName : data['template']['companyName'],
          companyAddress : data['template']['companyAddress'],
          companyPhone : data['template']['companyPhone'],
          footer : data['template']['footer'], 
        }
        this.loading = false;
        console.log(data);
        this.items = data['items'];
        this.itemsList = data['itemsList'];
        this.freeItem =  data['freeItem'];
        this.freeItemWaitingScanFail = data['freeItemWaitingScanFail'];
        this.summary = {
          total: data['summary']['total'],
          final: data['summary']['final'],
          nonBkp: data['summary']['nonBkp'],
          bkp: data['summary']['bkp'],
          discount: data['summary']['discount'],
          dpp: data['summary']['dpp'],
          discountMember: data['summary']['discountMember'],
          ppn: data['summary']['ppn'], 
          voucher: data['summary']['voucher'],
        }
      },
      e => {
        console.log(e);
      },
    );
  }

  back(){
    window.history.back();
  }
}
