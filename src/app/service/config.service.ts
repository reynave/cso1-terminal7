import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookiesService } from './cookies.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService { 
  kioskUuid : string = "t1_kioskUuid"; 
  deviceUuidVar : string = 'deviceUuid';
  varToken: any = [];
  varHeaders: any = [];
  api: string = environment.api; 
  constructor(
    private cookies: CookiesService,
    private http: HttpClient,

  ) {
    if (localStorage.getItem(this.deviceUuidVar) == null) {
      console.log("tidak ada session login");
    } else {
      this.varToken = localStorage.getItem(this.deviceUuidVar);
    }
  }

  logout() {
    
  }
  getKioskUuid() {
    return this.kioskUuid;
  }
  myUUID() {
    return this.kioskUuid;
  }
  deviceUuid() {
    return this.deviceUuidVar;
  }
  
  headers() {
    return this.varHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Token': this.varToken,
    });
  }
  token() {
    return localStorage.getItem(this.deviceUuidVar);
  }

  id_user() {
    return this.varToken;
  }


  errorToken(data: { [x: string]: number; }) {
    if (data['error'] == 400) {
      //  window.location.href = "login";
    }

  }
  

  sytemOff() {
    let url = this.api + 'kioskLogin/index/?token='+localStorage.getItem(this.deviceUuidVar);
    return this.http.get<any>(url);
  }


  httpAccount() {
    return this.http.get<any>(this.api + 'Kiosks/index/?token='+this.varToken,
      { headers: this.headers() }
    );
    
  }

}
