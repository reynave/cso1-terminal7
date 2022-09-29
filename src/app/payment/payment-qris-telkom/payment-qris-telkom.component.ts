import { Component, OnInit } from '@angular/core';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-payment-qris-telkom',
  templateUrl: './payment-qris-telkom.component.html',
  styleUrls: ['./payment-qris-telkom.component.css']
})
export class PaymentQrisTelkomComponent implements OnInit {
  loading: boolean = false;
  api: string = environment.api;
  items: any = [];
  error: boolean = false;
  summary : any = [];
  storeOutlesId : any = localStorage.getItem("storeOutlesId");
  uuidKios : any  = localStorage.getItem(this.configService.myUUID()); 
  terminalId : any  = localStorage.getItem('terminalId');
  qrcode : string = "";
  constructor(
    private http: HttpClient,
    config: NgbModalConfig, 
    private modalService: NgbModal,
    private configService: ConfigService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
      this.httpGet();
  }

  httpGet(){ 
    this.loading = true;
    let url = environment.api+"kioskPayment/fnQrisTelkom/?kioskUuid="+this.uuidKios;
    this.http.get<any>(url,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        this.loading = false;
        console.log(data);  
        this.summary = data['summary'];
        this.qrcode = data['qris'];
      },
      e => {
        console.log(e);
      },
    );
  }

}
