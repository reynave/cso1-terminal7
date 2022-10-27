import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/service/config.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
  
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class LoginComponent implements OnInit {
  
  outletId: any;
  loading: boolean = false;
  api: string = environment.api;
  version: string = environment.version;
  myUUID: any;
  isStillLogin: boolean = false;
  interval: any;
  memberId: string = "";
  loop: number = 0;
  notes: string = "";
  greeting: string = "loading...";
  kioskMessage: any = {
    logo: "",
    welcome: "",
    limit: "",
    visitorDisplay: "",
    timer: 5,
    notFound: '',
    visitorPhoto: true,
    memberPhoto: true, 
  };
  member: any = [];
  myTimeout: any;
  loginSuccess: boolean = false;
  kioskUuid: string = '';
  intervalTime: any;
  countdown: number = 0;
  today: any = new Date();
  autoFocus: any;
  uuidKios: any = localStorage.getItem(this.configService.myUUID());
  storeOutlesId: string = "";
  terminalId: string = "";
  constructor(
    private modalService: NgbModal,
    private http: HttpClient,
    private configService: ConfigService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    config: NgbModalConfig,
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
  }


  ngOnInit(): void {
   
    if (localStorage.getItem(this.configService.myUUID()) !== null) {
      this.isStillLogin = true;
      this.myUUID = localStorage.getItem(this.configService.myUUID());
    }
    this.httpGet();
    this.configService.httpAccount().subscribe(
      data => {
        console.log(data);
        if (data['systemOnline'] == false) {
          this.router.navigate(['offline']);
        }
        this.storeOutlesId = data['storeOutlesId'];
        this.terminalId = data['terminalId'];
        this.kioskMessage = {
          logo: data['account'][data['account'].findIndex(((obj: { id: number; }) => obj.id == 1010))]['value'],
          welcome: data['account'][data['account'].findIndex(((obj: { id: number; }) => obj.id == 1001))]['value'],
          limit: data['account'][data['account'].findIndex(((obj: { id: number; }) => obj.id == 1002))]['value'].replace("$item", data['limitItemsWarning']),
          customerStatement: data['account'][data['account'].findIndex(((obj: { id: number; }) => obj.id == 1003))]['value'],
          memberNotFound: data['account'][data['account'].findIndex(((obj: { id: number; }) => obj.id == 1005))]['value'],
          visitorDisplay: data['account'][data['account'].findIndex(((obj: { id: number; }) => obj.id == 1006))]['value'],
          timer: data['account'][data['account'].findIndex(((obj: { id: number; }) => obj.id == 1008))]['value'],
          visitorPhoto : true,
          
        }
        this.countdown = this.kioskMessage['timer'];

      }
    );
  }
 

  httpGet() { 
    let url = this.api + 'kioskLogin/checkSession/?kioskUuid=' + this.uuidKios;
    console.log(url);
    this.http.get<any>(url,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        console.log(data);
       
        this.greeting = data['greeting'];

      },
      e => {
        console.log(e);
      },
    );
  }

  open(content: any) {
    this.modalService.open(content, { size: 'lg' });
  }

  loginVisitor(loginVisitor: any) {
    this.loading = true;
    const body = {
      base64Images: false,
    }
    this.http.post<any>(this.api + 'kioskLogin/loginVisitor/', body,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {

        this.loading = false;
        localStorage.setItem("t1_kioskUuid", data['insert']['kioskUuid']);

        if (this.kioskMessage.visitorPhoto == true) {
          console.log(" customer photo requred!");
          this.router.navigate(['login/userPhoto']);
        } else {
          this.modalService.open(loginVisitor, { size: 'xl' });
          this.runCountdown();
          let self = this;
          this.myTimeout = setTimeout(function () {
            self.goToCart();
            self.modalService.dismissAll();
            console.log('this.myTimeout TRIGER');
          }, parseInt(this.kioskMessage['timer']) * 1000);
          console.log("wait for " + parseInt(this.kioskMessage['timer']));
        }
      },
      e => {
        console.log(e);
      },
    );


  }
 
  runCountdown() {
    let self = this;
    this.intervalTime = setInterval(function () {
      self.countdown--;
    }, 1000);
  }
 
  goToCart() {
    this.router.navigate(['cart'], { queryParams: { kioskUuid: this.kioskUuid }, });
  }

  ngOnDestroy(): void {
    this.modalService.dismissAll();
    console.log('ngOnDestroy');
    clearTimeout(this.myTimeout);
    clearInterval(this.intervalTime);
    clearInterval(this.autoFocus);
  }

}
