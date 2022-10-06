import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookiesService } from './cookies.service';

import { Socket } from 'ngx-socket-io';

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
    private socket: Socket

  ) {
    if (localStorage.getItem(this.deviceUuidVar) == null) {
      console.log("tidak ada session login");
    } else {
      this.varToken = localStorage.getItem(this.deviceUuidVar);
    }
  }

  logout() {
    
  }

  sendMessage(data: any) {
    this.socket.emit('data', data);
  }
  getMessage():any {
    return this.socket.fromEvent('emiter');
  }
  getDocument(id: string) {
    this.socket.emit('getDoc', id);
  }
    
  help(data:any){
    const msg = {
      to: 'supervisor',
      msg: 'Help! Terminal ID :'+ data['terminalId'],
      action : 'help',
    }
    this.sendMessage(msg);
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
