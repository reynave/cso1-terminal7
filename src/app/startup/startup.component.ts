import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ConfigService } from 'src/app/service/config.service';
import { ActivatedRoute, Router } from '@angular/router';
import * as CryptoJS from "crypto-js";

declare var device: any;
@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css']
})
export class StartupComponent implements OnInit {
  loading: boolean = false;
  api: string = environment.api;
  terminal: any = {
    id: "",
    name: "",
    storeOutlesId: "",
    keyLisence: "",
    token: "",
    status: 0,
    presence: 0,
    inputBy: 0,
    inputDate: 0,
    updateDate: 0,
    updateBy: 0
  }
  deviceUuid: string = "";
  error: boolean = true;
  note: string = "";
  systemOnline: boolean = false;
  platform: string = "browser";
  constructor(
    private http: HttpClient,
    private configService: ConfigService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.httpGet();
    this.fnSaveDeviceID();

    let onDeviceReady = () => {
      console.log('cordova ', device.cordova);
      console.log('model ', device.model);
      console.log('platform ', device.platform);
      console.log('uuid ', device.uuid);
      console.log('manufacturer ', device.manufacturer);
      console.log('isVirtual ', device.isVirtual);
      console.log('serial ', device.serial);
    }; 
    document.addEventListener('deviceready', onDeviceReady, false);
  }

  keyGen(data : string){
    let word = this.configService.reverseString(data)
    const hash = CryptoJS.MD5(CryptoJS.enc.Latin1.parse(word));
    const md5 = hash.toString(CryptoJS.enc.Hex);
    return md5;
  }

  fnSaveDeviceID() {
    /**
     * deviceUuid overwrite dari imei
     */ 
    try {
      const deviceData = device;

    } catch (err) { 

      localStorage.setItem(this.configService.deviceUuid(), environment.token);
      console.log("device.platform web base with key  : ",environment.token);  
    }

    if (device.platform == 'Android') {
      let newToken = device.serial+"@"+this.keyGen(device.serial);
      console.log("device.platform is ANDROID with key  : ",newToken);
      localStorage.setItem(this.configService.deviceUuid(),newToken);
    }  
   
  }

  reload() {
    this.httpGet();
    this.fnSaveDeviceID();
  }
  httpGet() {
    this.loading = true;
    let api = this.api + 'kioskStartup/account/?token=' + environment.token;
    this.http.get<any>(api
    ).subscribe(
      data => {
        this.error = data['error'];
        this.loading = false;
        this.note = data['note'];
        this.terminal = data['terminal'];
        this.systemOnline = data['systemOnline'];
      },
      e => {
        console.log(e);
      },
    );
  }

  start() {
    this.router.navigate(['login']);
  }

}
