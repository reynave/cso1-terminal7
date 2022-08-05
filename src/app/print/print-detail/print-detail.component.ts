import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-print-detail',
  templateUrl: './print-detail.component.html',
  styleUrls: ['./print-detail.component.css']
})
export class PrintDetailComponent implements OnInit {
  loading: boolean = false;
  api: string = environment.api;
  barcode: string = "";
  items: any = [];
  itemsList: any = [];
  freeItem : any = [];
  uuid : any;
  adminMode : boolean = false;
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

  httpGet() {
    this.loading = true;
    this.http.get<any>(this.api + 'KioskPrint/printDetail/?id=' +this.activatedRoute.snapshot.params['id'] ,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        this.loading = false;
        console.log(data);
        this.items = data['items'];
        this.itemsList = data['itemsList'];
        this.freeItem =  data['freeItem'];
        this.summary = {
          subTotal: data['summary']['subTotal'],
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
