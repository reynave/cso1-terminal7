import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/service/config.service';
 
declare var window: any;
@Component({
  selector: 'app-print-setting',
  templateUrl: './print-setting.component.html',
  styleUrls: ['./print-setting.component.css']
})
export class PrintSettingComponent implements OnInit {
  printerName: any;
  note: string = "";
  selectPrinter: any = [];
  loading: boolean = false;
  constructor(
    private configService: ConfigService,
  ) {
  }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    this.printerName = localStorage.getItem(this.configService.printerName());
    let onDeviceReady = () => {
      window['cordova'].plugins.UsbPrinter.getConnectedPrinters((result: any) => {
        this.selectPrinter = result;
        console.log(result);
        this.logs("! result will be list of printers connected to the usb device");

      }, (err: any) => {
        console.error(err)
        this.logs("! failure callback execution");

      });
    };
    document.addEventListener('deviceready', onDeviceReady, false);
  }

  fnSelectPrinter() {
    window['cordova'].plugins.UsbPrinter.connect(this.printerName, (result: any) => {
      console.log(result);
      this.logs("! success callback execution");
    }, (err: any) => {

      console.error(err)
      this.logs("! err : use this method to recognise the disconnection of usb device");
      this.logs("! err : failure callback execution");
    });
  }

  fnSave() {
    this.logs("SAVE() " + this.printerName);
    if (this.printerName != "" && this.printerName != null) {
      localStorage.setItem(this.configService.printerName(), this.printerName);
    } else {
      alert("Please select printer ID");
      this.note = "Please select printer ID";
      this.logs("! Please select printer ID");
    }

  }
  reload() {
    this.loading = true;
    let self = this;
    setTimeout(function () {
      self.loading = false;
    }, 500);
    this.reloadData();
  }
  fnClear() {
    localStorage.removeItem(this.configService.printerName());
    this.reloadData();
    this.logs("CLEAR SAVE");
  }

  back() {
    history.back();
  }

  logs(note: string) {
    this.note = this.note + "\n" + note;
  }

  fnTestPrinting() {
    let date = new Date();
    let message = ` 


Testing Print Success
${date}


    `;
    console.log(this.printerName, message);

    if (this.printerName == "" || this.printerName == null) {
      alert("NO PRINTING SELECT");
      this.logs("NO PRINT NAME SELECT!");
    } else {
      window['cordova'].plugins.UsbPrinter.connect(this.printerName, (result: any) => {
        console.log(result);
        this.logs("! success callback execution");
        window['cordova'].plugins.UsbPrinter.print(this.printerName, message, (result: any) => {
          console.log("result of usb print action", result); 
          this.logs("! successful callback execution"); 
        }, (err: any) => {
          console.error('Error in usb print action', err)
          this.logs("! Error in usb print action");
        });

      }, (err: any) => {

        console.error(err);
        this.logs("!  // use this method to recognise the disconnection of usb device");
        this.logs("! failure callback execution");
      });
    }
  }
}
