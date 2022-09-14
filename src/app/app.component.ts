import { Component, OnInit } from '@angular/core';
 
declare var device : any;
declare var cordova : any;

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  
  constructor(){}

  ngOnInit(): void {
      
    let onDeviceReady = () => {
      console.log("Cordova Ready! ver 1.0.1 Stable");  
      console.log(device.platform);
      cordova.plugins.IMEI(function (err: any, imei: any) {
        console.log('imei', imei);
      })
      
    };
    
    document.addEventListener('deviceready', onDeviceReady, false);
    
  }

}
