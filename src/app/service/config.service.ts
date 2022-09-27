import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookiesService } from './cookies.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  secretKeyAccess: string = "QkSDhtCFJQ4n75Xq8Cmy4WExRU3C4r";
  uuid: string = "t1_kioskUuid";
  terminalImei: string = "t1_terminalImei";
  varToken: string = "";
  varHeaders: any = [];
  api: string = environment.api;
  rules: any;
  varData: any = [];
  tokenName: string = "cso1AdminToken";
  constructor(
    private cookies: CookiesService,
    private http: HttpClient,

  ) {
    if (this.cookies.getCookie(this.tokenName) == null) {
      console.log("tidak ada session login");
    } else {
      this.varToken = this.cookies.getCookie(this.tokenName);
    }
  }

  logout() {
    document.cookie = this.tokenName + "=null; expires = Thu, 01 Jan 1970 00:00:00 GMT;path=/";
  }
  myUUID() {
    return this.uuid;
  }
  myTerminalId() {
    return this.terminalImei;
  }
  setToken(token: string) {
    this.cookies.setCookie(this.tokenName, token, 30);
  }

  getToken() {
    return this.cookies.getCookie(this.tokenName);
  }

  username() {
    return this.varData['name'];
  }

  headers() {
    return this.varHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Token': this.varToken,
    });
  }
  token() {
    return this.varToken;
  }

  id_user() {
    return this.varToken;
  }


  errorToken(data: { [x: string]: number; }) {
    if (data['error'] == 400) {
      //  window.location.href = "login";
    }

  }

  secretKeyAccessGet() {
    return this.secretKeyAccess;
  };


  extenCookies() {
    var d = new Date();
    d.setTime(d.getTime() + (24 * 60 * 60 * 90000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = this.tokenName + "=" + this.cookies.getCookie(this.tokenName) + ";" + expires + ";path=/";
  }

  accessRightPush(data: string) {
    localStorage.setItem("SCO1Access", btoa(data));
  }

  sytemOff() {
    return this.http.get<any>(this.api + 'kioskLogin/index/');
  }


  httpAccount() {
    return this.http.get<any>(this.api + 'Kiosks/index/?outletId='+localStorage.getItem("storeOutlesId"),
      { headers: this.headers() }
    );
    
  }

}
