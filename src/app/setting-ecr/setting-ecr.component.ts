import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../service/config.service';

@Component({
  selector: 'app-setting-ecr',
  templateUrl: './setting-ecr.component.html',
  styleUrls: ['./setting-ecr.component.css']
})
export class SettingEcrComponent implements OnInit {
  env_ecr: any;
  note: string = ""; 
  private _docSub: any;
  logs : any = [];
  constructor(
    private configService: ConfigService,
  ) { }

  ngOnInit(): void {
    this.setInit();
    this._docSub = this.configService.getMessage().subscribe(
      (data: { [x: string]: any; }) => {
        console.log(data);
        this.logs = data;
      }
    );
  }

  setInit() {
    this.env_ecr = localStorage.getItem("env_ecr");
  }

  fnSave() {
    localStorage.setItem("env_ecr", this.env_ecr);
    this.setInit();
    this.note = "Save Done";
  }

  back() {
    history.back();
  }

  comConn() {
    const msg = {
      port: 80,
      host: localStorage.getItem("env_ecr"),
      action: 'ajax',
      msg: 'comConn',
    }
    console.log(msg);
    this.configService.sendMessage(msg);
  }

  comClose() {
    const msg = {
      msg: 'comClose',
      action: 'ajax',
    }
    this.configService.sendMessage(msg);
  }
  comClear() {
    const msg = {
      action: 'ajax',
      msg: 'comClear',
    }
    console.log(msg);
    this.configService.sendMessage(msg);
  }

  comTest() {
    const msg = {
      action: 'ajax',
      msg: 'comTest',
    }
    console.log(msg);
    this.configService.sendMessage(msg);
  }
  ngOnDestroy(): void {
    console.log("ngOnDestroy");
    this.comClose();
    this._docSub.unsubscribe();
  }
}
