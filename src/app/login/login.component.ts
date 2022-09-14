import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap'; 
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/service/config.service';

declare function haha(): any;
declare let navigator: any;
declare let cordova: any;
declare let Camera: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit { 
  terminalId: any; 

  loading: boolean = false;
  api: string = environment.api;
  myUUID: any;
  isStillLogin: boolean = false;
  interval: any;
  memberId: string = "";
  loop: number = 0;
  notes: string = "";
  kioskMessage: any;

  constructor(
    private modalService: NgbModal,
    private http: HttpClient,
    private configService: ConfigService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    console.log(navigator.camera);
    this.configService.sytemOff().subscribe(
      data => {
        if (data['error'] == 400) {
          this.router.navigate(['offline']);
        }

      }
    );
    this.kioskMessage = {
      member_not_found_display: localStorage.getItem("t1_member_not_found_display"),
      visitor_login_display: localStorage.getItem("t1_visitor_login_display"),
      welcome_screen: localStorage.getItem("t1_welcome_screen"),
      customerphoto: localStorage.getItem("t1_customerphoto") ? localStorage.getItem("t1_customerphoto") : 0,
      visitorphoto: localStorage.getItem("t1_visitorphoto") ? localStorage.getItem("t1_visitorphoto") : 0,
      configurationimages: environment.api + 'uploads/configuration/' + localStorage.getItem("t1_configurationimages"),
    }
    console.log(this.kioskMessage);
    this.terminalId = localStorage.getItem(this.configService.myTerminalId()); 
    if (localStorage.getItem(this.configService.myUUID()) !== null) {
      this.isStillLogin = true;
      this.myUUID = localStorage.getItem(this.configService.myUUID());
    }
    this.httpGet();
  }

  httpGet() {
    this.http.get<any>(this.api + 'kioskLogin/checkSession/?t=' + this.myUUID,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        if (data['error'] == true) {
          localStorage.removeItem(this.configService.myUUID());
        }
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
            self.goToCart(data);
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
          // this.modalService.open(loginVisitor);

          this.loading = false;
          this.goToCart(data);
        },
        e => {
          console.log(e);
        },
      );

    }
  }

  loginMember(content :any) {
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
                self.goToCart(data);
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

  goToCart(data: any) {
    localStorage.setItem("t1_kioskUuid", data['insert']['kioskUuid']);
    this.router.navigate(['cart'], { queryParams: { kioskUuid: data['insert']['kioskUuid'] }, });

  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.  
    console.log('ngOnDestroy');
  }

}
