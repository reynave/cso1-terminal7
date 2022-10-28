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
  reloadToken(){
    this.varToken = localStorage.getItem(this.deviceUuidVar);
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
    this.reloadToken();
    return this.varHeaders = new HttpHeaders({
      'Content-Type': 'application/json',
      'Token': this.varToken,
    });
  }
  token() {
    return localStorage.getItem(this.deviceUuidVar);
  }

  id_user() { 
    this.reloadToken();
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
    this.reloadToken();
    let url = this.api + 'Kiosks/index/?token='+this.varToken;
    console.log("httpAccount : " ,url)
    return this.http.get<any>(url,
      { headers: this.headers() }
    );
    
  }

  reverseString(str : string) {
    // Step 1. Use the split() method to return a new array
    let splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]

    // Step 2. Use the reverse() method to reverse the new created array
    let reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]

    // Step 3. Use the join() method to join all elements of the array into a string
    let joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"

    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}


}
