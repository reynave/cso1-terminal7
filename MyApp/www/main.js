(self["webpackChunkterminal1"] = self["webpackChunkterminal1"] || []).push([["main"],{

/***/ 1034:
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminComponent": () => (/* binding */ AdminComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _service_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service/config.service */ 6169);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../header/header.component */ 3482);




const _c0 = function () { return ["/print"]; };
const _c1 = function () { return ["/print/setting"]; };
class AdminComponent {
    constructor(router, configService) {
        this.router = router;
        this.configService = configService;
    }
    ngOnInit() {
    }
    logout() {
        this.router.navigate(['']).then(() => {
            localStorage.removeItem("deviceUuid");
            localStorage.removeItem("t1_kioskUuid");
            this.configService.reloadToken();
        });
    }
}
AdminComponent.ɵfac = function AdminComponent_Factory(t) { return new (t || AdminComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_service_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService)); };
AdminComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AdminComponent, selectors: [["app-admin"]], decls: 20, vars: 4, consts: [[1, "container", "mt-4"], [1, "row"], [1, "col-6"], [1, "col-6", "text-end"], ["href", "javascript:window.history.back();", 1, "btn", "btn-sm", "py-1", "btn-warning", "font-btn"], [1, "ti", "ti-logout"], [1, "row", "mt-5"], [1, "col-12", "d-grid"], [1, "btn", "btn-sm", "btn-block", "btn-info", "my-1", "py-4", "mb-3", "font-btn", 3, "routerLink"], ["href", "javascript:;", 1, "btn", "btn-sm", "btn-block", "btn-danger", "my-1", "py-4", "mb-3", "font-btn", 3, "click"]], template: function AdminComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, " ADMIN MODE ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 3)(7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, " EXIT ADMIN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "History Bill");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7)(15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "Setting Printng");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 7)(18, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AdminComponent_Template_a_click_18_listener() { return ctx.logout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Logout Terminal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZG1pbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./admin/admin.component */ 1034);
/* harmony import */ var _bill_bill_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bill/bill.component */ 1411);
/* harmony import */ var _cart_cart_finish_cart_finish_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cart/cart-finish/cart-finish.component */ 5728);
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cart/cart.component */ 4918);
/* harmony import */ var _forbiden_forbiden_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./forbiden/forbiden.component */ 393);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _login_member_barcode_member_barcode_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/member-barcode/member-barcode.component */ 1150);
/* harmony import */ var _login_user_photo_user_photo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./login/user-photo/user-photo.component */ 8852);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./not-found/not-found.component */ 1142);
/* harmony import */ var _payment_payment_qris_telkom_payment_qris_telkom_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./payment/payment-qris-telkom/payment-qris-telkom.component */ 561);
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./payment/payment.component */ 9082);
/* harmony import */ var _photo_photo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./photo/photo.component */ 3004);
/* harmony import */ var _print_print_detail_print_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./print/print-detail/print-detail.component */ 2161);
/* harmony import */ var _print_print_setting_print_setting_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./print/print-setting/print-setting.component */ 7781);
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./print/print.component */ 2405);
/* harmony import */ var _startup_startup_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./startup/startup.component */ 8945);
/* harmony import */ var _system_offline_system_offline_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./system-offline/system-offline.component */ 3855);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/core */ 3184);





















const routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent, data: { active: "home" }, },
    { path: "offline", component: _system_offline_system_offline_component__WEBPACK_IMPORTED_MODULE_17__.SystemOfflineComponent, data: { active: "offline" }, },
    { path: "home", component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__.HomeComponent, data: { active: "home" }, },
    { path: "login", component: _login_login_component__WEBPACK_IMPORTED_MODULE_6__.LoginComponent, data: { active: "login" }, },
    { path: "login/memberBarcode", component: _login_member_barcode_member_barcode_component__WEBPACK_IMPORTED_MODULE_7__.MemberBarcodeComponent, data: { active: "login" }, },
    { path: "login/userPhoto", component: _login_user_photo_user_photo_component__WEBPACK_IMPORTED_MODULE_8__.UserPhotoComponent, data: { active: "login" }, },
    { path: "startup", component: _startup_startup_component__WEBPACK_IMPORTED_MODULE_16__.StartupComponent, data: { active: "startup" }, },
    { path: "admin", component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_0__.AdminComponent, data: { active: "startup" }, },
    { path: "cart", component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_3__.CartComponent, data: { active: "cart" }, },
    { path: "cart/finish/:id", component: _cart_cart_finish_cart_finish_component__WEBPACK_IMPORTED_MODULE_2__.CartFinishComponent, data: { active: "cart" }, },
    { path: "photo", component: _photo_photo_component__WEBPACK_IMPORTED_MODULE_12__.PhotoComponent, data: { active: "photo" }, },
    { path: "bill", component: _bill_bill_component__WEBPACK_IMPORTED_MODULE_1__.BillComponent, data: { active: "bill" }, },
    { path: "print", component: _print_print_component__WEBPACK_IMPORTED_MODULE_15__.PrintComponent, data: { active: "print" }, },
    { path: "print/detail/:id", component: _print_print_detail_print_detail_component__WEBPACK_IMPORTED_MODULE_13__.PrintDetailComponent, data: { active: "print" }, },
    { path: "print/setting", component: _print_print_setting_print_setting_component__WEBPACK_IMPORTED_MODULE_14__.PrintSettingComponent, data: { active: "print" }, },
    { path: "payment", component: _payment_payment_component__WEBPACK_IMPORTED_MODULE_11__.PaymentComponent, data: { active: "payment" }, },
    { path: "payment/qristelkom/:id", component: _payment_payment_qris_telkom_payment_qris_telkom_component__WEBPACK_IMPORTED_MODULE_10__.PaymentQrisTelkomComponent, data: { active: "payment" }, },
    { path: "forbiden", component: _forbiden_forbiden_component__WEBPACK_IMPORTED_MODULE_4__.ForbidenComponent, data: { active: "home" }, },
    { path: "nofound", component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__.NotFoundComponent, data: { active: "home" }, },
    { path: "**", component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__.NotFoundComponent, data: { active: "404" } },
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule.forRoot(routes, { useHash: true })], _angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_18__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_19__.RouterModule] }); })();


/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


class AppComponent {
    constructor() { }
    ngOnInit() {
        let onDeviceReady = () => {
            screen.orientation.lock('portrait');
            console.log("Cordova Ready! ver 1.0.1 Stable");
            console.log('cordova ', device.cordova);
            console.log('model ', device.model);
            console.log('platform ', device.platform);
            console.log('uuid ', device.uuid);
            console.log('manufacturer ', device.manufacturer);
            console.log('isVirtual ', device.isVirtual);
            console.log('serial ', device.serial);
        };
        document.addEventListener('deviceready', onDeviceReady, false);
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], encapsulation: 2 });


/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var ngx_scanner_qrcode__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ngx-scanner-qrcode */ 4561);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! angularx-qrcode */ 9876);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ngx-socket-io */ 4935);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ 1142);
/* harmony import */ var _forbiden_forbiden_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forbiden/forbiden.component */ 393);
/* harmony import */ var _startup_startup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./startup/startup.component */ 8945);
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ 8458);
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ 5067);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./cart/cart.component */ 4918);
/* harmony import */ var _payment_payment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./payment/payment.component */ 9082);
/* harmony import */ var _cart_cart_finish_cart_finish_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cart/cart-finish/cart-finish.component */ 5728);
/* harmony import */ var _photo_photo_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./photo/photo.component */ 3004);
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ngx-webcam */ 9839);
/* harmony import */ var _bill_bill_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bill/bill.component */ 1411);
/* harmony import */ var _print_print_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./print/print.component */ 2405);
/* harmony import */ var _print_print_detail_print_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./print/print-detail/print-detail.component */ 2161);
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/admin.component */ 1034);
/* harmony import */ var _system_offline_system_offline_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./system-offline/system-offline.component */ 3855);
/* harmony import */ var _login_member_barcode_member_barcode_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./login/member-barcode/member-barcode.component */ 1150);
/* harmony import */ var _payment_payment_qris_telkom_payment_qris_telkom_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./payment/payment-qris-telkom/payment-qris-telkom.component */ 561);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _login_user_photo_user_photo_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./login/user-photo/user-photo.component */ 8852);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./header/header.component */ 3482);
/* harmony import */ var _print_print_setting_print_setting_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./print/print-setting/print-setting.component */ 7781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/core */ 3184);
































const config = { url: src_environments_environment__WEBPACK_IMPORTED_MODULE_18__.environment.socket_url, options: { transports: ['websocket'] } };
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule,
            _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HttpClientModule,
            ngx_scanner_qrcode__WEBPACK_IMPORTED_MODULE_27__.NgxScannerQrcodeModule,
            ngx_webcam__WEBPACK_IMPORTED_MODULE_28__.WebcamModule,
            angularx_qrcode__WEBPACK_IMPORTED_MODULE_29__.QRCodeModule,
            ngx_socket_io__WEBPACK_IMPORTED_MODULE_30__.SocketIoModule.forRoot(config),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_22__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
        _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__.NotFoundComponent,
        _forbiden_forbiden_component__WEBPACK_IMPORTED_MODULE_3__.ForbidenComponent,
        _startup_startup_component__WEBPACK_IMPORTED_MODULE_4__.StartupComponent,
        _login_login_component__WEBPACK_IMPORTED_MODULE_5__.LoginComponent,
        _home_home_component__WEBPACK_IMPORTED_MODULE_6__.HomeComponent,
        _cart_cart_component__WEBPACK_IMPORTED_MODULE_7__.CartComponent,
        _payment_payment_component__WEBPACK_IMPORTED_MODULE_8__.PaymentComponent,
        _cart_cart_finish_cart_finish_component__WEBPACK_IMPORTED_MODULE_9__.CartFinishComponent,
        _photo_photo_component__WEBPACK_IMPORTED_MODULE_10__.PhotoComponent,
        _bill_bill_component__WEBPACK_IMPORTED_MODULE_11__.BillComponent,
        _print_print_component__WEBPACK_IMPORTED_MODULE_12__.PrintComponent,
        _print_print_detail_print_detail_component__WEBPACK_IMPORTED_MODULE_13__.PrintDetailComponent,
        _admin_admin_component__WEBPACK_IMPORTED_MODULE_14__.AdminComponent,
        _system_offline_system_offline_component__WEBPACK_IMPORTED_MODULE_15__.SystemOfflineComponent,
        _login_member_barcode_member_barcode_component__WEBPACK_IMPORTED_MODULE_16__.MemberBarcodeComponent,
        _payment_payment_qris_telkom_payment_qris_telkom_component__WEBPACK_IMPORTED_MODULE_17__.PaymentQrisTelkomComponent,
        _login_user_photo_user_photo_component__WEBPACK_IMPORTED_MODULE_19__.UserPhotoComponent,
        _header_header_component__WEBPACK_IMPORTED_MODULE_20__.HeaderComponent,
        _print_print_setting_print_setting_component__WEBPACK_IMPORTED_MODULE_21__.PrintSettingComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_23__.BrowserModule,
        _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_24__.NgbModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_25__.FormsModule,
        _angular_common_http__WEBPACK_IMPORTED_MODULE_26__.HttpClientModule,
        ngx_scanner_qrcode__WEBPACK_IMPORTED_MODULE_27__.NgxScannerQrcodeModule,
        ngx_webcam__WEBPACK_IMPORTED_MODULE_28__.WebcamModule,
        angularx_qrcode__WEBPACK_IMPORTED_MODULE_29__.QRCodeModule, ngx_socket_io__WEBPACK_IMPORTED_MODULE_30__.SocketIoModule] }); })();


/***/ }),

/***/ 1411:
/*!****************************************!*\
  !*** ./src/app/bill/bill.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BillComponent": () => (/* binding */ BillComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 6169);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);







function BillComponent_tr_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "*Special price");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "*Free Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "td", 19)(15, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](21, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const x_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r6.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", x_r6.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", x_r6.isSpecialPrice == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", x_r6.isFreeItem == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r6.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 9, x_r6.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", x_r6.totalDiscount <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](18, 11, x_r6.totalDiscount), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](21, 13, x_r6.totalPrice));
} }
function BillComponent_tr_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr", 23)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "(Free Items)");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const x_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", x_r7.printOnBill <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r7.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", x_r7.description, " ");
} }
function BillComponent_span_110_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", x_r8.printOnBill > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", x_r8.description, " (", x_r8.qty, ") ");
} }
function BillComponent_span_114_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", x_r9.description, " (", x_r9.qty, ") ");
} }
function BillComponent_ng_template_133_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 40)(1, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BillComponent_ng_template_133_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const modal_r10 = restoredCtx.$implicit; return modal_r10.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 42)(3, "h1", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Do You Want Cancel Transaction ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 44)(6, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BillComponent_ng_template_133_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.fnLogoutVisitor(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} }
const _c0 = function () { return ["/cart"]; };
const _c1 = function (a0) { return { kioskUuid: a0 }; };
const _c2 = function () { return ["/payment"]; };
class BillComponent {
    constructor(http, modalService, configService, activatedRoute, router) {
        this.http = http;
        this.modalService = modalService;
        this.configService = configService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loading = false;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
        this.barcode = "";
        this.items = [];
        this.itemsList = [];
        this.freeItem = [];
        this.freeItemWaitingScan = [];
        this.freeItemLabel = 0;
        this.adminMode = false;
        this.summary = {
            Final: 0,
            NonBkp: 0,
            bkp: 0,
            discount: 0,
            dpp: 0,
            memberDiscount: 0,
            ppn: 0,
            total: 0,
            voucer: 0,
        };
        this.uuidKios = localStorage.getItem(this.configService.myUUID());
        this.storeOutlesId = "";
        this.terminalId = "";
    }
    ngOnInit() {
        this.configService.httpAccount().subscribe(data => {
            this.storeOutlesId = data['storeOutlesId'];
            this.terminalId = data['terminalId'];
            if (data['systemOnline'] == false) {
                this.router.navigate(['offline']);
            }
        });
        this.uuid = localStorage.getItem(this.configService.myUUID());
        if (localStorage.getItem(this.configService.myUUID())) {
            console.log("SILAKAN BELANJA!");
            this.httpGet();
        }
        else {
            this.router.navigate(['login']);
        }
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.api + 'kioskBill/index/?uuid=' + localStorage.getItem(this.configService.myUUID()), { headers: this.configService.headers() }).subscribe(data => {
            this.loading = false;
            console.log(data);
            this.items = data['items'];
            this.itemsList = data['itemsList'];
            this.freeItem = data['freeItem'];
            this.freeItemLabel = data['freeItemLabel'];
            this.freeItemWaitingScan = data['freeItemWaitingScan'];
            this.summary = {
                final: data['summary']['final'],
                nonBkp: data['summary']['nonBkp'],
                bkp: data['summary']['bkp'],
                discount: data['summary']['discount'],
                dpp: data['summary']['dpp'],
                memberDiscount: data['summary']['memberDiscount'],
                ppn: data['summary']['ppn'],
                total: data['summary']['total'],
                voucer: data['summary']['voucer'],
            };
        }, e => {
            console.log(e);
        });
    }
    modal(content) {
        this.modalService.open(content, { centered: true });
    }
    help() {
        const msg = {
            terminalId: this.terminalId,
        };
        this.configService.help(msg);
    }
    fnLogoutVisitor() {
        const body = {
            kioskUuid: localStorage.getItem(this.configService.myUUID()),
        };
        console.log(body);
        this.http.post(this.api + 'kioskCart/fnLogoutVisitor/', body, { headers: this.configService.headers() }).subscribe(data => {
            this.modalService.dismissAll();
            localStorage.removeItem(this.configService.myUUID());
            this.router.navigate(['login']);
        });
    }
}
BillComponent.ɵfac = function BillComponent_Factory(t) { return new (t || BillComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
BillComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: BillComponent, selectors: [["app-bill"]], decls: 135, vars: 49, consts: [[1, "bgn"], [1, "sticky-top", "pt-2"], [1, "container"], [1, "row"], [1, "col"], [1, "col", "text-center"], [1, "col", "text-end"], [1, "container", "py-4"], ["href", "javascript:void(0)", 1, "btn", "p-1", "mx-1", 3, "routerLink", "queryParams"], ["src", "./assets/imgs/icons8-back-67.png", "width", "90"], [1, "px-2", "mt-3"], ["href", "javascript:void(0)", 1, "btn", "bg-danger", "rounded", "p-1", "mx-1", 3, "click"], ["src", "./assets/imgs/icons8-close-64.png", "width", "90"], ["href", "javascript:void(0)", 1, "btn", "bg-warning", "rounded", "p-1", "border", "mx-1", 3, "click"], ["src", "./assets/imgs/icons8-bell-64.png", "width", "90"], [1, "container", "mt-3", "pb-4"], [1, "col-12"], [1, "bg-white", "p-3", "shadow-md", "border", "printbill", "rounded"], [1, "table", "table-sm", "text-monospace"], [1, "text-end"], [4, "ngFor", "ngForOf"], [3, "hidden", 4, "ngFor", "ngForOf"], ["colspan", "4"], [3, "hidden"], [1, "text-monospace", "small", "p-1"], ["class", "me-2", 3, "hidden", 4, "ngFor", "ngForOf"], [1, "text-monospace", "small", "p-1", "text-danger"], ["class", "me-2", 4, "ngFor", "ngForOf"], [1, "fixFooter"], [1, "footerweb", "bg-gray", "rounded-top-c1", "py-4", "shadow-sm"], [1, "container-fluid"], [1, "col-6", "text-white"], [1, "mx-3"], [1, "display-2"], [1, "col-6"], [1, "mx-3", "d-grid"], ["type", "button", 1, "btn", "btn-info", "font-btn", "text-white", "py-5", "rounded", 3, "routerLink"], ["modalCancel", ""], [1, "me-2", 3, "hidden"], [1, "me-2"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "text-center", "m-5"], [1, "text-center", "m-5", "d-grid"], ["type", "submit", 1, "btn", "btn-danger", "btn-lg", "rounded", "font-btn", 3, "click"]], template: function BillComponent_Template(rf, ctx) { if (rf & 1) {
        const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 5)(8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 6)(11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7)(14, "div", 3)(15, "div", 4)(16, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div", 5)(19, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "CHECKOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 6)(24, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BillComponent_Template_a_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r14); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](134); return ctx.modal(_r4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function BillComponent_Template_a_click_26_listener() { return ctx.help(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "div", 15)(29, "div", 3)(30, "div", 16)(31, "div", 17)(32, "table", 18)(33, "thead")(34, "tr")(35, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Qty");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Desciption");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](40, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](41, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](46, BillComponent_tr_46_Template, 22, 15, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](47, BillComponent_tr_47_Template, 13, 3, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "tfoot")(49, "tr")(50, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51, " SubTotal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](54, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "tr")(56, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " Discount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "td", 19)(59, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](62, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "tr")(64, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, " Discount Member ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "td", 19)(67, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](69);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](70, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](71, "tr")(72, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](73, " Voucher ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](74, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](76, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](77, "tr")(78, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](79, " BKP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](80, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](81);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](82, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](83, "tr")(84, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](85, " DPP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](86, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](87);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](88, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "tr")(90, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](91, " PPN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](93);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](94, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "tr")(96, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](97, " Non BKP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](98, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](99);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](100, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](101, "tr")(102, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](103, " Total Setelah Pajak ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](104, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](105);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](106, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](107, "div", 24)(108, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "FREE ITEMS : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](110, BillComponent_span_110_Template, 2, 3, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](111, "div", 26)(112, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](113, "FREE ITEM SCAN REQUIREMENT : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](114, BillComponent_span_114_Template, 2, 2, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](115, "br")(116, "br")(117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](118, "div", 28)(119, "div", 29)(120, "div", 30)(121, "div", 3)(122, "div", 31)(123, "div", 32)(124, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](125, "Final Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](126, "h1", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](127);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](128, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](129, "div", 34)(130, "div", 35)(131, "button", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](132, "PAYMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](133, BillComponent_ng_template_133_Template, 8, 0, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Bill : ", ctx.uuidKios, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Store Outles ID : ", ctx.storeOutlesId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Terminal ID : ", ctx.terminalId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](45, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](46, _c1, ctx.uuid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.uuid);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.freeItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](54, 25, ctx.summary.total), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.summary.discount);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](62, 27, ctx.summary.discount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.summary.memberDiscount);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](70, 29, ctx.summary.memberDiscount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](76, 31, ctx.summary.voucer), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](82, 33, ctx.summary.bkp), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](88, 35, ctx.summary.dpp), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](94, 37, ctx.summary.ppn), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](100, 39, ctx.summary.nonBkp), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](106, 41, ctx.summary.final), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.freeItemLabel < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.freeItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.freeItemWaitingScan.length < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.freeItemWaitingScan);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rp ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](128, 43, ctx.summary.final), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](48, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe], styles: [".bgn[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0px;\r\n    top: 0px;\r\n    z-index: -999;\r\n    background-color: #F4F7FC;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJpbGwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1IsYUFBYTtJQUNiLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJiaWxsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdue1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHotaW5kZXg6IC05OTk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGN0ZDO1xyXG59Il19 */"] });


/***/ }),

/***/ 5728:
/*!***********************************************************!*\
  !*** ./src/app/cart/cart-finish/cart-finish.component.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartFinishComponent": () => (/* binding */ CartFinishComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 6169);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_app_service_printing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/printing.service */ 8929);
/* harmony import */ var _print_print_detail_print_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../print/print-detail/print-detail.component */ 2161);







class CartFinishComponent {
    constructor(router, configService, http, activatedRoute, printing) {
        this.router = router;
        this.configService = configService;
        this.http = http;
        this.activatedRoute = activatedRoute;
        this.printing = printing;
        this.kioskMessage = {
            thanks: '',
            timer: 10,
        };
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
        this.bill = [];
        this.countdown = 0;
    }
    ngOnInit() {
        this.httpGet();
    }
    httpGet() {
        this.configService.httpAccount().subscribe(data => {
            console.log(data['account']);
            this.kioskMessage = {
                thanks: data['account'][data['account'].findIndex(((obj) => obj.id == 1004))]['value'],
                timer: data['account'][data['account'].findIndex(((obj) => obj.id == 1008))]['value'],
            };
            console.log(this.kioskMessage);
            let n = parseInt(this.kioskMessage['timer']) < 1 ? 1 : parseInt(this.kioskMessage['timer']);
            this.countdown = n;
            setTimeout(() => {
                this.router.navigate(['/login']);
            }, n * 1000);
            this.runCountdown();
        });
        let url = this.api + 'KioskPrint/printDetail/?id=' + this.activatedRoute.snapshot.params['id'];
        console.log(url);
        this.http.get(url, { headers: this.configService.headers() }).subscribe(data => {
            this.bill = data;
            this.printBill();
        }, e => {
            console.log(e);
        });
    }
    home() {
        this.router.navigate(['/login']);
    }
    printBill() {
        this.print("android");
    }
    print(name) {
        const body = {
            id: this.activatedRoute.snapshot.params['id'],
        };
        this.http.post(this.api + 'kioskPrint/countingPrinting/', body, { headers: this.configService.headers() }).subscribe(data => {
            if (name == 'android') {
                let message = this.printing.template(this.bill);
                this.printerName = localStorage.getItem(this.configService.printerName());
                if (this.printerName == "" || this.printerName == null) {
                    alert("NO PRINTING SELECT");
                }
                else {
                    window['cordova'].plugins.UsbPrinter.connect(this.printerName, (result) => {
                        console.log(result);
                        window['cordova'].plugins.UsbPrinter.print(this.printerName, message, (result) => {
                            console.log("result of usb print action", result);
                        }, (err) => {
                            console.error('Error in usb print action', err);
                        });
                    }, (err) => {
                        console.error(err);
                    });
                }
            }
            else if (name == 'browser') {
                window.print();
                console.log(data);
            }
        });
    }
    runCountdown() {
        let self = this;
        this.intervalTime = setInterval(function () {
            self.countdown--;
        }, 1000);
    }
    ngOnDestroy() {
        console.log('ngOnDestroy');
        clearInterval(this.intervalTime);
    }
}
CartFinishComponent.ɵfac = function CartFinishComponent_Factory(t) { return new (t || CartFinishComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_printing_service__WEBPACK_IMPORTED_MODULE_2__.PrintingService)); };
CartFinishComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CartFinishComponent, selectors: [["app-cart-finish"]], decls: 28, vars: 2, consts: [[1, "printdisable"], [1, "container", 2, "margin-top", "30%"], [1, "row"], [1, "col-12", "text-center"], ["src", "./assets/galleries/g02.png", "width", "50%"], [1, "col-12", "text-center", "mt-5"], [1, "display-4", 3, "innerHTML"], [1, "container", "mt-5"], [1, "my-4", "display-5"], [1, "col-6", "d-grid"], ["type", "button", 1, "btn", "btn-lg", "py-5", "btn-warning", "font-btn", "rounded", 3, "click"], ["type", "button", 1, "btn", "btn-lg", "py-5", "btn-info", "font-btn", "rounded", 3, "click"], [1, "row", "mt-5"], [1, "col-12"], [1, "text-center", "mt-4"], ["role", "status", 1, "spinner-border", 2, "width", "3rem", "height", "3rem"], [1, "visually-hidden"], [1, "printable"]], template: function CartFinishComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](6, "h1", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 7)(8, "div", 2)(9, "div", 3)(10, "h1", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Cetak ulang bill ?");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 9)(13, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CartFinishComponent_Template_button_click_13_listener() { return ctx.home(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Tidak");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 9)(16, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CartFinishComponent_Template_button_click_16_listener() { return ctx.printBill(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Iya");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 12)(19, "div", 13)(20, "div", 14)(21, "div", 15)(22, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "app-print-detail");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", ctx.kioskMessage["thanks"], _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.countdown);
    } }, directives: [_print_print_detail_print_detail_component__WEBPACK_IMPORTED_MODULE_3__.PrintDetailComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LWZpbmlzaC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 4918:
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartComponent": () => (/* binding */ CartComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 6169);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);








const _c0 = ["formRow"];
function CartComponent_div_71_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30)(1, "div", 2)(2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 62)(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h2")(8, "span", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 64)(13, "div", 41)(14, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const x_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", x_r7.images ? x_r7.images : "https://dummyimage.com/400x400/ebebeb/07a6b8.png&text=No+Images", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r7.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r7.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Rp ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](11, 5, x_r7.price), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rp ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](16, 7, x_r7.totalPrice), "");
} }
function CartComponent_div_72_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 30)(1, "div", 65)(2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 66);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 67)(5, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "h2")(8, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, " Free Item ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 69)(12, "div", 41)(13, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14, "Rp 0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const x_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r8.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r8.qty);
} }
function CartComponent_tr_93_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td")(6, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CartComponent_tr_93_Template_input_ngModelChange_6_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const x_r9 = restoredCtx.$implicit; return x_r9.price = $event; })("change", function CartComponent_tr_93_Template_input_change_6_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const x_r9 = restoredCtx.$implicit; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r13.fnUpdate(x_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "td")(8, "input", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function CartComponent_tr_93_Template_input_ngModelChange_8_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const x_r9 = restoredCtx.$implicit; return x_r9.discount = $event; })("change", function CartComponent_tr_93_Template_input_change_8_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const x_r9 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r15.fnUpdate(x_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "td")(10, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartComponent_tr_93_Template_a_click_10_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const x_r9 = restoredCtx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r16.fnVoid(x_r9); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, "DEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const x_r9 = ctx.$implicit;
    const i_r10 = ctx.index;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", i_r10 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", x_r9.description, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", !ctx_r3.adminMode)("ngModel", x_r9.price);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("readonly", !ctx_r3.adminMode)("ngModel", x_r9.discount);
} }
function CartComponent_tr_94_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "td")(6, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Free Item");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "td")(9, "div", 72);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](10, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "td")(12, "a", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartComponent_tr_94_Template_a_click_12_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r20); const x_r17 = restoredCtx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r19.fnVoidFreeItem(x_r17); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "DEL");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const x_r17 = ctx.$implicit;
    const i_r18 = ctx.index;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx_r4.itemsList.length + i_r18 + 1, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", x_r17.description, " ");
} }
function CartComponent_ng_template_110_Template(rf, ctx) { if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 73)(1, "button", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartComponent_ng_template_110_Template_button_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const modal_r21 = restoredCtx.$implicit; return modal_r21.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 75)(3, "h1", 76);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Do You Want Cancel Transaction ? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 77)(6, "button", 78);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartComponent_ng_template_110_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r23); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r24.fnLogoutVisitor(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Yes");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} }
class CartComponent {
    constructor(modalService, http, configService, activatedRoute, router) {
        this.modalService = modalService;
        this.http = http;
        this.configService = configService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.resultbox = false;
        this.loading = false;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
        this.barcode = "";
        this.items = [];
        this.adminMode = false;
        this.userId = "";
        this.addItem = false;
        // Demo 0000022
        this.error = false;
        this.noteScanner = "";
        this.item = {
            name: "",
            barcode: "",
            price: 0,
        };
        this.freeItem = [];
        this.itemsList = [];
        this.itemsListfreeItem = [];
        this.member = [];
        this.summary = {
            BKP: 0,
            DPP: 0,
            nonBKP: 0,
            discount: 0,
            subtotal: 0,
            totalAterTax: 0
        };
        this.supervisor = {
            name: "",
            id: 0,
        };
        this.uuidKios = localStorage.getItem(this.configService.myUUID());
        this.storeOutlesId = "";
        this.terminalId = "";
        this.ilock = false;
    }
    ngOnInit() {
        this._docSub = this.configService.getMessage().subscribe((data) => {
            if (data['action'] == 'reload' && data['to'] == 'terminal') {
                this.httpGet();
            }
        });
        if (localStorage.getItem(this.configService.myUUID())) {
            this.httpGet();
            this.callHttpServer();
            this.configService.httpAccount().subscribe(data => {
                this.storeOutlesId = data['storeOutlesId'];
                this.terminalId = data['terminalId'];
                if (data['systemOnline'] == false) {
                    this.router.navigate(['offline']);
                }
            });
        }
        else {
            this.router.navigate(['login']);
        }
    }
    callHttpServer() {
        this.callServer = setInterval(() => {
            this.rows.nativeElement.focus();
        }, 300);
    }
    ngOnDestroy() {
        clearInterval(this.callServer);
        this._docSub.unsubscribe();
    }
    help() {
        const msg = {
            terminalId: this.terminalId,
        };
        this.configService.help(msg);
    }
    sendReload() {
        const msg = {
            to: 'supervisor',
            msg: 'Scan items Success',
            action: 'reload',
        };
        this.configService.sendMessage(msg);
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.api + 'kioskCart/index/?uuid=' + localStorage.getItem(this.configService.myUUID()), { headers: this.configService.headers() }).subscribe(data => {
            if (data['ilock'] == true) {
                this.router.navigate(['bill']);
            }
            else {
                this.loading = false;
                this.items = data['items'];
                this.freeItem = data['freeItem'];
                this.ilock = data['ilock'];
                this.itemsList = data['itemsList'];
                this.itemsListfreeItem = data['itemsListfreeItem'];
                this.member = data['member'];
                this.summary = {
                    final: data['summary']['final'],
                    discount: data['summary']['discount'],
                    total: data['summary']['total'] == null ? 0 : data['summary']['total'],
                };
            }
        }, e => {
            console.log(e);
        });
    }
    fnVoid(x) {
        const body = {
            items: x,
            userId: this.supervisor['id'],
        };
        this.http.post(this.api + 'kioskCart/fnVoid/', body, { headers: this.configService.headers() }).subscribe(data => {
            this.httpGet();
            this.sendReload();
            this.loading = false;
        });
    }
    fnVoidFreeItem(x) {
        const body = {
            items: x,
            userId: this.supervisor['id'],
        };
        this.http.post(this.api + 'kioskCart/fnVoidFreeItem/', body, { headers: this.configService.headers() }).subscribe(data => {
            this.httpGet();
            this.sendReload();
            this.loading = false;
        });
    }
    scanner() {
        this.loading = true;
        this.noteScanner = "";
        this.resultbox = true;
        const body = {
            barcode: this.barcode,
            kioskUuid: localStorage.getItem(this.configService.myUUID()),
            memberId: 0,
        };
        if (this.barcode != "") {
            this.addItem = true;
            this.http.post(this.api + 'kioskCart/scanner/', body, { headers: this.configService.headers() }).subscribe(data => {
                this.loading = false;
                if (data['error'] == false) {
                    this.httpGet();
                    this.error = false;
                    if (data['admin'] == false) {
                        this.item = {
                            name: data['items']['description'],
                            barcode: data['items']['barcode'],
                            price: data['items']['price'],
                            images: data['items']['images'],
                        };
                        this.sendReload();
                    }
                    else {
                        this.noteScanner = this.barcode + " " + data['note'];
                        this.adminMode = true;
                        this.userId = data['userId'];
                        this.supervisor = data['supervisor'];
                    }
                }
                else {
                    this.error = true;
                }
                this.barcode = "";
                this.noteScanner = data['note'];
            });
        }
    }
    fnUpdate(x) {
        const body = {
            items: x,
            userId: this.supervisor['id'],
        };
        this.http.post(this.api + 'kioskCart/fnUpdate/', body, { headers: this.configService.headers() }).subscribe(data => {
            this.httpGet();
            this.sendReload();
        });
    }
    fnCloseCart() {
        const body = {
            uuid: localStorage.getItem(this.configService.myUUID()),
        };
        this.http.post(this.api + 'kioskCart/fnCloseCart/', body, { headers: this.configService.headers() }).subscribe(data => {
            this.router.navigate(['bill']);
        });
    }
    modal(content) {
        this.modalService.open(content, { centered: true });
    }
    fnLogoutVisitor() {
        const body = {
            kioskUuid: localStorage.getItem(this.configService.myUUID()),
        };
        this.http.post(this.api + 'kioskCart/fnLogoutVisitor/', body, { headers: this.configService.headers() }).subscribe(data => {
            this.sendReload();
            this.modalService.dismissAll();
            localStorage.removeItem(this.configService.myUUID());
            this.router.navigate(['login']);
        });
    }
}
CartComponent.ɵfac = function CartComponent_Factory(t) { return new (t || CartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
CartComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CartComponent, selectors: [["app-cart"]], viewQuery: function CartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.rows = _t.first);
    } }, decls: 112, vars: 35, consts: [[1, "sticky-top", "pt-2", "bg-white"], [1, "container"], [1, "row"], [1, "col"], [1, "col", "text-center"], [1, "col", "text-end"], [1, "container", "py-4"], [1, "row", "g-1", "mb-4", 3, "hidden"], [1, "col-8"], [1, "col-4", "text-end"], ["href", "javascript:void(0)", 1, "btn", "bg-danger", "p-1", "border", "rounded", "mx-1", 3, "click"], ["src", "./assets/imgs/icons8-close-64.png", "width", "90"], ["href", "javascript:void(0)", 1, "btn", "bg-warning", "p-1", "border", "rounded", "mx-1", 3, "click"], ["src", "./assets/imgs/icons8-bell-64.png", "width", "90"], [3, "hidden"], [1, "row", "mt-3"], [1, "col-6"], ["href", "javascript:void(0)", 1, "btn", 3, "click"], ["src", "./assets/imgs/icons8-go-back-64.png", "width", "90"], [1, "col-6", "text-end"], ["href", "javascript:void(0)", 1, "btn", "btn-warning", 3, "click"], [1, "col-12", "mt-5", "text-center"], [1, "py-2"], [1, "row", 3, "hidden"], [1, "col-12", "d-grid"], [1, "text-center"], ["src", "./assets/imgs/icons8-fast-shopping-64.png", "width", "40", 1, "mx-1"], ["type", "text", "id", "scan", "pattern", "[0-9]", "placeholder", "Scan Barcode", "autofocus", "", 1, "form-control", "form-control-lg", "bg-light", "my-4", "inputScan", 3, "ngModel", "change", "ngModelChange"], ["formRow", ""], [1, "col-12", 3, "hidden"], [1, "rounded", "border", "shadow-sm", "p-4", "bg-light", "mb-3"], [1, "col-3", 3, "hidden"], ["width", "100%", 1, "shadow-sm", "rounded", 3, "src"], [1, "col-9", 3, "hidden"], [1, "mb-2"], [1, "display-5"], [1, "display-6"], [1, "col-12", "text-center"], [1, "py-5"], [1, "row", "my-2"], [1, ""], [1, "me-2"], [1, "container", "mb-6"], [1, "col-12"], ["class", " rounded border shadow-sm p-4 bg-light mb-3", 4, "ngFor", "ngForOf"], [1, "text-center", "mb-4"], [1, "row", "g-1", "mb-3"], [1, "bg-light", "border", "shadow-sm", "rounded", 3, "hidden"], [1, "table-responsive"], [1, "table"], [1, "text-end"], [4, "ngFor", "ngForOf"], [1, "fixFooter", 3, "hidden"], [1, "footerweb", "bg-gray", "rounded-top-c1", "py-4", "shadow-sm"], [1, "container-fluid"], [1, "col-6", "text-white"], [1, "mx-3"], [1, "display-2"], [1, "mx-3", "d-grid"], ["type", "button", 1, "btn", "btn-info", "font-btn", "text-white", "py-5", "rounded", 3, "disabled", "click"], ["modalCancel", ""], [1, "col-2"], [1, "col-6", "col-lg-6"], [1, "box-qty", "bg-white", "mx-3", "border"], [1, "col-4", "col-lg-4", "text-end"], [1, "row", "g-3"], ["src", "https://dummyimage.com/400x400/ebebeb/07a6b8.png&text=Sample+Images", "width", "100%", 1, "shadow-sm", "rounded"], [1, "col-6", "col-lg-7"], [1, "box-qty", "bg-light"], [1, "col-4", "col-lg-3", "text-end"], ["type", "number", 1, "form-control", "form-control-sm", "text-end", 3, "readonly", "ngModel", "ngModelChange", "change"], [1, "btn", "btn-sm", "btn-danger", 3, "click"], [1, "form-control", "form-control-sm", "text-end", "bg-light"], [1, "modal-header"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "text-center", "m-5"], [1, "text-center", "m-5", "d-grid"], ["type", "submit", 1, "btn", "btn-danger", "btn-lg", "rounded", "font-btn", 3, "click"]], template: function CartComponent_Template(rf, ctx) { if (rf & 1) {
        const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5)(10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6)(13, "div", 7)(14, "div", 8)(15, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 9)(18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartComponent_Template_a_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r25); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](111); return ctx.modal(_r5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "img", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartComponent_Template_a_click_20_listener() { return ctx.help(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 14)(23, "div", 15)(24, "div", 16)(25, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartComponent_Template_a_click_25_listener() { ctx.adminMode = false; ctx.noteScanner = ""; ctx.addItem = false; return ctx.resultbox = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](26, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 19)(28, "a", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartComponent_Template_a_click_28_listener() { return ctx.httpGet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " Reload ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 2)(31, "div", 21)(32, "h1", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33, "SUPERVISOR MODE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](36, "div", 23)(37, "div", 24)(38, "div", 25)(39, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](40, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, " SCAN ITEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "input", 27, 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("change", function CartComponent_Template_input_change_42_listener() { return ctx.scanner(); })("ngModelChange", function CartComponent_Template_input_ngModelChange_42_listener($event) { return ctx.barcode = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](44, "div", 29)(45, "div", 30)(46, "div", 23)(47, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](48, "img", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 33)(50, "h1", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "h1", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "h1", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](56, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](57, "div", 23)(58, "div", 37)(59, "h1", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "div", 39)(62, "div", 8)(63, "h2", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Scanned Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 9)(66, "h2", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 42)(69, "div", 23)(70, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](71, CartComponent_div_71_Template, 17, 9, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](72, CartComponent_div_72_Template, 15, 2, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](73, "div", 45)(74, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](75, "No more items");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](76, "div", 46)(77, "div", 43)(78, "div", 47)(79, "div", 48)(80, "table", 49)(81, "thead")(82, "tr")(83, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](84, "No");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](85, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](86, "Desciption");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](87, "th", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](88, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](89, "th", 50);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](90, "Discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](91, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](92, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](93, CartComponent_tr_93_Template, 12, 6, "tr", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](94, CartComponent_tr_94_Template, 14, 2, "tr", 51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](95, "div", 52)(96, "div", 53)(97, "div", 54)(98, "div", 23)(99, "div", 55)(100, "div", 56)(101, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](102, "Gross Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](103, "h1", 57);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](105, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](106, "div", 16)(107, "div", 58)(108, "button", 59);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CartComponent_Template_button_click_108_listener() { return ctx.fnCloseCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](109, "CHECKOUT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](110, CartComponent_ng_template_110_Template, 8, 0, "ng-template", null, 60, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Bill : ", ctx.uuidKios, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Store Outles ID : ", ctx.storeOutlesId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Terminal ID : ", ctx.terminalId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.adminMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"]("Hi, ", ctx.member["firstName"], " ", ctx.member["lastName"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.adminMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Supervisor : ", ctx.supervisor.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.adminMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.barcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.resultbox);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.addItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.error == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.item.images ? ctx.item.images : "https://dummyimage.com/400x400/ebebeb/07a6b8.png&text=No+Images", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.error == true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.item.barcode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.item.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" Rp ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](56, 31, ctx.item.price), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.error != true);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.noteScanner);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", ctx.items.length + ctx.freeItem.length, " Items");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.adminMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.freeItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.adminMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.itemsList);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.itemsListfreeItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.adminMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.adminMode);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rp ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](105, 33, ctx.summary.total), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", ctx.items.length < 1);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.PatternValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NumberValueAccessor], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 393:
/*!************************************************!*\
  !*** ./src/app/forbiden/forbiden.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForbidenComponent": () => (/* binding */ ForbidenComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class ForbidenComponent {
    constructor() { }
    ngOnInit() {
    }
}
ForbidenComponent.ɵfac = function ForbidenComponent_Factory(t) { return new (t || ForbidenComponent)(); };
ForbidenComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ForbidenComponent, selectors: [["app-forbiden"]], decls: 2, vars: 0, template: function ForbidenComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "forbiden works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3JiaWRlbi5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 3482:
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HeaderComponent": () => (/* binding */ HeaderComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 6169);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);





class HeaderComponent {
    constructor(configService, router, config) {
        this.configService = configService;
        this.router = router;
        this.loading = false;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
        this.isStillLogin = false;
        this.memberId = "";
        this.member = [];
        this.loginSuccess = false;
        this.kioskUuid = localStorage.getItem(this.configService.myUUID());
        this.storeOutlesId = "";
        this.terminalId = "";
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        if (localStorage.getItem(this.configService.deviceUuid()) === null) {
            alert("NO KEY");
            this.router.navigate(['./']);
        }
        if (localStorage.getItem(this.configService.myUUID()) !== null) {
            this.isStillLogin = true;
            this.myUUID = localStorage.getItem(this.configService.myUUID());
        }
        this.httpGet();
        this.configService.httpAccount().subscribe(data => {
            console.log(data);
            if (data['systemOnline'] == false) {
                this.router.navigate(['offline']);
            }
            this.storeOutlesId = data['storeOutlesId'];
            this.terminalId = data['terminalId'];
        }, e => {
            console.log(e);
        });
    }
    httpGet() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModalConfig)); };
HeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 9, vars: 2, consts: [[1, "container-fluid"], [1, "row"], [1, "col-6"], [1, "p-2"], [1, "col-6", "text-end"], ["src", "./assets/imgs/icons8-label-printer-100.png", "height", "50"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 4)(6, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("SCO Unit ID : ", ctx.terminalId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Outlet Id : ", ctx.storeOutlesId, " ");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 5067:
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": () => (/* binding */ HomeComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);




const _c0 = function () { return ["/startup"]; };
class HomeComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.closeResult = '';
        this.today = new Date();
        this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.version;
    }
    ngOnInit() {
    }
    open(content) {
        this.modalService.open(content, { fullscreen: true }).result.then((result) => {
            console.log(result);
        }, (reason) => {
            console.log('close');
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__.NgbModal)); };
HomeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 18, vars: 5, consts: [[1, "container", "my-5"], [1, "row"], [1, "col-12", "text-center", "my-5"], [1, "display-4"], ["src", "./assets/galleries/40796.jpg", "width", "100%", 1, "py-5"], [1, "d-grid"], [1, "btn", "btn-lg", "btn-info", "text-white", "rounded", "py-5", "my-5", "font-btn", 3, "routerLink"], [1, "container-fluid"], [1, "row", "g-1"], [1, "col-10"], [1, "p-2"], [1, "col-2", "text-end"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "START SYSTEM");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "footer")(10, "div", 7)(11, "div", 8)(12, "div", 9)(13, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 11)(16, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Terminal SCO V", ctx.version, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.today);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("SCO V", ctx.version, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterLinkWithHref], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 8458:
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 6169);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);








const _c0 = function () { return ["/login/userPhoto"]; };
function LoginComponent_ng_template_48_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 38)(2, "a", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "NEXT & TAKE PHOTO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/cart"]; };
function LoginComponent_ng_template_48_ng_template_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 38)(1, "a", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "NEXT");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c1));
} }
function LoginComponent_ng_template_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 29)(1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 30)(5, "div", 33)(6, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, LoginComponent_ng_template_48_div_11_Template, 4, 2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](12, LoginComponent_ng_template_48_ng_template_12_Template, 3, 2, "ng-template", null, 37, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](13);
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r1.api + "uploads/configuration/" + ctx_r1.kioskMessage["logo"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx_r1.kioskMessage["visitorDisplay"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r1.countdown);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.kioskMessage.visitorPhoto)("ngIfElse", _r6);
} }
const _c2 = function (a0) { return { kioskUuid: a0 }; };
const _c3 = function () { return ["/login/memberBarcode"]; };
const _c4 = function () { return ["/admin"]; };
class LoginComponent {
    constructor(modalService, http, configService, activatedRoute, router, config) {
        this.modalService = modalService;
        this.http = http;
        this.configService = configService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loading = false;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
        this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.version;
        this.isStillLogin = false;
        this.memberId = "";
        this.loop = 0;
        this.notes = "";
        this.greeting = "loading...";
        this.kioskMessage = {
            logo: "",
            welcome: "",
            limit: "",
            visitorDisplay: "",
            timer: 5,
            notFound: '',
            visitorPhoto: false,
            memberPhoto: false,
        };
        this.member = [];
        this.loginSuccess = false;
        this.kioskUuid = localStorage.getItem(this.configService.myUUID());
        this.countdown = 0;
        this.today = new Date();
        this.storeOutlesId = "";
        this.terminalId = "";
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        console.log("myUUID : ", localStorage.getItem(this.configService.myUUID()));
        if (localStorage.getItem(this.configService.deviceUuid()) === null) {
            alert("NO KEY");
            this.router.navigate(['./']);
        }
        if (localStorage.getItem(this.configService.myUUID()) !== null) {
            this.isStillLogin = true;
            this.myUUID = localStorage.getItem(this.configService.myUUID());
        }
        this.httpGet();
        this.configService.httpAccount().subscribe(data => {
            console.log(data);
            if (data['systemOnline'] == false) {
                this.router.navigate(['offline']);
            }
            this.storeOutlesId = data['storeOutlesId'];
            this.terminalId = data['terminalId'];
            this.kioskMessage = {
                logo: data['account'][data['account'].findIndex(((obj) => obj.id == 1010))]['value'],
                welcome: data['account'][data['account'].findIndex(((obj) => obj.id == 1001))]['value'],
                limit: data['account'][data['account'].findIndex(((obj) => obj.id == 1002))]['value'].replace("$item", data['limitItemsWarning']),
                customerStatement: data['account'][data['account'].findIndex(((obj) => obj.id == 1003))]['value'],
                memberNotFound: data['account'][data['account'].findIndex(((obj) => obj.id == 1005))]['value'],
                visitorDisplay: data['account'][data['account'].findIndex(((obj) => obj.id == 1006))]['value'],
                timer: data['account'][data['account'].findIndex(((obj) => obj.id == 1008))]['value'],
                memberPhoto: data['account'][data['account'].findIndex(((obj) => obj.id == 15))]['value'] == "1" ? true : false,
                visitorPhoto: data['account'][data['account'].findIndex(((obj) => obj.id == 16))]['value'] == "1" ? true : false,
            };
            this.countdown = this.kioskMessage['timer'];
        }, e => {
            console.log(e);
        });
    }
    httpGet() {
        let url = this.api + 'kioskLogin/checkSession/?kioskUuid=' + this.kioskUuid;
        console.log(url);
        this.http.get(url, { headers: this.configService.headers() }).subscribe(data => {
            console.log(data);
            this.greeting = data['greeting'];
        }, e => {
            console.log(e);
        });
    }
    open(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    loginVisitor(loginVisitor) {
        this.loading = true;
        const body = {
            base64Images: false,
        };
        this.http.post(this.api + 'kioskLogin/loginVisitor/', body, { headers: this.configService.headers() }).subscribe(data => {
            this.loading = false;
            localStorage.setItem("t1_kioskUuid", data['insert']['kioskUuid']);
            this.modalService.open(loginVisitor, { size: 'xl' });
            this.runCountdown();
            let self = this;
            this.myTimeout = setTimeout(function () {
                self.goToCart();
                self.modalService.dismissAll();
                console.log('this.myTimeout TRIGER');
            }, parseInt(this.kioskMessage['timer']) * 1000);
            console.log("wait for " + parseInt(this.kioskMessage['timer']));
        }, e => {
            console.log(e);
        });
    }
    runCountdown() {
        let self = this;
        this.intervalTime = setInterval(function () {
            self.countdown--;
        }, 1000);
    }
    goToCart() {
        this.router.navigate(['cart'], { queryParams: { kioskUuid: this.kioskUuid }, });
    }
    ngOnDestroy() {
        this.modalService.dismissAll();
        console.log('ngOnDestroy');
        clearTimeout(this.myTimeout);
        clearInterval(this.intervalTime);
        clearInterval(this.autoFocus);
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModalConfig)); };
LoginComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModalConfig, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal])], decls: 50, vars: 19, consts: [[1, "bgn"], [1, "container-fluid"], [1, "row"], [1, "col-6"], [1, "p-2"], [1, "col-6", "text-end"], ["src", "./assets/imgs/icons8-label-printer-100.png", "height", "50"], [1, "container", "mt-5"], [1, "col-12"], [1, "text-center", "my-5"], [1, "intro-images", 3, "src"], [1, "col-12", "text-center", "my-4"], [1, "display-5", 3, "innerHTML"], [1, "col-12", "text-center", "my-5"], [3, "innerHTML"], [1, "col-12", "text-center", 3, "hidden"], [1, "btn", "btn-lg", "bg-light", "border", "rounded", "font-btn", 3, "routerLink", "queryParams"], [1, "row", 3, "hidden"], [1, "col-6", 3, "routerLink"], [1, "border", "shadow-md", "rounded", "bg-white", "p-4", "text-center"], ["src", "./assets/imgs/icons8-member-card-64.png", "width", "128"], [1, "col-6", 3, "click"], ["src", "./assets/imgs/icons8-visitor-100.png", "width", "128"], [1, "row", "g-1"], [1, "col-12", "text-end"], [3, "routerLink"], [1, "col-10"], [1, "col-2", "text-end"], ["modalWelcome", ""], [1, "modal-body"], [1, "text-center"], ["width", "90%", 1, "my-4", 3, "src"], [1, "mt-4", "text-center", "display-5", 3, "innerHTML"], ["role", "status", 1, "spinner-border", 2, "width", "3rem", "height", "3rem"], [1, "visually-hidden"], [1, "mt-5"], [4, "ngIf", "ngIfElse"], ["justNext", ""], [1, "d-grid"], [1, "btn", "btn-lg", "btn-warning", "text-white", "rounded", "py-3", "font-btn", 3, "routerLink"], [1, "btn", "btn-lg", "btn-success", "text-white", "rounded", "py-3", "font-btn", 3, "routerLink"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "div", 2)(12, "div", 8)(13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "img", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "h1", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 2)(18, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "h1", 12)(20, "h1", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "div", 15)(22, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23, "BACK TO CART");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](24, "div", 17)(25, "div", 18)(26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Member");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_30_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](49); return ctx.loginVisitor(_r0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](32, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34, "Visitor");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "footer")(36, "div", 1)(37, "div", 23)(38, "div", 24)(39, "h2", 4)(40, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Admin Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 26)(43, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 27)(46, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](48, LoginComponent_ng_template_48_Template, 14, 5, "ng-template", null, 28, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("SCO Unit ID : ", ctx.terminalId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Outlet Id : ", ctx.storeOutlesId, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.api + "uploads/configuration/" + ctx.kioskMessage["logo"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.kioskMessage["welcome"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.greeting, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.kioskMessage["limit"], _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.isStillLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](14, _c1))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](15, _c2, ctx.myUUID));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.isStillLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](18, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.today);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("SCO V", ctx.version, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], styles: [".intro-images[_ngcontent-%COMP%]{\r\n    width: 80%;\r\n}\r\n\r\n.bgn[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0px;\r\n    top: 0px;\r\n    z-index: -999;\r\n    background: #fff;\r\n}\r\n\r\n.fix-bottom-area[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    width: 100%;\r\n    margin: 20px auto;\r\n}\r\n\r\nh1[_ngcontent-%COMP%]{\r\n    line-height: 150%;\r\n}\r\n\r\n.bgn[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0px;\r\n    top: 0px;\r\n    z-index: -999;\r\n    \r\n    background: rgb(255,255,255);\r\nbackground: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(229,240,240,1) 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#ffffff\",endColorstr=\"#e5f0f0\",GradientType=1);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsUUFBUTtJQUNSLGFBQWE7SUFDYixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0lBQ1gsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUdBO0lBQ0ksZUFBZTtJQUNmLFdBQVc7SUFDWCxZQUFZO0lBQ1osU0FBUztJQUNULFFBQVE7SUFDUixhQUFhOztJQUViLDRCQUE0QjtBQUdoQyxxRkFBcUY7QUFDckYsZ0hBQWdIO0FBQ2hIIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW50cm8taW1hZ2Vze1xyXG4gICAgd2lkdGg6IDgwJTtcclxufVxyXG5cclxuLmJnbntcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgdG9wOiAwcHg7XHJcbiAgICB6LWluZGV4OiAtOTk5O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxufVxyXG5cclxuLmZpeC1ib3R0b20tYXJlYXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxufVxyXG5cclxuaDF7XHJcbiAgICBsaW5lLWhlaWdodDogMTUwJTtcclxufVxyXG5cclxuXHJcbi5iZ257XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgei1pbmRleDogLTk5OTtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZDogcmdiKDI1NSwyNTUsMjU1KTtcclxuYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDIyOSwyNDAsMjQwLDEpIDEwMCUpO1xyXG5iYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjI5LDI0MCwyNDAsMSkgMTAwJSk7XHJcbmJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxODBkZWcsIHJnYmEoMjU1LDI1NSwyNTUsMSkgMCUsIHJnYmEoMjI5LDI0MCwyNDAsMSkgMTAwJSk7XHJcbmZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9XCIjZmZmZmZmXCIsZW5kQ29sb3JzdHI9XCIjZTVmMGYwXCIsR3JhZGllbnRUeXBlPTEpO1xyXG59XHJcblxyXG5cclxuIl19 */"] });


/***/ }),

/***/ 1150:
/*!******************************************************************!*\
  !*** ./src/app/login/member-barcode/member-barcode.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MemberBarcodeComponent": () => (/* binding */ MemberBarcodeComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 6169);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);








const _c0 = ["formRow"];
const _c1 = function () { return ["/login/userPhoto"]; };
function MemberBarcodeComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div")(1, "div", 33)(2, "a", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "NEXT & TAKE PHOTO");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](1, _c1));
} }
function MemberBarcodeComponent_ng_template_53_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 33)(1, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MemberBarcodeComponent_ng_template_53_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.goToCart(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "GO TO CART");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} }
class MemberBarcodeComponent {
    constructor(modalService, http, configService, activatedRoute, router, config) {
        this.modalService = modalService;
        this.http = http;
        this.configService = configService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loading = false;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
        this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.version;
        this.isStillLogin = false;
        this.memberId = "";
        this.loop = 0;
        this.notes = "";
        this.greeting = "";
        this.kioskMessage = {
            logo: "",
            welcome: "",
            limit: "",
            visitorDisplay: "",
            timer: 5,
            notFound: '',
            memberPhoto: false,
        };
        this.member = [];
        this.loginSuccess = false;
        this.kioskUuid = '';
        this.countdown = 0;
        this.today = new Date();
        this.uuidKios = localStorage.getItem(this.configService.myUUID());
        this.storeOutlesId = "";
        this.terminalId = "";
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.callHttpServer();
        if (localStorage.getItem(this.configService.myUUID()) !== null) {
            this.isStillLogin = true;
            this.myUUID = localStorage.getItem(this.configService.myUUID());
            this.router.navigate(['cart'], { queryParams: { kioskUuid: this.kioskUuid }, });
        }
        this.configService.httpAccount().subscribe(data => {
            console.log(data);
            if (data['systemOnline'] == false) {
                this.router.navigate(['offline']);
            }
            this.storeOutlesId = data['storeOutlesId'];
            this.terminalId = data['terminalId'];
            this.greeting = data['greeting'];
            this.kioskMessage = {
                customerStatement: data['account'][data['account'].findIndex(((obj) => obj.id == 1003))]['value'],
                memberNotFound: data['account'][data['account'].findIndex(((obj) => obj.id == 1005))]['value'],
                timer: data['account'][data['account'].findIndex(((obj) => obj.id == 1008))]['value'],
                memberPhoto: data['account'][data['account'].findIndex(((obj) => obj.id == 15))]['value'] == "1" ? true : false,
            };
            console.log("kioskMessage", this.kioskMessage);
            this.countdown = this.kioskMessage['timer'];
        });
    }
    callHttpServer() {
        this.callServer = setInterval(() => {
            this.rows.nativeElement.focus();
        }, 300);
    }
    ngOnDestroy() {
        clearInterval(this.callServer);
        console.log("NGONDESTROY");
    }
    goToCart() {
        this.router.navigate(['cart'], { queryParams: { kioskUuid: this.kioskUuid }, });
    }
    runCountdown() {
        let self = this;
        this.intervalTime = setInterval(function () {
            self.countdown--;
        }, 1000);
    }
    scannerMember() {
        this.fnSubmitMemberIdManual();
    }
    fnSubmitMemberIdManual() {
        const body = {
            memberId: this.memberId,
        };
        this.http.post(this.api + 'kioskLogin/loginMember/', body, { headers: this.configService.headers() }).subscribe(data => {
            this.loading = false;
            this.memberId = "";
            console.log(data);
            if (data['error'] == false) {
                this.member = data['member'];
                this.loginSuccess = true;
                localStorage.setItem("t1_kioskUuid", data['insert']['kioskUuid']);
                this.kioskUuid = data['insert']['kioskUuid'];
                this.notes = data['welcomeMember'];
                this.member = data['member'];
                let self = this;
                this.runCountdown();
                this.myTimeout = setTimeout(function () {
                    self.goToCart();
                    self.modalService.dismissAll();
                    console.log('this.myTimeout TRIGER');
                }, parseInt(this.kioskMessage['timer']) * 1000);
                console.log("wait for " + parseInt(this.kioskMessage['timer']));
            }
            else {
                this.notes = this.kioskMessage['memberNotFound'];
                console.log("MEMBER ID NOT FOUND");
            }
        }, e => {
            console.log(e);
        });
    }
    back() {
        history.back();
    }
}
MemberBarcodeComponent.ɵfac = function MemberBarcodeComponent_Factory(t) { return new (t || MemberBarcodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModalConfig)); };
MemberBarcodeComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MemberBarcodeComponent, selectors: [["app-member-barcode"]], viewQuery: function MemberBarcodeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.rows = _t.first);
    } }, decls: 71, vars: 18, consts: [[1, "bgn"], [1, "container-fluid"], [1, "row"], [1, "col-6"], [1, "p-2"], [1, "col-6", "text-end"], [1, "col-12", "mt-5"], [1, "text-center", "my-5"], ["src", "./assets/galleries/img12.png", "width", "90%", 3, "hidden"], ["src", "./assets/galleries/img10.png", "width", "60%", 3, "hidden"], [1, "col-12", 3, "hidden"], [1, "p-4"], [1, "text-center"], [1, "text-danger", "my-5", 3, "innerHTML"], [1, "mx-5"], [1, "col-12", "mb-4"], ["type", "text", "placeholder", "Scan Barcode", "autofocus", "", 1, "form-control", "form-control-lg", "font-monospace", "inputScan", "border-5", 3, "ngModel", "ngModelChange", "change"], ["formRow", ""], [1, "col-12", "d-grid", "my-3"], ["type", "button", 1, "btn", "btn-lg", "btn-primary", "text-white", "rounded", "py-3", "font-btn", 3, "click"], [1, "col-12", "d-grid"], ["type", "button", 1, "btn", "btn-lg", "bg-white", "border", "rounded", "py-3", "font-btn", 3, "click"], [1, "p-4", "mx-5"], [1, "my-5", 2, "width", "100%"], [4, "ngIf", "ngIfElse"], ["justNext", ""], [1, "col-12"], [1, "text-center", 3, "hidden"], ["role", "status", 1, "spinner-border", 2, "width", "3rem", "height", "3rem"], [1, "visually-hidden"], [1, "row", "g-1"], [1, "col-10"], [1, "col-2", "text-end"], [1, "d-grid", "mt-5"], [1, "btn", "btn-lg", "btn-warning", "text-white", "rounded", "py-3", "font-btn", 3, "routerLink"], ["type", "button", 1, "btn", "btn-lg", "btn-success", "text-white", "rounded", "py-3", "font-btn", 3, "click"]], template: function MemberBarcodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 1)(10, "div", 2)(11, "div", 6)(12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](13, "img", 8)(14, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 2)(16, "div", 10)(17, "div", 11)(18, "div", 12)(19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Please enter your member ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 14)(23, "div", 15)(24, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function MemberBarcodeComponent_Template_input_ngModelChange_24_listener($event) { return ctx.memberId = $event; })("change", function MemberBarcodeComponent_Template_input_change_24_listener() { return ctx.scannerMember(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 2)(27, "div", 18)(28, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MemberBarcodeComponent_Template_button_click_28_listener() { return ctx.fnSubmitMemberIdManual(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "SUBMIT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 20)(31, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MemberBarcodeComponent_Template_button_click_31_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "BACK");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "div", 10)(34, "div", 22)(35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "h1", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "table", 23)(38, "tr")(39, "td")(40, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](41, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "td")(43, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "tr")(46, "td")(47, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Member ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "td")(50, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](52, MemberBarcodeComponent_div_52_Template, 4, 2, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](53, MemberBarcodeComponent_ng_template_53_Template, 3, 0, "ng-template", null, 25, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 26)(56, "div", 27)(57, "div", 28)(58, "span", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](59, "Loading...");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](60, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "footer")(63, "div", 1)(64, "div", 30)(65, "div", 31)(66, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 32)(69, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("SCO Unit ID : ", ctx.terminalId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Outlet Id : ", ctx.storeOutlesId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.member.length < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.member.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.member.length != 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.notes, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.memberId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.member.length < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.notes, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](": ", ctx.member["firstName"], " ", ctx.member["lastName"], "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](": ", ctx.member["id"], " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.kioskMessage.memberPhoto)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.loginSuccess);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.countdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.today);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("SCO V", ctx.version, "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], styles: [".bgn[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0px;\r\n    top: 0px;\r\n    z-index: -999;\r\n    background-color: #F4F7FC;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1lbWJlci1iYXJjb2RlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsUUFBUTtJQUNSLGFBQWE7SUFDYix5QkFBeUI7QUFDN0IiLCJmaWxlIjoibWVtYmVyLWJhcmNvZGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ257XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgei1pbmRleDogLTk5OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNEY3RkM7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 8852:
/*!**********************************************************!*\
  !*** ./src/app/login/user-photo/user-photo.component.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UserPhotoComponent": () => (/* binding */ UserPhotoComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 6169);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);






const _c0 = function () { return ["/admin"]; };
class UserPhotoComponent {
    constructor(modalService, http, configService, activatedRoute, router, config, ngZone) {
        this.modalService = modalService;
        this.http = http;
        this.configService = configService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.ngZone = ngZone;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
        this.kioskUuid = localStorage.getItem(this.configService.myUUID());
        this.storeOutlesId = "";
        this.terminalId = "";
        this.version = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.version;
        this.today = new Date();
        this.loading = false;
        this.images = "./assets/imgs/user.png";
        this.initPhoto = false;
        this.memberId = "";
        this.name = "";
        this.notes = "";
        this.cameraSuccess = (imagesData) => {
            this.initPhoto = true;
            this.loading = false;
            this.ngZone.run(() => this.images = 'data:image/png;base64,' + imagesData);
        };
        this.cameraError = (e) => {
            console.log('error Camera', e);
            this.initPhoto = false;
        };
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.configService.httpAccount().subscribe(data => {
            this.storeOutlesId = data['storeOutlesId'];
            this.terminalId = data['terminalId'];
        });
        this.httpGet();
    }
    httpGet() {
        let url = this.api + 'kioskLogin/getInfo/?kioskUuid=' + this.kioskUuid;
        console.log(url);
        this.http.get(url, { headers: this.configService.headers() }).subscribe(data => {
            console.log(data);
            this.memberId = data['memberId'];
            this.name = data['name'];
            this.notes = data['welcomeMember'];
        }, e => {
            console.log(e);
        });
    }
    open(content) {
        this.modalService.open(content, { size: 'lg' });
    }
    takePhoto() {
        const options = {
            destinationType: Camera.DestinationType.DATA_URL,
            quality: 50,
            encodingType: Camera.EncodingType.JPEG,
            correctOrientation: true,
        };
        let self = this;
        navigator.camera.getPicture(this.cameraSuccess, this.cameraError, options);
    }
    fnSkipPhoto() {
        this.initPhoto = true;
    }
    goToCart() {
        if (this.initPhoto == true) {
            const body = {
                base64Images: this.images,
                kioskUuid: this.kioskUuid,
            };
            this.http.post(this.api + 'kioskLogin/takePhoto/', body, { headers: this.configService.headers() }).subscribe(data => {
                // this.modalService.open(loginVisitor); 
                console.log(data);
                this.loading = false;
                this.router.navigate(['cart'], { queryParams: { kioskUuid: this.kioskUuid }, });
            }, e => {
                console.log(e);
            });
        }
    }
    ngOnDestroy() {
        this.modalService.dismissAll();
    }
}
UserPhotoComponent.ɵfac = function UserPhotoComponent_Factory(t) { return new (t || UserPhotoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone)); };
UserPhotoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: UserPhotoComponent, selectors: [["app-user-photo"]], decls: 71, vars: 14, consts: [[1, "bgn"], [1, "container-fluid"], [1, "row"], [1, "col-6"], [1, "p-2"], [1, "col-6", "text-end"], [1, "container", "mt-5", "pos-content"], [1, "col-12", 3, "hidden"], [1, "p-4", "mx-5"], [1, "text-center"], [1, "my-5", 3, "innerHTML"], [1, "my-5", 2, "width", "100%"], [1, "col-10", "offset-1"], [1, "border", "text-center", "bg-dark", "rounded", "shadow-sm"], ["width", "400px", 3, "src"], [1, "row", "my-5"], [1, "col-1"], ["src", "./assets/imgs/checkbox.png", "width", "110%"], [1, "col-11"], [1, "row", "mt-5"], [1, "col-6", "d-grid"], ["type", "button", 1, "btn", "btn-dark", "btn-lg", "rounded", "font-btn", "py-3", 3, "click"], ["type", "button", 1, "btn", "btn-success", "btn-lg", "rounded", "font-btn", "py-3", 3, "disabled", "click"], [1, "col-12", "text-center", "my-3"], ["href", "javascript:;", 3, "click"], [1, "col-12", "py-5"], [1, "text-center", 3, "hidden"], [1, "row", "g-1"], [1, "col-12", "text-end"], [3, "routerLink"], [1, "col-10"], [1, "col-2", "text-end"]], template: function UserPhotoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 5)(7, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6)(10, "div", 2)(11, "div", 7)(12, "div", 8)(13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "table", 11)(16, "tr")(17, "td")(18, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "td")(21, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "tr")(24, "td")(25, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "Member ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "td")(28, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 2)(31, "div", 12)(32, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](33, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 15)(35, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "div", 18)(38, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39, "Saya bersedia dalam penggunaan system akan memasukan data dengan benar & tepat");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](42, "div", 18)(43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44, "Saya bersedia jika ada kekurangan tepatan untuk menerima pihak toko melakukan penyesuaian");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "div", 19)(46, "div", 20)(47, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserPhotoComponent_Template_button_click_47_listener() { return ctx.takePhoto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48, "Take Photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](49, "div", 20)(50, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserPhotoComponent_Template_button_click_50_listener() { return ctx.goToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](52, "div", 23)(53, "a", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function UserPhotoComponent_Template_a_click_53_listener() { return ctx.fnSkipPhoto(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](54, "Skip take photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](55, "div", 25)(56, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, " loading... ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "footer")(59, "div", 1)(60, "div", 27)(61, "div", 28)(62, "h2", 4)(63, "a", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](64, "Admin Mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](65, "div", 30)(66, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](67);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](68, "div", 31)(69, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](70);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("SCO Unit ID : ", ctx.terminalId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Outlet Id : ", ctx.storeOutlesId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.memberId == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", ctx.notes, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](": ", ctx.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](": ", ctx.memberId, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.images, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.initPhoto);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.initPhoto ? "Ok and Next" : "Photo required");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.today);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("SCO V", ctx.version, "");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], styles: [".bgn[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0px;\r\n    top: 0px;\r\n    z-index: -999;\r\n    \r\n    background: rgb(255,255,255);\r\nbackground: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(229,240,240,1) 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#ffffff\",endColorstr=\"#e5f0f0\",GradientType=1);\r\n}\r\n\r\n.pos-content[_ngcontent-%COMP%]{\r\n    font-size: 40px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXItcGhvdG8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsUUFBUTtJQUNSLGFBQWE7O0lBRWIsNEJBQTRCO0FBR2hDLHFGQUFxRjtBQUNyRixnSEFBZ0g7QUFDaEg7O0FBRUE7SUFDSSxlQUFlO0FBQ25CIiwiZmlsZSI6InVzZXItcGhvdG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4uYmdue1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHotaW5kZXg6IC05OTk7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XHJcbmJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyMjksMjQwLDI0MCwxKSAxMDAlKTtcclxuYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDIyOSwyNDAsMjQwLDEpIDEwMCUpO1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDIyOSwyNDAsMjQwLDEpIDEwMCUpO1xyXG5maWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPVwiI2ZmZmZmZlwiLGVuZENvbG9yc3RyPVwiI2U1ZjBmMFwiLEdyYWRpZW50VHlwZT0xKTtcclxufVxyXG5cclxuLnBvcy1jb250ZW50e1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59Il19 */"] });


/***/ }),

/***/ 1142:
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundComponent": () => (/* binding */ NotFoundComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
NotFoundComponent.ɵfac = function NotFoundComponent_Factory(t) { return new (t || NotFoundComponent)(); };
NotFoundComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NotFoundComponent, selectors: [["app-not-found"]], decls: 2, vars: 0, template: function NotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "not-found works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 561:
/*!******************************************************************************!*\
  !*** ./src/app/payment/payment-qris-telkom/payment-qris-telkom.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentQrisTelkomComponent": () => (/* binding */ PaymentQrisTelkomComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 6169);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var angularx_qrcode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularx-qrcode */ 9876);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);








const _c0 = function () { return ["/payment"]; };
class PaymentQrisTelkomComponent {
    constructor(http, config, modalService, configService, activatedRoute, router) {
        this.http = http;
        this.modalService = modalService;
        this.configService = configService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loading = false;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
        this.items = [];
        this.error = false;
        this.summary = [];
        this.uuidKios = localStorage.getItem(this.configService.myUUID());
        this.storeOutlesId = "";
        this.terminalId = "";
        this.image = "";
        this.status = true;
        this.qrcode = "";
        this.loadingStatus = false;
        this.name = "";
        this.nmid = "";
        this.exp = "";
        this.note = "";
    }
    ngOnInit() {
        this.httpGet();
        this.configService.httpAccount().subscribe(data => {
            this.storeOutlesId = data['storeOutlesId'];
            this.terminalId = data['terminalId'];
        });
    }
    httpGet() {
        this.loading = true;
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api + "kioskPayment/fnQrisTelkom/?kioskUuid=" + this.uuidKios;
        this.http.get(url, { headers: this.configService.headers() }).subscribe(data => {
            this.status = data['status'];
            this.image = data['image'];
            this.loading = false;
            console.log(data);
            this.summary = data['summary'];
            this.qrcode = data['qris'];
            this.name = data['name'];
            this.nmid = data['nmid'];
            this.exp = data['exp'];
        }, e => {
            console.log(e);
        });
    }
    fnGenerate() {
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api + "kioskPayment/fnQrisTelkomRegenerate/";
        const body = {
            kioskUuid: this.uuidKios,
        };
        this.http.post(url, body, { headers: this.configService.headers() }).subscribe(data => {
            console.log(data);
            history.back();
        }, e => {
            console.log(e);
        });
    }
    fnQrisTelkomStatus() {
        this.note = "";
        this.loadingStatus = true;
        let url = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api + "kioskPayment/fnQrisTelkomStatus/?kioskUuid=" + this.uuidKios;
        this.http.get(url, { headers: this.configService.headers() }).subscribe(data => {
            if (data['qris']['data']['qris_status'] == 'paid') {
                console.log('paid');
                this.note = data['qris']['data']['qris_status'];
                this.fnProcessPaymentReal(data['qris']);
            }
            else if (data['qris']['data']['qris_status'] == 'unpaid') {
                this.loadingStatus = false;
                console.log('unpaid');
                this.note = data['qris']['data']['qris_status'];
            }
            else {
                this.loadingStatus = false;
                console.log('not register');
                this.note = 'not register';
            }
            console.log(data);
        }, e => {
            console.log(e);
        });
    }
    help() {
        const msg = {
            terminalId: this.terminalId,
        };
        this.configService.help(msg);
    }
    fnProcessPaymentReal(data) {
        const body = {
            paymentTypeId: 'QRT001',
            qris: data,
            kioskUuid: localStorage.getItem(this.configService.myUUID()),
            storeOutlesId: localStorage.getItem('storeOutlesId'),
            terminalId: localStorage.getItem('terminalId'),
        };
        this.loading = true;
        console.log(body);
        this.http.post(this.api + 'kioskPayment/fnProcessPaymentReal/', body, { headers: this.configService.headers() }).subscribe(data => {
            console.log(data);
            localStorage.removeItem(this.configService.myUUID());
            this.loading = false;
            /**
             * status payment disini
             */
            // this.paymentStatus = 2; 
            this.router.navigate(['cart/finish/', data['id']]);
        }, e => {
            console.log(e);
        });
    }
}
PaymentQrisTelkomComponent.ɵfac = function PaymentQrisTelkomComponent_Factory(t) { return new (t || PaymentQrisTelkomComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
PaymentQrisTelkomComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PaymentQrisTelkomComponent, selectors: [["app-payment-qris-telkom"]], decls: 64, vars: 25, consts: [[1, "sticky-top", "pt-2", "bg-white"], [1, "container"], [1, "row"], [1, "col"], [1, "col", "text-center"], [1, "col", "text-end"], [1, "container", "py-4"], [1, "col-6"], ["href", "javascript:void(0)", 1, "btn", "p-1", "mx-1", 3, "routerLink"], ["src", "./assets/imgs/icons8-back-67.png", "width", "90"], [1, "col-6", "text-end"], ["href", "javascript:void(0)", 1, "btn", "bg-warning", "p-1", "border", "rounded", "mx-1", 3, "click"], ["src", "./assets/imgs/icons8-bell-64.png", "width", "90"], [1, "col-12", "mt-3"], [1, "text-center"], [1, "mb-3"], [3, "hidden"], [1, "text-center", "my-2"], ["type", "button", 1, "btn", "btn-warning", "btn-lg", "rounded", "font-btn", 3, "click"], [1, "text-center", 3, "hidden"], ["src", "./assets/gif/Blocks-1s-200px.gif"], ["width", "50%", 1, "mt-5", 3, "src"], [3, "qrdata", "width", "errorCorrectionLevel"], [1, "display-1", "mb-3"], [1, "text-center", "mt-5"], [1, "my-4"], [1, "col-12"], [1, "text-center", "mt-4"], [1, "py-2"]], template: function PaymentQrisTelkomComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5)(10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6)(13, "div", 2)(14, "div", 7)(15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10)(18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentQrisTelkomComponent_Template_a_click_18_listener() { return ctx.help(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 1)(21, "div", 2)(22, "div", 13)(23, "div", 14)(24, "h2", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "div", 16)(27, "h1", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](28, " QRIS EXPIRED");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentQrisTelkomComponent_Template_button_click_29_listener() { return ctx.fnGenerate(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](30, "Generate New QRIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](31, "div", 2)(32, "div", 13)(33, "div", 19)(34, "div", 16)(35, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36, "Generate QRIS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Please wait..");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](39, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](41, "img", 21)(42, "qrcode", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](47, "h1", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](49, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](50, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](52, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](53, "div", 24)(54, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentQrisTelkomComponent_Template_button_click_54_listener() { return ctx.fnQrisTelkomStatus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55, "Cek Status Pembayaran");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "h2", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](57, "Ada Kendala? Hubunig CS");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](58, "div", 26)(59, "div", 27)(60, "h1", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](62, "h3", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](63, "Checking Please Wait");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Bill : ", ctx.uuidKios, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Store Outles ID : ", ctx.storeOutlesId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Terminal ID : ", ctx.terminalId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](24, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.uuidKios);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.status);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.qrcode != "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.qrcode == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("qrdata", ctx.qrcode)("width", 800)("errorCorrectionLevel", "H");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("NMID :", ctx.nmid, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rp ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](49, 19, ctx.summary["final"]), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Segera dibayarkan sebelum pukul ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](52, 21, ctx.exp, "H:mm"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.note);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.loadingStatus);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, angularx_qrcode__WEBPACK_IMPORTED_MODULE_6__.QRCodeComponent], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LXFyaXMtdGVsa29tLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 9082:
/*!**********************************************!*\
  !*** ./src/app/payment/payment.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentComponent": () => (/* binding */ PaymentComponent)
/* harmony export */ });
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 6169);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);








function PaymentComponent_div_33_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 20)(1, "div", 21)(2, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentComponent_div_33_Template_a_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const x_r3 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](35); return ctx_r4.payment(x_r3, _r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "img", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const x_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", x_r3.image, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function PaymentComponent_ng_template_34_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 29)(2, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3, "Payment Process");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "img", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 31)(6, "div", 32)(7, "a", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentComponent_ng_template_34_ng_container_3_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r12.fnProcessPaymentFake(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8, "Fake payment process");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 34)(10, "a", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentComponent_ng_template_34_ng_container_3_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r13); const d_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().dismiss; return d_r7("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11, " Cancel ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function PaymentComponent_ng_template_34_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Payment Success");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentComponent_ng_template_34_ng_container_4_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2); return ctx_r16.finishShopping(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r9.t1_thank_you_display);
} }
function PaymentComponent_ng_template_34_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2, "Payment Fail");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, "Please try again!");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function PaymentComponent_ng_template_34_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function PaymentComponent_ng_template_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 24)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](2, 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, PaymentComponent_ng_template_34_ng_container_3_Template, 12, 0, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, PaymentComponent_ng_template_34_ng_container_4_Template, 7, 1, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, PaymentComponent_ng_template_34_ng_container_5_Template, 5, 0, "ng-container", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, PaymentComponent_ng_template_34_ng_container_6_Template, 2, 0, "ng-container", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitch", ctx_r2.paymentStatus);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngSwitchCase", 3);
} }
const _c0 = function () { return ["/bill"]; };
class PaymentComponent {
    constructor(http, config, modalService, configService, activatedRoute, router) {
        this.http = http;
        this.modalService = modalService;
        this.configService = configService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loading = false;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
        this.items = [];
        this.error = false;
        this.final = 0;
        this.paymentStatus = 1;
        this.paymentTypeId = 0;
        this.storeOutlesPaymentType = [];
        this.uuidKios = localStorage.getItem(this.configService.myUUID());
        this.storeOutlesId = "";
        this.terminalId = "";
        config.backdrop = 'static';
        config.keyboard = false;
    }
    ngOnInit() {
        this.configService.httpAccount().subscribe(data => {
            this.storeOutlesId = data['storeOutlesId'];
            this.terminalId = data['terminalId'];
            this.t1_thank_you_display = data['account'][data['account'].findIndex(((obj) => obj.id == 1004))]['value'];
            if (data['systemOnline'] == false) {
                this.router.navigate(['offline']);
            }
        });
        if (localStorage.getItem(this.configService.myUUID())) {
            console.log("SILAKAN BELANJA!");
            this.httpGet();
            this.httpCart();
        }
        else {
            this.router.navigate(['login']);
        }
    }
    help() {
        const msg = {
            terminalId: this.terminalId,
        };
        this.configService.help(msg);
    }
    httpGet() {
        this.loading = true;
        let url = this.api + 'kioskPayment/index/?uuid=' + localStorage.getItem(this.configService.myUUID());
        console.log(url);
        this.http.get(url, { headers: this.configService.headers() }).subscribe(data => {
            this.loading = false;
            console.log(data);
            this.final = data['summary']['final'];
            this.storeOutlesPaymentType = data['storeOutlesPaymentType'];
        }, e => {
            console.log(e);
        });
    }
    httpCart() {
        this.loading = true;
        let url = this.api + 'kioskCart/index/?uuid=' + localStorage.getItem(this.configService.myUUID()) + "&storeOutlesId=" + localStorage.getItem('storeOutlesId') + "&terminalId=" + localStorage.getItem('terminalId');
        this.http.get(url, { headers: this.configService.headers() }).subscribe(data => {
            this.loading = false;
            console.log(data);
        }, e => {
            console.log(e);
        });
    }
    payment(x, content) {
        if (x.paymentTypeId == 'QRT001') {
            this.router.navigate(['payment/qristelkom/', x.paymentTypeId]);
        }
        else {
            console.log(x);
            this.paymentStatus = 1;
            this.loading = true;
            this.paymentTypeId = x.paymentTypeId;
            this.modalService.open(content, { centered: true });
        }
    }
    fnProcessPaymentFake() {
        const body = {
            paymentTypeId: this.paymentTypeId,
            kioskUuid: localStorage.getItem(this.configService.myUUID()),
            storeOutlesId: localStorage.getItem('storeOutlesId'),
            terminalId: localStorage.getItem('terminalId'),
        };
        this.loading = true;
        console.log(body);
        this.http.post(this.api + 'kioskPayment/fnProcessPaymentFake/', body, { headers: this.configService.headers() }).subscribe(data => {
            console.log(data);
            localStorage.removeItem(this.configService.myUUID());
            this.modalService.dismissAll();
            this.loading = false;
            /**
             * status payment disini
             */
            // this.paymentStatus = 2; 
            this.router.navigate(['cart/finish/', data['id']]);
        }, e => {
            console.log(e);
        });
    }
    finishShopping() {
        this.modalService.dismissAll();
        this.router.navigate(['login']);
    }
}
PaymentComponent.ɵfac = function PaymentComponent_Factory(t) { return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModalConfig), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
PaymentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PaymentComponent, selectors: [["app-payment"]], features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModalConfig, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal])], decls: 36, vars: 9, consts: [[1, "sticky-top", "pt-2", "bg-white"], [1, "container"], [1, "row"], [1, "col"], [1, "col", "text-center"], [1, "col", "text-end"], [1, "container", "py-4"], [1, "col-6"], ["href", "javascript:void(0)", 1, "btn", "p-1", "mx-1", 3, "routerLink"], ["src", "./assets/imgs/icons8-back-67.png", "width", "90"], [1, "col-6", "text-end"], ["href", "javascript:void(0)", 1, "btn", "bg-warning", "p-1", "border", "rounded", "mx-1", 3, "click"], ["src", "./assets/imgs/icons8-bell-64.png", "width", "90"], [1, "col-12", "mt-3"], [1, "text-center"], [1, "display-1"], [1, "row", "g-2", "my-5"], [1, "col-12", "text-center", "mb-4"], ["class", "col-4", 4, "ngFor", "ngForOf"], ["fakePayment", ""], [1, "col-4"], [1, "p-1", "d-grid", "mb-2"], ["href", "javascript:;", 1, "btn", "btn-block", "p-2", 3, "click"], ["width", "100%", 3, "src"], [1, "modal-body"], [1, "text-center", "my-5"], [3, "ngSwitch"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [1, "py-1"], ["src", "./assets/gif/image_processing20190812-2176-vehbsi.gif", "width", "100%"], [1, "row", "g-2"], [1, "col-12", "d-grid"], ["href", "javascript:;", 1, "btn", "btn-block", "btn-info", "border", "text-white", 3, "click"], [1, "col-12", "d-grid", "mt-2"], ["href", "javascript:;", 1, "text-danger", 3, "click"], [1, "my-4"], ["type", "button", 1, "btn", "btn-lg", "btn-success", 3, "click"]], template: function PaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4)(7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 5)(10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 6)(13, "div", 2)(14, "div", 7)(15, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](16, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 10)(18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PaymentComponent_Template_a_click_18_listener() { return ctx.help(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](19, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](20, "div", 1)(21, "div", 2)(22, "div", 13)(23, "div", 14)(24, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, "TOTAL PAYMENT");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "h1", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](29, "div", 16)(30, "div", 17)(31, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Select Payment Methods :");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](33, PaymentComponent_div_33_Template, 4, 1, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](34, PaymentComponent_ng_template_34_Template, 7, 4, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Bill : ", ctx.uuidKios, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Store Outles ID : ", ctx.storeOutlesId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Terminal ID : ", ctx.terminalId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("Rp ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 6, ctx.final), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.storeOutlesPaymentType);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchCase, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgSwitchDefault], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DecimalPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYXltZW50LmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 3004:
/*!******************************************!*\
  !*** ./src/app/photo/photo.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PhotoComponent": () => (/* binding */ PhotoComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var ngx_webcam__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webcam */ 9839);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 7544);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 6169);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);











function PhotoComponent_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("src", ctx_r0.webcamImage.imageAsDataUrl, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
} }
function PhotoComponent_webcam_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "webcam", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("imageCapture", function PhotoComponent_webcam_10_Template_webcam_imageCapture_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.handleImage($event); })("cameraSwitched", function PhotoComponent_webcam_10_Template_webcam_cameraSwitched_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r6.cameraWasSwitched($event); })("initError", function PhotoComponent_webcam_10_Template_webcam_initError_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r7.handleInitError($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("height", 500)("width", 500)("trigger", ctx_r1.triggerObservable)("allowCameraSwitch", ctx_r1.allowCameraSwitch)("switchCamera", ctx_r1.nextWebcamObservable)("videoOptions", ctx_r1.videoOptions)("imageQuality", 1);
} }
function PhotoComponent_h4_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "Messages:");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function PhotoComponent_ul_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "ul")(1, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "json");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const error_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 1, error_r8));
} }
const _c0 = function () { return ["/cart"]; };
const _c1 = function (a0) { return { kioskUuid: a0 }; };
class PhotoComponent {
    constructor(modalService, http, configService, activatedRoute, router) {
        this.modalService = modalService;
        this.http = http;
        this.configService = configService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loading = false;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
        // toggle webcam on/off
        this.showWebcam = true;
        this.allowCameraSwitch = true;
        this.multipleWebcamsAvailable = false;
        this.videoOptions = {
        // width: {ideal: 1024},
        // height: {ideal: 576}
        };
        this.errors = [];
        this.takePhoto = false;
        // latest snapshot
        this.webcamImage = null;
        // webcam snapshot trigger
        this.trigger = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        // switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
        this.nextWebcam = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.memberId = "0";
    }
    ngOnInit() {
        this.httpGet();
        this.uuid = localStorage.getItem(this.configService.myUUID());
        ngx_webcam__WEBPACK_IMPORTED_MODULE_4__.WebcamUtil.getAvailableVideoInputs()
            .then((mediaDevices) => {
            this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
        });
    }
    nativeCam() {
        navigator.camera.cleanup(this.onSuccess, this.onFail);
    }
    onSuccess() {
        console.log("Camera cleanup success.");
    }
    onFail(message) {
        alert('Failed because: ' + message);
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.api + 'kioskPhoto/member/?uuid=' + localStorage.getItem(this.configService.myUUID()), { headers: this.configService.headers() }).subscribe(data => {
            console.log(data);
            this.memberId = data['memberId'];
        }, e => {
            console.log(e);
        });
    }
    triggerSnapshot() {
        this.trigger.next();
    }
    showCamera() {
        this.takePhoto = false;
        this.webcamImage = null;
        this.showWebcam = true;
    }
    toggleWebcam() {
        this.showWebcam = !this.showWebcam;
    }
    handleInitError(error) {
        this.errors.push(error);
    }
    showNextWebcam(directionOrDeviceId) {
        // true => move forward through devices
        // false => move backwards through devices
        // string => move to device with given deviceId
        this.nextWebcam.next(directionOrDeviceId);
    }
    handleImage(webcamImage) {
        console.log('received webcam image', webcamImage);
        //console.log("_imageAsDataUrl",webcamImage.imageAsDataUrl);
        this.webcamImage = webcamImage;
        this.uploadPhoto(webcamImage);
        this.showWebcam = false;
    }
    uploadPhoto(webcamImage) {
        console.log('uploadPhoto');
        if (webcamImage.imageAsDataUrl) {
            console.log("SAVE PHP");
            const body = {
                webcamImage: webcamImage,
                memberId: this.memberId,
                kioskUuid: localStorage.getItem(this.configService.myUUID()),
            };
            this.http.post(this.api + 'kioskPhoto/uploadPhoto/', body, { headers: this.configService.headers() }).subscribe(data => {
                if (data['error'] == false) {
                    this.takePhoto = true;
                }
                console.log(data);
                this.loading = false;
                //this.router.navigate(['cart'], { queryParams: { kioskUuid: localStorage.getItem(this.configService.myUUID()) }, });
            }, e => {
                console.log(e);
            });
        }
    }
    goToCart() {
        this.router.navigate(['cart'], { queryParams: { kioskUuid: localStorage.getItem(this.configService.myUUID()) }, });
    }
    cameraWasSwitched(deviceId) {
        console.log('active device: ' + deviceId);
        this.deviceId = deviceId;
    }
    get triggerObservable() {
        return this.trigger.asObservable();
    }
    get nextWebcamObservable() {
        return this.nextWebcam.asObservable();
    }
}
PhotoComponent.ɵfac = function PhotoComponent_Factory(t) { return new (t || PhotoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__.NgbModal), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_6__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.Router)); };
PhotoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PhotoComponent, selectors: [["app-photo"]], decls: 27, vars: 13, consts: [[1, "container"], [1, "row"], [1, "col-12", "text-center"], ["type", "button", 3, "click"], [1, "border", "p-1", "bg-white", 2, "height", "500px"], [4, "ngIf"], [3, "height", "width", "trigger", "allowCameraSwitch", "switchCamera", "videoOptions", "imageQuality", "imageCapture", "cameraSwitched", "initError", 4, "ngIf"], [1, "col-12", "mt-3"], [1, "btn", "btn-sm", "btn-secondary", "mx-1", 3, "hidden", "click"], ["id", "deviceId", "type", "text", "readonly", "", 1, "form-control", "form-control-sm", 3, "ngModel", "ngModelChange"], [3, "routerLink", "queryParams"], [4, "ngFor", "ngForOf"], ["width", "100%", "height", "100%", 3, "src"], [3, "height", "width", "trigger", "allowCameraSwitch", "switchCamera", "videoOptions", "imageQuality", "imageCapture", "cameraSwitched", "initError"]], template: function PhotoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4, " Photo Required ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PhotoComponent_Template_button_click_5_listener() { return ctx.nativeCam(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6, "CAMEARA NATIVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 2)(8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, PhotoComponent_div_9_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](10, PhotoComponent_webcam_10_Template, 1, 7, "webcam", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7)(12, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PhotoComponent_Template_button_click_12_listener() { return ctx.triggerSnapshot(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13, "Take A Snapshot");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PhotoComponent_Template_button_click_14_listener() { return ctx.showCamera(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Take new photo");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PhotoComponent_Template_button_click_16_listener() { return ctx.goToCart(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "div")(19, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "DeviceId:");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PhotoComponent_Template_input_ngModelChange_21_listener($event) { return ctx.deviceId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div")(23, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, "Skip");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](25, PhotoComponent_h4_25_Template, 2, 0, "h4", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, PhotoComponent_ul_26_Template, 4, 3, "ul", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.webcamImage);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.showWebcam);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.takePhoto);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.takePhoto);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.takePhoto);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.deviceId);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](10, _c0))("queryParams", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](11, _c1, ctx.uuid));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.errors.length > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.errors);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, ngx_webcam__WEBPACK_IMPORTED_MODULE_4__.WebcamComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.JsonPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwaG90by5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 2161:
/*!**************************************************************!*\
  !*** ./src/app/print/print-detail/print-detail.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintDetailComponent": () => (/* binding */ PrintDetailComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 6169);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_service_printing_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/printing.service */ 8929);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../header/header.component */ 3482);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6362);








function PrintDetailComponent_tr_51_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "*Special price");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "td", 19)(13, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](19, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const x_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](x_r4.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", x_r4.shortDesc, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", x_r4.isSpecialPrice == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](x_r4.note);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](11, 8, x_r4.price));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", x_r4.totalDiscount <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](16, 10, x_r4.totalDiscount), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](19, 12, x_r4.totalPrice));
} }
function PrintDetailComponent_tr_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 23)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "(Free Items)");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "td", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, "0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const x_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", x_r5.printOnBill <= 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](x_r5.qty);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", x_r5.shortDesc, " ");
} }
function PrintDetailComponent_span_115_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", x_r6.printOnBill > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", x_r6.shortDesc, " (", x_r6.qty, ") ");
} }
function PrintDetailComponent_span_119_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", x_r7.shortDesc, " (", x_r7.qty, ") ");
} }
class PrintDetailComponent {
    constructor(http, configService, activatedRoute, printing, router) {
        this.http = http;
        this.configService = configService;
        this.activatedRoute = activatedRoute;
        this.printing = printing;
        this.router = router;
        this.loading = false;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
        this.barcode = "";
        this.items = [];
        this.itemsList = [];
        this.freeItem = [];
        this.freeItemWaitingScanFail = [];
        this.adminMode = false;
        this.id = "";
        this.summary = {
            Final: 0,
            NonBkp: 0,
            bkp: 0,
            discount: 0,
            dpp: 0,
            memberDiscount: 0,
            ppn: 0,
            total: 0,
            voucer: 0,
        };
        this.printable = false;
        this.bill = [];
        this.date = "";
        this.template = {
            companyName: '',
            companyAddress: '',
            companyPhone: '',
            footer: '',
        };
    }
    ngOnInit() {
        this.httpGet();
        console.log(this.activatedRoute.snapshot.params['id']);
    }
    print(name) {
        const body = {
            id: this.activatedRoute.snapshot.params['id'],
        };
        this.http.post(this.api + 'kioskPrint/countingPrinting/', body, { headers: this.configService.headers() }).subscribe(data => {
            if (name == 'android') {
                console.log(this.printing.template(this.bill));
                let message = this.printing.template(this.bill);
                this.printerName = localStorage.getItem(this.configService.printerName());
                if (this.printerName == "" || this.printerName == null) {
                    alert("NO PRINTING SELECT");
                }
                else {
                    window['cordova'].plugins.UsbPrinter.connect(this.printerName, (result) => {
                        console.log(result);
                        window['cordova'].plugins.UsbPrinter.print(this.printerName, message, (result) => {
                            console.log("result of usb print action", result);
                        }, (err) => {
                            console.error('Error in usb print action', err);
                        });
                    }, (err) => {
                        console.error(err);
                    });
                }
            }
            else if (name == 'browser') {
                window.print();
                console.log(data);
            }
        });
    }
    httpGet() {
        this.loading = true;
        let url = this.api + 'KioskPrint/printDetail/?id=' + this.activatedRoute.snapshot.params['id'];
        console.log(url);
        this.http.get(url, { headers: this.configService.headers() }).subscribe(data => {
            this.bill = data;
            this.printable = true;
            this.id = data['id'];
            this.date = data['date'];
            this.template = {
                companyName: data['template']['companyName'],
                companyAddress: data['template']['companyAddress'],
                companyPhone: data['template']['companyPhone'],
                footer: data['template']['footer'],
            };
            this.loading = false;
            this.items = data['items'];
            this.itemsList = data['itemsList'];
            this.freeItem = data['freeItem'];
            this.freeItemWaitingScanFail = data['freeItemWaitingScanFail'];
            this.summary = {
                total: data['summary']['total'],
                final: data['summary']['final'],
                nonBkp: data['summary']['nonBkp'],
                bkp: data['summary']['bkp'],
                discount: data['summary']['discount'],
                dpp: data['summary']['dpp'],
                discountMember: data['summary']['discountMember'],
                ppn: data['summary']['ppn'],
                voucher: data['summary']['voucher'],
            };
        }, e => {
            console.log(e);
        });
    }
    back() {
        window.history.back();
    }
}
PrintDetailComponent.ɵfac = function PrintDetailComponent_Factory(t) { return new (t || PrintDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_service_printing_service__WEBPACK_IMPORTED_MODULE_2__.PrintingService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router)); };
PrintDetailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PrintDetailComponent, selectors: [["app-print-detail"]], decls: 131, vars: 47, consts: [[1, "container", "disablePrintArea"], [1, "row", "g-0"], [1, "col-8"], ["href", "javascript:void(0)", 1, "btn", "btn-lg", "btn-warning", "font-btn", 3, "click"], [1, "ti", "ti-logout"], ["type", "button", 1, "btn", "btn-lg", "btn-block", "btn-info", "mx-2", "font-btn", 3, "disabled", "click"], ["src", "./assets/imgs/icons8-label-printer-100.png", "height", "40"], ["type", "button", 1, "btn", "btn-lg", "btn-block", "btn-success", "font-btn", 3, "click"], [1, "col-4", "text-end"], [1, "text-monospace"], [1, "container", "text-monospace", "printbill"], [1, "row"], [1, "col-12"], [1, "bg-white", "p-1", "shadow-md"], [1, "text-center"], [1, "row", "mt-4"], [1, "col-6"], [1, "col-6", "text-end"], [1, "table", "table-sm"], [1, "text-end"], [4, "ngFor", "ngForOf"], [3, "hidden", 4, "ngFor", "ngForOf"], ["colspan", "4"], [3, "hidden"], [1, "text-monospace", "small", "p-1"], ["class", "me-2", 3, "hidden", 4, "ngFor", "ngForOf"], ["class", "me-2", 4, "ngFor", "ngForOf"], [1, "text-center", 3, "innerHtml"], [1, "container", "disablePrintArea", "mt-5"], [1, "col-6", "text-center", "d-grid"], ["type", "button", 1, "btn", "btn-lg", "btn-block", "btn-info", "my-1", "py-4", "mb-3", "font-btn", 3, "disabled", "click"], ["src", "./assets/imgs/icons8-label-printer-100.png", "height", "50"], ["type", "button", 1, "btn", "btn-lg", "btn-block", "btn-success", "my-1", "py-4", "mb-3", "font-btn", 3, "click"], [1, "me-2", 3, "hidden"], [1, "me-2"]], template: function PrintDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PrintDetailComponent_Template_a_click_4_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, " Back ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PrintDetailComponent_Template_button_click_7_listener() { return ctx.print("browser"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9, " Browser ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PrintDetailComponent_Template_button_click_10_listener() { return ctx.print("android"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](12, " Android ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 8)(14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15, "TRANSACTION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "h2")(17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 10)(20, "div", 11)(21, "div", 12)(22, "div", 13)(23, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 15)(30, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](31, " Order No : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](36, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "table", 18)(38, "thead")(39, "tr")(40, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Qty");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](43, "Desciption");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, "Price");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Discount");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "th", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](49, "Total");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](51, PrintDetailComponent_tr_51_Template, 20, 14, "tr", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](52, PrintDetailComponent_tr_52_Template, 13, 3, "tr", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "tfoot")(54, "tr")(55, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56, " Subtotal ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](59, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "tr")(61, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62, " Discount ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "td", 19)(64, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](67, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](68, "tr")(69, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, " Discount Member ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "td", 19)(72, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](73, "-");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](75, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "tr")(77, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](78, " Voucher ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](79, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](81, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "tr")(83, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](84, " BKP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](85, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](87, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "tr")(89, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](90, " DPP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](91, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](93, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "tr")(95, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](96, " PPN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](97, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](98);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](99, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "tr")(101, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](102, " Non BKP ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](103, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](104);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](105, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "tr")(107, "td", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](108, " Total (Setelah Pajak) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](109, "td", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](110);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](111, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](112, "div", 24)(113, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](114, "Jangan lupa ambil promo items:");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](115, PrintDetailComponent_span_115_Template, 2, 3, "span", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](116, "div", 24)(117, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](118, "Free item belum diterima karena belum di Scan !");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](119, PrintDetailComponent_span_119_Template, 2, 2, "span", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](120, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](121, "div", 28)(122, "div", 11)(123, "div", 29)(124, "button", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PrintDetailComponent_Template_button_click_124_listener() { return ctx.print("browser"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](125, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](126, " Browser Print ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](127, "div", 29)(128, "button", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PrintDetailComponent_Template_button_click_128_listener() { return ctx.print("android"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](129, "img", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](130, " Android Print ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.printable);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.template.companyName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.template.companyAddress, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.template.companyPhone, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.id);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](36, 26, ctx.date, "medium"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.freeItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](59, 29, ctx.summary.total), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !ctx.summary.discount);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](67, 31, ctx.summary.discount), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", !ctx.summary.discountMember);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](75, 33, ctx.summary.discountMember), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](81, 35, ctx.summary.voucher), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](87, 37, ctx.summary.bkp), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](93, 39, ctx.summary.dpp), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](99, 41, ctx.summary.ppn), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](105, 43, ctx.summary.nonBkp), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](111, 45, ctx.summary.final), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx.freeItem.length < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.freeItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("hidden", ctx.freeItemWaitingScanFail.length < 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.freeItemWaitingScanFail);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHtml", ctx.template.footer, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", !ctx.printable);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__.HeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DecimalPipe], styles: ["*[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByaW50LWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJwcmludC1kZXRhaWwuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIip7XHJcbiAgICBmb250LXNpemU6IDMwcHg7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 7781:
/*!****************************************************************!*\
  !*** ./src/app/print/print-setting/print-setting.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintSettingComponent": () => (/* binding */ PrintSettingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/service/config.service */ 6169);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../header/header.component */ 3482);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);





function PrintSettingComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const x_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("value", x_r1.printername);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](x_r1.printername);
} }
class PrintSettingComponent {
    constructor(configService) {
        this.configService = configService;
        this.note = "";
        this.selectPrinter = [];
        this.loading = false;
    }
    ngOnInit() {
        this.printerName = localStorage.getItem(this.configService.printerName());
        this.reloadData();
    }
    reloadData() {
        console.log("reloadData");
        this.logs("Reload Data");
        this.printerName = localStorage.getItem(this.configService.printerName());
        window['cordova'].plugins.UsbPrinter.getConnectedPrinters((result) => {
            this.selectPrinter = result;
            console.log(result);
            if (result === undefined || result.length == 0) {
                // array does not exist or is empty
                this.logs("PRINTER USB does not exist");
            }
            this.logs("result will be list of printers connected to the usb device");
        }, (err) => {
            console.error(err);
            this.logs("!failure callback execution");
        });
    }
    fnSelectPrinter() {
        window['cordova'].plugins.UsbPrinter.connect(this.printerName, (result) => {
            console.log(result);
            this.logs("! success callback execution");
        }, (err) => {
            console.error(err);
            this.logs("!err : use this method to recognise the disconnection of usb device");
            this.logs("!err : failure callback execution");
        });
    }
    fnSave() {
        this.logs("SAVE() " + this.printerName);
        if (this.printerName != "" && this.printerName != null) {
            this.fnSelectPrinter();
            localStorage.setItem(this.configService.printerName(), this.printerName);
        }
        else {
            alert("Please select printer ID");
            this.note = "Please select printer ID";
            this.logs("! Please select printer ID");
        }
    }
    fnClear() {
        localStorage.removeItem(this.configService.printerName());
        this.reloadData();
        this.logs("CLEAR SAVE");
    }
    back() {
        history.back();
    }
    logs(note) {
        console.log(note);
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
        }
        else {
            window['cordova'].plugins.UsbPrinter.connect(this.printerName, (result) => {
                console.log(result);
                this.logs("! success callback execution");
                window['cordova'].plugins.UsbPrinter.print(this.printerName, message, (result) => {
                    console.log("result of usb print action", result);
                    this.logs("! successful callback execution");
                }, (err) => {
                    console.error('Error in usb print action', err);
                    this.logs("! Error in usb print action");
                });
            }, (err) => {
                console.error(err);
                this.logs("!  // use this method to recognise the disconnection of usb device");
                this.logs("! failure callback execution");
            });
        }
    }
}
PrintSettingComponent.ɵfac = function PrintSettingComponent_Factory(t) { return new (t || PrintSettingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_0__.ConfigService)); };
PrintSettingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PrintSettingComponent, selectors: [["app-print-setting"]], decls: 43, vars: 5, consts: [[1, "container", "mt-5"], [1, "row"], [1, "col-12", "mb-5"], ["href", "javascript:;", 1, "btn", "btn-warning", 3, "click"], [1, "col-8"], [1, "col-4", "text-end"], ["href", "javascript:;", 1, "display-6", 3, "click"], [1, "col-12"], [1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-6"], [1, "d-grid"], ["href", "javascript:;", 1, "btn", "btn-sm", "btn-block", "btn-light", "my-2", "py-2", 3, "click"], ["href", "javascript:;", 1, "btn", "btn-sm", "btn-block", "btn-info", "my-2", "py-2", 3, "click"], [1, "col-12", "text-center", 3, "hidden"], [1, "my-4"], [1, "col-12", "mt-5"], ["type", "text", 1, "form-control", "form-control-lg", 3, "ngModel", "ngModelChange"], [1, "text-center", "mt-5"], ["href", "javascript:;", 1, "btn", "btn-sm", "btn-block", "btn-warning", "my-2", "py-1", 3, "click"], ["src", "./assets/imgs/icons8-label-printer-100.png", "height", "50"], [1, "d-inline"], [1, "mt-1", "p-1", "border", "shadow-md"], [3, "value"]], template: function PrintSettingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrintSettingComponent_Template_a_click_4_listener() { return ctx.back(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5, "Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 1)(7, "div", 4)(8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "PRINTER SETTING");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 5)(11, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrintSettingComponent_Template_a_click_11_listener() { return ctx.reloadData(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12, "Reload()");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 7)(14, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Select USB ID/Address for Printer : ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 7)(17, "select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrintSettingComponent_Template_select_ngModelChange_17_listener($event) { return ctx.printerName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, PrintSettingComponent_option_18_Template, 2, 2, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 10)(20, "div", 11)(21, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrintSettingComponent_Template_a_click_21_listener() { return ctx.fnClear(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "CLEAR SAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 10)(24, "div", 11)(25, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrintSettingComponent_Template_a_click_25_listener() { return ctx.fnSave(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, "SAVE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "div", 14)(28, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, "Loading");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 16)(31, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Save Setting History");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("ngModelChange", function PrintSettingComponent_Template_input_ngModelChange_33_listener($event) { return ctx.printerName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](34, "div", 18)(35, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PrintSettingComponent_Template_a_click_35_listener() { return ctx.fnTestPrinting(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](36, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](37, "h4", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](38, "Test Printing");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](39, "div", 7)(40, "div", 22)(41, "pre");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.printerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.selectPrinter);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", !ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngModel", ctx.printerName);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.note, "  ");
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_1__.HeaderComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmludC1zZXR0aW5nLmNvbXBvbmVudC5jc3MifQ== */"] });


/***/ }),

/***/ 2405:
/*!******************************************!*\
  !*** ./src/app/print/print.component.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintComponent": () => (/* binding */ PrintComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 6169);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../header/header.component */ 3482);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6362);







const _c0 = function (a1) { return ["/print/detail", a1]; };
function PrintComponent_tr_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 11)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "Td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const x_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](7, _c0, x_r1.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 4, x_r1.startDate, "medium"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](x_r1.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](x_r1.memberId);
} }
class PrintComponent {
    constructor(http, configService, activatedRoute, router) {
        this.http = http;
        this.configService = configService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loading = false;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
        this.items = [];
    }
    ngOnInit() {
        this.httpGet();
    }
    httpGet() {
        this.loading = true;
        this.http.get(this.api + 'kioskPrint/index/', { headers: this.configService.headers() }).subscribe(data => {
            this.loading = false;
            console.log(data);
            this.items = data['items'];
        }, e => {
            console.log(e);
        });
    }
}
PrintComponent.ɵfac = function PrintComponent_Factory(t) { return new (t || PrintComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router)); };
PrintComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: PrintComponent, selectors: [["app-print"]], decls: 24, vars: 1, consts: [[1, "container", "py-2", "mt-5"], [1, "row"], [1, "col-6", "text-end"], ["href", "javascript:window.history.back();", 1, "btn", "btn-sm", "py-1", "btn-warning", "font-btn"], [1, "ti", "ti-logout"], [1, "col-6"], [1, "row", "mt-5"], [1, "col-12"], [1, "border", "p-1", "shadow-sm", "bg-white"], [1, "table", "table-sm"], ["style", "cursor: pointer;", 3, "routerLink", 4, "ngFor", "ngForOf"], [2, "cursor", "pointer", 3, "routerLink"]], template: function PrintComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, " BACK ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 5)(8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, " HISTORY TRANSACTION ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 6)(11, "div", 7)(12, "div", 8)(13, "table", 9)(14, "thead")(15, "tr")(16, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17, "Date Transaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19, "ID Transaction");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "ID member");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, PrintComponent_tr_23_Template, 8, 9, "tr", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_header_header_component__WEBPACK_IMPORTED_MODULE_2__.HeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcmludC5jb21wb25lbnQuY3NzIn0= */"] });


/***/ }),

/***/ 6169:
/*!*******************************************!*\
  !*** ./src/app/service/config.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfigService": () => (/* binding */ ConfigService)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto-js */ 6240);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _cookies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cookies.service */ 2786);
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-socket-io */ 4935);
/* harmony import */ var ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-device-detector */ 6618);








class ConfigService {
    constructor(cookies, http, socket, deviceService) {
        this.cookies = cookies;
        this.http = http;
        this.socket = socket;
        this.deviceService = deviceService;
        this.kioskUuid = "t1_kioskUuid";
        this.deviceUuidVar = 'deviceUuid';
        this.varToken = [];
        this.varHeaders = [];
        this.deviceInfo = null;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
        if (localStorage.getItem(this.deviceUuidVar) == null) {
            console.log("tidak ada session login");
        }
        else {
            this.varToken = this.keygen();
        }
    }
    printerName() {
        return "SCO1printerName";
    }
    logout() {
    }
    reloadToken() {
        this.varToken = this.keygen();
    }
    sendMessage(data) {
        this.socket.emit('data', data);
    }
    getMessage() {
        return this.socket.fromEvent('emiter');
    }
    getDocument(id) {
        this.socket.emit('getDoc', id);
    }
    help(data) {
        const msg = {
            to: 'supervisor',
            msg: 'Help! Terminal ID :' + data['terminalId'],
            action: 'help',
        };
        this.sendMessage(msg);
    }
    getKioskUuid() {
        return this.kioskUuid;
    }
    myUUID() {
        return this.kioskUuid;
    }
    deviceUuid() {
        return this.deviceUuidVar;
    }
    headers() {
        this.reloadToken();
        return this.varHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpHeaders({
            'Content-Type': 'application/json',
            'Token': this.keygen(),
        });
    }
    token() {
        return localStorage.getItem(this.deviceUuidVar);
    }
    id_user() {
        this.reloadToken();
        return this.varToken;
    }
    errorToken(data) {
        if (data['error'] == 400) {
            //  window.location.href = "login";
        }
    }
    sytemOff() {
        let url = this.api + 'kioskLogin/index/?token=' + localStorage.getItem(this.deviceUuidVar);
        return this.http.get(url);
    }
    httpAccount() {
        this.reloadToken();
        let url = this.api + 'Kiosks/index/?token=' + this.keygen();
        console.log("httpAccount : ", url);
        return this.http.get(url, { headers: this.headers() });
    }
    reverseString(str) {
        // Step 1. Use the split() method to return a new array
        let splitString = str.split(""); // var splitString = "hello".split("");
        // ["h", "e", "l", "l", "o"]
        // Step 2. Use the reverse() method to reverse the new created array
        let reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
        // ["o", "l", "l", "e", "h"]
        // Step 3. Use the join() method to join all elements of the array into a string
        let joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
        // "olleh"
        //Step 4. Return the reversed string
        return joinArray; // "olleh"
    }
    agent() {
        this.deviceInfo = this.deviceService.getDeviceInfo();
        const isMobile = this.deviceService.isMobile();
        const isTablet = this.deviceService.isTablet();
        const isDesktopDevice = this.deviceService.isDesktop();
        const data = {
            getDeviceInfo: this.deviceService.getDeviceInfo(),
            isMobile: isMobile,
            isTablet: isTablet,
            isDesktopDevice: isDesktopDevice,
        };
        console.log(data);
        return data;
    }
    keygen() {
        let token = false;
        let data = localStorage.getItem(this.deviceUuid());
        if (data != '' && data != null) {
            let word = this.reverseString(data);
            const hash = crypto_js__WEBPACK_IMPORTED_MODULE_1__.MD5(crypto_js__WEBPACK_IMPORTED_MODULE_1__.enc.Latin1.parse(word));
            const md5 = hash.toString(crypto_js__WEBPACK_IMPORTED_MODULE_1__.enc.Hex);
            token = data + "-" + md5;
        }
        return token;
    }
    printer() {
        let data = localStorage.getItem(this.printerName());
        if (data != '' && data != null) {
            return data;
        }
        else {
            return null;
        }
    }
}
ConfigService.ɵfac = function ConfigService_Factory(t) { return new (t || ConfigService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_cookies_service__WEBPACK_IMPORTED_MODULE_2__.CookiesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_5__.Socket), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](ngx_device_detector__WEBPACK_IMPORTED_MODULE_6__.DeviceDetectorService)); };
ConfigService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ConfigService, factory: ConfigService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 2786:
/*!********************************************!*\
  !*** ./src/app/service/cookies.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CookiesService": () => (/* binding */ CookiesService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class CookiesService {
    constructor() { }
    setCookie(cname, cvalue, exdays) {
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    }
    getCookie(cname) {
        var name = cname + "=";
        var decodedCookie = decodeURIComponent(document.cookie);
        var ca = decodedCookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }
}
CookiesService.ɵfac = function CookiesService_Factory(t) { return new (t || CookiesService)(); };
CookiesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CookiesService, factory: CookiesService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8929:
/*!*********************************************!*\
  !*** ./src/app/service/printing.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrintingService": () => (/* binding */ PrintingService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class PrintingService {
    constructor() { }
    stringfix(txt, l = 0, pos = '') {
        let data = txt.toString();
        let len = data.length;
        let space = "";
        if (len < l) {
            for (var i = 0; i < l - len; i++) {
                space += " ";
            }
        }
        if (pos == 'f') {
            data = space + data;
        }
        else {
            data = data + space;
        }
        return data;
    }
    numberFormat(price) {
        let data = price.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,").toString().replace(".00", "");
        return data;
    }
    template(bill) {
        let items = bill['items'];
        let summary = bill['summary'];
        let message = "\n\n";
        console.log(items);
        console.log("123456789-123456789-123456789-123456789-12345678" + "\n");
        message += bill['template']['companyName'] + "\n";
        message += bill['template']['companyAddress'] + "\n";
        message += bill['template']['companyPhone'] + "\n";
        message += "────────────────────────────────────────────────" + "\n";
        items.forEach((el) => {
            message += el['itemId'] + " " + el['shortDesc'] + "\n";
            message +=
                this.stringfix(el['qty'], 4) + " X " +
                    this.stringfix(this.numberFormat(el['price']), 10, 'f') + " " +
                    (el['totalDiscount'] > 0 ? this.stringfix("(DISC " + this.numberFormat(el['totalDiscount']) + ")", 14, 'f') + ")" : "") + this.stringfix(" ", 14, 'f') +
                    // this.stringfix("(DISC 23,000)", 14) + 
                    this.stringfix(this.numberFormat(el['totalPrice']), 10, 'f') +
                    "\n";
        });
        message += "================================================" + "\n";
        message += "\n";
        message += "SUBTOTAL              :" + this.stringfix(this.numberFormat(summary['total']), 24, 'f') + "\n";
        message += "DISCOUNT              :" + this.stringfix(this.numberFormat(summary['discount']), 24, 'f') + "\n";
        message += "DISCOUNT MEMBER       :" + this.stringfix(this.numberFormat(summary['discountMember']), 24, 'f') + "\n";
        message += "VOUCHER               :" + this.stringfix(this.numberFormat(summary['voucher']), 24, 'f') + "\n";
        message += "TOTAL (SETELAH PAJAK) :" + this.stringfix(this.numberFormat(summary['final']), 24, 'f') + "\n";
        //console.log("123456789-123456789-123456789-123456789-12345678"+"\n");
        message += "\n";
        message += "        BKP         PPN         DPP     NON BKP" + "\n";
        //          0           0           0           0
        message += this.stringfix(this.numberFormat(summary['bkp']), 11, 'f') + " " +
            this.stringfix(this.numberFormat(summary['ppn']), 11, 'f') + " " +
            this.stringfix(this.numberFormat(summary['dpp']), 11, 'f') + " " +
            this.stringfix(this.numberFormat(summary['nonBkp']), 11, 'f');
        message += "\n\n";
        message += "BILL                  : " + bill['id'] + "\n";
        message += "DATE                  : " + bill['date'] + "\n";
        message += "UNIT / OUTLET ID      : " + bill['detail']['terminalId'] + "/" + bill['detail']['storeOutlesId'] + " \n";
        message += "\n";
        message += bill['template']['footer'].replace("<br>", "\n") + "\n\n\n\n";
        console.log(message);
        return message;
    }
}
PrintingService.ɵfac = function PrintingService_Factory(t) { return new (t || PrintingService)(); };
PrintingService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PrintingService, factory: PrintingService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 8945:
/*!**********************************************!*\
  !*** ./src/app/startup/startup.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartupComponent": () => (/* binding */ StartupComponent)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 2340);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/service/config.service */ 6169);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 6362);






const _c0 = function () { return ["/print/setting"]; };
class StartupComponent {
    constructor(http, configService, activatedRoute, router) {
        this.http = http;
        this.configService = configService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.loading = false;
        this.api = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.api;
        this.serialNumber = "";
        this.terminal = {
            id: "",
            name: "",
            storeOutlesId: "",
            keyLisence: "",
            token: "",
            status: 0,
            presence: 0,
            inputBy: 0,
            inputDate: 0,
            updateDate: 0,
            updateBy: 0
        };
        this.agent = [];
        this.deviceUuid = "";
        this.error = true;
        this.note = "";
        this.systemOnline = false;
        this.platform = "browser";
    }
    ngOnInit() {
        let onDeviceReady = () => {
            console.log('cordova ', device.cordova);
            console.log('model ', device.model);
            console.log('platform ', device.platform);
            console.log('uuid ', device.uuid);
            console.log('manufacturer ', device.manufacturer);
            console.log('isVirtual ', device.isVirtual);
            console.log('serial ', device.serial);
        };
        document.addEventListener('deviceready', onDeviceReady, false);
        this.reload();
    }
    reload() {
        this.fnSaveDeviceID();
        this.httpGet();
        this.printer = this.configService.printer();
    }
    fnSaveDeviceID() {
        this.agent = this.configService.agent();
        if (this.agent.isDesktopDevice === true) {
            this.platform = "isDesktopDevice";
            console.log("isDesktopDevice");
            localStorage.setItem(this.configService.deviceUuid(), src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.token);
            this.serialNumber = src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.token;
        }
        else {
            this.platform = "isTablet";
            console.log("isTablet");
            localStorage.setItem(this.configService.deviceUuid(), device.serial);
            this.serialNumber = device.serial;
        }
    }
    httpGet() {
        console.log("keygen  ", this.configService.keygen());
        this.loading = true;
        let api = this.api + 'kioskStartup/account/?token=' + this.configService.keygen();
        console.log(api);
        this.http.get(api).subscribe(data => {
            this.error = data['error'];
            this.loading = false;
            this.note = data['note'];
            this.terminal = data['terminal'];
            this.systemOnline = data['systemOnline'];
        }, e => {
            console.log(e);
        });
    }
    start() {
        this.router.navigate(['login']);
    }
}
StartupComponent.ɵfac = function StartupComponent_Factory(t) { return new (t || StartupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_service_config_service__WEBPACK_IMPORTED_MODULE_1__.ConfigService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
StartupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: StartupComponent, selectors: [["app-startup"]], decls: 72, vars: 18, consts: [[1, "bgn"], [1, "container", "mt-5"], [1, "row"], [1, "col-12"], [1, "p-5"], [1, "text-center"], [1, "text-center", "text-danger", "mb-4"], [3, "hidden"], [1, "border", "p-3", "rounded", "bg-white", "shadow-sm", "mb-2"], [1, "table", "table-borderless"], ["width", "40%"], [3, "routerLink"], [1, "d-grid", "mt-3", "text-center"], ["type", "button", 1, "btn", "btn-lg", "btn-info", "text-white", "rounded", "py-2", "my-5", "font-btn", 3, "disabled", "click"], [1, "mt-4"], ["href", "javascript:;", 3, "click"]], template: function StartupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 6)(8, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "div", 8)(12, "table", 9)(13, "tr")(14, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "Divice Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "tr")(19, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](20, "Platform");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "tr")(24, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25, " Serial Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](26, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27, ": ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](28, "code");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "tr")(31, "td", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](32, "Terminal ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](33, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "tr")(36, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](37, "Store Outlet ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](38, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](40, "tr")(41, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](42, "Terminal Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](43, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](45, "tr")(46, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](47, "Register");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](48, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](49);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](50, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](51, "tr")(52, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](53, "Status");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](54, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](55);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](56, "tr")(57, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](58, "Printer USB");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](59, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](60);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](61, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](62, "td");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](63, "td")(64, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](65, "Setting Printer");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](66, "div", 12)(67, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StartupComponent_Template_button_click_67_listener() { return ctx.start(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](68, "Login Terminal");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](69, "div", 14)(70, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function StartupComponent_Template_a_click_70_listener() { return ctx.reload(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](71, "Reload");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.loading ? "Loading" : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", ctx.note, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("hidden", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](": ", ctx.terminal.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](": ", ctx.platform, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.serialNumber);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](": ", ctx.terminal.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](": ", ctx.terminal.storeOutlesId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](": ", ctx.terminal.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](": ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](50, 14, ctx.terminal.inputDate * 1000, "short"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](": ", ctx.systemOnline, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](": ", ctx.printer, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](17, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("disabled", !ctx.systemOnline);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], styles: [".bgn[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0px;\r\n    top: 0px;\r\n    z-index: -999;\r\n    \r\n    background: rgb(255,255,255);\r\nbackground: linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(229,240,240,1) 100%);\r\nfilter: progid:DXImageTransform.Microsoft.gradient(startColorstr=\"#ffffff\",endColorstr=\"#e5f0f0\",GradientType=1);\r\n}\r\n\r\n \r\n\r\na[_ngcontent-%COMP%], p[_ngcontent-%COMP%]{\r\n    font-size: 30px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0dXAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLFNBQVM7SUFDVCxRQUFRO0lBQ1IsYUFBYTs7SUFFYiw0QkFBNEI7QUFHaEMscUZBQXFGO0FBQ3JGLGdIQUFnSDtBQUNoSDs7OztBQUlBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzdGFydHVwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmdue1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwcHg7XHJcbiAgICB0b3A6IDBweDtcclxuICAgIHotaW5kZXg6IC05OTk7XHJcbiAgICBcclxuICAgIGJhY2tncm91bmQ6IHJnYigyNTUsMjU1LDI1NSk7XHJcbmJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KDE4MGRlZywgcmdiYSgyNTUsMjU1LDI1NSwxKSAwJSwgcmdiYSgyMjksMjQwLDI0MCwxKSAxMDAlKTtcclxuYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDIyOSwyNDAsMjQwLDEpIDEwMCUpO1xyXG5iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTgwZGVnLCByZ2JhKDI1NSwyNTUsMjU1LDEpIDAlLCByZ2JhKDIyOSwyNDAsMjQwLDEpIDEwMCUpO1xyXG5maWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPVwiI2ZmZmZmZlwiLGVuZENvbG9yc3RyPVwiI2U1ZjBmMFwiLEdyYWRpZW50VHlwZT0xKTtcclxufVxyXG5cclxuIFxyXG5cclxuYSwgcHtcclxuICAgIGZvbnQtc2l6ZTogMzBweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ 3855:
/*!************************************************************!*\
  !*** ./src/app/system-offline/system-offline.component.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SystemOfflineComponent": () => (/* binding */ SystemOfflineComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);


const _c0 = function () { return ["/login"]; };
class SystemOfflineComponent {
    constructor() { }
    ngOnInit() {
    }
}
SystemOfflineComponent.ɵfac = function SystemOfflineComponent_Factory(t) { return new (t || SystemOfflineComponent)(); };
SystemOfflineComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SystemOfflineComponent, selectors: [["app-system-offline"]], decls: 11, vars: 2, consts: [[1, "bgn"], [1, "container"], [1, "row"], [1, "col-12", "text-center"], ["src", "./assets/galleries/close.jpg", "width", "90%"], [1, "btn", "btn-lg", "btn-warning", "mt-4", 3, "routerLink"]], template: function SystemOfflineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "SORRY WE WERE");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " CLOSE NOW ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Relogin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterLinkWithHref], styles: [".bgn[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    width: 100%;\r\n    height: 100%;\r\n    left: 0px;\r\n    top: 0px;\r\n    z-index: -999;\r\n    background-color: #FFEDD9;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN5c3RlbS1vZmZsaW5lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsUUFBUTtJQUNSLGFBQWE7SUFDYix5QkFBeUI7QUFDN0IiLCJmaWxlIjoic3lzdGVtLW9mZmxpbmUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5iZ257XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGxlZnQ6IDBweDtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgei1pbmRleDogLTk5OTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkVERDk7XHJcbn0iXX0= */"] });


/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
const environment = {
    production: false,
    //  api: "http://localhost/application/cso/api/", 
    //  base_url: "#/",
    //  version : "1.1b",
    //  token : 'DEV-WEBBASE-15fc3cec',
    //  socket_url : 'http://localhost:3000',
    api: env_api,
    base_url: "#/",
    version: "1.1",
    token: 'DEV-WEBBASE-15fc3cec',
    socket_url: env_socket,
};


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 2480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map