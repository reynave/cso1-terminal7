import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BillComponent } from './bill/bill.component';
import { CartFinishComponent } from './cart/cart-finish/cart-finish.component';
import { CartComponent } from './cart/cart.component';
import { ForbidenComponent } from './forbiden/forbiden.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PaymentComponent } from './payment/payment.component';
import { PhotoComponent } from './photo/photo.component';
import { PrintDetailComponent } from './print/print-detail/print-detail.component';
import { PrintComponent } from './print/print.component';
import { StartupComponent } from './startup/startup.component';
import { SystemOfflineComponent } from './system-offline/system-offline.component';

const routes: Routes = [
  { path: "", component: HomeComponent, data: { active: "home" }, },
  { path: "offline", component: SystemOfflineComponent, data: { active: "offline" }, },
  
  { path: "home", component: HomeComponent, data: { active: "home" }, },
  { path: "login", component: LoginComponent, data: { active: "home" }, },
  { path: "startup", component: StartupComponent, data: { active: "startup" }, },
  { path: "admin", component: AdminComponent, data: { active: "startup" }, },


  { path: "cart", component: CartComponent, data: { active: "cart" }, },
  { path: "cart/finish/:id", component: CartFinishComponent, data: { active: "cart" }, },
  { path: "photo", component: PhotoComponent, data: { active: "photo" }, },
  { path: "bill", component: BillComponent, data: { active: "bill" }, },
  { path: "print", component: PrintComponent, data: { active: "print" }, },
  { path: "print/detail/:id", component: PrintDetailComponent, data: { active: "print" }, },
  
  { path: "payment", component: PaymentComponent, data: { active: "payment" }, },
  
  { path: "forbiden", component: ForbidenComponent, data: { active: "home" }, },
  { path: "nofound", component: NotFoundComponent, data: { active: "home" }, },
  { path: "**", component: NotFoundComponent, data: { active: "404" } },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
