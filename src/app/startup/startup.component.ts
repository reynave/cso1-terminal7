import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ConfigService } from 'src/app/service/config.service';
import { ActivatedRoute, Router } from '@angular/router';

/**
 * THIS IS FOR DEVELOPMENT ONLY, DONT USE FOR PRODUCTION 
 * please use IME device Android for token!
 */
declare var imei : any;


@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css']
})
export class StartupComponent implements OnInit {
  loading: boolean = false;
  api: string = environment.api;
  terminal : any = { 
    id: "", 
    name: "", 
    storeOutlesId: "", 
    keyLisence: "", 
    token: "", 
    status:0, 
    presence: 0, 
    inputBy: 0,
    inputDate: 0, 
    updateDate: 0, 
    updateBy: 0
  }

  
  constructor(
    private http: HttpClient,
    private configService: ConfigService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    
  ) { }

  ngOnInit(): void {
  
    this.httpGet();
    this.saveImei()
  }
  saveImei(){ 
    if(imei != ""){
      localStorage.setItem(this.configService.myTerminalId(),imei); 
      console.log(imei);
    } 
  }
  error  : boolean = true;
  note : string = "";
  httpGet(){
    this.loading = true;
    this.http.get<any>(this.api + 'kioskStartup/account/?imei='+imei,
      { headers: this.configService.headers() }
    ).subscribe(
      data => { 
        this.error = data['error'];
        this.loading = false;
        console.log(data); 
        this.note = data['note'];
        this.terminal = data['terminal'];  
        localStorage.setItem("terminalId",data['terminal']['id']); 
        localStorage.setItem("storeOutlesId",data['terminal']['storeOutlesId']); 
        
      },
      e => {
        console.log(e);
      }, 
    );
  }

  start(){
    this.router.navigate(['login']);
  }

}
