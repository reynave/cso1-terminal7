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
  terminalId: any;
  public output: any;

  loading: boolean = false;
  api: string = environment.api;
  constructor(
    private modalService: NgbModal,
    private http: HttpClient,
    private configService: ConfigService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }
  myUUID: any;
  isStillLogin: boolean = false;

  loop: number = 0;
  ngOnInit(): void {
    this.terminalId = localStorage.getItem(this.configService.myTerminalId());
    console.log('action : ' + this.action, " output :" + this.output);
    if (localStorage.getItem(this.configService.myUUID()) !== null) {
      this.isStillLogin = true;
      this.myUUID = localStorage.getItem(this.configService.myUUID());
    }



  }

  interval: any;
  memberId: string = "";
  runQrcode() {

    this.action?.toggleCamera();
    this.interval = setInterval(() => {
      this.loop += 1;
      console.log(this.loop, '  ', this.output);
      if (this.output != undefined && this.output != '') {
        this.fnCheckMemberId(this.output);
        // this.output  = "";
      }
    }, 1000);
  }

  fnCheckMemberId(memberId: string) {
    console.log(memberId);
    this.loginMember(memberId);
    // this.action?.stop();
    clearInterval(this.interval);
  }


  stopQrcode() {
    this.action?.stop();
    clearInterval(this.interval);
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
      terminalId: this.terminalId,
    }
    this.http.post<any>(this.api + 'kioskLogin/loginVisitor/', body,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        this.loading = false;
        localStorage.setItem("t1_kioskUuid", data['insert']['kioskUuid']);
        this.router.navigate(['cart'], { queryParams: { kioskUuid: data['insert']['kioskUuid'] }, });

      },
      e => {
        console.log(e);
      },
    );
  }

  loginMember(memberId: string) {
    this.loading = true;
    const body = {
      terminalId: this.terminalId,
      memberId: memberId,
    }
    this.http.post<any>(this.api + 'kioskLogin/loginMember/', body,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        this.loading = false;
        console.log(data);
        if (data['error'] == false) {
          this.action?.stop();
          localStorage.setItem("t1_kioskUuid", data['insert']['kioskUuid']);
          this.router.navigate(['cart'], { queryParams: { kioskUuid: data['insert']['kioskUuid'] }, });
        }


      },
      e => {
        console.log(e);
      },
    );
  }

}
