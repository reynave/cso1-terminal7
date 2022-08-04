import { Component, OnInit } from '@angular/core';

declare var navigator : any;
declare var device : any;

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {
  
  constructor(){}

  ngOnInit(): void {
    console.log(navigator.camera);

    let onDeviceReady = () => {
      console.log("Cordova Ready!");  
      console.log(device.platform);
    };
    
    document.addEventListener('deviceready', onDeviceReady, false);
    
  }

}
