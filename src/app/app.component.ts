import { Component } from '@angular/core';
declare var navigator : any;
@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent {
  
  constructor(){
    console.log(navigator.camera);
  }

}
