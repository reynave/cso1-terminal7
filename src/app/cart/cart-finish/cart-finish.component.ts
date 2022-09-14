import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-finish',
  templateUrl: './cart-finish.component.html',
  styleUrls: ['./cart-finish.component.css']
})
export class CartFinishComponent implements OnInit {
  t1_timer_setting_for_refresh : any = localStorage.getItem("t1_timer_setting_for_refresh");
  t1_thank_you_display: any;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    let n = this.t1_timer_setting_for_refresh ?  this.t1_timer_setting_for_refresh : 10;

    this.t1_thank_you_display = localStorage.getItem("t1_thank_you_display");

     setTimeout(() => {
      this.router.navigate(['/login']);
    },
      n*1000);
  }


  home(){
    this.router.navigate(['/login']);
  }
  printBill(){
    window.print();
  }

}
