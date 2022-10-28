import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  closeResult: string = '';
  
  today: any = new Date();
  version: string = environment.version;
  constructor(
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
  }
  open(content: any) {
    this.modalService.open(content, { fullscreen: true }).result.then((result) => {
      console.log(result);
    }, (reason) => {
      console.log('close');
    });
  }

}
