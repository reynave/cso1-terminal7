import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-finish',
  templateUrl: './cart-finish.component.html',
  styleUrls: ['./cart-finish.component.css']
})
export class CartFinishComponent implements OnInit {
  t1_thank_you_display: any;
  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.t1_thank_you_display = localStorage.getItem("t1_thank_you_display");

    setTimeout(() => {
      this.router.navigate(['/login']);
    },
      5000);
  }



}
