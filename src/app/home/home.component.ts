import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  closeResult: string = '';
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
