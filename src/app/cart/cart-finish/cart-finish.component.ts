import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';

import { ConfigService } from 'src/app/service/config.service';
import { HttpClient } from '@angular/common/http';
import { PrintingService } from 'src/app/service/printing.service';

declare var window: any;
@Component({
  selector: 'app-cart-finish',
  templateUrl: './cart-finish.component.html',
  styleUrls: ['./cart-finish.component.css']
})
export class CartFinishComponent implements OnInit {

  kioskMessage: any = {
    thanks: '',
    timer: 10,
  };
  api: string = environment.api;
  printerName : any;
  intervalTime: any;
  bill : any = [];
  countdown: number = 0;
  constructor(
    private router: Router,
    private configService: ConfigService,
    private http: HttpClient,
    private activatedRoute: ActivatedRoute,
    private printing: PrintingService, 
  ) { }

  ngOnInit(): void {

    this.httpGet();
  }
  httpGet() {
    this.configService.httpAccount().subscribe(
      data => {
        console.log(data['account']);
        this.kioskMessage = {
          thanks: data['account'][data['account'].findIndex(((obj: { id: number; }) => obj.id == 1004))]['value'],
          timer: data['account'][data['account'].findIndex(((obj: { id: number; }) => obj.id == 1008))]['value'],
        }
        console.log(this.kioskMessage);
        let n = parseInt(this.kioskMessage['timer']) < 1 ? 1 : parseInt(this.kioskMessage['timer']);
        this.countdown = n;
        setTimeout(() => {
          this.router.navigate(['/login']);
        },
          n * 1000);

        this.runCountdown();
      }

    );

    let url = this.api + 'KioskPrint/printDetail/?id=' + this.activatedRoute.snapshot.params['id'];
    console.log(url);
    this.http.get<any>(url,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        this.bill = data;   
      },
      e => {
        console.log(e);
      },
    );
  }
 
  home() {
    this.router.navigate(['/login']);
  }

  printBill() { 
    this.print("android");
  }
 
  warning : string = "";
  print(name: string) {
    const body = {
      id: this.activatedRoute.snapshot.params['id'],
    }
    this.http.post<any>(this.api + 'kioskPrint/countingPrinting/', body,
      { headers: this.configService.headers() }
    ).subscribe(
      data => {
        if (name == 'android') {  
          let message = this.printing.template( this.bill);
          this.printerName = localStorage.getItem(this.configService.printerName());
          if (this.printerName == "" || this.printerName == null) { 
            this.warning = "NO PRINTING SELECT";
          }else{
           
            window['cordova'].plugins.UsbPrinter.connect(this.printerName, (result: any) => {
              console.log(result);
              window['cordova'].plugins.UsbPrinter.print(this.printerName, message, (result: any) => {
                console.log("result of usb print action", result);
              }, (err: any) => {
                console.error('Error in usb print action', err);
              });
              this.router.navigate(['/login']);
            }, (err: any) => {
              console.error(err);
            });
          }
        }

        else if (name == 'browser') {
          window.print();
          console.log(data);
        }

      },
    );
  }

  runCountdown() {
    let self = this;
    this.intervalTime = setInterval(function () {
      self.countdown--;
    }, 1000);
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
    clearInterval(this.intervalTime);
  }
}
