import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxScannerQrcodeModule } from 'ngx-scanner-qrcode';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { QRCodeModule } from 'angularx-qrcode';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ForbidenComponent } from './forbiden/forbiden.component';
import { StartupComponent } from './startup/startup.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CartComponent } from './cart/cart.component';
import { PaymentComponent } from './payment/payment.component';
import { CartFinishComponent } from './cart/cart-finish/cart-finish.component';
import { PhotoComponent } from './photo/photo.component';
import { WebcamModule } from 'ngx-webcam';
import { BillComponent } from './bill/bill.component';
import { PrintComponent } from './print/print.component';
import { PrintDetailComponent } from './print/print-detail/print-detail.component';
import { AdminComponent } from './admin/admin.component';
import { SystemOfflineComponent } from './system-offline/system-offline.component';
import { MemberBarcodeComponent } from './login/member-barcode/member-barcode.component';
import { PaymentQrisTelkomComponent } from './payment/payment-qris-telkom/payment-qris-telkom.component';
import { environment } from 'src/environments/environment';
import { UserPhotoComponent } from './login/user-photo/user-photo.component';
import { HeaderComponent } from './header/header.component';
import { PrintSettingComponent } from './print/print-setting/print-setting.component';
import { PaymentBcaDebitComponent } from './payment/payment-bca-debit/payment-bca-debit.component';
import { PaymentBcaQrisComponent } from './payment/payment-bca-qris/payment-bca-qris.component'; 


const config: SocketIoConfig = { url: environment.socket_url, options: { transports: ['websocket'] } };

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    ForbidenComponent,
    StartupComponent,
    LoginComponent,
    HomeComponent,
    CartComponent,
    PaymentComponent,
    CartFinishComponent,
    PhotoComponent,
    BillComponent,
    PrintComponent,
    PrintDetailComponent,
    AdminComponent,
    SystemOfflineComponent,
    MemberBarcodeComponent,
    PaymentQrisTelkomComponent,
    UserPhotoComponent,
    HeaderComponent,
    PrintSettingComponent,
    PaymentBcaDebitComponent,
    PaymentBcaQrisComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    NgxScannerQrcodeModule,
    WebcamModule,
    QRCodeModule,
    SocketIoModule.forRoot(config), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
