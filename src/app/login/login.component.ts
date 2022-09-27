import { Component, OnInit, ViewChild } from '@angular/core'; 
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/service/config.service';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';


declare function haha(): any;
declare let navigator: any;
declare let cordova: any;
declare let Camera: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [NgbModalConfig, NgbModal]
})
export class LoginComponent implements OnInit {
  terminalId: any;
  outletId : any;
  loading: boolean = false;
  api: string = environment.api;
  version : string = environment.version;
  myUUID: any;
  isStillLogin: boolean = false;
  interval: any;
  memberId: string = "";
  loop: number = 0;
  notes: string = "";
  greeting  : string = "";
  kioskMessage: any = {
    logo : "", 
    welcome : "",
    limit : "", 
    visitorDisplay : "",
    timer : 5,
  };

  today : any =  new Date();
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
    this.terminalId = localStorage.getItem('terminalId');
    this.outletId = localStorage.getItem('storeOutlesId');

    console.log(navigator.camera);
    this.configService.sytemOff().subscribe(
      data => {
        if (data['error'] == 400) {
          this.router.navigate(['offline']);
        }
      }
    );
  
    if (localStorage.getItem(this.configService.myUUID()) !== null) {
      this.isStillLogin = true;
      this.myUUID = localStorage.getItem(this.configService.myUUID());
    }
    this.httpGet();
    this.configService.httpAccount().subscribe(
      data => {
        console.log(data['account'])
        this.greeting = data['greeting'];
        this.kioskMessage = {
            logo : data['account'][data['account'].findIndex(((obj: { id: number; }) => obj.id ==  14 ))]['value'],
            welcome : data['account'][data['account'].findIndex(((obj: { id: number; }) => obj.id ==  1001 ))]['value'],
            limit: data['account'][data['account'].findIndex(((obj: { id: number; }) => obj.id ==  1002 ))]['value'],
            customerStatement: data['account'][data['account'].findIndex(((obj: { id: number; }) => obj.id ==  1003 ))]['value'],
            memberNotFound: data['account'][data['account'].findIndex(((obj: { id: number; }) => obj.id ==  1005 ))]['value'],
            visitorDisplay: data['account'][data['account'].findIndex(((obj: { id: number; }) => obj.id ==  1006 ))]['value'],
            timer:  data['account'][data['account'].findIndex(((obj: { id: number; }) => obj.id ==  1008 ))]['value'],
        }
        console.log(this.kioskMessage);
      }
    ); 
  }

  httpGet() {
    this.http.get<any>(this.api + 'kioskLogin/checkSession/?t=' + this.myUUID,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        
        if (data['error'] == true) {
          localStorage.removeItem(this.configService.myUUID());
        }  
        this.greeting = data['greeting'];
        console.log(data);
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
    if (this.kioskMessage.visitorphoto == '1') {
      console.log(" customer photo requred!");

      navigator.camera.getPicture(cameraSuccess, cameraError, {
        destinationType: Camera.DestinationType.FILE_URI,
        quality: 10,
        encodingType: Camera.EncodingType.JPEG,
        correctOrientation: true,
      });
      let self = this;
      function cameraSuccess(imageURI: any) {
        console.log("Camera cameraSuccess.");

        const body = {
          terminalId: self.terminalId,
          base64Images: imageURI
        }
        self.http.post<any>(self.api + 'kioskLogin/loginVisitor/', body,
          { headers: self.configService.headers() }
        ).subscribe(
          data => {
            // this.modalService.open(loginVisitor); 
            console.log(data);
            self.loading = false;
            self.goToCart();
          },
          e => {
            console.log(e);
          },
        );

      }

      function cameraError() {
        console.log("Camera cameraError / Close by user");
      }
    } else {
      this.loading = true;
      const body = {
        terminalId: this.terminalId,
        base64Images: false,
      }
      this.http.post<any>(this.api + 'kioskLogin/loginVisitor/', body,
        { headers: this.configService.headers() }
      ).subscribe(
        data => {
          this.modalService.open(loginVisitor,{ size: 'xl' });

         let self = this;
         this.myTimeout = setTimeout(function(){
            self.goToCart();
            self.modalService.dismissAll();
            console.log('this.myTimeout TRIGER');
         }, parseInt(this.kioskMessage['timer'])*1000);
         console.log("wait for "+parseInt(this.kioskMessage['timer']));


          this.loading = false;
          localStorage.setItem("t1_kioskUuid", data['insert']['kioskUuid']);
          //this.goToCart();
        },
        e => {
          console.log(e);
        },
      );

    }
  }

  loginMember(content: any) {
    this.loading = true;
    /**
     * WIHT QR CODE
     */
    let self = this;
    cordova.plugins.barcodeScanner.scan(

      function (result: any) {

        console.log("We got a barcode\n" +
          "Result: " + result.text + "\n" +
          "Format: " + result.format + "\n" +
          "Cancelled: " + result.cancelled);


        const body = {
          terminalId: self.terminalId,
          memberId: result.text,
        }
        self.http.post<any>(self.api + 'kioskLogin/loginMember/', body,
          { headers: self.configService.headers() }
        ).subscribe(
          data => {
            self.loading = false;
            if (data['error'] == false) {
              //localStorage.setItem("t1_kioskUuid", data['insert']['kioskUuid']);
              //self.modalService.open(content, { size: 'lg' });
              self.goToCart();
            } else {
              self.notes = self.kioskMessage.member_not_found_display;
              console.log("MEMBER ID NOT FOUND");
            }
          },
          e => {
            console.log(e);
          },
        );


      },
      function (error: any) {
        console.log("Scanning failed: " + error);
      },
      {
        preferFrontCamera: false, // iOS and Android
        showFlipCameraButton: true, // iOS and Android
        showTorchButton: true, // iOS and Android
        torchOn: false, // Android, launch with the torch switched on (if available)
        saveHistory: false, // Android, save scan history (default false)
        prompt: "Place a barcode inside the scan area", // Android
        resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
        formats: "QR_CODE", // default: all but PDF_417 and RSS_EXPANDED
        orientation: "portrait", // Android only (portrait|landscape), default unset so it rotates with the device
        disableAnimations: true, // iOS
        disableSuccessBeep: false // iOS and Android
      }
    );



  }


  member : any = [];
  myTimeout : any;
  loginSuccess : boolean = false;
  kioskUuid : string = '';

  loginMemberManual(content: any) {
    this.loading = true;
    this.modalService.open(content, { size: 'xl' });
  }
  fnSubmitMemberIdManual() { 
    const body = {
      terminalId: this.terminalId,
      memberId: this.memberId,
    }
    this.http.post<any>(this.api + 'kioskLogin/loginMember/', body,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        this.loading = false;
        console.log(data);
        if (data['error'] == false) { 
         this.member = data['member'];
         this.loginSuccess = true;
         // this.goToCart(data);
         // this.modalService.dismissAll();
         localStorage.setItem("t1_kioskUuid", data['insert']['kioskUuid']);
         this.kioskUuid = data['insert']['kioskUuid'];
         let self = this;
         this.myTimeout = setTimeout(function(){
            self.goToCart();
            self.modalService.dismissAll();
            console.log('this.myTimeout TRIGER');
         },parseInt(this.kioskMessage['timer'])*1000);
         console.log("wait for "+parseInt(this.kioskMessage['timer']));

          this.notes = data['welcomeMember'];
          this.member = data['member'];
        } else {
          this.notes = this.kioskMessage['memberNotFound'];
          console.log("MEMBER ID NOT FOUND");
        }
      },
      e => {
        console.log(e);
      },
    );
  }

  goToCart() {
    
    this.router.navigate(['cart'], { queryParams: { kioskUuid:  this.kioskUuid  }, });

  }
  ngOnDestroy(): void {
    this.modalService.dismissAll();
    console.log('ngOnDestroy');
    clearTimeout(this.myTimeout);
  }

}
