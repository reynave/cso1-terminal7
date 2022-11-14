import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';
import { ConfigService } from '../service/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  closeResult: string = '';
  env_api : string = environment.api;
  env_socket : string = environment.socket_url;
  note:string="";
  today: any = new Date();
  version: string = environment.version;
 
  device : boolean =  environment.device;
  constructor(
    private modalService: NgbModal,
    private configService: ConfigService,
  ) { }

  ngOnInit(): void {
    
  }
 
 
  fnTestCon() {

  }
  open(content: any) {
    this.modalService.open(content, { fullscreen: true }).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log('close');
    });
  }

}
