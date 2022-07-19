import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxScannerQrcodeComponent } from 'ngx-scanner-qrcode';
import { ActivatedRoute, Router } from '@angular/router'; 
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/service/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @ViewChild('action', { static: true }) action: NgxScannerQrcodeComponent | undefined;
  terminalId : string = "T001";
  public output: string = "";
  
  loading: boolean = false;
  api: string = environment.api;
  constructor(
    private modalService: NgbModal,
    private http: HttpClient,
    private configService: ConfigService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }
  myUUID : any;
  isStillLogin : boolean = false;
  ngOnInit(): void {
    if(localStorage.getItem(this.configService.myUUID()) !== null ){
      this.isStillLogin = true;
      this.myUUID = localStorage.getItem(this.configService.myUUID());
    }
  }

  open(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  public onError(e: any): void {
    alert(e);
  }

  loginVisitor() {
    this.loading = true;
    const body = {
      terminalId : this.terminalId,
    }
    this.http.post<any>(this.api + 'kioskLogin/loginVisitor/',body,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        this.loading = false; 
        localStorage.setItem("t1_kioskUuid", data['insert']['kioskUuid']);
        this.router.navigate(['cart'],{queryParams: { kioskUuid: data['insert']['kioskUuid'] },});

      },
      e => {
        console.log(e);
      },
    ); 
  }

  loginMember() {
    this.loading = true;
    const body = {
      terminalId : this.terminalId,
      memberId : "1000001",
    }
    this.http.post<any>(this.api + 'kioskLogin/loginMember/',body,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        this.loading = false; 
        localStorage.setItem("t1_kioskUuid", data['insert']['kioskUuid']);
        this.router.navigate(['cart'],{queryParams: { kioskUuid: data['insert']['kioskUuid'] },});

      },
      e => {
        console.log(e);
      },
    ); 
  }

}
