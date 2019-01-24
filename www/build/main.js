webpackJsonp([2],{

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__node_modules_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the RestServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestServiceProvider = /** @class */ (function () {
    function RestServiceProvider(http) {
        this.http = http;
        console.log('Hello RestServiceProvider Provider');
    }
    RestServiceProvider.prototype.createHeader = function (headers) {
        //headers.append('X-Session-Token', 'OTAgOTAgOTAgLjk+Jkc1==');
        headers.append('X-Session-Token', 'abcd');
    };
    RestServiceProvider.prototype.getData = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        this.createHeader(headers);
        console.log(this.BaseURL);
        var targetURL = this.BaseURL + "/system/conf/sshd";
        return this.http.get(targetURL, {
            headers: headers
        })
            .do(this.logResponse)
            .map(this.extractData)
            .catch(this.catchError);
    };
    RestServiceProvider.prototype.catchError = function (error) {
        console.log(error);
        return __WEBPACK_IMPORTED_MODULE_5__node_modules_rxjs_Observable__["Observable"].throw(error.json().error || "Server error.");
    };
    RestServiceProvider.prototype.logResponse = function (res) {
        console.log(res);
    };
    RestServiceProvider.prototype.extractData = function (res) {
        return res.json();
    };
    RestServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], RestServiceProvider);
    return RestServiceProvider;
}());

//# sourceMappingURL=rest-service.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_show_result_show_result__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_service_rest_service__ = __webpack_require__(112);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, restService) {
        this.navCtrl = navCtrl;
        this.restService = restService;
        this.showResult = __WEBPACK_IMPORTED_MODULE_2__pages_show_result_show_result__["a" /* ShowResultPage */];
        this.hostnameURL = '';
    }
    HomePage.prototype.showResultPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__pages_show_result_show_result__["a" /* ShowResultPage */]);
    };
    HomePage.prototype.formatHostname = function () {
        this.hostnameURL = "http://" + this.hostnameURL + ":8080/api";
        this.readTargetURL();
        this.showResultPage();
    };
    HomePage.prototype.isTextBoxBlank = function () {
        if (this.hostnameURL != null) {
            if (this.hostnameURL.length == 0)
                return false;
            return true;
        }
        return false;
    };
    HomePage.prototype.readTargetURL = function () {
        this.restService.BaseURL = this.hostnameURL;
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Projects\ionic\secLinux\mySecNew\src\pages\home\home.html"*/'<ion-header>\n \n</ion-header>\n\n<ion-content>\n    <ion-card text-center>\n        <ion-card-header>\n         ~~~ Linux Audit ~~~\n        </ion-card-header>\n        <ion-card-content>\n         Audit your Linux Host for security gaps\n        </ion-card-content>\n      </ion-card>\n\n      <ion-item>\n        <ion-input type="text" placeholder="Hostname/IP" [(ngModel)]="hostnameURL"></ion-input>\n      </ion-item>\n  \n      <ion-item text-center>\n        <button ion-button default (click)="formatHostname()" color="blue" [disabled]=!isTextBoxBlank()>Scan</button>\n      </ion-item>\n    </ion-content>\n'/*ion-inline-end:"D:\Projects\ionic\secLinux\mySecNew\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_service_rest_service__["a" /* RestServiceProvider */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowResultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_rest_service_rest_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import { ApiRouterProvider } from '../../providers/api-router/api-router';


var ShowResultPage = /** @class */ (function () {
    function ShowResultPage(navCtrl, RestServiceProvider) {
        this.navCtrl = navCtrl;
        this.RestServiceProvider = RestServiceProvider;
        this.dataList = [];
        this.getData();
    }
    ShowResultPage.prototype.getData = function () {
        var _this = this;
        this.RestServiceProvider.getData().subscribe(function (data) { return _this.dataList = Array.of(data); });
    };
    ShowResultPage.prototype.homePage = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ShowResultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-show-result',template:/*ion-inline-start:"D:\Projects\ionic\secLinux\mySecNew\src\pages\show-result\show-result.html"*/'<!--\n  Generated template for the ShowResultPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n    <button ion-button default (click)="homePage()" color="blue" >Back</button>  \n-->\n<ion-header>\n\n  <ion-navbar hideBackButton>  \n      <ion-buttons left>\n          <button ion-button icon-only (click)="homePage()" class="my-style-for-modal">\n              <ion-icon name="arrow-back"></ion-icon>\n          </button>\n      </ion-buttons>\n    \n      <ion-title text-center>Scan Result</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    \n    <ion-card *ngFor="let data of dataList">\n      <!--\n    <ion-card>\n      <ion-item>\n       <h2>AcceptEnv </h2>  \n       <p>{{data.AcceptEnv}}</p>\n       <ion-icon name="checkmark" item-right color="secondary"></ion-icon>\n       <ion-icon name="close"item-right color="danger"></ion-icon>\n     </ion-item>\n     </ion-card>\n\n\n    <ion-card>\n     <ion-item>\n       <h2>ChallengeResponseAuthentication</h2>\n        <p>{{data.ChallengeResponseAuthentication}}</p>\n        <ion-icon name="checkmark" item-right color="secondary"></ion-icon>\n        <ion-icon name="close"item-right color="danger"></ion-icon>\n        </ion-item>\n      </ion-card>\n\n    <ion-card>\n        <ion-item>\n           <h2>PrintMotd</h2>\n           <p>{{data.PrintMotd}}</p>\n           <ion-icon name="checkmark" item-right color="secondary"></ion-icon>\n           <ion-icon name="close"item-right color="danger"></ion-icon>\n        </ion-item>\n      </ion-card>\n      \n    <ion-card>\n         <ion-item>\n             <h2>Subsystem</h2>\n             <p>{{data.Subsystem}}</p>\n             <ion-icon name="checkmark" item-right color="secondary"></ion-icon>\n             <ion-icon name="close"item-right color="danger"></ion-icon>\n         </ion-item>\n        </ion-card>    \n        \n        <ion-card>\n            <ion-item>\n              <h1>Disable Host-Based Authentication</h1>\n              <div *ngIf="data.HostbasedAuthentication == \'yes\'; else HostbasedAuthentication ">\n                 [failed]: Set to <i>{{data.HostbasedAuthentication}}</i>\n                 <ion-icon name="close"item-right color="danger"></ion-icon>\n              </div>\n   \n              <ng-template #HostbasedAuthentication >\n                  [Safe]: Set to <i>{{data.HostbasedAuthentication}}</i>\n               </ng-template>  \n               <ion-icon name="checkmark" item-right color="secondary"></ion-icon>    \n            </ion-item>\n           </ion-card>\n          -->\n           <!-- First Card Start-->\n          <ion-card>\n              <ion-item>\n                <h1>Disable Host-Based Authentication</h1>\n               <ng-container *ngIf="data.HostbasedAuthentication == \'yes\'; else HostbasedAuthentication ">\n                  [failed]: Set to <i>{{data.HostbasedAuthentication}}</i>\n                   <ion-icon name="close"item-right color="danger"></ion-icon>\n                </ng-container>\n     \n                <ng-template #HostbasedAuthentication >\n           <ng-container *ngIf="data.HostbasedAuthentication == \'no\'; else NotFound ">\n              [Safe]: Set to <i>{{data.HostbasedAuthentication}}</i>\n              <ion-icon name="checkmark" item-right color="secondary"></ion-icon> \n            </ng-container>\n                 </ng-template> \n           \n           <ng-template #NotFound>[failed]:<i>Value is not Set</i>\n            <ion-icon name="close"item-right color="danger"></ion-icon>\n          </ng-template>			\n           \n              </ion-item>\n             </ion-card>\n\n<!-- First Card End-->\n\n\n<!-- Second Card Start-->\n             <ion-card>\n                <ion-item>\n                  <h1>Disable Empty Passwords</h1>\n                 <ng-container *ngIf="data.PermitEmptyPasswords == \'yes\'; else PermitEmptyPasswords ">\n                    [failed]: Set to <i>{{data.PermitEmptyPasswords}}</i>\n                     <ion-icon name="close"item-right color="danger"></ion-icon>\n                  </ng-container>\n       \n                  <ng-template #PermitEmptyPasswords >\n             <ng-container *ngIf="data.PermitEmptyPasswords == \'no\'; else NotFoundPermitEmptyPasswords ">\n                [Safe]: Set to <i>{{data.PermitEmptyPasswords}}</i>\n                <ion-icon name="checkmark" item-right color="secondary"></ion-icon> \n              </ng-container>\n                   </ng-template> \n             \n             <ng-template #NotFoundPermitEmptyPasswords>[failed]:<i>Value is not Set</i>\n              <ion-icon name="close"item-right color="danger"></ion-icon>\n            </ng-template>			\n             \n                </ion-item>\n               </ion-card>\n<!-- Second Card End-->\n\n\n<!-- Third Card Start-->\n               <ion-card>\n                  <ion-item>\n                    <h1>Disable Root Login</h1>\n                   <ng-container *ngIf="data.PermitRootLogin == \'yes\'; else PermitRootLogin ">\n                      [failed]: Set to <i>{{data.PermitRootLogin}}</i>\n                       <ion-icon name="close"item-right color="danger"></ion-icon>\n                    </ng-container>\n         \n                    <ng-template #PermitRootLogin >\n               <ng-container *ngIf="data.PermitRootLogin == \'no\'; else NotFoundPermitRootLogin ">\n                  [Safe]: Set to <i>{{data.PermitRootLogin}}</i>\n                  <ion-icon name="checkmark" item-right color="secondary"></ion-icon> \n                </ng-container>\n                     </ng-template> \n               \n               <ng-template #NotFoundPermitRootLogin>[failed]: <i>Value is not Set</i>\n                <ion-icon name="close"item-right color="danger"></ion-icon>\n              </ng-template>			\n               \n                  </ion-item>\n                 </ion-card>\n<!-- Third Card End-->\n\n\n<!-- Fourth Card Start-->\n                 <ion-card>\n                    <ion-item>\n                      <h1>Configure SSH to use PAM</h1>\n                     <ng-container *ngIf="data.UsePAM == \'no\'; else UsePAM ">\n                        [failed]: Set to <i>{{data.UsePAM}}</i>\n                         <ion-icon name="close"item-right color="danger"></ion-icon>\n                      </ng-container>\n           \n                      <ng-template #UsePAM >\n                 <ng-container *ngIf="data.UsePAM == \'yes\'; else NotFoundUsePAM ">\n                    [Safe]: Set to <i>{{data.UsePAM}}</i>\n                    <ion-icon name="checkmark" item-right color="secondary"></ion-icon> \n                  </ng-container>\n                       </ng-template> \n                 \n                 <ng-template #NotFoundUsePAM>[failed]: <i>Value is not Set</i>\n                  <ion-icon name="close"item-right color="danger"></ion-icon>\n                </ng-template>			\n                 \n                    </ion-item>\n                   </ion-card>\n<!-- Fourth Card End-->\n\n\n<!-- Fifth Card Start-->\n                   <ion-card>\n                      <ion-item>\n                        <h1>Use of X11Forwarding</h1>\n                       <ng-container *ngIf="data.X11Forwarding == \'yes\'; else X11Forwarding ">\n                          [failed]: Set to <i>{{data.X11Forwarding}}</i>\n                         \n                           <ion-icon name="close"item-right color="danger"></ion-icon>\n                        </ng-container>\n             \n                        <ng-template #X11Forwarding >\n                   <ng-container *ngIf="data.X11Forwarding == \'yes\'; else NotFoundX11Forwarding ">\n                      [Safe]: Set to <i>{{data.X11Forwarding}}</i>\n                      <ion-icon name="checkmark" item-right color="secondary"></ion-icon> \n                    </ng-container>\n                         </ng-template> \n                   \n                   <ng-template #NotFoundX11Forwarding>[failed]: <i>Value is not Set</i>\n                    <ion-icon name="close"ng-item-right color="danger"></ion-icon>\n                  </ng-template>			\n                  \n                      </ion-item>\n                     </ion-card>\n   <!-- Fifth Card end-->\n    </ion-card>\n  \n   </ion-content>\n   \n\n'/*ion-inline-end:"D:\Projects\ionic\secLinux\mySecNew\src\pages\show-result\show-result.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1__providers_rest_service_rest_service__["a" /* RestServiceProvider */]])
    ], ShowResultPage);
    return ShowResultPage;
}());

//# sourceMappingURL=show-result.js.map

/***/ }),

/***/ 160:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 160;

/***/ }),

/***/ 205:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/show-error/show-error.module": [
		674,
		0
	],
	"../pages/show-result/show-result.module": [
		675,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 205;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(347);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(351);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 351:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(673);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_rest_service_rest_service__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_show_result_show_result__ = __webpack_require__(149);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_show_result_show_result__["a" /* ShowResultPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/show-error/show-error.module#ShowErrorPageModule', name: 'ShowErrorPage', segment: 'show-error', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/show-result/show-result.module#ShowResultPageModule', name: 'ShowResultPage', segment: 'show-result', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* HttpModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_show_result_show_result__["a" /* ShowResultPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_8__providers_rest_service_rest_service__["a" /* RestServiceProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 673:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(345);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(342);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(126);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Projects\ionic\secLinux\mySecNew\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"D:\Projects\ionic\secLinux\mySecNew\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[346]);
//# sourceMappingURL=main.js.map