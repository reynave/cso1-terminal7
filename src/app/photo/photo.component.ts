import { Component, OnInit, ViewChild } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { ConfigService } from 'src/app/service/config.service';

import {Subject, Observable} from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent implements OnInit {
  loading: boolean = false;
  api: string = environment.api;
  uuid : any;
  // toggle webcam on/off
   showWebcam = true;
   allowCameraSwitch = true;
   multipleWebcamsAvailable = false;
   deviceId: string | undefined;
   videoOptions: MediaTrackConstraints = {
    // width: {ideal: 1024},
    // height: {ideal: 576}
  };
   errors: WebcamInitError[] = [];

  // latest snapshot
   webcamImage: WebcamImage|null = null;

  // webcam snapshot trigger
  private trigger: Subject<void> = new Subject<void>();
  // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
  private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();


  constructor(
    private modalService: NgbModal,
    private http: HttpClient,
    private configService: ConfigService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.uuid =  localStorage.getItem(this.configService.myUUID());
    WebcamUtil.getAvailableVideoInputs()
    .then((mediaDevices: MediaDeviceInfo[]) => {
      this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
    });
  }
  public triggerSnapshot(): void {
    this.trigger.next();
  }

  public toggleWebcam(): void {
    this.showWebcam = !this.showWebcam;
  }

  public handleInitError(error: WebcamInitError): void {
    this.errors.push(error);
  }

  public showNextWebcam(directionOrDeviceId: boolean|string): void {
    // true => move forward through devices
    // false => move backwards through devices
    // string => move to device with given deviceId
    this.nextWebcam.next(directionOrDeviceId);
  }

  public handleImage(webcamImage: WebcamImage): void {
    console.log('received webcam image', webcamImage);
    console.log("_imageAsDataUrl",webcamImage.imageAsDataUrl);
    this.webcamImage = webcamImage;
    this.uploadPhoto(webcamImage);
  }

  uploadPhoto(webcamImage :any){
    if(webcamImage.imageAsDataUrl ){
      console.log("SAVE PHP");
      const body = {

      }
      this.http.post<any>(this.api + 'kioskLogin/loginVisitor/', body,
        { headers: this.configService.headers() }
      ).subscribe(
        data => {
          this.loading = false; 
          this.router.navigate(['cart'], { queryParams: { kioskUuid: localStorage.getItem(this.configService.myUUID())}, });
        },
        e => {
          console.log(e);
        },
      );

     
    } 
  }


  public cameraWasSwitched(deviceId: string): void {
    console.log('active device: ' + deviceId);
    this.deviceId = deviceId;
  }

  public get triggerObservable(): Observable<void> {
    return this.trigger.asObservable();
  }

  public get nextWebcamObservable(): Observable<boolean|string> {
    return this.nextWebcam.asObservable();
  }
}
