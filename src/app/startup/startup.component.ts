import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ConfigService } from 'src/app/service/config.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-startup',
  templateUrl: './startup.component.html',
  styleUrls: ['./startup.component.css']
})
export class StartupComponent implements OnInit {
  loading: boolean = false;
  api: string = environment.api;
  constructor(
    private http: HttpClient,
    private configService: ConfigService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    
  ) { }

  ngOnInit(): void {
    this.httpGet();
  }

  httpGet(){
    this.loading = true;
    this.http.get<any>(this.api + 'kioskStartup/account/',
      { headers: this.configService.headers() }
    ).subscribe(
      data => { 
        this.loading = false;
        console.log(data);
        data['account'].forEach((row: any) => {
          localStorage.setItem(row['name'],row['value']); 
        });
        
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
