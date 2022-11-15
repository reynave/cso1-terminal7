import { HttpClient } from '@angular/common/http';
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
  api : string = environment.api;
  env_api : string = environment.api;
  env_socket : string = environment.socket_url;
  note:any;
  today: any = new Date();
  version: string = environment.version;
  loading : boolean = false;
  device : boolean =  environment.device;
  constructor(
    private modalService: NgbModal,
    private configService: ConfigService,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    
  }
 
 
  fnTestCon() {
    this.loading = true;
    let url = this.api ;
    console.log(url);
    this.http.get<any>(url,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        this.loading = false;
        console.log(data);
        this.note = data; 
      },
      e => {
        console.log(e);
      },
    );
  }
  open(content: any) {
    this.modalService.open(content, { fullscreen: true }).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log('close');
    });
  }

}
