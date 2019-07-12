webpackJsonp([0],{

/***/ 103:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search_flights_search_flights__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__search_hotel_search_hotel__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__search_train_search_train__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_holiday_search_holiday__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__search_bus_search_bus__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__search_cab_search_cab__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__search_homestay_search_homestay__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__hotel_info_hotel_info__ = __webpack_require__(107);
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
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage.prototype.search_flights = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__search_flights_search_flights__["a" /* Search_flightsPage */]);
    };
    HomePage.prototype.search_hotel = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__search_hotel_search_hotel__["a" /* Search_hotelPage */]);
    };
    HomePage.prototype.search_train = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__search_train_search_train__["a" /* Search_trainPage */]);
    };
    HomePage.prototype.search_holiday = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__search_holiday_search_holiday__["a" /* Search_holidayPage */]);
    };
    HomePage.prototype.search_bus = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__search_bus_search_bus__["a" /* Search_busPage */]);
    };
    HomePage.prototype.search_cab = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__search_cab_search_cab__["a" /* Search_cabPage */]);
    };
    HomePage.prototype.search_homestay = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__search_homestay_search_homestay__["a" /* Search_homestayPage */]);
    };
    HomePage.prototype.hotel_info = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__hotel_info_hotel_info__["a" /* Hotel_infoPage */]);
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\home\home.html"*/'<ion-header class="theme_header bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            {{\'hey\' | translate}} Sam,\n            <br>\n            {{\'where_you_wanna_go\' | translate}}\n        </ion-title>\n    </ion-navbar>\n    <div class="banner">\n        <div class="banner_bg center_img">\n            <img src="assets/imgs/banner_bg.png" class="crop_img">\n        </div>\n        <div class="your_location d-flex">\n            <ion-icon class="zmdi zmdi-pin"></ion-icon>\n            <h3>Manhattan, New York</h3>\n        </div>\n\n        <div class="menu">\n            <ion-row>\n                <ion-col col-3>\n                    <div class="menu_items" (click)="search_flights()">\n                        <img src="assets/imgs/ic_flight.png">\n                        <p>{{\'flight\' | translate}}</p>\n                    </div>\n                </ion-col>\n                <ion-col col-3>\n                    <div class="menu_items" (click)="search_hotel()">\n                        <img src="assets/imgs/ic_hotels.png">\n                        <p>{{\'hotels\' | translate}}</p>\n                    </div>\n                </ion-col>\n                <ion-col col-3>\n                    <div class="menu_items" (click)="search_train()">\n                        <img src="assets/imgs/ic_train.png">\n                        <p>{{\'trains\' | translate}}</p>\n                    </div>\n                </ion-col>\n                <ion-col col-3>\n                    <div class="menu_items" (click)="search_holiday()">\n                        <img src="assets/imgs/ic_holiday.png">\n                        <p>{{\'holidays\' | translate}}</p>\n                    </div>\n                </ion-col>\n                <ion-col col-3>\n                    <div class="menu_items" (click)="search_bus()">\n                        <img src="assets/imgs/ic_bus.png">\n                        <p>{{\'bus\' | translate}}</p>\n                    </div>\n                </ion-col>\n                <ion-col col-3>\n                    <div class="menu_items" (click)="search_cab()">\n                        <img src="assets/imgs/ic_cabs.png">\n                        <p>{{\'cabs\' | translate}}</p>\n                    </div>\n                </ion-col>\n                <ion-col col-3>\n                    <div class="menu_items" (click)="search_homestay()">\n                        <img src="assets/imgs/ic_homestay.png">\n                        <p>{{\'homestays\' | translate}}</p>\n                    </div>\n                </ion-col>\n                <ion-col col-3>\n                    <div class="menu_items">\n                        <img src="assets/imgs/ic_more.png">\n                        <p>{{\'more\' | translate}}</p>\n                    </div>\n                </ion-col>\n\n            </ion-row>\n        </div>\n    </div>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="scroll_box">\n        <div class="heading_box">\n            <h2>Exclusive Hotels</h2>\n            <p>Experience actual meaning of awesomeness</p>\n        </div>\n        <ion-scroll scrollX="true">\n            <div class="items_scroll" (click)="hotel_info()">\n                <div class="item_img center_img">\n                    <img src="assets/imgs/hotel2.png" class="crop_img">\n                </div>\n                <div class="item_details">\n                    <h2>Hotel Hexel Paradise</h2>\n                    <h3 class="d-flex">Manthattan Beach <span class="end">$1449.00</span></h3>\n                </div>\n            </div>\n            <div class="items_scroll" (click)="hotel_info()">\n                <div class="item_img center_img">\n                    <img src="assets/imgs/hotel1.png" class="crop_img">\n                </div>\n                <div class="item_details">\n                    <h2>Hotel Silver Leaf</h2>\n                    <h3 class="d-flex">Manthattan Beach <span class="end">$1449.00</span></h3>\n                </div>\n            </div>\n            <div class="items_scroll" (click)="hotel_info()">\n                <div class="item_img center_img">\n                    <img src="assets/imgs/hotel2.png" class="crop_img">\n                </div>\n                <div class="item_details">\n                    <h2>Hotel Hexel Paradise</h2>\n                    <h3 class="d-flex">Manthattan Beach <span class="end">$1449.00</span></h3>\n                </div>\n            </div>\n            <div class="items_scroll" (click)="hotel_info()">\n                <div class="item_img center_img">\n                    <img src="assets/imgs/hotel1.png" class="crop_img">\n                </div>\n                <div class="item_details">\n                    <h2>Hotel Silver Leaf</h2>\n                    <h3 class="d-flex">Manthattan Beach <span class="end">$1449.00</span></h3>\n                </div>\n            </div>\n            <div class="items_scroll" (click)="hotel_info()">\n                <div class="item_img center_img">\n                    <img src="assets/imgs/hotel2.png" class="crop_img">\n                </div>\n                <div class="item_details">\n                    <h2>Hotel Hexel Paradise</h2>\n                    <h3 class="d-flex">Manthattan Beach <span class="end">$1449.00</span></h3>\n                </div>\n            </div>\n            <div class="items_scroll" (click)="hotel_info()">\n                <div class="item_img center_img">\n                    <img src="assets/imgs/hotel1.png" class="crop_img">\n                </div>\n                <div class="item_details">\n                    <h2>Hotel Silver Leaf</h2>\n                    <h3 class="d-flex">Manthattan Beach <span class="end">$1449.00</span></h3>\n                </div>\n            </div>\n            <div class="items_scroll" (click)="hotel_info()">\n                <div class="item_img center_img">\n                    <img src="assets/imgs/hotel2.png" class="crop_img">\n                </div>\n                <div class="item_details">\n                    <h2>Hotel Hexel Paradise</h2>\n                    <h3 class="d-flex">Manthattan Beach <span class="end">$1449.00</span></h3>\n                </div>\n            </div>\n            <div class="items_scroll" (click)="hotel_info()">\n                <div class="item_img center_img">\n                    <img src="assets/imgs/hotel1.png" class="crop_img">\n                </div>\n                <div class="item_details">\n                    <h2>Hotel Silver Leaf</h2>\n                    <h3 class="d-flex">Manthattan Beach <span class="end">$1449.00</span></h3>\n                </div>\n            </div>\n        </ion-scroll>\n    </div>\n\n    <div class="scroll_box">\n        <div class="heading_box">\n            <h2>Exclusive Hotels</h2>\n            <p>Experience actual meaning of awesomeness</p>\n        </div>\n        <ion-scroll scrollX="true">\n            <div class="items_scroll" (click)="hotel_info()">\n                <div class="item_img center_img">\n                    <img src="assets/imgs/hotel2.png" class="crop_img">\n                </div>\n                <div class="item_details">\n                    <h2>Hotel Hexel Paradise</h2>\n                    <h3 class="d-flex">Manthattan Beach <span class="end">$1449.00</span></h3>\n                </div>\n            </div>\n            <div class="items_scroll" (click)="hotel_info()">\n                <div class="item_img center_img">\n                    <img src="assets/imgs/hotel1.png" class="crop_img">\n                </div>\n                <div class="item_details">\n                    <h2>Hotel Silver Leaf</h2>\n                    <h3 class="d-flex">Manthattan Beach <span class="end">$1449.00</span></h3>\n                </div>\n            </div>\n            <div class="items_scroll" (click)="hotel_info()">\n                <div class="item_img center_img">\n                    <img src="assets/imgs/hotel2.png" class="crop_img">\n                </div>\n                <div class="item_details">\n                    <h2>Hotel Hexel Paradise</h2>\n                    <h3 class="d-flex">Manthattan Beach <span class="end">$1449.00</span></h3>\n                </div>\n            </div>\n            <div class="items_scroll" (click)="hotel_info()">\n                <div class="item_img center_img">\n                    <img src="assets/imgs/hotel1.png" class="crop_img">\n                </div>\n                <div class="item_details">\n                    <h2>Hotel Silver Leaf</h2>\n                    <h3 class="d-flex">Manthattan Beach <span class="end">$1449.00</span></h3>\n                </div>\n            </div>\n            <div class="items_scroll" (click)="hotel_info()">\n                <div class="item_img center_img">\n                    <img src="assets/imgs/hotel2.png" class="crop_img">\n                </div>\n                <div class="item_details">\n                    <h2>Hotel Hexel Paradise</h2>\n                    <h3 class="d-flex">Manthattan Beach <span class="end">$1449.00</span></h3>\n                </div>\n            </div>\n            <div class="items_scroll" (click)="hotel_info()">\n                <div class="item_img center_img">\n                    <img src="assets/imgs/hotel1.png" class="crop_img">\n                </div>\n                <div class="item_details">\n                    <h2>Hotel Silver Leaf</h2>\n                    <h3 class="d-flex">Manthattan Beach <span class="end">$1449.00</span></h3>\n                </div>\n            </div>\n            <div class="items_scroll" (click)="hotel_info()">\n                <div class="item_img center_img">\n                    <img src="assets/imgs/hotel2.png" class="crop_img">\n                </div>\n                <div class="item_details">\n                    <h2>Hotel Hexel Paradise</h2>\n                    <h3 class="d-flex">Manthattan Beach <span class="end">$1449.00</span></h3>\n                </div>\n            </div>\n            <div class="items_scroll" (click)="hotel_info()">\n                <div class="item_img center_img">\n                    <img src="assets/imgs/hotel1.png" class="crop_img">\n                </div>\n                <div class="item_details">\n                    <h2>Hotel Silver Leaf</h2>\n                    <h3 class="d-flex">Manthattan Beach <span class="end">$1449.00</span></h3>\n                </div>\n            </div>\n        </ion-scroll>\n    </div>\n</ion-content>'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterPage = /** @class */ (function () {
    function FilterPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    FilterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-filter',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\filter\filter.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'sort_filters\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-list no-lines>\n        <ion-card radio-group>\n            <h2>{{\'sort_by\' | translate}}</h2>\n            <ion-scroll scrollX="true">\n                <ion-item>\n                    <ion-label>\n                        <h3>Price</h3>\n                    </ion-label>\n                    <ion-radio checked="true" value="Price"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <h3>Dept. Time</h3>\n                    </ion-label>\n                    <ion-radio value="dept"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <h3>Arrv. Time</h3>\n                    </ion-label>\n                    <ion-radio value="arrv"></ion-radio>\n                </ion-item>\n            </ion-scroll>\n        </ion-card>\n\n\n        <ion-card>\n            <h2 style="padding-bottom: 0;">{{\'price_range\' | translate}}</h2>\n            <ion-item>\n                <h3 item-start>$100</h3>\n                <ion-range min="-200" max="200" pin="true" [(ngModel)]="contrast">\n                </ion-range>\n                <h3 item-end>$1000</h3>\n            </ion-item>\n        </ion-card>\n\n        <ion-card radio-group class="departure_time">\n            <h2>{{\'departure_time\' | translate}}</h2>\n            <ion-scroll scrollX="true">\n                <ion-item>\n                    <ion-label>\n                        <ion-icon class="zmdi zmdi-brightness-4"></ion-icon>\n                        <h3 class="">\n                            Mind Night\n                            <br>\n                            <span>00:00 - 04:59</span>\n                        </h3>\n                    </ion-label>\n                    <ion-radio checked="true" value="Mind_Night"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <ion-icon class="zmdi zmdi-brightness-2"></ion-icon>\n                        <h3>\n                            Morning\n                            <br>\n                            <span>05:00 - 04:59</span>\n                        </h3>\n                    </ion-label>\n                    <ion-radio value="Morning"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <ion-icon class="zmdi zmdi-brightness-7"></ion-icon>\n                        <h3>\n                            Afternoon\n                            <br>\n                            <span>12:00 - 17:59</span>\n                        </h3>\n                    </ion-label>\n                    <ion-radio value="Afternoon"></ion-radio>\n                </ion-item>\n\n                <ion-item>\n                    <ion-label>\n                        <ion-icon class="zmdi zmdi-brightness-4"></ion-icon>\n                        <h3 class="">\n                            Mind Night\n                            <br>\n                            <span>00:00 - 04:59</span>\n                        </h3>\n                    </ion-label>\n                    <ion-radio value="Mind_Night1"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <ion-icon class="zmdi zmdi-brightness-2"></ion-icon>\n                        <h3>\n                            Morning\n                            <br>\n                            <span>05:00 - 04:59</span>\n                        </h3>\n                    </ion-label>\n                    <ion-radio value="Morning1"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <ion-icon class="zmdi zmdi-brightness-7"></ion-icon>\n                        <h3>\n                            Afternoon\n                            <br>\n                            <span>12:00 - 17:59</span>\n                        </h3>\n                    </ion-label>\n                    <ion-radio value="Afternoon1"></ion-radio>\n                </ion-item>\n            </ion-scroll>\n        </ion-card>\n        <ion-card radio-group class="departure_time">\n            <h2>{{\'departure_time\' | translate}}</h2>\n            <ion-scroll scrollX="true">\n                <ion-item>\n                    <ion-label>\n                        <ion-icon class="zmdi zmdi-brightness-4"></ion-icon>\n                        <h3 class="">\n                            Mind Night\n                            <br>\n                            <span>00:00 - 04:59</span>\n                        </h3>\n                    </ion-label>\n                    <ion-radio value="Mind_Night2"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <ion-icon class="zmdi zmdi-brightness-2"></ion-icon>\n                        <h3>\n                            Morning\n                            <br>\n                            <span>05:00 - 04:59</span>\n                        </h3>\n                    </ion-label>\n                    <ion-radio value="Morning2"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <ion-icon class="zmdi zmdi-brightness-7"></ion-icon>\n                        <h3>\n                            Afternoon\n                            <br>\n                            <span>12:00 - 17:59</span>\n                        </h3>\n                    </ion-label>\n                    <ion-radio value="Afternoon2"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <ion-icon class="zmdi zmdi-brightness-4"></ion-icon>\n                        <h3 class="">\n                            Mind Night\n                            <br>\n                            <span>00:00 - 04:59</span>\n                        </h3>\n                    </ion-label>\n                    <ion-radio value="Mind_Night3"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <ion-icon class="zmdi zmdi-brightness-2"></ion-icon>\n                        <h3>\n                            Morning\n                            <br>\n                            <span>05:00 - 04:59</span>\n                        </h3>\n                    </ion-label>\n                    <ion-radio value="Morning3"></ion-radio>\n                </ion-item>\n                <ion-item>\n                    <ion-label>\n                        <ion-icon class="zmdi zmdi-brightness-7"></ion-icon>\n                        <h3>\n                            Afternoon\n                            <br>\n                            <span>12:00 - 17:59</span>\n                        </h3>\n                    </ion-label>\n                    <ion-radio value="Afternoon3"></ion-radio>\n                </ion-item>\n            </ion-scroll>\n        </ion-card>\n    </ion-list>\n</ion-content>\n<ion-footer no-border>\n    <button ion-button text-uppercase no-margin full class="btn">{{\'apply_now\' | translate}}</button>\n</ion-footer>'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\filter\filter.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], FilterPage);
    return FilterPage;
}());

//# sourceMappingURL=filter.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hotel_infoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hotel_review_hotel_review__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hotel_booked_hotel_booked__ = __webpack_require__(219);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Hotel_infoPage = /** @class */ (function () {
    function Hotel_infoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Hotel_infoPage.prototype.hotel_review = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hotel_review_hotel_review__["a" /* Hotel_reviewPage */]);
    };
    Hotel_infoPage.prototype.hotel_booked = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__hotel_booked_hotel_booked__["a" /* Hotel_bookedPage */]);
    };
    Hotel_infoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-hotel_info',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\hotel_info\hotel_info.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="banner">\n        <ion-slides autoplay="5000" loop="true" speed="500" pager dir="ltr">\n            <ion-slide>\n                <div class="slide_box">\n                    <div class="profile_img center_img">\n                        <img src="assets/imgs/12.png" class="crop_img">\n                    </div>\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div class="slide_box">\n                    <div class="profile_img center_img">\n                        <img src="assets/imgs/13.png" class="crop_img">\n                    </div>\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div class="slide_box">\n                    <div class="profile_img center_img">\n                        <img src="assets/imgs/12.png" class="crop_img">\n                    </div>\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div class="slide_box">\n                    <div class="profile_img center_img">\n                        <img src="assets/imgs/13.png" class="crop_img">\n                    </div>\n                </div>\n            </ion-slide>\n        </ion-slides>\n\n        <div class="banner_details">\n            <h2 class="d-flex"><span>Hotel Sky Garden </span>\n                <ion-badge class="end">4.7 <ion-icon class="zmdi zmdi-star"></ion-icon>\n                </ion-badge>\n            </h2>\n            <h3 class="d-flex"><span>City park, Manhattan</span> <span class="end">1.5k {{\'people_rated\' | translate}}</span></h3>\n        </div>\n    </div>\n\n    <ion-list no-lines>\n        <ion-item class="amenities">\n            <h2>{{\'amenities\' | translate}}</h2>\n            <ion-scroll scrollX="true">\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-wifi-alt"></ion-icon>\n                    <p>WiFi</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-iridescent"></ion-icon>\n                    <p>Ac</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-tv"></ion-icon>\n                    <p>Tv</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-coffee"></ion-icon>\n                    <p>Brekfast</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-washing-machine"></ion-icon>\n                    <p>Laundry</p> \n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-fire"></ion-icon>\n                    <p>Geyser</p>\n                </div>\n\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-wifi-alt"></ion-icon>\n                    <p>WiFi</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-iridescent"></ion-icon>\n                    <p>Ac</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-tv"></ion-icon>\n                    <p>Tv</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-coffee"></ion-icon>\n                    <p>Brekfast</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-washing-machine"></ion-icon>\n                    <p>Laundry</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-fire"></ion-icon>\n                    <p>Geyser</p>\n                </div>\n            </ion-scroll>\n        </ion-item>\n\n        <ion-item class="about">\n            <h2>{{\'about\' | translate}}</h2>\n            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.\n            </p>\n        </ion-item>\n\n        <ion-item class="icon_container">\n            <ion-row>\n                <ion-col col-3>\n                    <div class="icon_box" text-center>\n                        <ion-icon class="zmdi zmdi-map"></ion-icon>\n                        <p>{{\'location\' | translate}}</p>\n                    </div>\n                </ion-col>\n                <ion-col col-3 (click)="hotel_review()">\n                    <div class="icon_box" text-center>\n                        <ion-icon class="zmdi zmdi-star"></ion-icon>\n                        <p>{{\'reviews\' | translate}}</p>\n                    </div>\n                </ion-col>\n                <ion-col col-3>\n                    <div class="icon_box" text-center>\n                        <ion-icon class="zmdi zmdi-image"></ion-icon>\n                        <p>{{\'photos\' | translate}}</p>\n                    </div>\n                </ion-col>\n                <ion-col col-3>\n                    <div class="icon_box" text-center>\n                        <ion-icon class="zmdi zmdi-collection-text"></ion-icon>\n                        <p>{{\'similar\' | translate}}</p>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n    </ion-list>\n</ion-content>\n<ion-footer no-border (click)="hotel_booked()">\n    <h2 class="d-flex">$100.00 <small>For 2 Guests</small><span class="end" text-uppercase>{{\'book_now\' | translate}}</span></h2>\n</ion-footer>\n'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\hotel_info\hotel_info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Hotel_infoPage);
    return Hotel_infoPage;
}());

//# sourceMappingURL=hotel_info.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__account_account__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__my_bookings_my_bookings__ = __webpack_require__(252);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TabsPage = /** @class */ (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__my_bookings_my_bookings__["a" /* My_bookingsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_1__account_account__["a" /* AccountPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\tabs\tabs.html"*/'<ion-tabs>\n    <ion-tab [root]="tab1Root" tabTitle="{{\'home\' | translate}}" tabIcon="" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab2Root" tabTitle="{{\'bookings\' | translate}}" tabIcon="" tabsHideOnSubPages="true"></ion-tab>\n    <ion-tab [root]="tab3Root" tabTitle="{{\'account\' | translate}}" tabIcon="" tabsHideOnSubPages="true"></ion-tab>\n</ion-tabs>\n '/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 120:
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
webpackEmptyAsyncContext.id = 120;

/***/ }),

/***/ 163:
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
webpackEmptyAsyncContext.id = 163;

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search_flightsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion_datepicker__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__flight_result_flight_result__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Search_flightsPage = /** @class */ (function () {
    function Search_flightsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.flights = "round_trip";
        this.abult = "1";
        this.children = "0";
        this.infrat = "0";
        this.class = "Economy";
        this.localDate = new Date();
        this.initDate = new Date();
        this.initDate2 = new Date(2015, 1, 1);
        this.minDate = new Date(2018, 2, 31);
        this.maxDate = new Date(2018, 11, 10);
        this.disabledDates = [new Date(2017, 7, 14)];
        this.localeString = {
            monday: true,
            weekdays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
            months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        };
        this.min = new Date();
    }
    Search_flightsPage.prototype.ngOnInit = function () {
    };
    Search_flightsPage.prototype.Log = function (stuff) {
        this.datepicker.open();
        this.datepicker.changed.subscribe(function () { return console.log('test'); });
        console.log(stuff);
    };
    Search_flightsPage.prototype.event = function (data) {
        this.localDate = data;
    };
    Search_flightsPage.prototype.setDate = function (date) {
        console.log(date);
        this.initDate = date;
    };
    Search_flightsPage.prototype.flight_result = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__flight_result_flight_result__["a" /* Flight_resultPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ion_datepicker__["a" /* DatePickerDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ion_datepicker__["a" /* DatePickerDirective */])
    ], Search_flightsPage.prototype, "datepicker", void 0);
    Search_flightsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search_flights',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\search_flights\search_flights.html"*/'<ion-header class="theme_header bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            {{\'search_flights\' | translate}}\n        </ion-title>\n    </ion-navbar>\n    <div class="banner from">\n        <div class="banner_bg center_img">\n            <img src="assets/imgs/flight.png" class="crop_img">\n        </div>\n        <ion-list no-lines class="form">\n            <ion-item>\n                <ion-icon class="zmdi zmdi-flight-takeoff" item-start></ion-icon>\n                <h4>{{\'from\' | translate}}</h4>\n                <!--                <ion-input type="text" value="Hou - Houstone, USA"></ion-input>-->\n                <h2>Hou - Houstone, USA</h2>\n            </ion-item>\n            <h3>\n                <ion-icon class="zmdi zmdi-swap-vertical"></ion-icon>\n            </h3>\n            <ion-item>\n                <ion-icon class="zmdi zmdi-flight-land" item-start></ion-icon>\n                <h4>{{\'to\' | translate}}</h4>\n                <!--                <ion-input type="text" value="MHK - Manhattan, USA"></ion-input>-->\n                <h2>MHK - Manhattan, USA</h2>\n            </ion-item>\n        </ion-list>\n\n        <ion-segment [(ngModel)]="flights">\n            <ion-segment-button value="round_trip">\n                {{\'round_trip\' | translate}}\n            </ion-segment-button>\n            <ion-segment-button value="one_way">\n                {{\'one_way\' | translate}}\n            </ion-segment-button>\n            <ion-segment-button value="multi_city">\n                {{\'multi_city\' | translate}}\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n</ion-header>\n\n<ion-content>\n    <div class="tab_container" [ngSwitch]="flights">\n        <div class="tab_contant" *ngSwitchCase="\'round_trip\'">\n<!--\n            <ion-item>\n                <span ion-datepicker [(value)]="initDate" locale="en-US" clear class="ScheduleDate">\n                    <span>{{initDate | date}}</span>\n                </span>\n            </ion-item>\n-->\n            <ion-list no-lines>\n                <ion-card>\n                    <ion-row>\n                        <ion-col col-5>\n                            <h3>{{\'departure\' | translate}}</h3>\n                            <ion-item ion-datepicker [(value)]="initDate" locale="en-US" clear>\n                                <div class="text">\n                                    <h2>23</h2>\n                                    <h4>Jul 2019 <span>Tuesday</span></h4>\n                                </div>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-2> </ion-col>\n                        <ion-col col-5>\n                            <h3>{{\'return\' | translate}}</h3>\n                            <ion-item ion-datepicker [(value)]="initDate" locale="en-US" clear>\n                                <div class="text">\n                                    <h2>27</h2>\n                                    <h4>Jul 2019 <span>Saturday</span></h4>\n                                </div>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n\n                <ion-card>\n                    <h3>{{\'travellers\' | translate}}</h3>\n                    <ion-row>\n                        <ion-col col-4>\n                            <ion-item>\n                                <ion-select [(ngModel)]="abult" interface="action-sheet" item-start>\n                                    <ion-option value="1">01</ion-option>\n                                    <ion-option value="2">02</ion-option>\n                                    <ion-option value="3">03</ion-option>\n                                    <ion-option value="4">04</ion-option>\n                                    <ion-option value="5">05</ion-option>\n                                </ion-select>\n                                <ion-label>{{\'abult\' | translate}}</ion-label>\n                            </ion-item>\n                        </ion-col>\n\n                        <ion-col col-4>\n                            <ion-item>\n                                <ion-select [(ngModel)]="children" interface="action-sheet" item-start>\n                                    <ion-option value="0">0</ion-option>\n                                    <ion-option value="1">01</ion-option>\n                                    <ion-option value="2">02</ion-option>\n                                    <ion-option value="3">03</ion-option>\n                                    <ion-option value="4">04</ion-option>\n                                    <ion-option value="5">05</ion-option>\n                                </ion-select>\n                                <ion-label>{{\'children\' | translate}}</ion-label>\n                            </ion-item>\n                        </ion-col>\n\n                        <ion-col col-4>\n                            <ion-item>\n                                <ion-select [(ngModel)]="infrat" interface="action-sheet" item-start>\n                                    <ion-option value="0">0</ion-option>\n                                    <ion-option value="1">01</ion-option>\n                                    <ion-option value="2">02</ion-option>\n                                    <ion-option value="3">03</ion-option>\n                                    <ion-option value="4">04</ion-option>\n                                    <ion-option value="5">05</ion-option>\n                                </ion-select>\n                                <ion-label>{{\'infrat\' | translate}}</ion-label>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n\n                <ion-card>\n                    <h3>{{\'cabin_class\' | translate}}</h3>\n                    <ion-row>\n                        <ion-col col-12>\n                            <ion-item>\n                                <ion-select [(ngModel)]="class" interface="action-sheet" item-start>\n                                    <ion-option value="Economy">Economy</ion-option>\n                                    <ion-option value="premium_economy">Premium Economy</ion-option>\n                                    <ion-option value="business">Business</ion-option>\n                                </ion-select>\n                                <ion-label>{{\'class\' | translate}}</ion-label>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n            </ion-list>\n        </div>\n        \n        \n        <div class="tab_contant" *ngSwitchCase="\'one_way\'">\n            <ion-list no-lines>\n                <ion-card>\n                    <ion-row>\n                        <ion-col col-5>\n                            <h3>{{\'departure\' | translate}}</h3>\n                            <ion-item>\n                                <div class="text">\n                                    <h2>23</h2>\n                                    <h4>Jul 2019 <span>Tuesday</span></h4>\n                                </div>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-7>\n                            <div class="one_way_option">\n                                <ion-icon class="zmdi zmdi-calendar-alt" ion-datepicker [(value)]="initDate" locale="en-US" clear></ion-icon>\n                                <h4>\n                                    15 Jul\n                                    <span>Today</span>\n                                </h4>\n                                <h4>\n                                    16 Jul\n                                    <span>Tomorrow</span>\n                                </h4>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n\n                <ion-card>\n                    <h3>{{\'travellers\' | translate}}</h3>\n                    <ion-row>\n                        <ion-col col-4>\n                            <ion-item>\n                                <ion-select [(ngModel)]="abult" interface="action-sheet" item-start>\n                                    <ion-option value="1">01</ion-option>\n                                    <ion-option value="2">02</ion-option>\n                                    <ion-option value="3">03</ion-option>\n                                    <ion-option value="4">04</ion-option>\n                                    <ion-option value="5">05</ion-option>\n                                </ion-select>\n                                <ion-label>{{\'abult\' | translate}}</ion-label>\n                            </ion-item>\n                        </ion-col>\n\n                        <ion-col col-4>\n                            <ion-item>\n                                <ion-select [(ngModel)]="children" interface="action-sheet" item-start>\n                                    <ion-option value="0">0</ion-option>\n                                    <ion-option value="1">01</ion-option>\n                                    <ion-option value="2">02</ion-option>\n                                    <ion-option value="3">03</ion-option>\n                                    <ion-option value="4">04</ion-option>\n                                    <ion-option value="5">05</ion-option>\n                                </ion-select>\n                                <ion-label>{{\'children\' | translate}}</ion-label>\n                            </ion-item>\n                        </ion-col>\n\n                        <ion-col col-4>\n                            <ion-item>\n                                <ion-select [(ngModel)]="infrat" interface="action-sheet" item-start>\n                                    <ion-option value="0">0</ion-option>\n                                    <ion-option value="1">01</ion-option>\n                                    <ion-option value="2">02</ion-option>\n                                    <ion-option value="3">03</ion-option>\n                                    <ion-option value="4">04</ion-option>\n                                    <ion-option value="5">05</ion-option>\n                                </ion-select>\n                                <ion-label>{{\'infrat\' | translate}}</ion-label>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n\n                <ion-card>\n                    <h3>{{\'cabin_class\' | translate}}</h3>\n                    <ion-row>\n                        <ion-col col-12>\n                            <ion-item>\n                                <ion-select [(ngModel)]="class" interface="action-sheet" item-start>\n                                    <ion-option value="Economy">Economy</ion-option>\n                                    <ion-option value="premium_economy">Premium Economy</ion-option>\n                                    <ion-option value="business">Business</ion-option>\n                                </ion-select>\n                                <ion-label>{{\'class\' | translate}}</ion-label>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n            </ion-list>\n        </div>\n        \n        <div class="tab_contant" *ngSwitchCase="\'multi_city\'">\n            <ion-list no-lines>\n                <ion-card>\n                    <ion-row>\n                        <ion-col col-5>\n                            <h3>{{\'departure\' | translate}}</h3>\n                            <ion-item ion-datepicker [(value)]="initDate" locale="en-US" clear>\n                                <div class="text">\n                                    <h2>23</h2>\n                                    <h4>Jul 2019 <span>Tuesday</span></h4>\n                                </div>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-2> </ion-col>\n                        <ion-col col-5>\n                            <h3>{{\'return\' | translate}}</h3>\n                            <ion-item ion-datepicker [(value)]="initDate" locale="en-US" clear>\n                                <div class="text">\n                                    <h2>27</h2>\n                                    <h4>Jul 2019 <span>Saturday</span></h4>\n                                </div>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n\n                <ion-card>\n                    <h3>{{\'travellers\' | translate}}</h3>\n                    <ion-row>\n                        <ion-col col-4>\n                            <ion-item>\n                                <ion-select [(ngModel)]="abult" interface="action-sheet" item-start>\n                                    <ion-option value="1">01</ion-option>\n                                    <ion-option value="2">02</ion-option>\n                                    <ion-option value="3">03</ion-option>\n                                    <ion-option value="4">04</ion-option>\n                                    <ion-option value="5">05</ion-option>\n                                </ion-select>\n                                <ion-label>{{\'abult\' | translate}}</ion-label>\n                            </ion-item>\n                        </ion-col>\n\n                        <ion-col col-4>\n                            <ion-item>\n                                <ion-select [(ngModel)]="children" interface="action-sheet" item-start>\n                                    <ion-option value="0">0</ion-option>\n                                    <ion-option value="1">01</ion-option>\n                                    <ion-option value="2">02</ion-option>\n                                    <ion-option value="3">03</ion-option>\n                                    <ion-option value="4">04</ion-option>\n                                    <ion-option value="5">05</ion-option>\n                                </ion-select>\n                                <ion-label>{{\'children\' | translate}}</ion-label>\n                            </ion-item>\n                        </ion-col>\n\n                        <ion-col col-4>\n                            <ion-item>\n                                <ion-select [(ngModel)]="infrat" interface="action-sheet" item-start>\n                                    <ion-option value="0">0</ion-option>\n                                    <ion-option value="1">01</ion-option>\n                                    <ion-option value="2">02</ion-option>\n                                    <ion-option value="3">03</ion-option>\n                                    <ion-option value="4">04</ion-option>\n                                    <ion-option value="5">05</ion-option>\n                                </ion-select>\n                                <ion-label>{{\'infrat\' | translate}}</ion-label>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n\n                <ion-card>\n                    <h3>{{\'cabin_class\' | translate}}</h3>\n                    <ion-row>\n                        <ion-col col-12>\n                            <ion-item>\n                                <ion-select [(ngModel)]="class" interface="action-sheet" item-start>\n                                    <ion-option value="Economy">Economy</ion-option>\n                                    <ion-option value="premium_economy">Premium Economy</ion-option>\n                                    <ion-option value="business">Business</ion-option>\n                                </ion-select>\n                                <ion-label>{{\'class\' | translate}}</ion-label>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n            </ion-list>\n        </div>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <button ion-button text-uppercase no-margin full class="btn"  (click)="flight_result()">{{\'search_flights\' | translate}}</button>\n</ion-footer>'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\search_flights\search_flights.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2_ion_datepicker__["a" /* DatePickerDirective */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Search_flightsPage);
    return Search_flightsPage;
}());

//# sourceMappingURL=search_flights.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Flight_resultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flight_info_flight_info__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__filter_filter__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Flight_resultPage = /** @class */ (function () {
    function Flight_resultPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.ticket_price = "1";
    }
    Flight_resultPage.prototype.flight_info = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__flight_info_flight_info__["a" /* Flight_infoPage */]);
    };
    Flight_resultPage.prototype.filter = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__filter_filter__["a" /* FilterPage */]);
    };
    Flight_resultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-flight_result',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\flight_result\flight_result.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            <h2>Houstone To Manhattan</h2>\n            <p class="d-flex">\n                <span>{{\'depart\' | translate}} 23 Jul </span>\n                <ion-icon></ion-icon>\n                <span>1 {{\'traveller\' | translate}}</span>\n                <ion-icon></ion-icon>\n                <span>{{\'economy\' | translate}}</span>\n            </p>\n        </ion-title>\n    </ion-navbar>\n    <div class="header_bg">\n        <img src="assets/imgs/flight.png">\n    </div>\n\n    <div class="tab_btn_box">\n        <ion-scroll scrollX="true">\n            <ion-segment [(ngModel)]="ticket_price">\n                <ion-segment-button value="1">\n                    <p><span>23 Jul</span><br>$ 185.50</p>\n                </ion-segment-button>\n                <ion-segment-button value="2">\n                    <p><span>24 Jul</span><br>$ 175.50</p>\n                </ion-segment-button>\n                <ion-segment-button value="3">\n                    <p><span>25 Jul</span><br>$ 165.50</p>\n                </ion-segment-button>\n                <ion-segment-button value="4">\n                    <p><span>26 Jul</span><br>$ 200.50</p>\n                </ion-segment-button>\n                <ion-segment-button value="5">\n                    <p><span>27 Jul</span><br>$ 250.50</p>\n                </ion-segment-button>\n                <ion-segment-button value="6">\n                    <p><span>28 Jul</span><br>$ 105.50</p>\n                </ion-segment-button>\n                <ion-segment-button value="7">\n                    <p><span>30 Jul</span><br>$ 150.50</p>\n                </ion-segment-button>\n                <ion-segment-button value="8">\n                    <p><span>31 Jul</span><br>$ 155.50</p>\n                </ion-segment-button>\n                <ion-segment-button value="9">\n                    <p><span>1 Aug</span><br>$ 125.50</p>\n                </ion-segment-button>\n            </ion-segment>\n        </ion-scroll>\n    </div>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="" [ngSwitch]="ticket_price">\n        <ion-list no-lines *ngSwitchCase="\'1\'">\n            <ion-item (click)="flight_info()">\n                <div class="item_header d-flex">\n                    <h2 class="d-flex">American Airlines<span>AA-1264</span></h2>\n                    <h3 text-end>$ 158.50</h3>\n                </div>\n                <div class="item_containt d-flex">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/flight_1.png" class="crop_img">\n                    </div>\n                    <div class="text_box">\n                        <ion-row>\n                            <ion-col col-3>\n                                <h2>12:35 am</h2>\n                                <h3>Houston</h3>\n                            </ion-col>\n                            <ion-col col-6 text-center>\n                                <h3><small>1 Stop</small></h3>\n                                <div class="icon_box">\n                                    <ion-icon class="zmdi zmdi-circle" text-start></ion-icon>\n                                    <ion-icon class="zmdi zmdi-circle" text-center></ion-icon>\n                                    <ion-icon class="zmdi zmdi-circle" text-end></ion-icon>\n                                </div>\n                                <h3><small>2 hr 32 mins</small></h3>\n                            </ion-col>\n                            <ion-col col-3 text-end>\n                                <h2>12:35 am</h2>\n                                <h3>Manhattan</h3>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                </div>\n            </ion-item>\n            <ion-item (click)="flight_info()">\n                <div class="item_header d-flex">\n                    <h2 class="d-flex">American Airlines<span>AA-1264</span></h2>\n                    <h3 text-end>$ 158.50</h3>\n                </div>\n                <div class="item_containt d-flex">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/flight_1.png" class="crop_img">\n                    </div>\n                    <div class="text_box">\n                        <ion-row>\n                            <ion-col col-3>\n                                <h2>12:35 am</h2>\n                                <h3>Houston</h3>\n                            </ion-col>\n                            <ion-col col-6 text-center>\n                                <h3><small>1 Stop</small></h3>\n                                <div class="icon_box">\n                                    <ion-icon class="zmdi zmdi-circle" text-start></ion-icon>\n                                    <ion-icon class="zmdi zmdi-circle" text-center></ion-icon>\n                                    <ion-icon class="zmdi zmdi-circle" text-end></ion-icon>\n                                </div>\n                                <h3><small>2 hr 32 mins</small></h3>\n                            </ion-col>\n                            <ion-col col-3 text-end>\n                                <h2>12:35 am</h2>\n                                <h3>Manhattan</h3>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                </div>\n            </ion-item>\n            <ion-item (click)="flight_info()">\n                <div class="item_header d-flex">\n                    <h2 class="d-flex">American Airlines<span>AA-1264</span></h2>\n                    <h3 text-end>$ 158.50</h3>\n                </div>\n                <div class="item_containt d-flex">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/flight_1.png" class="crop_img">\n                    </div>\n                    <div class="text_box">\n                        <ion-row>\n                            <ion-col col-3>\n                                <h2>12:35 am</h2>\n                                <h3>Houston</h3>\n                            </ion-col>\n                            <ion-col col-6 text-center>\n                                <h3><small>1 Stop</small></h3>\n                                <div class="icon_box">\n                                    <ion-icon class="zmdi zmdi-circle" text-start></ion-icon>\n                                    <ion-icon class="zmdi zmdi-circle" text-center></ion-icon>\n                                    <ion-icon class="zmdi zmdi-circle" text-end></ion-icon>\n                                </div>\n                                <h3><small>2 hr 32 mins</small></h3>\n                            </ion-col>\n                            <ion-col col-3 text-end>\n                                <h2>12:35 am</h2>\n                                <h3>Manhattan</h3>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                </div>\n            </ion-item>\n            <ion-item (click)="flight_info()">\n                <div class="item_header d-flex">\n                    <h2 class="d-flex">American Airlines<span>AA-1264</span></h2>\n                    <h3 text-end>$ 158.50</h3>\n                </div>\n                <div class="item_containt d-flex">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/flight_2.png" class="crop_img">\n                    </div>\n                    <div class="text_box">\n                        <ion-row>\n                            <ion-col col-3>\n                                <h2>12:35 am</h2>\n                                <h3>Houston</h3>\n                            </ion-col>\n                            <ion-col col-6 text-center>\n                                <h3><small>1 Stop</small></h3>\n                                <div class="icon_box">\n                                    <ion-icon class="zmdi zmdi-circle" text-start></ion-icon>\n                                    <ion-icon class="zmdi zmdi-circle" text-center></ion-icon>\n                                    <ion-icon class="zmdi zmdi-circle" text-end></ion-icon>\n                                </div>\n                                <h3><small>2 hr 32 mins</small></h3>\n                            </ion-col>\n                            <ion-col col-3 text-end>\n                                <h2>12:35 am</h2>\n                                <h3>Manhattan</h3>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                </div>\n            </ion-item>\n            <ion-item (click)="flight_info()">\n                <div class="item_header d-flex">\n                    <h2 class="d-flex">American Airlines<span>AA-1264</span></h2>\n                    <h3 text-end>$ 158.50</h3>\n                </div>\n                <div class="item_containt d-flex">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/flight_2.png" class="crop_img">\n                    </div>\n                    <div class="text_box">\n                        <ion-row>\n                            <ion-col col-3>\n                                <h2>12:35 am</h2>\n                                <h3>Houston</h3>\n                            </ion-col>\n                            <ion-col col-6 text-center>\n                                <h3><small>1 Stop</small></h3>\n                                <div class="icon_box">\n                                    <ion-icon class="zmdi zmdi-circle" text-start></ion-icon>\n                                    <ion-icon class="zmdi zmdi-circle" text-center></ion-icon>\n                                    <ion-icon class="zmdi zmdi-circle" text-end></ion-icon>\n                                </div>\n                                <h3><small>2 hr 32 mins</small></h3>\n                            </ion-col>\n                            <ion-col col-3 text-end>\n                                <h2>12:35 am</h2>\n                                <h3>Manhattan</h3>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                </div>\n            </ion-item>\n            <ion-item (click)="flight_info()">\n                <div class="item_header d-flex">\n                    <h2 class="d-flex">American Airlines<span>AA-1264</span></h2>\n                    <h3 text-end>$ 158.50</h3>\n                </div>\n                <div class="item_containt d-flex">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/flight_1.png" class="crop_img">\n                    </div>\n                    <div class="text_box">\n                        <ion-row>\n                            <ion-col col-3>\n                                <h2>12:35 am</h2>\n                                <h3>Houston</h3>\n                            </ion-col>\n                            <ion-col col-6 text-center>\n                                <h3><small>1 Stop</small></h3>\n                                <div class="icon_box">\n                                    <ion-icon class="zmdi zmdi-circle" text-start></ion-icon>\n                                    <ion-icon class="zmdi zmdi-circle" text-center></ion-icon>\n                                    <ion-icon class="zmdi zmdi-circle" text-end></ion-icon>\n                                </div>\n                                <h3><small>2 hr 32 mins</small></h3>\n                            </ion-col>\n                            <ion-col col-3 text-end>\n                                <h2>12:35 am</h2>\n                                <h3>Manhattan</h3>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n\n        <ion-list no-lines *ngSwitchCase="\'2\'">\n            <ion-item (click)="flight_info()">\n                <div class="item_header d-flex">\n                    <h2 class="d-flex">American Airlines<span>AA-1264</span></h2>\n                    <h3 text-end>$ 158.50</h3>\n                </div>\n                <div class="item_containt d-flex">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/flight_2.png" class="crop_img">\n                    </div>\n                    <div class="text_box">\n                        <ion-row>\n                            <ion-col col-3>\n                                <h2>12:35 am</h2>\n                                <h3>Houston</h3>\n                            </ion-col>\n                            <ion-col col-6 text-center>\n                                <h3><small>1 Stop</small></h3>\n                                <div class="icon_box">\n                                    <ion-icon class="zmdi zmdi-circle" text-start></ion-icon>\n                                    <ion-icon class="zmdi zmdi-circle" text-center></ion-icon>\n                                    <ion-icon class="zmdi zmdi-circle" text-end></ion-icon>\n                                </div>\n                                <h3><small>2 hr 32 mins</small></h3>\n                            </ion-col>\n                            <ion-col col-3 text-end>\n                                <h2>12:35 am</h2>\n                                <h3>Manhattan</h3>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n        <ion-list no-lines *ngSwitchCase="\'3\'">\n            <ion-item (click)="flight_info()">\n                <div class="item_header d-flex">\n                    <h2 class="d-flex">American Airlines<span>AA-1264</span></h2>\n                    <h3 text-end>$ 158.50</h3>\n                </div>\n                <div class="item_containt d-flex">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/flight_2.png" class="crop_img">\n                    </div>\n                    <div class="text_box">\n                        <ion-row>\n                            <ion-col col-3>\n                                <h2>12:35 am</h2>\n                                <h3>Houston</h3>\n                            </ion-col>\n                            <ion-col col-6 text-center>\n                                <h3><small>1 Stop</small></h3>\n                                <div class="icon_box">\n                                    <ion-icon class="zmdi zmdi-circle" text-start></ion-icon>\n                                    <ion-icon class="zmdi zmdi-circle" text-center></ion-icon>\n                                    <ion-icon class="zmdi zmdi-circle" text-end></ion-icon>\n                                </div>\n                                <h3><small>2 hr 32 mins</small></h3>\n                            </ion-col>\n                            <ion-col col-3 text-end>\n                                <h2>12:35 am</h2>\n                                <h3>Manhattan</h3>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                </div>\n            </ion-item>\n            <ion-item (click)="flight_info()">\n                <div class="item_header d-flex">\n                    <h2 class="d-flex">American Airlines<span>AA-1264</span></h2>\n                    <h3 text-end>$ 158.50</h3>\n                </div>\n                <div class="item_containt d-flex">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/1.png" class="crop_img">\n                    </div>\n                    <div class="text_box">\n                        <ion-row>\n                            <ion-col col-3>\n                                <h2>12:35 am</h2>\n                                <h3>Houston</h3>\n                            </ion-col>\n                            <ion-col col-6 text-center>\n                                <h3><small>1 Stop</small></h3>\n                                <div class="icon_box">\n                                    <ion-icon class="zmdi zmdi-circle" text-start></ion-icon>\n                                    <ion-icon class="zmdi zmdi-circle" text-center></ion-icon>\n                                    <ion-icon class="zmdi zmdi-circle" text-end></ion-icon>\n                                </div>\n                                <h3><small>2 hr 32 mins</small></h3>\n                            </ion-col>\n                            <ion-col col-3 text-end>\n                                <h2>12:35 am</h2>\n                                <h3>Manhattan</h3>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n\n        <ion-list no-lines *ngSwitchCase="\'4\'">\n            <ion-item (click)="flight_info()">\n                <div class="item_header d-flex">\n                    <h2 class="d-flex">American Airlines<span>AA-1264</span></h2>\n                    <h3 text-end>$ 158.50</h3>\n                </div>\n                <div class="item_containt d-flex">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/1.png" class="crop_img">\n                    </div>\n                    <div class="text_box">\n                        <ion-row>\n                            <ion-col col-3>\n                                <h2>12:35 am</h2>\n                                <h3>Houston</h3>\n                            </ion-col>\n                            <ion-col col-6 text-center>\n                                <h3><small>1 Stop</small></h3>\n                                <div class="icon_box">\n                                    <ion-icon class="zmdi zmdi-circle" text-start></ion-icon>\n                                    <ion-icon class="zmdi zmdi-circle" text-center></ion-icon>\n                                    <ion-icon class="zmdi zmdi-circle" text-end></ion-icon>\n                                </div>\n                                <h3><small>2 hr 32 mins</small></h3>\n                            </ion-col>\n                            <ion-col col-3 text-end>\n                                <h2>12:35 am</h2>\n                                <h3>Manhattan</h3>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                </div>\n            </ion-item>\n            <ion-item (click)="flight_info()">\n                <div class="item_header d-flex">\n                    <h2 class="d-flex">American Airlines<span>AA-1264</span></h2>\n                    <h3 text-end>$ 158.50</h3>\n                </div>\n                <div class="item_containt d-flex">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/1.png" class="crop_img">\n                    </div>\n                    <div class="text_box">\n                        <ion-row>\n                            <ion-col col-3>\n                                <h2>12:35 am</h2>\n                                <h3>Houston</h3>\n                            </ion-col>\n                            <ion-col col-6 text-center>\n                                <h3><small>1 Stop</small></h3>\n                                <div class="icon_box">\n                                    <ion-icon class="zmdi zmdi-circle" text-start></ion-icon>\n                                    <ion-icon class="zmdi zmdi-circle" text-center></ion-icon>\n                                    <ion-icon class="zmdi zmdi-circle" text-end></ion-icon>\n                                </div>\n                                <h3><small>2 hr 32 mins</small></h3>\n                            </ion-col>\n                            <ion-col col-3 text-end>\n                                <h2>12:35 am</h2>\n                                <h3>Manhattan</h3>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                </div>\n            </ion-item>\n            <ion-item (click)="flight_info()">\n                <div class="item_header d-flex">\n                    <h2 class="d-flex">American Airlines<span>AA-1264</span></h2>\n                    <h3 text-end>$ 158.50</h3>\n                </div>\n                <div class="item_containt d-flex">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/1.png" class="crop_img">\n                    </div>\n                    <div class="text_box">\n                        <ion-row>\n                            <ion-col col-3>\n                                <h2>12:35 am</h2>\n                                <h3>Houston</h3>\n                            </ion-col>\n                            <ion-col col-6 text-center>\n                                <h3><small>1 Stop</small></h3>\n                                <div class="icon_box">\n                                    <ion-icon class="zmdi zmdi-circle" text-start></ion-icon>\n                                    <ion-icon class="zmdi zmdi-circle" text-center></ion-icon>\n                                    <ion-icon class="zmdi zmdi-circle" text-end></ion-icon>\n                                </div>\n                                <h3><small>2 hr 32 mins</small></h3>\n                            </ion-col>\n                            <ion-col col-3 text-end>\n                                <h2>12:35 am</h2>\n                                <h3>Manhattan</h3>\n                            </ion-col>\n                        </ion-row>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <button ion-button text-uppercase full no-margin icon-start class="btn" (click)="filter()">\n        <ion-icon class="zmdi zmdi-tune"></ion-icon>\n        {{\'sort_filters\' | translate}}\n    </button>\n</ion-footer>'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\flight_result\flight_result.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Flight_resultPage);
    return Flight_resultPage;
}());

//# sourceMappingURL=flight_result.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Flight_infoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__confirm_booking_confirm_booking__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Flight_infoPage = /** @class */ (function () {
    function Flight_infoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Flight_infoPage.prototype.confirm_booking = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__confirm_booking_confirm_booking__["a" /* Confirm_bookingPage */]);
    };
    Flight_infoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-flight_info',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\flight_info\flight_info.html"*/'<ion-header class="theme_header bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            <p class="d-flex">\n                <span>23 Jul 2019</span>\n                <ion-icon></ion-icon>\n                <span>1 {{\'traveller\' | translate}}</span>\n            </p>\n        </ion-title>\n    </ion-navbar>\n    <div class="banner from">\n        <div class="banner_bg center_img">\n            <img src="assets/imgs/flight.png" class="crop_img">\n        </div>\n        <ion-list no-lines class="form">\n            <ion-item>\n                <ion-icon class="zmdi zmdi-flight-takeoff" item-start></ion-icon>\n                <h4>23 Jul, 12:35 am</h4>\n                <h2>Hou - Houstone, USA</h2>\n            </ion-item>\n            <div class="traveling_time d-flex">\n                <div class="underline end"></div>\n                <h3 class="end" text-end>12 hr 32 mins | 01 Stop</h3>\n            </div>\n            <ion-item>\n                <ion-icon class="zmdi zmdi-flight-land" item-start></ion-icon>\n                <h4>24 Jul, 12:45 pm</h4>\n                <h2>MHK - Manhattan, USA</h2>\n            </ion-item>\n        </ion-list>\n        <div class="facilities d-flex">\n            <h2 class="d-flex">\n                <ion-icon class="zmdi zmdi-case"></ion-icon>\n                6 Kg Hand baggage\n            </h2>\n            <h2 class="d-flex">\n                <ion-icon class="zmdi zmdi-case"></ion-icon>\n                20 Kg Check-in baggage\n            </h2>\n        </div>\n    </div>\n</ion-header>\n\n<ion-content>\n    <div class="container">\n        <div class="flight_details d-flex">\n            <div class="flight_img center_img">\n                <img src="assets/imgs/flight_1.png" class="crop_img">\n            </div>\n            <div class="text">\n                <h2>American Airlines</h2>\n                <h3>AA-1264</h3>\n            </div>\n        </div>\n\n        <ion-list no-lines radio-group>\n            <ion-item>\n                <ion-label class="d-flex">\n                    <div class="class_info">\n                        <h2>Economy</h2>\n                        <h3>50 Seats left</h3>\n                    </div>\n                    <h5 class="end">$158.50</h5>\n                </ion-label>\n                <ion-radio checked="true" value="Economy"></ion-radio>\n            </ion-item>\n\n            <ion-item>\n                <ion-label class="d-flex">\n                    <div class="class_info">\n                        <h2>Premium Economy</h2>\n                        <h3>78 Seats left</h3>\n                    </div>\n                    <h5 class="end">$210.00</h5>\n                </ion-label>\n                <ion-radio value="Premium"></ion-radio>\n            </ion-item>\n\n            <ion-item>\n                <ion-label class="d-flex">\n                    <div class="class_info">\n                        <h2>Business</h2>\n                        <h3>25 Seats left</h3>\n                    </div>\n                    <h5 class="end">$300.00</h5>\n                </ion-label>\n                <ion-radio value="Business"></ion-radio>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n<ion-footer no-border (click)="confirm_booking()">\n    <h2 class="d-flex">$158.00 <small>For 1 Traveller</small><span class="end" text-uppercase>{{\'book_now\' | translate}}</span></h2>\n</ion-footer>'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\flight_info\flight_info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Flight_infoPage);
    return Flight_infoPage;
}());

//# sourceMappingURL=flight_info.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Confirm_bookingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__flight_ticket_flight_ticket__ = __webpack_require__(215);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Confirm_bookingPage = /** @class */ (function () {
    function Confirm_bookingPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Confirm_bookingPage.prototype.flight_ticket = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__flight_ticket_flight_ticket__["a" /* Flight_ticketPage */]);
    };
    Confirm_bookingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-confirm_booking',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\confirm_booking\confirm_booking.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'confirm_booking\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="banner from">\n        <div class="flight_details d-flex">\n            <div class="flight_img center_img">\n                <img src="assets/imgs/flight_1.png" class="crop_img">\n            </div>\n            <div class="text">\n                <h2>American Airlines</h2>\n                <h3>AA-1264</h3>\n            </div>\n        </div>\n        <ion-list no-lines class="form">\n            <ion-item>\n                <ion-icon class="zmdi zmdi-flight-takeoff" item-start></ion-icon>\n                <h4>{{\'departure_from\' | translate}}</h4>\n                <h2>Hou - Houstone, USA</h2>\n            </ion-item>\n            <ion-item>\n                <ion-icon class="zmdi zmdi-flight-land" item-start></ion-icon>\n                <h4>{{\'arrival_at\' | translate}}</h4>\n                <h2>MHK - Manhattan, USA</h2>\n            </ion-item>\n        </ion-list>\n        <div class="containt">\n            <ion-row>\n                <ion-col col-6>\n                    <h3>{{\'depature\' | translate}}</h3>\n                    <h2>23 Jun, 12:35 am</h2>\n                </ion-col>\n                <ion-col col-6 text-end>\n                    <h3>{{\'arrival\' | translate}}</h3>\n                    <h2>24 Jun, 10:00 am</h2>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-5>\n                    <h3>{{\'class\' | translate}}</h3>\n                    <h2>Economy</h2>\n                </ion-col>\n                <ion-col col-2 text-center>\n                    <h3>{{\'gate\' | translate}}</h3>\n                    <h2>C11</h2>\n                </ion-col>\n                <ion-col col-5 text-end>\n                    <h3>{{\'seat\' | translate}}</h3>\n                    <h2>B12</h2>\n                </ion-col>\n            </ion-row>\n        </div>\n    </div>\n\n    <div class="payment_info">\n        <h1>{{\'payment_info\' | translate}}</h1>\n        <h2 class="d-flex">{{\'fare_charges\' | translate}}<span class="end">$ 150.00</span></h2>\n        <h2 class="d-flex">{{\'convenince_charges\' | translate}}<span class="end">$ 10.00</span></h2>\n        <h2 class="d-flex">{{\'cancellation_charges\' | translate}}<span class="end">$ 5.00</span></h2>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <button ion-button text-uppercase no-margin full class="btn" (click)="flight_ticket()">{{\'continue_to_pay\' | translate}} $165.00</button>\n</ion-footer>'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\confirm_booking\confirm_booking.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Confirm_bookingPage);
    return Confirm_bookingPage;
}());

//# sourceMappingURL=confirm_booking.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Flight_ticketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Flight_ticketPage = /** @class */ (function () {
    function Flight_ticketPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Flight_ticketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-flight_ticket',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\flight_ticket\flight_ticket.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>{{\'ticket_booked\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="booking_receipt">\n        <div class="container receipt_header d-flex">\n            <div class="img_box center_img">\n                <img src="assets/imgs/flight_1.png" class="crop_img">\n            </div>\n            <div class="text_box">\n                <h2>American Airlines</h2>\n                <h6 class="d-flex">AA-1264<span class="end">$165.50</span></h6>\n            </div>\n        </div>\n        <div class="container receipt_containt banner">\n            <div class="banner_bg center_img">\n                <img src="assets/imgs/flight.png">\n            </div>\n            <ion-row>\n                <ion-col col-5>\n                    <h3>Houstone, USA</h3>\n                    <h2>HOU</h2>\n                </ion-col>\n                <ion-col col-2 text-center>\n                    <ion-icon class="zmdi zmdi-airplane"></ion-icon>\n                </ion-col>\n                <ion-col col-5 text-end>\n                    <h3>{{\'Manhattan, USA\' | translate}}</h3>\n                    <h2>MHK</h2>\n                </ion-col>\n            </ion-row>\n        </div>\n        <div class="container receipt_containt">\n            <ion-row>\n                <ion-col col-6>\n                    <h3>{{\'depature\' | translate}}</h3>\n                    <h2>23 Jun, 12:35 am</h2>\n                </ion-col>\n                <ion-col col-6 text-end>\n                    <h3>{{\'arrival\' | translate}}</h3>\n                    <h2>24 Jun, 10:00 am</h2>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-5>\n                    <h3>{{\'class\' | translate}}</h3>\n                    <h2>Economy</h2>\n                </ion-col>\n                <ion-col col-2 text-center>\n                    <h3>{{\'gate\' | translate}}</h3>\n                    <h2>C11</h2>\n                </ion-col>\n                <ion-col col-5 text-end>\n                    <h3>{{\'seat\' | translate}}</h3>\n                    <h2>B12</h2>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-5>\n                    <h3>{{\'passenger_name\' | translate}}</h3>\n                    <h2>Sam Smith</h2>\n                </ion-col>\n                <ion-col col-2 text-center>\n                    <h3>{{\'age\' | translate}}</h3>\n                    <h2>25</h2>\n                </ion-col>\n                <ion-col col-5 text-end>\n                    <h3>{{\'gender\' | translate}}</h3>\n                    <h2>Male</h2>\n                </ion-col>\n            </ion-row> \n        </div>\n\n        <div class="container barcode_box">\n            <div class="bar_code">\n                <img src="assets/imgs/barcode.png">\n            </div>\n        </div>\n    </div>\n    \n    <button ion-button text-uppercase full clear no-margin class="btn">{{\'dawnload_ticket\' | translate}}</button>\n</ion-content>'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\flight_ticket\flight_ticket.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Flight_ticketPage);
    return Flight_ticketPage;
}());

//# sourceMappingURL=flight_ticket.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search_hotelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion_datepicker__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__hotels_list_hotels_list__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Search_hotelPage = /** @class */ (function () {
    function Search_hotelPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.abult = "2";
        this.children = "0";
        this.infrat = "0";
        this.rooms = "1";
        this.localDate = new Date();
        this.initDate = new Date();
        this.initDate2 = new Date(2015, 1, 1);
        this.minDate = new Date(2018, 2, 31);
        this.maxDate = new Date(2018, 11, 10);
        this.disabledDates = [new Date(2017, 7, 14)];
        this.localeString = {
            monday: true,
            weekdays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
            months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        };
        this.min = new Date();
    }
    Search_hotelPage.prototype.ngOnInit = function () {
    };
    Search_hotelPage.prototype.Log = function (stuff) {
        this.datepicker.open();
        this.datepicker.changed.subscribe(function () { return console.log('test'); });
        console.log(stuff);
    };
    Search_hotelPage.prototype.event = function (data) {
        this.localDate = data;
    };
    Search_hotelPage.prototype.setDate = function (date) {
        console.log(date);
        this.initDate = date;
    };
    Search_hotelPage.prototype.hotels_list = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__hotels_list_hotels_list__["a" /* Hotels_listPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ion_datepicker__["a" /* DatePickerDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ion_datepicker__["a" /* DatePickerDirective */])
    ], Search_hotelPage.prototype, "datepicker", void 0);
    Search_hotelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search_hotel',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\search_hotel\search_hotel.html"*/'<ion-header class="theme_header bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            {{\'search_hotel\' | translate}}\n        </ion-title>\n    </ion-navbar>\n    <div class="banner from">\n        <div class="banner_bg center_img">\n            <img src="assets/imgs/hotel.png" class="crop_img">\n        </div>\n        <ion-list no-lines class="form">\n            <ion-item>\n                <ion-icon class="zmdi zmdi-pin" item-start></ion-icon>\n                <h4>{{\'where_are_you_going\' | translate}}</h4>\n                <!--                <ion-input type="text" value="MHK - Manhattan, USA"></ion-input>-->\n                <h2>Manhattan, USA</h2>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-header>\n\n<ion-content>\n    <div class="tab_container">\n        <div class="tab_contant"> \n            <!--\n            <ion-item>\n                <span ion-datepicker [(value)]="initDate" locale="en-US" clear class="ScheduleDate">\n                    <span>{{initDate | date}}</span>\n                </span>\n            </ion-item>\n-->\n            <ion-list no-lines>\n                <ion-card>\n                    <ion-row>\n                        <ion-col col-5>\n                            <h3>{{\'check_in\' | translate}}</h3>\n                            <ion-item ion-datepicker [(value)]="initDate" locale="en-US" clear>\n                                <div class="text">\n                                    <h2>23</h2>\n                                    <h4>Jul 2019 <span>Tuesday</span></h4>\n                                </div>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-2> </ion-col>\n                        <ion-col col-5>\n                            <h3>{{\'check_out\' | translate}}</h3>\n                            <ion-item ion-datepicker [(value)]="initDate" locale="en-US" clear>\n                                <div class="text">\n                                    <h2>27</h2>\n                                    <h4>Jul 2019 <span>Saturday</span></h4>\n                                </div>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n\n                <ion-card>\n                    <h3>{{\'guests\' | translate}}</h3>\n                    <ion-row>\n                        <ion-col col-4>\n                            <ion-item>\n                                <ion-select [(ngModel)]="abult" interface="action-sheet" item-start>\n                                    <ion-option value="1">01</ion-option>\n                                    <ion-option value="2">02</ion-option>\n                                    <ion-option value="3">03</ion-option>\n                                    <ion-option value="4">04</ion-option>\n                                    <ion-option value="5">05</ion-option>\n                                </ion-select>\n                                <ion-label>{{\'abult\' | translate}}</ion-label>\n                            </ion-item>\n                        </ion-col>\n\n                        <ion-col col-4>\n                            <ion-item>\n                                <ion-select [(ngModel)]="children" interface="action-sheet" item-start>\n                                    <ion-option value="0">0</ion-option>\n                                    <ion-option value="1">01</ion-option>\n                                    <ion-option value="2">02</ion-option>\n                                    <ion-option value="3">03</ion-option>\n                                    <ion-option value="4">04</ion-option>\n                                    <ion-option value="5">05</ion-option>\n                                </ion-select>\n                                <ion-label>{{\'children\' | translate}}</ion-label>\n                            </ion-item>\n                        </ion-col>\n\n                        <ion-col col-4>\n                            <ion-item>\n                                <ion-select [(ngModel)]="infrat" interface="action-sheet" item-start>\n                                    <ion-option value="0">0</ion-option>\n                                    <ion-option value="1">01</ion-option>\n                                    <ion-option value="2">02</ion-option>\n                                    <ion-option value="3">03</ion-option>\n                                    <ion-option value="4">04</ion-option>\n                                    <ion-option value="5">05</ion-option>\n                                </ion-select>\n                                <ion-label>{{\'infrat\' | translate}}</ion-label>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n\n                <ion-card>\n                    <h3>{{\'rooms\' | translate}}</h3>\n                    <ion-row>\n                        <ion-col col-12>\n                            <ion-item>\n                                <ion-select [(ngModel)]="rooms" interface="action-sheet" item-start>\n                                    <ion-option value="1">01</ion-option>\n                                    <ion-option value="2">02</ion-option>\n                                    <ion-option value="3">03</ion-option>\n                                </ion-select>\n                                <ion-label>{{\'rooms\' | translate}}</ion-label>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n            </ion-list>\n        </div>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <button ion-button text-uppercase no-margin full class="btn" (click)="hotels_list()">{{\'show_result\' | translate}}</button>\n</ion-footer>'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\search_hotel\search_hotel.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2_ion_datepicker__["a" /* DatePickerDirective */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Search_hotelPage);
    return Search_hotelPage;
}());

//# sourceMappingURL=search_hotel.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hotels_listPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__hotel_info_hotel_info__ = __webpack_require__(107);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Hotels_listPage = /** @class */ (function () {
    function Hotels_listPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Hotels_listPage.prototype.hotel_info = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__hotel_info_hotel_info__["a" /* Hotel_infoPage */]);
    };
    Hotels_listPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-hotels_list',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\hotels_list\hotels_list.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            <h2>Manhattan, USA</h2>\n            <p class="d-flex">\n                <span>{{\'check_in\' | translate}} 23 Jul </span>\n                <ion-icon></ion-icon>\n                <span>{{\'check_out\' | translate}} 27 Jul </span>\n                <ion-icon></ion-icon>\n                <span>2 {{\'guests\' | translate}}</span>\n            </p>\n        </ion-title>\n    </ion-navbar>\n    <div class="header_bg">\n        <img src="assets/imgs/hotel.png">\n    </div>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines>\n        <ion-item (click)="hotel_info()">\n            <ion-badge class="end">4.7 <ion-icon class="zmdi zmdi-star"></ion-icon>\n            </ion-badge>\n            <ion-scroll scrollX="true">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/12.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/13.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/12.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/13.png" class="crop_img">\n                </div>\n            </ion-scroll>\n            <div class="item_details">\n                <h2 class="d-flex">Hotel Sky Garden <span class="end">$100.00</span></h2>\n                <p class="d-flex">City park, Manhattan <span class="end">For 2 {{\'guests\' | translate}}</span></p>\n            </div>\n        </ion-item>\n\n        <ion-item (click)="hotel_info()">\n            <ion-badge class="end">4.7 <ion-icon class="zmdi zmdi-star"></ion-icon>\n            </ion-badge>\n            <ion-scroll scrollX="true">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/12.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/13.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/12.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/13.png" class="crop_img">\n                </div>\n            </ion-scroll>\n            <div class="item_details">\n                <h2 class="d-flex">Hotel Sky Garden <span class="end">$100.00</span></h2>\n                <p class="d-flex">City park, Manhattan <span class="end">For 2 {{\'guests\' | translate}}</span></p>\n            </div>\n        </ion-item>\n\n        <ion-item (click)="hotel_info()">\n            <ion-badge class="end">4.7 <ion-icon class="zmdi zmdi-star"></ion-icon>\n            </ion-badge>\n            <ion-scroll scrollX="true">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/12.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/13.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/12.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/13.png" class="crop_img">\n                </div>\n            </ion-scroll>\n            <div class="item_details">\n                <h2 class="d-flex">Hotel Sky Garden <span class="end">$100.00</span></h2>\n                <p class="d-flex">City park, Manhattan <span class="end">For 2 {{\'guests\' | translate}}</span></p>\n            </div>\n        </ion-item>\n\n        <ion-item (click)="hotel_info()">\n            <ion-badge class="end">4.7 <ion-icon class="zmdi zmdi-star"></ion-icon>\n            </ion-badge>\n            <ion-scroll scrollX="true">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/12.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/13.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/12.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/13.png" class="crop_img">\n                </div>\n            </ion-scroll>\n            <div class="item_details">\n                <h2 class="d-flex">Hotel Sky Garden <span class="end">$100.00</span></h2>\n                <p class="d-flex">City park, Manhattan <span class="end">For 2 {{\'guests\' | translate}}</span></p>\n            </div>\n        </ion-item>\n    </ion-list>\n</ion-content>\n<ion-footer no-border>\n    <ion-row>\n        <ion-col col-6 no-padding>\n            <button ion-button text-uppercase no-margin full icon-start class="btn">\n                <ion-icon class="zmdi zmdi-tune"></ion-icon>\n                {{\'filters\' | translate}}\n            </button>\n        </ion-col>\n        <ion-col col-6 no-padding>\n            <button ion-button text-uppercase no-margin full icon-start class="btn">\n                <ion-icon class="zmdi zmdi-map"></ion-icon>\n                {{\'map_view\' | translate}}\n            </button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\hotels_list\hotels_list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Hotels_listPage);
    return Hotels_listPage;
}());

//# sourceMappingURL=hotels_list.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hotel_reviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Hotel_reviewPage = /** @class */ (function () {
    function Hotel_reviewPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Hotel_reviewPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-hotel_review',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\hotel_review\hotel_review.html"*/'<ion-header class="theme_header">\n    <ion-navbar>\n        <ion-title>\n            <h2 class="d-flex"><span>Hotel Sky Garden</span>\n                <ion-badge class="end">4.7 <ion-icon class="zmdi zmdi-star"></ion-icon>\n                </ion-badge>\n            </h2>\n            <h3 class="d-flex"><span>City park, Manhattan</span> <span class="end">1.5k {{\'people_rated\' | translate}}</span></h3>\n        </ion-title>\n    </ion-navbar>\n    <h1>{{\'reviews\' | translate}}</h1>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines>\n        <ion-item>\n            <div class="reviews_details">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/g9.png" class="crop_img">\n                </div>\n                <div class="other_details">\n                    <h2 class="d-flex">\n                        <span class="name">Emili Williamson</span>\n                        <span class="end ratings_icon">\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                        </span>\n                    </h2>\n                    <h3>22 Jan 19. 11:30 am</h3>\n                </div>\n            </div>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n            </p>\n        </ion-item>\n\n        <ion-item>\n            <div class="reviews_details">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/g3.png" class="crop_img">\n                </div>\n                <div class="other_details">\n                    <h2 class="d-flex">\n                        <span class="name">George Smith</span>\n                        <span class="end ratings_icon">\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star "></ion-icon>\n                        </span>\n                    </h2>\n                    <h3>22 Jan 19. 11:30 am</h3>\n                </div>\n            </div>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n            </p>\n        </ion-item>\n\n        <ion-item>\n            <div class="reviews_details">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/g6.png" class="crop_img">\n                </div>\n                <div class="other_details">\n                    <h2 class="d-flex">\n                        <span class="name">Elvis Taylor</span>\n                        <span class="end ratings_icon">\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                        </span>\n                    </h2>\n                    <h3>22 Jan 19. 11:30 am</h3>\n                </div>\n            </div>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n            </p>\n        </ion-item>\n\n        <ion-item>\n            <div class="reviews_details">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/g9.png" class="crop_img">\n                </div>\n                <div class="other_details">\n                    <h2 class="d-flex">\n                        <span class="name">Emili Williamson</span>\n                        <span class="end ratings_icon">\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star "></ion-icon>\n                            <ion-icon class="zmdi zmdi-star "></ion-icon>\n                        </span>\n                    </h2>\n                    <h3>22 Jan 19. 11:30 am</h3>\n                </div>\n            </div>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n            </p>\n        </ion-item>\n\n        <ion-item>\n            <div class="reviews_details">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/g7.png" class="crop_img">\n                </div>\n                <div class="other_details">\n                    <h2 class="d-flex">\n                        <span class="name">Shoun Jamson</span>\n                        <span class="end ratings_icon">\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                        </span>\n                    </h2>\n                    <h3>22 Jan 19. 11:30 am</h3>\n                </div>\n            </div>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n            </p>\n        </ion-item>\n\n\n        <ion-item>\n            <div class="reviews_details">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/g9.png" class="crop_img">\n                </div>\n                <div class="other_details">\n                    <h2 class="d-flex">\n                        <span class="name">Emili Williamson</span>\n                        <span class="end ratings_icon">\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                        </span>\n                    </h2>\n                    <h3>22 Jan 19. 11:30 am</h3>\n                </div>\n            </div>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n            </p>\n        </ion-item>\n\n        <ion-item>\n            <div class="reviews_details">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/g3.png" class="crop_img">\n                </div>\n                <div class="other_details">\n                    <h2 class="d-flex">\n                        <span class="name">George Smith</span>\n                        <span class="end ratings_icon">\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star "></ion-icon>\n                        </span>\n                    </h2>\n                    <h3>22 Jan 19. 11:30 am</h3>\n                </div>\n            </div>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n            </p>\n        </ion-item>\n\n        <ion-item>\n            <div class="reviews_details">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/g6.png" class="crop_img">\n                </div>\n                <div class="other_details">\n                    <h2 class="d-flex">\n                        <span class="name">Elvis Taylor</span>\n                        <span class="end ratings_icon">\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                        </span>\n                    </h2>\n                    <h3>22 Jan 19. 11:30 am</h3>\n                </div>\n            </div>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n            </p>\n        </ion-item>\n\n        <ion-item>\n            <div class="reviews_details">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/g9.png" class="crop_img">\n                </div>\n                <div class="other_details">\n                    <h2 class="d-flex">\n                        <span class="name">Emili Williamson</span>\n                        <span class="end ratings_icon">\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star "></ion-icon>\n                            <ion-icon class="zmdi zmdi-star "></ion-icon>\n                        </span>\n                    </h2>\n                    <h3>22 Jan 19. 11:30 am</h3>\n                </div>\n            </div>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n            </p>\n        </ion-item>\n\n        <ion-item>\n            <div class="reviews_details">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/g7.png" class="crop_img">\n                </div>\n                <div class="other_details">\n                    <h2 class="d-flex">\n                        <span class="name">Shoun Jamson</span>\n                        <span class="end ratings_icon">\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                        </span>\n                    </h2>\n                    <h3>22 Jan 19. 11:30 am</h3>\n                </div>\n            </div>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n            </p>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\hotel_review\hotel_review.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Hotel_reviewPage);
    return Hotel_reviewPage;
}());

//# sourceMappingURL=hotel_review.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Hotel_bookedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Hotel_bookedPage = /** @class */ (function () {
    function Hotel_bookedPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Hotel_bookedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-hotel_booked',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\hotel_booked\hotel_booked.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>{{\'hotel_room_booked\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="booking_receipt">\n        <div class="container receipt_header">\n            <h2>Manhattan Beaches</h2>\n            <h6 class="d-flex">City Park, Manhattan <span class="end">$100.00</span></h6>\n        </div>\n        <div class="banner">\n            <ion-scroll scrollX="true">\n                <div class="item_scroll">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/12.png" class="crop_img">\n                    </div>\n                </div>\n                <div class="item_scroll">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/13.png" class="crop_img">\n                    </div>\n                </div>\n                <div class="item_scroll">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/12.png" class="crop_img">\n                    </div>\n                </div>\n                <div class="item_scroll">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/13.png" class="crop_img">\n                    </div>\n                </div>\n            </ion-scroll>\n        </div>\n        <div class="container receipt_containt">\n            <ion-row>\n                <ion-col col-6>\n                    <h3>{{\'check_in\' | translate}}</h3>\n                    <h2>23 Jun, 11:00 am</h2>\n                </ion-col>\n                <ion-col col-6 text-end>\n                    <h3>{{\'check_out\' | translate}}</h3>\n                    <h2>24 Jun, 10:00 am</h2>\n                </ion-col>\n            </ion-row> \n            <ion-row>\n                <ion-col col-6>\n                    <h3>{{\'room_num\' | translate}}</h3>\n                    <h2>B112</h2>\n                </ion-col>\n                <ion-col col-6 text-end>\n                    <h3>{{\'total_guest\' | translate}}</h3>\n                    <h2>02</h2>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-5>\n                    <h3>{{\'booked_by\' | translate}}</h3>\n                    <h2>Sam Smith</h2>\n                </ion-col>\n                <ion-col col-2 text-center>\n                    <h3>{{\'age\' | translate}}</h3>\n                    <h2>25</h2>\n                </ion-col>\n                <ion-col col-5 text-end>\n                    <h3>{{\'gender\' | translate}}</h3>\n                    <h2>Male</h2>\n                </ion-col>\n            </ion-row>\n        </div>\n\n        <div class="container map">\n           <div class="map_box">\n               <img src="assets/imgs/map.png">\n               <ion-icon class="zmdi zmdi-pin" style="left: 50%; top: 50%;"></ion-icon>\n            </div>\n        </div>\n    </div>\n      <button ion-button text-uppercase full clear no-margin class="btn">{{\'get_direction\' | translate}}</button>\n</ion-content>'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\hotel_booked\hotel_booked.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Hotel_bookedPage);
    return Hotel_bookedPage;
}());

//# sourceMappingURL=hotel_booked.js.map

/***/ }),

/***/ 220:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search_trainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion_datepicker__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__train_result_train_result__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Search_trainPage = /** @class */ (function () {
    function Search_trainPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.train = "one_way";
        this.abult = "1";
        this.children = "0";
        this.infrat = "0";
        this.class = "1";
        this.localDate = new Date();
        this.initDate = new Date();
        this.initDate2 = new Date(2015, 1, 1);
        this.minDate = new Date(2018, 2, 31);
        this.maxDate = new Date(2018, 11, 10);
        this.disabledDates = [new Date(2017, 7, 14)];
        this.localeString = {
            monday: true,
            weekdays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
            months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        };
        this.min = new Date();
    }
    Search_trainPage.prototype.ngOnInit = function () {
    };
    Search_trainPage.prototype.Log = function (stuff) {
        this.datepicker.open();
        this.datepicker.changed.subscribe(function () { return console.log('test'); });
        console.log(stuff);
    };
    Search_trainPage.prototype.event = function (data) {
        this.localDate = data;
    };
    Search_trainPage.prototype.setDate = function (date) {
        console.log(date);
        this.initDate = date;
    };
    Search_trainPage.prototype.train_result = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__train_result_train_result__["a" /* Train_resultPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ion_datepicker__["a" /* DatePickerDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ion_datepicker__["a" /* DatePickerDirective */])
    ], Search_trainPage.prototype, "datepicker", void 0);
    Search_trainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search_train',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\search_train\search_train.html"*/'<ion-header class="theme_header bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            {{\'search_tarain\' | translate}}\n        </ion-title>\n    </ion-navbar>\n    <div class="banner from">\n        <div class="banner_bg center_img">\n            <img src="assets/imgs/train.png" class="crop_img">\n        </div>\n        <ion-list no-lines class="form">\n            <ion-item>\n                <ion-icon class="zmdi zmdi-long-arrow-up" item-start></ion-icon>\n                <h4>{{\'from\' | translate}}</h4>\n                <!--                <ion-input type="text" value="Hou - Houstone, USA"></ion-input>-->\n                <h2>Houstone, USA</h2>\n            </ion-item>\n            <h3>\n                <ion-icon class="zmdi zmdi-swap-vertical"></ion-icon>\n            </h3>\n            <ion-item>\n                <ion-icon class="zmdi zmdi-long-arrow-down" item-start></ion-icon>\n                <h4>{{\'to\' | translate}}</h4>\n                <!--                <ion-input type="text" value="MHK - Manhattan, USA"></ion-input>-->\n                <h2>Manhattan, USA</h2>\n            </ion-item>\n        </ion-list>\n\n        <ion-segment [(ngModel)]="train">\n              <ion-segment-button value="one_way">\n                {{\'one_way\' | translate}}\n            </ion-segment-button>\n            <ion-segment-button value="return">\n                {{\'return\' | translate}}\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n</ion-header>\n\n<ion-content>\n    <div class="tab_container" [ngSwitch]="train">\n        <div class="tab_contant" *ngSwitchCase="\'one_way\'">\n            <ion-list no-lines>\n                <ion-card>\n                    <ion-row>\n                        <ion-col col-5>\n                            <h3>{{\'departure\' | translate}}</h3>\n                            <ion-item>\n                                <div class="text">\n                                    <h2>23</h2>\n                                    <h4>Jul 2019 <span>Tuesday</span></h4>\n                                </div>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-7>\n                            <div class="one_way_option">\n                                <ion-icon class="zmdi zmdi-calendar-alt" ion-datepicker [(value)]="initDate" locale="en-US" clear></ion-icon>\n                                <h4>\n                                    15 Jul\n                                    <span>Today</span>\n                                </h4>\n                                <h4>\n                                    16 Jul\n                                    <span>Tomorrow</span>\n                                </h4>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n\n                <ion-card>\n                    <h3>{{\'travellers\' | translate}}</h3>\n                    <ion-row>\n                        <ion-col col-4>\n                            <ion-item>\n                                <ion-select [(ngModel)]="abult" interface="action-sheet" item-start>\n                                    <ion-option value="1">01</ion-option>\n                                    <ion-option value="2">02</ion-option>\n                                    <ion-option value="3">03</ion-option>\n                                    <ion-option value="4">04</ion-option>\n                                    <ion-option value="5">05</ion-option>\n                                </ion-select>\n                                <ion-label>{{\'abult\' | translate}}</ion-label>\n                            </ion-item>\n                        </ion-col>\n\n                        <ion-col col-4>\n                            <ion-item>\n                                <ion-select [(ngModel)]="children" interface="action-sheet" item-start>\n                                    <ion-option value="0">0</ion-option>\n                                    <ion-option value="1">01</ion-option>\n                                    <ion-option value="2">02</ion-option>\n                                    <ion-option value="3">03</ion-option>\n                                    <ion-option value="4">04</ion-option>\n                                    <ion-option value="5">05</ion-option>\n                                </ion-select>\n                                <ion-label>{{\'children\' | translate}}</ion-label>\n                            </ion-item>\n                        </ion-col>\n\n                        <ion-col col-4>\n                            <ion-item>\n                                <ion-select [(ngModel)]="infrat" interface="action-sheet" item-start>\n                                    <ion-option value="0">0</ion-option>\n                                    <ion-option value="1">01</ion-option>\n                                    <ion-option value="2">02</ion-option>\n                                    <ion-option value="3">03</ion-option>\n                                    <ion-option value="4">04</ion-option>\n                                    <ion-option value="5">05</ion-option>\n                                </ion-select>\n                                <ion-label>{{\'infrat\' | translate}}</ion-label>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n\n                <ion-card class="select_provider">\n                    <h3>{{\'select_provider\' | translate}}</h3>\n                    <ion-row>\n                        <ion-col col-12>\n                            <ion-item>\n                                <ion-select [(ngModel)]="class">\n                                    <ion-option value="1">All Provider</ion-option>\n                                    <ion-option value="2">Provider</ion-option>\n                                </ion-select>\n<!--                                <ion-label>{{\'class\' | translate}}</ion-label>-->\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n            </ion-list>\n        </div>\n        \n        \n        <div class="tab_contant" *ngSwitchCase="\'return\'">\n            <ion-list no-lines>\n                <ion-card>\n                    <ion-row>\n                        <ion-col col-5>\n                            <h3>{{\'departure\' | translate}}</h3>\n                            <ion-item>\n                                <div class="text">\n                                    <h2>24</h2>\n                                    <h4>Jul 2019 <span>Tuesday</span></h4>\n                                </div>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-7>\n                            <div class="one_way_option">\n                                <ion-icon class="zmdi zmdi-calendar-alt" ion-datepicker [(value)]="initDate" locale="en-US" clear></ion-icon>\n                                <h4>\n                                    15 Jul\n                                    <span>Today</span>\n                                </h4>\n                                <h4>\n                                    16 Jul\n                                    <span>Tomorrow</span>\n                                </h4>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n\n                <ion-card>\n                    <h3>{{\'travellers\' | translate}}</h3>\n                    <ion-row>\n                        <ion-col col-4>\n                            <ion-item>\n                                <ion-select [(ngModel)]="abult" interface="action-sheet" item-start>\n                                    <ion-option value="1">01</ion-option>\n                                    <ion-option value="2">02</ion-option>\n                                    <ion-option value="3">03</ion-option>\n                                    <ion-option value="4">04</ion-option>\n                                    <ion-option value="5">05</ion-option>\n                                </ion-select>\n                                <ion-label>{{\'abult\' | translate}}</ion-label>\n                            </ion-item>\n                        </ion-col>\n\n                        <ion-col col-4>\n                            <ion-item>\n                                <ion-select [(ngModel)]="children" interface="action-sheet" item-start>\n                                    <ion-option value="0">0</ion-option>\n                                    <ion-option value="1">01</ion-option>\n                                    <ion-option value="2">02</ion-option>\n                                    <ion-option value="3">03</ion-option>\n                                    <ion-option value="4">04</ion-option>\n                                    <ion-option value="5">05</ion-option>\n                                </ion-select>\n                                <ion-label>{{\'children\' | translate}}</ion-label>\n                            </ion-item>\n                        </ion-col>\n\n                        <ion-col col-4>\n                            <ion-item>\n                                <ion-select [(ngModel)]="infrat" interface="action-sheet" item-start>\n                                    <ion-option value="0">0</ion-option>\n                                    <ion-option value="1">01</ion-option>\n                                    <ion-option value="2">02</ion-option>\n                                    <ion-option value="3">03</ion-option>\n                                    <ion-option value="4">04</ion-option>\n                                    <ion-option value="5">05</ion-option>\n                                </ion-select>\n                                <ion-label>{{\'infrat\' | translate}}</ion-label>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n\n                <ion-card  class="select_provider">\n                    <h3>{{\'select_provider\' | translate}}</h3>\n                    <ion-row>\n                        <ion-col col-12>\n                            <ion-item>\n                                <ion-select [(ngModel)]="class">\n                                    <ion-option value="1">All Provider</ion-option>\n                                    <ion-option value="2">Provider</ion-option>\n                                </ion-select>\n<!--                                <ion-label>{{\'class\' | translate}}</ion-label>-->\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n            </ion-list>\n        </div>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <button ion-button text-uppercase no-margin full class="btn"  (click)="train_result()">{{\'show_result\' | translate}}</button>\n</ion-footer>'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\search_train\search_train.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2_ion_datepicker__["a" /* DatePickerDirective */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Search_trainPage);
    return Search_trainPage;
}());

//# sourceMappingURL=search_train.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Train_resultPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__train_info_train_info__ = __webpack_require__(222);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Train_resultPage = /** @class */ (function () {
    function Train_resultPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Train_resultPage.prototype.train_info = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__train_info_train_info__["a" /* Train_infoPage */]);
    };
    Train_resultPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-train_result',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\train_result\train_result.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            <h2>Houstone To Manhattan</h2>\n            <p class="d-flex">\n                <span>{{\'depature\' | translate}} 23 Jul </span>\n                <ion-icon></ion-icon>\n                <span>1 {{\'traveller\' | translate}}</span>\n                <ion-icon></ion-icon>\n                <span>{{\'all_provider\' | translate}}</span>\n            </p>\n        </ion-title>\n    </ion-navbar>\n    <div class="header_bg">\n        <img src="assets/imgs/flight.png">\n    </div>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines>\n        <ion-item (click)="train_info()">\n            <div class="item_header d-flex">\n                <h2 class="d-flex">American Superfast Express <span>B15523</span></h2>\n                <h3 text-end>{{\'view_route\' | translate}}</h3>\n            </div>\n            <div class="item_containt d-flex">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/train_1.png" class="crop_img">\n                </div>\n                <div class="text_box">\n                    <ion-row>\n                        <ion-col col-4>\n                            <h2>23 Jun, 12:35 am</h2>\n                            <h3>Houston</h3>\n                        </ion-col>\n                        <ion-col col-4 text-center>\n                            <h3><small>1 Stop</small></h3>\n                            <div class="icon_box">\n                                <ion-icon class="zmdi zmdi-circle" text-start></ion-icon>\n                                <ion-icon class="zmdi zmdi-circle" text-center></ion-icon>\n                                <ion-icon class="zmdi zmdi-circle" text-end></ion-icon>\n                            </div>\n                            <h3><small>12 hr 32 mins</small></h3>\n                        </ion-col>\n                        <ion-col col-4 text-end>\n                            <h2>23 Jun, 12:35 am</h2>\n                            <h3>Manhattan</h3>\n                        </ion-col>\n                    </ion-row>\n                </div>\n            </div>\n            <div class="item_footer">\n                <ion-scroll scrollX="true">\n                    <div class="item_scroll">\n                        <h2 text-center>Frist class <span> ($35.00) - </span> <small>50</small></h2>\n                    </div>\n                    <div class="item_scroll">\n                        <h2 text-center>Second class <span> ($23.00) - </span> <small>78</small></h2>\n                    </div>\n                    <div class="item_scroll">\n                        <h2 text-center>Chir class <span> ($18.00) - </span> <small>120</small></h2>\n                    </div>\n                    <div class="item_scroll">\n                        <h2 text-center>Frist class <span> ($35.00) - </span> <small>50</small></h2>\n                    </div>\n                    <div class="item_scroll">\n                        <h2 text-center>Second class <span> ($23.00) - </span> <small>78</small></h2>\n                    </div>\n                    <div class="item_scroll">\n                        <h2 text-center>Chir class <span> ($18.00) - </span> <small>120</small></h2>\n                    </div>\n                </ion-scroll>\n            </div>\n        </ion-item>\n        <ion-item (click)="train_info()">\n            <div class="item_header d-flex">\n                <h2 class="d-flex">American Superfast Express <span>B15523</span></h2>\n                <h3 text-end>{{\'view_route\' | translate}}</h3>\n            </div>\n            <div class="item_containt d-flex">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/train_1.png" class="crop_img">\n                </div>\n                <div class="text_box">\n                    <ion-row>\n                        <ion-col col-4>\n                            <h2>23 Jun, 12:35 am</h2>\n                            <h3>Houston</h3>\n                        </ion-col>\n                        <ion-col col-4 text-center>\n                            <h3><small>1 Stop</small></h3>\n                            <div class="icon_box">\n                                <ion-icon class="zmdi zmdi-circle" text-start></ion-icon>\n                                <ion-icon class="zmdi zmdi-circle" text-center></ion-icon>\n                                <ion-icon class="zmdi zmdi-circle" text-end></ion-icon>\n                            </div>\n                            <h3><small>12 hr 32 mins</small></h3>\n                        </ion-col>\n                        <ion-col col-4 text-end>\n                            <h2>23 Jun, 12:35 am</h2>\n                            <h3>Manhattan</h3>\n                        </ion-col>\n                    </ion-row>\n                </div>\n            </div>\n            <div class="item_footer">\n                <ion-scroll scrollX="true">\n                    <div class="item_scroll">\n                        <h2 text-center>Frist class <span> ($35.00) - </span> <small>50</small></h2>\n                    </div>\n                    <div class="item_scroll">\n                        <h2 text-center>Second class <span> ($23.00) - </span> <small>78</small></h2>\n                    </div>\n                    <div class="item_scroll">\n                        <h2 text-center>Chir class <span> ($18.00) - </span> <small>120</small></h2>\n                    </div>\n                    <div class="item_scroll">\n                        <h2 text-center>Frist class <span> ($35.00) - </span> <small>50</small></h2>\n                    </div>\n                    <div class="item_scroll">\n                        <h2 text-center>Second class <span> ($23.00) - </span> <small>78</small></h2>\n                    </div>\n                    <div class="item_scroll">\n                        <h2 text-center>Chir class <span> ($18.00) - </span> <small>120</small></h2>\n                    </div>\n                </ion-scroll>\n            </div>\n        </ion-item>\n        <ion-item (click)="train_info()">\n            <div class="item_header d-flex">\n                <h2 class="d-flex">American Superfast Express <span>B15523</span></h2>\n                <h3 text-end>{{\'view_route\' | translate}}</h3>\n            </div>\n            <div class="item_containt d-flex">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/train_1.png" class="crop_img">\n                </div>\n                <div class="text_box">\n                    <ion-row>\n                        <ion-col col-4>\n                            <h2>23 Jun, 12:35 am</h2>\n                            <h3>Houston</h3>\n                        </ion-col>\n                        <ion-col col-4 text-center>\n                            <h3><small>1 Stop</small></h3>\n                            <div class="icon_box">\n                                <ion-icon class="zmdi zmdi-circle" text-start></ion-icon>\n                                <ion-icon class="zmdi zmdi-circle" text-center></ion-icon>\n                                <ion-icon class="zmdi zmdi-circle" text-end></ion-icon>\n                            </div>\n                            <h3><small>12 hr 32 mins</small></h3>\n                        </ion-col>\n                        <ion-col col-4 text-end>\n                            <h2>23 Jun, 12:35 am</h2>\n                            <h3>Manhattan</h3>\n                        </ion-col>\n                    </ion-row>\n                </div>\n            </div>\n            <div class="item_footer">\n                <ion-scroll scrollX="true">\n                    <div class="item_scroll">\n                        <h2 text-center>Frist class <span> ($35.00) - </span> <small>50</small></h2>\n                    </div>\n                    <div class="item_scroll">\n                        <h2 text-center>Second class <span> ($23.00) - </span> <small>78</small></h2>\n                    </div>\n                    <div class="item_scroll">\n                        <h2 text-center>Chir class <span> ($18.00) - </span> <small>120</small></h2>\n                    </div>\n                    <div class="item_scroll">\n                        <h2 text-center>Frist class <span> ($35.00) - </span> <small>50</small></h2>\n                    </div>\n                    <div class="item_scroll">\n                        <h2 text-center>Second class <span> ($23.00) - </span> <small>78</small></h2>\n                    </div>\n                    <div class="item_scroll">\n                        <h2 text-center>Chir class <span> ($18.00) - </span> <small>120</small></h2>\n                    </div>\n                </ion-scroll>\n            </div>\n        </ion-item>\n        <ion-item (click)="train_info()">\n            <div class="item_header d-flex">\n                <h2 class="d-flex">American Superfast Express <span>B15523</span></h2>\n                <h3 text-end>{{\'view_route\' | translate}}</h3>\n            </div>\n            <div class="item_containt d-flex">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/train_1.png" class="crop_img">\n                </div>\n                <div class="text_box">\n                    <ion-row>\n                        <ion-col col-4>\n                            <h2>23 Jun, 12:35 am</h2>\n                            <h3>Houston</h3>\n                        </ion-col>\n                        <ion-col col-4 text-center>\n                            <h3><small>1 Stop</small></h3>\n                            <div class="icon_box">\n                                <ion-icon class="zmdi zmdi-circle" text-start></ion-icon>\n                                <ion-icon class="zmdi zmdi-circle" text-center></ion-icon>\n                                <ion-icon class="zmdi zmdi-circle" text-end></ion-icon>\n                            </div>\n                            <h3><small>12 hr 32 mins</small></h3>\n                        </ion-col>\n                        <ion-col col-4 text-end>\n                            <h2>23 Jun, 12:35 am</h2>\n                            <h3>Manhattan</h3>\n                        </ion-col>\n                    </ion-row>\n                </div>\n            </div>\n            <div class="item_footer">\n                <ion-scroll scrollX="true">\n                    <div class="item_scroll">\n                        <h2 text-center>Frist class <span> ($35.00) - </span> <small>50</small></h2>\n                    </div>\n                    <div class="item_scroll">\n                        <h2 text-center>Second class <span> ($23.00) - </span> <small>78</small></h2>\n                    </div>\n                    <div class="item_scroll">\n                        <h2 text-center>Chir class <span> ($18.00) - </span> <small>120</small></h2>\n                    </div>\n                    <div class="item_scroll">\n                        <h2 text-center>Frist class <span> ($35.00) - </span> <small>50</small></h2>\n                    </div>\n                    <div class="item_scroll">\n                        <h2 text-center>Second class <span> ($23.00) - </span> <small>78</small></h2>\n                    </div>\n                    <div class="item_scroll">\n                        <h2 text-center>Chir class <span> ($18.00) - </span> <small>120</small></h2>\n                    </div>\n                </ion-scroll>\n            </div>\n        </ion-item>\n    </ion-list>\n</ion-content>\n<ion-footer no-border>\n    <button ion-button text-uppercase full no-margin icon-start class="btn" (click)="signup()">\n        <ion-icon class="zmdi zmdi-tune"></ion-icon>\n        {{\'sort_filters\' | translate}}\n    </button>\n</ion-footer>'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\train_result\train_result.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Train_resultPage);
    return Train_resultPage;
}());

//# sourceMappingURL=train_result.js.map

/***/ }),

/***/ 222:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Train_infoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tain_ticket_tain_ticket__ = __webpack_require__(223);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Train_infoPage = /** @class */ (function () {
    function Train_infoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Train_infoPage.prototype.tain_ticket = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tain_ticket_tain_ticket__["a" /* Tain_ticketPage */]);
    };
    Train_infoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-train_info',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\train_info\train_info.html"*/'<ion-header class="theme_header bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            <p class="d-flex">\n                <span>23 Jul 2019</span>\n                <ion-icon></ion-icon>\n                <span>1 {{\'traveller\' | translate}}</span>\n            </p>\n        </ion-title>\n    </ion-navbar>\n    <div class="banner from">\n        <div class="banner_bg center_img">\n            <img src="assets/imgs/train.png" class="crop_img">\n        </div>\n        <ion-list no-lines class="form">\n            <ion-item>\n                <ion-icon class="zmdi zmdi-long-arrow-up" item-start></ion-icon>\n                <h4>23 Jul, 12:35 am</h4>\n                <h2>Houston, USA</h2>\n            </ion-item>\n            <div class="traveling_time d-flex">\n                <div class="underline end"></div>\n                <h3 class="end" text-end>12 hr 35 mins | 8 Stop\n                    <ion-icon class="zmdi zmdi-swap-alt"></ion-icon>\n                </h3>\n            </div>\n            <ion-item>\n                <ion-icon class="zmdi zmdi-long-arrow-down" item-start></ion-icon>\n                <h4>24 Jul, 12:45 pm</h4>\n                <h2>Manhattan, USA</h2>\n            </ion-item>\n        </ion-list>\n        <div class="facilities d-flex">\n            <h2 class="d-flex">\n                <ion-icon class="zmdi zmdi-wifi-alt"></ion-icon>\n                WiFi\n            </h2>\n            <h2 class="d-flex">\n                <ion-icon class="zmdi zmdi-iridescent"></ion-icon>\n                AC\n            </h2>\n            <h2 class="d-flex disabled">\n                <ion-icon class="zmdi zmdi-input-power"></ion-icon>\n                Power\n            </h2>\n            <h2 class="d-flex">\n                <ion-icon class="zmdi zmdi-case"></ion-icon>\n                6 kg bag\n            </h2>\n        </div>\n    </div>\n</ion-header>\n\n<ion-content>\n    <div class="container">\n        <div class="flight_details d-flex">\n            <div class="flight_img center_img">\n                <img src="assets/imgs/train_1.png" class="crop_img">\n            </div>\n            <div class="text">\n                <h2>American Superfast Express</h2>\n                <h3>B145523</h3>\n            </div>\n        </div>\n\n        <ion-list no-lines radio-group>\n            <ion-item>\n                <ion-label class="d-flex">\n                    <div class="class_info">\n                        <h2>Frist Class Seats</h2>\n                        <h3>50 Seats left</h3>\n                    </div>\n                    <h5 class="end">$35.50</h5>\n                </ion-label>\n                <ion-radio checked="true" value="Economy"></ion-radio>\n            </ion-item>\n\n            <ion-item>\n                <ion-label class="d-flex">\n                    <div class="class_info">\n                        <h2>Second Class Seats</h2>\n                        <h3>78 Seats left</h3>\n                    </div>\n                    <h5 class="end">$23.00</h5>\n                </ion-label>\n                <ion-radio value="Premium"></ion-radio>\n            </ion-item>\n\n            <ion-item>\n                <ion-label class="d-flex">\n                    <div class="class_info">\n                        <h2>Chair Class Seats</h2>\n                        <h3>25 Seats left</h3>\n                    </div>\n                    <h5 class="end">$300.00</h5>\n                </ion-label>\n                <ion-radio value="Business"></ion-radio>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <button ion-button text-uppercase no-margin full class="btn" (click)="tain_ticket()">{{\'book_now\' | translate}}</button>\n</ion-footer>'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\train_info\train_info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Train_infoPage);
    return Train_infoPage;
}());

//# sourceMappingURL=train_info.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tain_ticketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Tain_ticketPage = /** @class */ (function () {
    function Tain_ticketPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Tain_ticketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-tain_ticket',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\tain_ticket\tain_ticket.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>{{\'ticket_booked\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="booking_receipt">\n        <div class="container receipt_header d-flex">\n            <div class="img_box center_img">\n                <img src="assets/imgs/train_1.png" class="crop_img">\n            </div>\n            <div class="text_box">\n                <h2>American Express</h2>\n                <h6 class="d-flex">B145523<span class="end">$90.50</span></h6>\n            </div>\n        </div>\n        <div class="container receipt_containt banner">\n            <div class="banner_bg center_img">\n                <img src="assets/imgs/train.png">\n            </div>\n            <ion-row>\n                <ion-col col-5>\n                    <h3>Houstone, USA</h3>\n                    <h2>HOU</h2>\n                </ion-col>\n                <ion-col col-2 text-center>\n                    <ion-icon class="zmdi zmdi-arrow-right"></ion-icon>\n                </ion-col>\n                <ion-col col-5 text-end>\n                    <h3>{{\'Manhattan, USA\' | translate}}</h3>\n                    <h2>MHK</h2>\n                </ion-col>\n            </ion-row>\n        </div>\n        <div class="container receipt_containt">\n            <ion-row>\n                <ion-col col-6>\n                    <h3>{{\'depature\' | translate}}</h3>\n                    <h2>23 Jun, 12:35 am</h2>\n                </ion-col>\n                <ion-col col-6 text-end>\n                    <h3>{{\'arrival\' | translate}}</h3>\n                    <h2>24 Jun, 10:00 am</h2>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-6>\n                    <h3>{{\'class\' | translate}}</h3>\n                    <h2>Frist Class</h2>\n                </ion-col>\n                <ion-col col-6 text-end>\n                    <h3>{{\'seat\' | translate}}</h3>\n                    <h2>A29</h2>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-5>\n                    <h3>{{\'passenger_name\' | translate}}</h3>\n                    <h2>Sam Smith</h2>\n                </ion-col>\n                <ion-col col-2 text-center>\n                    <h3>{{\'age\' | translate}}</h3>\n                    <h2>25</h2>\n                </ion-col>\n                <ion-col col-5 text-end>\n                    <h3>{{\'gender\' | translate}}</h3>\n                    <h2>Male</h2>\n                </ion-col>\n            </ion-row> \n        </div>\n\n        <div class="container barcode_box">\n            <div class="bar_code">\n                <img src="assets/imgs/barcode.png">\n            </div>\n        </div>\n    </div>\n    \n    <button ion-button text-uppercase full clear no-margin class="btn">{{\'dawnload_ticket\' | translate}}</button>\n</ion-content>'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\tain_ticket\tain_ticket.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Tain_ticketPage);
    return Tain_ticketPage;
}());

//# sourceMappingURL=tain_ticket.js.map

/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search_holidayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__holiday_list_holiday_list__ = __webpack_require__(225);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Search_holidayPage = /** @class */ (function () {
    function Search_holidayPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.month = "1";
        this.structure = { lower: 33, upper: 60 };
    }
    Search_holidayPage.prototype.holiday_list = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__holiday_list_holiday_list__["a" /* Holiday_listPage */]);
    };
    Search_holidayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search_holiday',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\search_holiday\search_holiday.html"*/'<ion-header class="theme_header bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            {{\'search_holiday_packages\' | translate}}\n        </ion-title>\n    </ion-navbar>\n    <div class="banner from">\n        <div class="banner_bg center_img">\n            <img src="assets/imgs/holiday.png" class="crop_img">\n        </div>\n        <ion-list no-lines class="form">\n            <ion-item>\n                <ion-icon class="zmdi zmdi-gps-dot" item-start></ion-icon>\n                <h4>{{\'from\' | translate}}</h4>\n                <!--                <ion-input type="text" value="Hou - Houstone, USA"></ion-input>-->\n                <h2>Houstone, USA</h2>\n            </ion-item>\n            <ion-item>\n                <ion-icon class="zmdi zmdi-pin" item-start></ion-icon>\n                <h4>{{\'to\' | translate}}</h4>\n                <!--                <ion-input type="text" value="MHK - Manhattan, USA"></ion-input>-->\n                <h2>Manhattan, USA</h2>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-header>\n\n<ion-content>\n    <div class="tab_container">\n        <div class="tab_contant">\n            <ion-list no-lines>\n                <ion-card class="select_provider">\n                    <h3>{{\'select_month_of_travel\' | translate}}</h3>\n                    <ion-row>\n                        <ion-col col-12>\n                            <ion-item>\n                                <ion-select [(ngModel)]="month">\n                                    <ion-option value="1">November 2019</ion-option>\n                                    <ion-option value="2">December 2019</ion-option>\n                                </ion-select>\n                                <!--                                <ion-label>{{\'class\' | translate}}</ion-label>-->\n                            </ion-item>\n                        </ion-col>\n                    </ion-row> \n                </ion-card>\n\n                <ion-card class="select_provider">\n                    <h3>{{\'budget\' | translate}}</h3>\n                    <ion-row>\n                        <ion-col col-12>\n                            <ion-item>\n                                <ion-item>\n                                    <h3 item-start>$100</h3>\n                                    <ion-range dualKnobs="true" pin="true" [(ngModel)]="structure">\n                                    </ion-range>\n                                    <h3 item-end>$1000</h3>\n                                </ion-item>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n            </ion-list>\n        </div>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <button ion-button text-uppercase no-margin full class="btn" (click)="holiday_list()">{{\'show_result\' | translate}}</button>\n</ion-footer>'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\search_holiday\search_holiday.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Search_holidayPage);
    return Search_holidayPage;
}());

//# sourceMappingURL=search_holiday.js.map

/***/ }),

/***/ 225:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Holiday_listPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__holiday_info_holiday_info__ = __webpack_require__(226);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Holiday_listPage = /** @class */ (function () {
    function Holiday_listPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Holiday_listPage.prototype.holiday_info = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__holiday_info_holiday_info__["a" /* Holiday_infoPage */]);
    };
    Holiday_listPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-holiday_list',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\holiday_list\holiday_list.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            <h2>Manhattan</h2>\n            <p class="d-flex">\n                <span>November 2019 </span>\n                <ion-icon></ion-icon>\n                <span>$250 - $350</span>\n            </p>\n        </ion-title>\n    </ion-navbar>\n    <div class="header_bg">\n        <img src="assets/imgs/hotel.png">\n    </div>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines>\n        <ion-item (click)="holiday_info()">\n            <ion-badge class="end">3 D - 4 N</ion-badge>\n            <ion-scroll scrollX="true">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/ho1.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/ho2.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/ho3.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/ho1.png" class="crop_img">\n                </div>\n            </ion-scroll>\n            <div class="item_details">\n                <h2 class="d-flex">Manhattan Beaches <span class="end">$250.00</span></h2>\n                <p class="d-flex">Rockaway Beach, Fort Tulden...<span class="end">Per Person</span></p>\n            </div>\n            <div class="item_facilitate">\n                <div class="icon_text_box d-flex">\n                    <span>\n                        <ion-icon class="zmdi zmdi-cutlery"></ion-icon>\n                        <p>Meals</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-flight-takeoff"></ion-icon>\n                        <p>Air-fair</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-car"></ion-icon>\n                        <p>Transfer</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-city-alt"></ion-icon>\n                        <p>Hotel</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-camera"></ion-icon>\n                        <p>Sightseeing</p>\n                    </span>\n                </div>\n            </div>\n        </ion-item>\n\n        <ion-item (click)="holiday_info()">\n            <ion-badge class="end">3 D - 4 N</ion-badge>\n            <ion-scroll scrollX="true">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/ho1.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/ho2.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/ho3.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/ho1.png" class="crop_img">\n                </div>\n            </ion-scroll>\n            <div class="item_details">\n                <h2 class="d-flex">Manhattan Beaches <span class="end">$250.00</span></h2>\n                <p class="d-flex">Rockaway Beach, Fort Tulden...<span class="end">Per Person</span></p>\n            </div>\n            <div class="item_facilitate">\n                <div class="icon_text_box d-flex">\n                    <span>\n                        <ion-icon class="zmdi zmdi-cutlery"></ion-icon>\n                        <p>Meals</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-flight-takeoff"></ion-icon>\n                        <p>Air-fair</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-car"></ion-icon>\n                        <p>Transfer</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-city-alt"></ion-icon>\n                        <p>Hotel</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-camera"></ion-icon>\n                        <p>Sightseeing</p>\n                    </span>\n                </div>\n            </div>\n        </ion-item>\n\n        <ion-item (click)="holiday_info()">\n            <ion-badge class="end">3 D - 4 N</ion-badge>\n            <ion-scroll scrollX="true">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/ho1.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/ho2.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/ho3.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/ho1.png" class="crop_img">\n                </div>\n            </ion-scroll>\n            <div class="item_details">\n                <h2 class="d-flex">Manhattan Beaches <span class="end">$250.00</span></h2>\n                <p class="d-flex">Rockaway Beach, Fort Tulden...<span class="end">Per Person</span></p>\n            </div>\n            <div class="item_facilitate">\n                <div class="icon_text_box d-flex">\n                    <span>\n                        <ion-icon class="zmdi zmdi-cutlery"></ion-icon>\n                        <p>Meals</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-flight-takeoff"></ion-icon>\n                        <p>Air-fair</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-car"></ion-icon>\n                        <p>Transfer</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-city-alt"></ion-icon>\n                        <p>Hotel</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-camera"></ion-icon>\n                        <p>Sightseeing</p>\n                    </span>\n                </div>\n            </div>\n        </ion-item>\n\n        <ion-item (click)="holiday_info()">\n            <ion-badge class="end">3 D - 4 N</ion-badge>\n            <ion-scroll scrollX="true">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/ho1.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/ho2.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/ho3.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/ho1.png" class="crop_img">\n                </div>\n            </ion-scroll>\n            <div class="item_details">\n                <h2 class="d-flex">Manhattan Beaches <span class="end">$250.00</span></h2>\n                <p class="d-flex">Rockaway Beach, Fort Tulden...<span class="end">Per Person</span></p>\n            </div>\n            <div class="item_facilitate">\n                <div class="icon_text_box d-flex">\n                    <span>\n                        <ion-icon class="zmdi zmdi-cutlery"></ion-icon>\n                        <p>Meals</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-flight-takeoff"></ion-icon>\n                        <p>Air-fair</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-car"></ion-icon>\n                        <p>Transfer</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-city-alt"></ion-icon>\n                        <p>Hotel</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-camera"></ion-icon>\n                        <p>Sightseeing</p>\n                    </span>\n                </div>\n            </div>\n        </ion-item>\n    </ion-list>\n</ion-content>\n<!--\n<ion-footer no-border>\n    <ion-row>\n        <ion-col col-6 no-padding>\n            <button ion-button text-uppercase no-margin full icon-start class="btn">\n                <ion-icon class="zmdi zmdi-tune"></ion-icon>\n                {{\'filters\' | translate}}\n            </button>\n        </ion-col>\n        <ion-col col-6 no-padding>\n            <button ion-button text-uppercase no-margin full icon-start class="btn">\n                <ion-icon class="zmdi zmdi-map"></ion-icon>\n                {{\'map_view\' | translate}}\n            </button>\n        </ion-col>\n    </ion-row>\n</ion-footer>-->'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\holiday_list\holiday_list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Holiday_listPage);
    return Holiday_listPage;
}());

//# sourceMappingURL=holiday_list.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Holiday_infoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__holiday_booked_holiday_booked__ = __webpack_require__(227);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Holiday_infoPage = /** @class */ (function () {
    function Holiday_infoPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.booking_day = "day_a";
    }
    Holiday_infoPage.prototype.holiday_booked = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__holiday_booked_holiday_booked__["a" /* Holiday_bookedPage */]);
    };
    Holiday_infoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-holiday_info',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\holiday_info\holiday_info.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="banner">\n        <ion-slides autoplay="5000" loop="true" speed="500" pager dir="ltr">\n            <ion-slide>\n                <div class="slide_box">\n                    <div class="profile_img center_img">\n                        <img src="assets/imgs/ho1.png" class="crop_img">\n                    </div>\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div class="slide_box">\n                    <div class="profile_img center_img">\n                        <img src="assets/imgs/ho2.png" class="crop_img">\n                    </div>\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div class="slide_box">\n                    <div class="profile_img center_img">\n                        <img src="assets/imgs/ho3.png" class="crop_img">\n                    </div>\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div class="slide_box">\n                    <div class="profile_img center_img">\n                        <img src="assets/imgs/ho1.png" class="crop_img">\n                    </div>\n                </div>\n            </ion-slide>\n        </ion-slides>\n\n        <div class="banner_details">\n            <h2 class="d-flex"><span>Manhattan Beaches</span>\n                <ion-badge class="end">3 D - 4 N</ion-badge>\n            </h2>\n            <h3 class="d-flex"><span>Rockaway Beach, Fort Tulden, Brighton Beach</span></h3>\n        </div>\n    </div>\n\n    <ion-list no-lines>\n        <ion-item class="facilities">\n            <h2>{{\'facilities\' | translate}}</h2>\n            <div class="scroll_container">\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-cutlery"></ion-icon>\n                    <p>Meals</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-flight-takeoff"></ion-icon>\n                    <p>Air-fair</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-car"></ion-icon>\n                    <p>Transfer</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-city-alt"></ion-icon>\n                    <p>Hotel</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-camera"></ion-icon>\n                    <p>Sightseeing</p>\n                </div>\n            </div>\n        </ion-item>\n\n        <ion-item class="travellers">\n            <p class="d-flex">\n                <span>2 {{\'travellers\' | translate}}</span>\n                <ion-icon></ion-icon>\n                <span>$250 - $350</span>\n                <span class="end">{{\'change\' | translate}}</span>\n            </p>\n        </ion-item>\n        <ion-segment [(ngModel)]="booking_day">\n            <ion-segment-button value="day_a">\n                Day 1\n            </ion-segment-button>\n            <ion-segment-button value="day_b">\n                Day 2\n            </ion-segment-button>\n            <ion-segment-button value="day_c">\n                Day 3\n            </ion-segment-button>\n        </ion-segment>\n\n        <ion-item [ngSwitch]="booking_day" class="tab_container">\n            <div class="tab_containt" *ngSwitchCase="\'day_a\'">\n                <h2 class="">- Pick-up from Air Port</h2>\n                <h2 class="">- Drop at hotel <span> Silver Leaf Manhattan</span></h2>\n                <h2 class="">- Breakfast at Hotel</h2>\n                <h2 class="">- At evening sightseeing at beach</h2>\n                <h2 class="">- Candle light dinner at beach resort</h2>\n            </div>\n            <div class="tab_containt" *ngSwitchCase="\'day_b\'">\n                <h2 class="">- At evening sightseeing at beach</h2>\n                <h2 class="">- Candle light dinner at beach resort</h2>\n            </div>\n            <div class="tab_containt" *ngSwitchCase="\'day_c\'">\n                <h2 class="">- Breakfast at Hotel</h2>\n                <h2 class="">- At evening sightseeing at beach</h2>\n                <h2 class="">- Candle light dinner at beach resort</h2>\n            </div>\n        </ion-item>\n    </ion-list>\n</ion-content>\n<ion-footer no-border (click)="holiday_booked()">\n    <h2 class="d-flex">$250.00 <small>Per person</small><span class="end" text-uppercase>{{\'book_now\' | translate}}</span></h2>\n</ion-footer>\n'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\holiday_info\holiday_info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Holiday_infoPage);
    return Holiday_infoPage;
}());

//# sourceMappingURL=holiday_info.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Holiday_bookedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Holiday_bookedPage = /** @class */ (function () {
    function Holiday_bookedPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.booking_day = "day_a";
    }
    Holiday_bookedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-holiday_booked',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\holiday_booked\holiday_booked.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>{{\'holiday_booked\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="booking_receipt">\n        <div class="container receipt_header">\n            <h2>Manhattan Beaches</h2>\n            <h6 class="d-flex">{{\'call_us\' | translate}} <span class="end">$120.00</span></h6>\n        </div>\n        <div class="banner">\n            <ion-scroll scrollX="true">\n                <div class="item_scroll">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/ho1.png" class="crop_img">\n                    </div>\n                </div>\n                <div class="item_scroll">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/ho2.png" class="crop_img">\n                    </div>\n                </div>\n                <div class="item_scroll">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/ho3.png" class="crop_img">\n                    </div>\n                </div>\n                <div class="item_scroll">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/ho1.png" class="crop_img">\n                    </div>\n                </div>\n            </ion-scroll>\n        </div>\n        <div class="container receipt_containt">\n            <ion-row>\n                <ion-col col-6>\n                    <h3>{{\'holiday_starts\' | translate}}</h3>\n                    <h2>23 Jun </h2>\n                </ion-col>\n                <ion-col col-6 text-end>\n                    <h3>{{\'holiday_ends\' | translate}}</h3>\n                    <h2>24 Jun, 10:00 am</h2>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-5>\n                    <h3>{{\'booked_by\' | translate}}</h3>\n                    <h2>Sam Smith</h2>\n                </ion-col>\n                <ion-col col-2 text-center>\n                    <h3>{{\'age\' | translate}}</h3>\n                    <h2>25</h2>\n                </ion-col>\n                <ion-col col-5 text-end>\n                    <h3>{{\'gender\' | translate}}</h3>\n                    <h2>Male</h2>\n                </ion-col>\n            </ion-row>\n        </div>\n\n        <div class="container tab_container">\n            <ion-segment [(ngModel)]="booking_day">\n                <ion-segment-button value="day_a">\n                    Day 1\n                </ion-segment-button>\n                <ion-segment-button value="day_b">\n                    Day 2\n                </ion-segment-button>\n                <ion-segment-button value="day_c">\n                    Day 3\n                </ion-segment-button>\n            </ion-segment>\n            <div class="" [ngSwitch]="booking_day">\n                <div class="tab_containt" *ngSwitchCase="\'day_a\'">\n                    <h2 class="">- Pick-up from Air Port</h2>\n                    <h2 class="">- Drop at hotel</h2>\n                    <h2 class="">- Breakfast at Hotel</h2>\n                    <h2 class="">- At evening sightseeing at beach</h2>\n                    <h2 class="">- Candle light dinner at beach resort</h2>\n                </div>\n                <div class="tab_containt" *ngSwitchCase="\'day_b\'">\n                    <h2 class="">- At evening sightseeing at beach</h2>\n                    <h2 class="">- Candle light dinner at beach resort</h2>\n                </div>\n                <div class="tab_containt" *ngSwitchCase="\'day_c\'">\n                    <h2 class="">- Breakfast at Hotel</h2>\n                    <h2 class="">- At evening sightseeing at beach</h2>\n                    <h2 class="">- Candle light dinner at beach resort</h2>\n                </div>\n            </div>\n        </div>\n    </div>\n</ion-content>\n'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\holiday_booked\holiday_booked.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Holiday_bookedPage);
    return Holiday_bookedPage;
}());

//# sourceMappingURL=holiday_booked.js.map

/***/ }),

/***/ 228:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search_busPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion_datepicker__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bus_list_bus_list__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Search_busPage = /** @class */ (function () {
    function Search_busPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.train = "one_way";
        this.abult = "1";
        this.children = "0";
        this.infrat = "0";
        this.class = "1";
        this.localDate = new Date();
        this.initDate = new Date();
        this.initDate2 = new Date(2015, 1, 1);
        this.minDate = new Date(2018, 2, 31);
        this.maxDate = new Date(2018, 11, 10);
        this.disabledDates = [new Date(2017, 7, 14)];
        this.localeString = {
            monday: true,
            weekdays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
            months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        };
        this.min = new Date();
    }
    Search_busPage.prototype.ngOnInit = function () {
    };
    Search_busPage.prototype.Log = function (stuff) {
        this.datepicker.open();
        this.datepicker.changed.subscribe(function () { return console.log('test'); });
        console.log(stuff);
    };
    Search_busPage.prototype.event = function (data) {
        this.localDate = data;
    };
    Search_busPage.prototype.setDate = function (date) {
        console.log(date);
        this.initDate = date;
    };
    Search_busPage.prototype.bus_list = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__bus_list_bus_list__["a" /* Bus_listPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ion_datepicker__["a" /* DatePickerDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ion_datepicker__["a" /* DatePickerDirective */])
    ], Search_busPage.prototype, "datepicker", void 0);
    Search_busPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search_bus',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\search_bus\search_bus.html"*/'<ion-header class="theme_header bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            {{\'search_bus\' | translate}}\n        </ion-title>\n    </ion-navbar>\n    <div class="banner from">\n        <div class="banner_bg center_img">\n            <img src="assets/imgs/bus.png" class="crop_img">\n        </div>\n        <ion-list no-lines class="form">\n            <ion-item>\n                <ion-icon class="zmdi zmdi-long-arrow-up" item-start></ion-icon>\n                <h4>{{\'boarding_from\' | translate}}</h4>\n                <!--                <ion-input type="text" value="Hou - Houstone, USA"></ion-input>-->\n                <h2>Houstone, USA</h2>\n            </ion-item>\n            <h3>\n                <ion-icon class="zmdi zmdi-swap-vertical"></ion-icon>\n            </h3>\n            <ion-item>\n                <ion-icon class="zmdi zmdi-long-arrow-down" item-start></ion-icon>\n                <h4>{{\'travelling_to\' | translate}}</h4>\n                <!--                <ion-input type="text" value="MHK - Manhattan, USA"></ion-input>-->\n                <h2>Manhattan, USA</h2>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-header>\n\n<ion-content>\n    <div class="tab_container">\n        <div class="tab_contant">\n            <ion-list no-lines>\n                <ion-card>\n                    <ion-row>\n                        <ion-col col-5>\n                            <h3>{{\'departure_date\' | translate}}</h3>\n                            <ion-item>\n                                <div class="text">\n                                    <h2>23</h2>\n                                    <h4>Jul 2019 <span>Tuesday</span></h4>\n                                </div>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-7>\n                            <div class="one_way_option">\n                                <ion-icon class="zmdi zmdi-calendar-alt" ion-datepicker [(value)]="initDate" locale="en-US" clear></ion-icon>\n                                <h4>\n                                    15 Jul\n                                    <span>Today</span>\n                                </h4>\n                                <h4>\n                                    16 Jul\n                                    <span>Tomorrow</span>\n                                </h4>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n                <ion-card class="select_provider">\n                    <h3>{{\'bus_type\' | translate}}</h3>\n                    <ion-row>\n                        <ion-col col-12>\n                            <ion-item>\n                                <ion-select [(ngModel)]="class">\n                                    <ion-option value="1">AC Sleeper</ion-option>\n                                    <ion-option value="2">AC seater</ion-option>\n                                </ion-select>\n                                <!--                                <ion-label>{{\'class\' | translate}}</ion-label>-->\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n            </ion-list>\n        </div>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <button ion-button text-uppercase no-margin full class="btn" (click)="bus_list()">{{\'show_result\' | translate}}</button>\n</ion-footer>'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\search_bus\search_bus.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2_ion_datepicker__["a" /* DatePickerDirective */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Search_busPage);
    return Search_busPage;
}());

//# sourceMappingURL=search_bus.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bus_listPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter_filter__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bus_info_bus_info__ = __webpack_require__(230);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Bus_listPage = /** @class */ (function () {
    function Bus_listPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Bus_listPage.prototype.filter = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__filter_filter__["a" /* FilterPage */]);
    };
    Bus_listPage.prototype.bus_info = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__bus_info_bus_info__["a" /* Bus_infoPage */]);
    };
    Bus_listPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-bus_list',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\bus_list\bus_list.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            <h2>Houstone To Manhattan</h2>\n            <p class="d-flex">\n                <span>{{\'depart\' | translate}} 23 Jul </span>\n                <ion-icon></ion-icon>\n                <span>AC Sleepar</span>\n            </p>\n        </ion-title>\n    </ion-navbar>\n    <div class="header_bg">\n        <img src="assets/imgs/flight.png">\n    </div>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines>\n        <ion-item (click)="bus_info()">\n            <div class="item_header d-flex">\n                <h2 class="d-flex">Polo Travels<span>2X (36) AC Sleeper TATA</span></h2>\n                <h3 text-end>$ 90.50</h3>\n            </div>\n            <div class="item_containt d-flex">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/bus_1.png" class="crop_img">\n                </div>\n                <div class="text_box">\n                    <ion-row>\n                        <ion-col col-3>\n                            <h2>12:35 am</h2>\n                            <h3>Houston</h3>\n                        </ion-col>\n                        <ion-col col-6 text-center>\n                            <h3><small class="avaliable">24 Seats avaliable</small></h3>\n                            <div class="icon_box">\n                                <ion-icon class="zmdi zmdi-circle" text-start></ion-icon>\n                                <ion-icon class="zmdi zmdi-circle" text-center></ion-icon>\n                                <ion-icon class="zmdi zmdi-circle" text-end></ion-icon>\n                            </div>\n                            <h3><small>8 hr 30 mins</small></h3>\n                        </ion-col>\n                        <ion-col col-3 text-end>\n                            <h2>12:35 am</h2>\n                            <h3>Manhattan</h3>\n                        </ion-col>\n                    </ion-row>\n                </div>\n            </div>\n        </ion-item>\n        <ion-item (click)="bus_info()">\n            <div class="item_header d-flex">\n                <h2 class="d-flex">Polo Travels<span>2X (36) AC Sleeper TATA</span></h2>\n                <h3 text-end>$ 90.50</h3>\n            </div>\n            <div class="item_containt d-flex">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/bus_1.png" class="crop_img">\n                </div>\n                <div class="text_box">\n                    <ion-row>\n                        <ion-col col-3>\n                            <h2>12:35 am</h2>\n                            <h3>Houston</h3>\n                        </ion-col>\n                        <ion-col col-6 text-center>\n                            <h3><small class="avaliable">24 Seats avaliable</small></h3>\n                            <div class="icon_box">\n                                <ion-icon class="zmdi zmdi-circle" text-start></ion-icon>\n                                <ion-icon class="zmdi zmdi-circle" text-center></ion-icon>\n                                <ion-icon class="zmdi zmdi-circle" text-end></ion-icon>\n                            </div>\n                            <h3><small>8 hr 30 mins</small></h3>\n                        </ion-col>\n                        <ion-col col-3 text-end>\n                            <h2>12:35 am</h2>\n                            <h3>Manhattan</h3>\n                        </ion-col>\n                    </ion-row>\n                </div>\n            </div>\n        </ion-item>\n        <ion-item (click)="bus_info()">\n            <div class="item_header d-flex">\n                <h2 class="d-flex">Polo Travels<span>2X (36) AC Sleeper TATA</span></h2>\n                <h3 text-end>$ 90.50</h3>\n            </div>\n            <div class="item_containt d-flex">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/bus_1.png" class="crop_img">\n                </div>\n                <div class="text_box">\n                    <ion-row>\n                        <ion-col col-3>\n                            <h2>12:35 am</h2>\n                            <h3>Houston</h3>\n                        </ion-col>\n                        <ion-col col-6 text-center>\n                            <h3><small class="avaliable">24 Seats avaliable</small></h3>\n                            <div class="icon_box">\n                                <ion-icon class="zmdi zmdi-circle" text-start></ion-icon>\n                                <ion-icon class="zmdi zmdi-circle" text-center></ion-icon>\n                                <ion-icon class="zmdi zmdi-circle" text-end></ion-icon>\n                            </div>\n                            <h3><small>8 hr 30 mins</small></h3>\n                        </ion-col>\n                        <ion-col col-3 text-end>\n                            <h2>12:35 am</h2>\n                            <h3>Manhattan</h3>\n                        </ion-col>\n                    </ion-row>\n                </div>\n            </div>\n        </ion-item>\n        <ion-item (click)="bus_info()">\n            <div class="item_header d-flex">\n                <h2 class="d-flex">Polo Travels<span>2X (36) AC Sleeper TATA</span></h2>\n                <h3 text-end>$ 90.50</h3>\n            </div>\n            <div class="item_containt d-flex">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/bus_1.png" class="crop_img">\n                </div>\n                <div class="text_box">\n                    <ion-row>\n                        <ion-col col-3>\n                            <h2>12:35 am</h2>\n                            <h3>Houston</h3>\n                        </ion-col>\n                        <ion-col col-6 text-center>\n                            <h3><small class="avaliable">24 Seats avaliable</small></h3>\n                            <div class="icon_box">\n                                <ion-icon class="zmdi zmdi-circle" text-start></ion-icon>\n                                <ion-icon class="zmdi zmdi-circle" text-center></ion-icon>\n                                <ion-icon class="zmdi zmdi-circle" text-end></ion-icon>\n                            </div>\n                            <h3><small>8 hr 30 mins</small></h3>\n                        </ion-col>\n                        <ion-col col-3 text-end>\n                            <h2>12:35 am</h2>\n                            <h3>Manhattan</h3>\n                        </ion-col>\n                    </ion-row>\n                </div>\n            </div>\n        </ion-item>\n        <ion-item (click)="bus_info()">\n            <div class="item_header d-flex">\n                <h2 class="d-flex">Polo Travels<span>2X (36) AC Sleeper TATA</span></h2>\n                <h3 text-end>$ 90.50</h3>\n            </div>\n            <div class="item_containt d-flex">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/bus_1.png" class="crop_img">\n                </div>\n                <div class="text_box">\n                    <ion-row>\n                        <ion-col col-3>\n                            <h2>12:35 am</h2>\n                            <h3>Houston</h3>\n                        </ion-col>\n                        <ion-col col-6 text-center>\n                            <h3><small class="avaliable">24 Seats avaliable</small></h3>\n                            <div class="icon_box">\n                                <ion-icon class="zmdi zmdi-circle" text-start></ion-icon>\n                                <ion-icon class="zmdi zmdi-circle" text-center></ion-icon>\n                                <ion-icon class="zmdi zmdi-circle" text-end></ion-icon>\n                            </div>\n                            <h3><small>8 hr 30 mins</small></h3>\n                        </ion-col>\n                        <ion-col col-3 text-end>\n                            <h2>12:35 am</h2>\n                            <h3>Manhattan</h3>\n                        </ion-col>\n                    </ion-row>\n                </div>\n            </div>\n        </ion-item>\n        <ion-item (click)="bus_info()">\n            <div class="item_header d-flex">\n                <h2 class="d-flex">Polo Travels<span>2X (36) AC Sleeper TATA</span></h2>\n                <h3 text-end>$ 90.50</h3>\n            </div>\n            <div class="item_containt d-flex">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/bus_1.png" class="crop_img">\n                </div>\n                <div class="text_box">\n                    <ion-row>\n                        <ion-col col-3>\n                            <h2>12:35 am</h2>\n                            <h3>Houston</h3>\n                        </ion-col>\n                        <ion-col col-6 text-center>\n                            <h3><small class="avaliable">24 Seats avaliable</small></h3>\n                            <div class="icon_box">\n                                <ion-icon class="zmdi zmdi-circle" text-start></ion-icon>\n                                <ion-icon class="zmdi zmdi-circle" text-center></ion-icon>\n                                <ion-icon class="zmdi zmdi-circle" text-end></ion-icon>\n                            </div>\n                            <h3><small>8 hr 30 mins</small></h3>\n                        </ion-col>\n                        <ion-col col-3 text-end>\n                            <h2>12:35 am</h2>\n                            <h3>Manhattan</h3>\n                        </ion-col>\n                    </ion-row>\n                </div>\n            </div>\n        </ion-item>\n        <ion-item (click)="bus_info()">\n            <div class="item_header d-flex">\n                <h2 class="d-flex">Polo Travels<span>2X (36) AC Sleeper TATA</span></h2>\n                <h3 text-end>$ 90.50</h3>\n            </div>\n            <div class="item_containt d-flex">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/bus_1.png" class="crop_img">\n                </div>\n                <div class="text_box">\n                    <ion-row>\n                        <ion-col col-3>\n                            <h2>12:35 am</h2>\n                            <h3>Houston</h3>\n                        </ion-col>\n                        <ion-col col-6 text-center>\n                            <h3><small class="avaliable">24 Seats avaliable</small></h3>\n                            <div class="icon_box">\n                                <ion-icon class="zmdi zmdi-circle" text-start></ion-icon>\n                                <ion-icon class="zmdi zmdi-circle" text-center></ion-icon>\n                                <ion-icon class="zmdi zmdi-circle" text-end></ion-icon>\n                            </div>\n                            <h3><small>8 hr 30 mins</small></h3>\n                        </ion-col>\n                        <ion-col col-3 text-end>\n                            <h2>12:35 am</h2>\n                            <h3>Manhattan</h3>\n                        </ion-col>\n                    </ion-row>\n                </div>\n            </div>\n        </ion-item>\n        <ion-item (click)="bus_info()">\n            <div class="item_header d-flex">\n                <h2 class="d-flex">Polo Travels<span>2X (36) AC Sleeper TATA</span></h2>\n                <h3 text-end>$ 90.50</h3>\n            </div>\n            <div class="item_containt d-flex">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/bus_1.png" class="crop_img">\n                </div>\n                <div class="text_box">\n                    <ion-row>\n                        <ion-col col-3>\n                            <h2>12:35 am</h2>\n                            <h3>Houston</h3>\n                        </ion-col>\n                        <ion-col col-6 text-center>\n                            <h3><small class="avaliable">24 Seats avaliable</small></h3>\n                            <div class="icon_box">\n                                <ion-icon class="zmdi zmdi-circle" text-start></ion-icon>\n                                <ion-icon class="zmdi zmdi-circle" text-center></ion-icon>\n                                <ion-icon class="zmdi zmdi-circle" text-end></ion-icon>\n                            </div>\n                            <h3><small>8 hr 30 mins</small></h3>\n                        </ion-col>\n                        <ion-col col-3 text-end>\n                            <h2>12:35 am</h2>\n                            <h3>Manhattan</h3>\n                        </ion-col>\n                    </ion-row>\n                </div>\n            </div>\n        </ion-item>\n    </ion-list>\n</ion-content>\n<ion-footer no-border>\n    <button ion-button text-uppercase full no-margin icon-start class="btn" (click)="filter()">\n        <ion-icon class="zmdi zmdi-tune"></ion-icon>\n        {{\'sort_filters\' | translate}}\n    </button>\n</ion-footer>'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\bus_list\bus_list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Bus_listPage);
    return Bus_listPage;
}());

//# sourceMappingURL=bus_list.js.map

/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bus_infoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bus_ticket_bus_ticket__ = __webpack_require__(231);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Bus_infoPage = /** @class */ (function () {
    function Bus_infoPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.seat1 = false;
        this.seatB3 = true;
        this.seatB4 = false;
        this.seatB5 = false;
        this.seatB6 = false;
        this.seatB8 = false;
        this.seatB9 = false;
        this.seatB11 = false;
        this.seatA1 = false;
        this.seatA2 = false;
        this.seatA5 = false;
        this.seatA6 = false;
        this.seatB12 = false;
        this.seatB14 = false;
        this.seatB18 = false;
        this.seatB20 = false;
        this.seatA8 = false;
        this.seatA9 = false;
        this.seatA11 = false;
    }
    Bus_infoPage.prototype.toggleBusSeat1 = function () {
        this.seat1 = !this.seat1;
    };
    Bus_infoPage.prototype.toggleBusSeatB3 = function () {
        this.seatB3 = !this.seatB3;
    };
    Bus_infoPage.prototype.toggleBusSeatB4 = function () {
        this.seatB4 = !this.seatB4;
    };
    Bus_infoPage.prototype.toggleBusSeatB5 = function () {
        this.seatB5 = !this.seatB5;
    };
    Bus_infoPage.prototype.toggleBusSeatB6 = function () {
        this.seatB6 = !this.seatB6;
    };
    Bus_infoPage.prototype.toggleBusSeatB9 = function () {
        this.seatB9 = !this.seatB9;
    };
    Bus_infoPage.prototype.toggleBusSeatB8 = function () {
        this.seatB8 = !this.seatB8;
    };
    Bus_infoPage.prototype.toggleBusSeatB11 = function () {
        this.seatB11 = !this.seatB11;
    };
    Bus_infoPage.prototype.toggleBusSeatA1 = function () {
        this.seatA1 = !this.seatA1;
    };
    Bus_infoPage.prototype.toggleBusSeatA2 = function () {
        this.seatA2 = !this.seatA2;
    };
    Bus_infoPage.prototype.toggleBusSeatA5 = function () {
        this.seatA5 = !this.seatA5;
    };
    Bus_infoPage.prototype.toggleBusSeatA6 = function () {
        this.seatA6 = !this.seatA6;
    };
    Bus_infoPage.prototype.toggleBusSeatB12 = function () {
        this.seatB12 = !this.seatB12;
    };
    Bus_infoPage.prototype.toggleBusSeatB14 = function () {
        this.seatB14 = !this.seatB14;
    };
    Bus_infoPage.prototype.toggleBusSeatB18 = function () {
        this.seatB18 = !this.seatB18;
    };
    Bus_infoPage.prototype.toggleBusSeatB20 = function () {
        this.seatB20 = !this.seatB20;
    };
    Bus_infoPage.prototype.toggleBusSeatA8 = function () {
        this.seatA8 = !this.seatA8;
    };
    Bus_infoPage.prototype.toggleBusSeatA9 = function () {
        this.seatA9 = !this.seatA9;
    };
    Bus_infoPage.prototype.toggleBusSeatA11 = function () {
        this.seatA11 = !this.seatA11;
    };
    Bus_infoPage.prototype.bus_ticket = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__bus_ticket_bus_ticket__["a" /* Bus_ticketPage */]);
    };
    Bus_infoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-bus_info',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\bus_info\bus_info.html"*/'<ion-header class="theme_header bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            <p class="d-flex">\n                <span>23 Jul 2019</span>\n                <ion-icon></ion-icon>\n                <span>1 {{\'traveller\' | translate}}</span>\n            </p>\n        </ion-title>\n    </ion-navbar>\n    <div class="banner from">\n        <div class="banner_bg center_img">\n            <img src="assets/imgs/bus.png" class="crop_img">\n        </div>\n        <ion-list no-lines class="form">\n            <ion-item>\n                <ion-icon class="zmdi zmdi-long-arrow-up" item-start></ion-icon>\n                <h4>23 Jul, 12:35 am | Pickup Location</h4>\n                <h2>Old City Market, Houstone, USA</h2>\n            </ion-item>\n            <div class="traveling_time d-flex">\n                <div class="underline end"></div>\n                <h3 class="end" text-end>12 hr 35 mins | 8 Stop</h3>\n            </div>\n            <ion-item>\n                <ion-icon class="zmdi zmdi-long-arrow-down" item-start></ion-icon>\n                <h4>24 Jul, 12:45 pm | Drop Location</h4>\n                <h2>White Church, Manhattan, USA</h2>\n            </ion-item>\n        </ion-list>\n        <div class="facilities d-flex">\n            <h2 class="d-flex">\n                <ion-icon class="zmdi zmdi-wifi-alt"></ion-icon>\n                WiFi\n            </h2>\n            <h2 class="d-flex">\n                <ion-icon class="zmdi zmdi-iridescent"></ion-icon>\n                AC\n            </h2>\n            <h2 class="d-flex disabled">\n                <ion-icon class="zmdi zmdi-input-power"></ion-icon>\n                Power\n            </h2>\n            <h2 class="d-flex">\n                <ion-icon class="zmdi zmdi-case"></ion-icon>\n                6 kg bag\n            </h2>\n        </div>\n    </div>\n</ion-header>\n\n<ion-content>\n    <div class="container">\n        <div class="bus_details d-flex">\n            <div class="bus_img center_img">\n                <img src="assets/imgs/bus_1.png" class="crop_img">\n            </div>\n            <div class="text">\n                <h2>Polo Travels</h2>\n                <h3>2X1(36)AC -Sleeper TATA</h3>\n            </div>\n            <div class="text end">\n                <h2 class="available">\n                    <ion-icon></ion-icon>{{\'available\' | translate}}\n                </h2>\n                <h2 class="booked">\n                    <ion-icon></ion-icon>{{\'booked\' | translate}}\n                </h2>\n            </div>\n        </div>\n\n        <ion-list no-lines>\n            <ion-item>\n                <div class="bus_seats_label">\n                    <h3>Upper Seats</h3>\n                </div>\n                <div class="bus_seats">\n                    <div class="seats_row right">\n                        <div class="seat_type">\n                            <div class="seat booked">\n                                <h2>B1</h2>\n                            </div>\n                            <div [ngClass]="seat1 ? \'seat selected\' : \'seat\'" (click)="toggleBusSeat1()">\n                                <h2>B2</h2>\n                            </div>\n                        </div>\n                        <div class="seat_type">\n                            <div [ngClass]="seatB3 ? \'seat selected\' : \'seat\'" (click)="toggleBusSeatB3()">\n                                <h2>B3</h2>\n                            </div>\n                            <div [ngClass]="seatB4 ? \'seat selected\' : \'seat\'" (click)="toggleBusSeatB4()">\n                                <h2>B4</h2>\n                            </div>\n                        </div>\n                        <div class="seat_type">\n                            <div [ngClass]="seatB5 ? \'seat selected\' : \'seat\'" (click)="toggleBusSeatB5()">\n                                <h2>B5</h2>\n                            </div>\n                            <div [ngClass]="seatB6 ? \'seat selected\' : \'seat\'" (click)="toggleBusSeatB6()">\n                                <h2>B6</h2>\n                            </div>\n                        </div>\n                        <div class="seat_type">\n                            <div class="seat booked">\n                                <h2>B7</h2>\n                            </div>\n                            <div [ngClass]="seatB8 ? \'seat selected\' : \'seat\'" (click)="toggleBusSeatB8()">\n                                <h2>B8</h2>\n                            </div>\n                        </div>\n                        <div class="seat_type">\n                            <div [ngClass]="seatB9 ? \'seat selected\' : \'seat\'" (click)="toggleBusSeatB9()">\n                                <h2>B9</h2>\n                            </div>\n                            <div class="seat booked">\n                                <h2>B10</h2>\n                            </div>\n                        </div>\n                        <div class="seat_type last_seat">\n                            <div [ngClass]="seatB11 ? \'seat selected\' : \'seat\'" (click)="toggleBusSeatB11()">\n                                <h2>B11</h2>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class="seats_row left_side">\n                        <div class="seat_type">\n                            <div [ngClass]="seatA1 ? \'seat selected\' : \'seat\'" (click)="toggleBusSeatA1()">\n                                <h2>A1</h2>\n                            </div>\n                        </div>\n                        <div class="seat_type">\n                            <div [ngClass]="seatA2 ? \'seat selected\' : \'seat\'" (click)="toggleBusSeatA2()">\n                                <h2>A2</h2>\n                            </div>\n                        </div>\n                        <div class="seat_type">\n                            <div class="seat booked">\n                                <h2>A3</h2>\n                            </div>\n                        </div>\n                        <div class="seat_type">\n                            <div class="seat booked">\n                                <h2>A4</h2>\n                            </div>\n                        </div>\n                        <div class="seat_type">\n                            <div [ngClass]="seatA5 ? \'seat selected\' : \'seat\'" (click)="toggleBusSeatA5()">\n                                <h2>A5</h2>\n                            </div>\n                        </div>\n                        <div class="seat_type last_seat">\n                            <div [ngClass]="seatA6 ? \'seat selected\' : \'seat\'" (click)="toggleBusSeatA6()">\n                                <h2>A6</h2>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item>\n                <div class="bus_seats_label">\n                    <h3>Lower Seats</h3>\n                </div>\n                <div class="bus_seats">\n                    <div class="seats_row right">\n                        <div class="seat_type">\n                            <div [ngClass]="seatB12 ? \'seat selected\' : \'seat\'" (click)="toggleBusSeatB12()">\n                                <h2>B12</h2>\n                            </div>\n                            <div class="seat booked">\n                                <h2>B13</h2>\n                            </div>\n                        </div>\n                        <div class="seat_type">\n                            <div [ngClass]="seatB14 ? \'seat selected\' : \'seat\'" (click)="toggleBusSeatB14()">\n                                <h2>B14</h2>\n                            </div>\n                            <div class="seat booked">\n                                <h2>B15</h2>\n                            </div>\n                        </div>\n                        <div class="seat_type">\n                            <div class="seat booked">\n                                <h2>B16</h2>\n                            </div>\n                            <div class="seat booked">\n                                <h2>B17</h2>\n                            </div>\n                        </div>\n                        <div class="seat_type">\n                            <div [ngClass]="seatB18 ? \'seat selected\' : \'seat\'" (click)="toggleBusSeatB18()">\n                                <h2>B18</h2>\n                            </div>\n                            <div class="seat booked">\n                                <h2>B19</h2>\n                            </div>\n                        </div>\n                        <div class="seat_type">\n                            <div [ngClass]="seatB20 ? \'seat selected\' : \'seat\'" (click)="toggleBusSeatB20()">\n                                <h2>B20</h2>\n                            </div>\n                            <div class="seat booked">\n                                <h2>B21</h2>\n                            </div>\n                        </div>\n                        <div class="seat_type last_seat">\n                            <div class="seat booked">\n                                <h2>B22</h2>\n                            </div>\n                        </div>\n                    </div>\n\n                    <div class="seats_row left_side">\n                        <div class="seat_type">\n                            <div class="seat booked">\n                                <h2>A7</h2>\n                            </div>\n                        </div>\n                        <div class="seat_type">\n                            <div [ngClass]="seatA8 ? \'seat selected\' : \'seat\'" (click)="toggleBusSeatA8()">\n                                <h2>A8</h2>\n                            </div>\n                        </div>\n                        <div class="seat_type">\n                            <div [ngClass]="seatA9 ? \'seat selected\' : \'seat\'" (click)="toggleBusSeatA9()">\n                                <h2>A9</h2>\n                            </div>\n                        </div>\n                        <div class="seat_type">\n                            <div class="seat booked">\n                                <h2>A10</h2>\n                            </div>\n                        </div>\n                        <div class="seat_type">\n                            <div [ngClass]="seatA11 ? \'seat selected\' : \'seat\'" (click)="toggleBusSeatA11()">\n                                <h2>A11</h2>\n                            </div>\n                        </div>\n                        <div class="seat_type last_seat">\n                            <div class="seat booked">\n                                <h2>A12</h2>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n<ion-footer no-border (click)="bus_ticket()">\n    <h2 text-center><span class="end" text-uppercase>{{\'book\' | translate}} B3 Seat</span> </h2>\n</ion-footer>'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\bus_info\bus_info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Bus_infoPage);
    return Bus_infoPage;
}());

//# sourceMappingURL=bus_info.js.map

/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Bus_ticketPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Bus_ticketPage = /** @class */ (function () {
    function Bus_ticketPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Bus_ticketPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-bus_ticket',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\bus_ticket\bus_ticket.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>{{\'ticket_booked\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="booking_receipt">\n        <div class="container receipt_header d-flex">\n            <div class="img_box center_img">\n                <img src="assets/imgs/bus_1.png" class="crop_img">\n            </div>\n            <div class="text_box">\n                <h2>Polo Travels</h2>\n                <h6 class="d-flex">2X1(36) AC -Sleeper TATA<span class="end">$90.50</span></h6>\n            </div>\n        </div>\n        <div class="container receipt_containt banner">\n            <div class="banner_bg center_img">\n                <img src="assets/imgs/bus.png">\n            </div>\n            <ion-row>\n                <ion-col col-5>\n                    <h3>{{\'pick_up_location\' | translate}}</h3>\n                    <h2>Old City Market,<br>Houstone, USA</h2>\n                </ion-col>\n                <ion-col col-2 text-center>\n                    <ion-icon class="zmdi zmdi-arrow-right"></ion-icon>\n                </ion-col>\n                <ion-col col-5 text-end>\n                    <h3>{{\'drop_location\' | translate}}</h3>\n                    <h2>White church, Manhattan, USA</h2>\n                </ion-col>\n            </ion-row>\n        </div>\n        <div class="container receipt_containt">\n            <ion-row>\n                <ion-col col-6>\n                    <h3>{{\'depature\' | translate}}</h3>\n                    <h2>23 Jun </h2>\n                </ion-col>\n                <ion-col col-6 text-end>\n                    <h3>{{\'arrival\' | translate}}</h3>\n                    <h2>24 Jun, 10:00 am</h2>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-6>\n                    <h3>{{\'class\' | translate}}</h3>\n                    <h2>Upper Seat</h2>\n                </ion-col>\n                <ion-col col-6 text-end>\n                    <h3>{{\'seat\' | translate}}</h3>\n                    <h2>B3</h2>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-5>\n                    <h3>{{\'passenger_name\' | translate}}</h3>\n                    <h2>Sam Smith</h2>\n                </ion-col>\n                <ion-col col-2 text-center>\n                    <h3>{{\'age\' | translate}}</h3>\n                    <h2>25</h2>\n                </ion-col>\n                <ion-col col-5 text-end>\n                    <h3>{{\'gender\' | translate}}</h3>\n                    <h2>Male</h2>\n                </ion-col>\n            </ion-row>\n        </div>\n\n        <div class="container barcode_box">\n            <div class="bar_code">\n                <img src="assets/imgs/barcode.png">\n            </div>\n        </div>\n    </div>\n    \n    <button ion-button text-uppercase full clear no-margin class="btn">{{\'dawnload_ticket\' | translate}}</button>\n</ion-content>'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\bus_ticket\bus_ticket.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Bus_ticketPage);
    return Bus_ticketPage;
}());

//# sourceMappingURL=bus_ticket.js.map

/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search_cabPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion_datepicker__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__cab_list_cab_list__ = __webpack_require__(233);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Search_cabPage = /** @class */ (function () {
    function Search_cabPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.train = "one_way";
        this.abult = "1";
        this.children = "0";
        this.infrat = "0";
        this.class = "1";
        this.event = { timeStarts: '11:30' };
        this.localDate = new Date();
        this.initDate = new Date();
        this.initDate2 = new Date(2015, 1, 1);
        this.minDate = new Date(2018, 2, 31);
        this.maxDate = new Date(2018, 11, 10);
        this.disabledDates = [new Date(2017, 7, 14)];
        this.localeString = {
            monday: true,
            weekdays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
            months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        };
        this.min = new Date();
    }
    Search_cabPage.prototype.ngOnInit = function () {
    };
    Search_cabPage.prototype.Log = function (stuff) {
        this.datepicker.open();
        this.datepicker.changed.subscribe(function () { return console.log('test'); });
        console.log(stuff);
    };
    Search_cabPage.prototype.setDate = function (date) {
        console.log(date);
        this.initDate = date;
    };
    Search_cabPage.prototype.cab_list = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__cab_list_cab_list__["a" /* Cab_listPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ion_datepicker__["a" /* DatePickerDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ion_datepicker__["a" /* DatePickerDirective */])
    ], Search_cabPage.prototype, "datepicker", void 0);
    Search_cabPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search_cab',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\search_cab\search_cab.html"*/'<ion-header class="theme_header bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            {{\'search_cab\' | translate}}\n        </ion-title>\n    </ion-navbar>\n    <div class="banner from">\n        <div class="banner_bg center_img">\n            <img src="assets/imgs/cab.png" class="crop_img">\n        </div>\n        <ion-list no-lines class="form">\n            <ion-item>\n                <ion-icon class="zmdi zmdi-long-arrow-up" item-start></ion-icon>\n                <h4>{{\'from\' | translate}}</h4>\n                <!--                <ion-input type="text" value="Hou - Houstone, USA"></ion-input>-->\n                <h2>Houstone, USA</h2>\n            </ion-item>\n            <h3>\n                <ion-icon class="zmdi zmdi-swap-vertical"></ion-icon>\n            </h3>\n            <ion-item>\n                <ion-icon class="zmdi zmdi-long-arrow-down" item-start></ion-icon>\n                <h4>{{\'to\' | translate}}</h4>\n                <!--                <ion-input type="text" value="MHK - Manhattan, USA"></ion-input>-->\n                <h2>Manhattan, USA</h2>\n            </ion-item>\n        </ion-list>\n\n        <ion-segment [(ngModel)]="train">\n            <ion-segment-button value="one_way">\n                {{\'one_way\' | translate}}\n            </ion-segment-button>\n            <ion-segment-button value="return">\n                {{\'return\' | translate}}\n            </ion-segment-button>\n        </ion-segment>\n    </div>\n</ion-header>\n\n<ion-content>\n    <div class="tab_container" [ngSwitch]="train">\n        <div class="tab_contant" *ngSwitchCase="\'one_way\'">\n            <ion-list no-lines>\n                <ion-card>\n                    <ion-row>\n                        <ion-col col-5>\n                            <h3>{{\'pick_up_date\' | translate}}</h3>\n                            <ion-item>\n                                <div class="text">\n                                    <h2>23</h2>\n                                    <h4>Jul 2019 <span>Tuesday</span></h4>\n                                </div>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-7>\n                            <div class="one_way_option">\n                                <ion-icon class="zmdi zmdi-calendar-alt" ion-datepicker [(value)]="initDate"\n                                    locale="en-US" clear></ion-icon>\n                                <h4>\n                                    15 Jul\n                                    <span>Today</span>\n                                </h4>\n                                <h4>\n                                    16 Jul\n                                    <span>Tomorrow</span>\n                                </h4>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n\n                <ion-card>\n                    <h3>{{\'pick_up_time\' | translate}}</h3>\n                    <ion-item>\n                        <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="event.timeStarts">\n                        </ion-datetime>\n                        <ion-icon item-end class="zmdi zmdi-caret-down"></ion-icon>\n                    </ion-item>\n                </ion-card>\n\n                <ion-card class="select_provider">\n                    <h3>{{\'cab_type\' | translate}}</h3>\n                    <ion-row>\n                        <ion-col col-12>\n                            <ion-item>\n                                <ion-select [(ngModel)]="class">\n                                    <ion-option value="1">Hatchback</ion-option>\n                                    <ion-option value="2">Hatchback</ion-option>\n                                </ion-select>\n                                <!--                                <ion-label>{{\'class\' | translate}}</ion-label>-->\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n            </ion-list>\n        </div>\n\n\n        <div class="tab_contant" *ngSwitchCase="\'return\'">\n            <ion-list no-lines>\n                <ion-card>\n                    <ion-row>\n                        <ion-col col-5>\n                            <h3>{{\'pick_up_date\' | translate}}</h3>\n                            <ion-item>\n                                <div class="text">\n                                    <h2>25</h2>\n                                    <h4>Jul 2019 <span>Tuesday</span></h4>\n                                </div>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-7>\n                            <div class="one_way_option">\n                                <ion-icon class="zmdi zmdi-calendar-alt" ion-datepicker [(value)]="initDate"\n                                    locale="en-US" clear></ion-icon>\n                                <h4>\n                                    15 Jul\n                                    <span>Today</span>\n                                </h4>\n                                <h4>\n                                    16 Jul\n                                    <span>Tomorrow</span>\n                                </h4>\n                            </div>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n\n                <ion-card>\n                    <h3>{{\'pick_up_time\' | translate}}</h3>\n                    <ion-item>\n                        <ion-datetime displayFormat="h:mm A" pickerFormat="h mm A" [(ngModel)]="event.timeStarts">\n                        </ion-datetime>\n                        <ion-icon item-end class="zmdi zmdi-caret-down"></ion-icon>\n                    </ion-item>\n                </ion-card>\n\n                <ion-card class="select_provider">\n                    <h3>{{\'cab_type\' | translate}}</h3>\n                    <ion-row>\n                        <ion-col col-12>\n                            <ion-item>\n                                <ion-select [(ngModel)]="class">\n                                    <ion-option value="1">Hatchback</ion-option>\n                                    <ion-option value="2">Hatchback</ion-option>\n                                </ion-select>\n                                <!--                                <ion-label>{{\'class\' | translate}}</ion-label>-->\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n            </ion-list>\n        </div>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <button ion-button text-uppercase no-margin full class="btn"\n        (click)="cab_list()">{{\'show_result\' | translate}}</button>\n</ion-footer>'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\search_cab\search_cab.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2_ion_datepicker__["a" /* DatePickerDirective */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Search_cabPage);
    return Search_cabPage;
}());

//# sourceMappingURL=search_cab.js.map

/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cab_listPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cab_info_cab_info__ = __webpack_require__(234);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Cab_listPage = /** @class */ (function () {
    function Cab_listPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Cab_listPage.prototype.cab_info = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cab_info_cab_info__["a" /* Cab_infoPage */]);
    };
    Cab_listPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cab_list',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\cab_list\cab_list.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            <h2>Houstone To Manhattan</h2>\n            <p class="d-flex">\n                <span>{{\'pick_up\' | translate}} 23 Jul </span>\n                <ion-icon></ion-icon>\n                <span>{{\'pick_up_time\' | translate}} 11:30 am</span>\n                <ion-icon></ion-icon>\n                <span>Hatchback</span>\n            </p>\n        </ion-title>\n    </ion-navbar>\n    <div class="header_bg">\n        <img src="assets/imgs/flight.png">\n    </div>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines>\n        <ion-item (click)="cab_info()">\n            <div class="item_containt d-flex">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/car.png">\n                </div>\n                <div class="text_box">\n                    <h2 class="d-flex">\n                        Maruti Swift\n                        <span class="end">$120.00</span>\n                    </h2>\n                    <h3 class="d-flex">Hatchback car <span class="end">Opera Taxi Servce</span></h3>\n                </div>\n            </div>\n            <div class="item_footer d-flex">\n                <h5>\n                    <ion-icon class="zmdi zmdi-airline-seat-recline-extra"></ion-icon>\n                    4 Seater\n                </h5>\n                <h5>\n                    <ion-icon class="zmdi zmdi-wifi-alt"></ion-icon>\n                    WiFi\n                </h5>\n                <h5>\n                    <ion-icon class="zmdi zmdi-case"></ion-icon>\n                    2 Bags\n                </h5>\n                <h5>\n                    <ion-icon class="zmdi zmdi-iridescent"></ion-icon>\n                    AC\n                </h5>\n\n                <ion-badge class="end">4.7 <ion-icon class="zmdi zmdi-star"></ion-icon>\n                </ion-badge>\n            </div>\n        </ion-item>\n\n        <ion-item (click)="cab_info()">\n            <div class="item_containt d-flex">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/car.png">\n                </div>\n                <div class="text_box">\n                    <h2 class="d-flex">\n                        Maruti Swift\n                        <span class="end">$120.00</span>\n                    </h2>\n                    <h3 class="d-flex">Hatchback car <span class="end">Opera Taxi Servce</span></h3>\n                </div>\n            </div>\n            <div class="item_footer d-flex">\n                <h5>\n                    <ion-icon class="zmdi zmdi-airline-seat-recline-extra"></ion-icon>\n                    4 Seater\n                </h5>\n                <h5>\n                    <ion-icon class="zmdi zmdi-wifi-alt"></ion-icon>\n                    WiFi\n                </h5>\n                <h5>\n                    <ion-icon class="zmdi zmdi-case"></ion-icon>\n                    2 Bags\n                </h5>\n                <h5>\n                    <ion-icon class="zmdi zmdi-iridescent"></ion-icon>\n                    AC\n                </h5>\n\n                <ion-badge class="end">4.7 <ion-icon class="zmdi zmdi-star"></ion-icon>\n                </ion-badge>\n            </div>\n        </ion-item>\n\n        <ion-item (click)="cab_info()">\n            <div class="item_containt d-flex">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/car.png">\n                </div>\n                <div class="text_box">\n                    <h2 class="d-flex">\n                        Maruti Swift\n                        <span class="end">$120.00</span>\n                    </h2>\n                    <h3 class="d-flex">Hatchback car <span class="end">Opera Taxi Servce</span></h3>\n                </div>\n            </div>\n            <div class="item_footer d-flex">\n                <h5>\n                    <ion-icon class="zmdi zmdi-airline-seat-recline-extra"></ion-icon>\n                    4 Seater\n                </h5>\n                <h5>\n                    <ion-icon class="zmdi zmdi-wifi-alt"></ion-icon>\n                    WiFi\n                </h5>\n                <h5>\n                    <ion-icon class="zmdi zmdi-case"></ion-icon>\n                    2 Bags\n                </h5>\n                <h5>\n                    <ion-icon class="zmdi zmdi-iridescent"></ion-icon>\n                    AC\n                </h5>\n\n                <ion-badge class="end">4.7 <ion-icon class="zmdi zmdi-star"></ion-icon>\n                </ion-badge>\n            </div>\n        </ion-item>\n\n\n        <ion-item (click)="cab_info()">\n            <div class="item_containt d-flex">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/car.png">\n                </div>\n                <div class="text_box">\n                    <h2 class="d-flex">\n                        Maruti Swift\n                        <span class="end">$120.00</span>\n                    </h2>\n                    <h3 class="d-flex">Hatchback car <span class="end">Opera Taxi Servce</span></h3>\n                </div>\n            </div>\n            <div class="item_footer d-flex">\n                <h5>\n                    <ion-icon class="zmdi zmdi-airline-seat-recline-extra"></ion-icon>\n                    4 Seater\n                </h5>\n                <h5>\n                    <ion-icon class="zmdi zmdi-wifi-alt"></ion-icon>\n                    WiFi\n                </h5>\n                <h5>\n                    <ion-icon class="zmdi zmdi-case"></ion-icon>\n                    2 Bags\n                </h5>\n                <h5>\n                    <ion-icon class="zmdi zmdi-iridescent"></ion-icon>\n                    AC\n                </h5>\n\n                <ion-badge class="end">4.7 <ion-icon class="zmdi zmdi-star"></ion-icon>\n                </ion-badge>\n            </div>\n        </ion-item>\n\n        <ion-item (click)="cab_info()">\n            <div class="item_containt d-flex">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/car.png">\n                </div>\n                <div class="text_box">\n                    <h2 class="d-flex">\n                        Maruti Swift\n                        <span class="end">$120.00</span>\n                    </h2>\n                    <h3 class="d-flex">Hatchback car <span class="end">Opera Taxi Servce</span></h3>\n                </div>\n            </div>\n            <div class="item_footer d-flex">\n                <h5>\n                    <ion-icon class="zmdi zmdi-airline-seat-recline-extra"></ion-icon>\n                    4 Seater\n                </h5>\n                <h5>\n                    <ion-icon class="zmdi zmdi-wifi-alt"></ion-icon>\n                    WiFi\n                </h5>\n                <h5>\n                    <ion-icon class="zmdi zmdi-case"></ion-icon>\n                    2 Bags\n                </h5>\n                <h5>\n                    <ion-icon class="zmdi zmdi-iridescent"></ion-icon>\n                    AC\n                </h5>\n\n                <ion-badge class="end">4.7 <ion-icon class="zmdi zmdi-star"></ion-icon>\n                </ion-badge>\n            </div>\n        </ion-item>\n\n\n        <ion-item (click)="cab_info()">\n            <div class="item_containt d-flex">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/car.png">\n                </div>\n                <div class="text_box">\n                    <h2 class="d-flex">\n                        Maruti Swift\n                        <span class="end">$120.00</span>\n                    </h2>\n                    <h3 class="d-flex">Hatchback car <span class="end">Opera Taxi Servce</span></h3>\n                </div>\n            </div>\n            <div class="item_footer d-flex">\n                <h5>\n                    <ion-icon class="zmdi zmdi-airline-seat-recline-extra"></ion-icon>\n                    4 Seater\n                </h5>\n                <h5>\n                    <ion-icon class="zmdi zmdi-wifi-alt"></ion-icon>\n                    WiFi\n                </h5>\n                <h5>\n                    <ion-icon class="zmdi zmdi-case"></ion-icon>\n                    2 Bags\n                </h5>\n                <h5>\n                    <ion-icon class="zmdi zmdi-iridescent"></ion-icon>\n                    AC\n                </h5>\n\n                <ion-badge class="end">4.7 <ion-icon class="zmdi zmdi-star"></ion-icon>\n                </ion-badge>\n            </div>\n        </ion-item>\n\n\n        <ion-item (click)="cab_info()">\n            <div class="item_containt d-flex">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/car.png">\n                </div>\n                <div class="text_box">\n                    <h2 class="d-flex">\n                        Maruti Swift\n                        <span class="end">$120.00</span>\n                    </h2>\n                    <h3 class="d-flex">Hatchback car <span class="end">Opera Taxi Servce</span></h3>\n                </div>\n            </div>\n            <div class="item_footer d-flex">\n                <h5>\n                    <ion-icon class="zmdi zmdi-airline-seat-recline-extra"></ion-icon>\n                    4 Seater\n                </h5>\n                <h5>\n                    <ion-icon class="zmdi zmdi-wifi-alt"></ion-icon>\n                    WiFi\n                </h5>\n                <h5>\n                    <ion-icon class="zmdi zmdi-case"></ion-icon>\n                    2 Bags\n                </h5>\n                <h5>\n                    <ion-icon class="zmdi zmdi-iridescent"></ion-icon>\n                    AC\n                </h5>\n\n                <ion-badge class="end">4.7 <ion-icon class="zmdi zmdi-star"></ion-icon>\n                </ion-badge>\n            </div>\n        </ion-item>\n    </ion-list>\n</ion-content>'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\cab_list\cab_list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Cab_listPage);
    return Cab_listPage;
}());

//# sourceMappingURL=cab_list.js.map

/***/ }),

/***/ 234:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cab_infoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Cab_infoPage = /** @class */ (function () {
    function Cab_infoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Cab_infoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-cab_info',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\cab_info\cab_info.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            <h2>Houstone To Manhattan</h2>\n            <p class="d-flex">\n                <span>{{\'pick_up\' | translate}} 23 Jul </span>\n                <ion-icon></ion-icon>\n                <span>{{\'pick_up_time\' | translate}} 11:30 am</span>\n                <ion-icon></ion-icon>\n                <span>Hatchback</span>\n            </p>\n        </ion-title>\n    </ion-navbar>\n    <div class="header_bg">\n        <img src="assets/imgs/flight.png">\n    </div>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="banner">\n        <div class="banner_details">\n            <div class="banner_img">\n                <img src="assets/imgs/car.png">\n            </div>\n            <h2 class="d-flex"><span>Maruti Swift</span>\n                <ion-badge class="end">4.7 <ion-icon class="zmdi zmdi-star"></ion-icon>\n                </ion-badge>\n            </h2>\n            <h3 class="d-flex"><span>Hatchback Car</span> <span class="end">725 {{\'people_rated\' | translate}}</span></h3>\n        </div>\n    </div>\n\n    <ion-list no-lines>\n        <ion-item class="facilities">\n            <h2>{{\'facilities\' | translate}}</h2>\n            <div class="scroll_container">\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-airline-seat-recline-extra"></ion-icon>\n                    <p> 4 Seater</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-iridescent"></ion-icon>\n                    <p>AC</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-wifi-alt"></ion-icon>\n                    <p>WiFi</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-case"></ion-icon>\n                    <p>2 Bags</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-playlist-audio"></ion-icon>\n                    <p>Music</p>\n                </div>\n            </div>\n        </ion-item>\n\n        <ion-item class="about">\n            <h2>{{\'about\' | translate}}</h2>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.\n            </p>\n        </ion-item>\n        <ion-item class="cab_company">\n            <h2>{{\'cab_company\' | translate}}</h2>\n            <div class="details d-flex">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/2.png" class="crop_img">\n                </div>\n                <h3 class="d-flex">Opera Texi Services <span class="end">{{\'view_all_cars\' | translate}}</span></h3>\n            </div>\n        </ion-item>\n    </ion-list>\n</ion-content>\n<ion-footer no-border (click)="holiday_booked()">\n    <h2 class="d-flex">$120.00 <small>Inc. all taxets</small><span class="end" text-uppercase>{{\'book_now\' | translate}}</span></h2>\n</ion-footer>'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\cab_info\cab_info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Cab_infoPage);
    return Cab_infoPage;
}());

//# sourceMappingURL=cab_info.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search_homestayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ion_datepicker__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_of_homestay_list_of_homestay__ = __webpack_require__(236);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Search_homestayPage = /** @class */ (function () {
    function Search_homestayPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.abult = "2";
        this.children = "0";
        this.infrat = "0";
        this.rooms = "1";
        this.home_type = "1";
        this.localDate = new Date();
        this.initDate = new Date();
        this.initDate2 = new Date(2015, 1, 1);
        this.minDate = new Date(2018, 2, 31);
        this.maxDate = new Date(2018, 11, 10);
        this.disabledDates = [new Date(2017, 7, 14)];
        this.localeString = {
            monday: true,
            weekdays: ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'],
            months: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        };
        this.min = new Date();
    }
    Search_homestayPage.prototype.ngOnInit = function () {
    };
    Search_homestayPage.prototype.Log = function (stuff) {
        this.datepicker.open();
        this.datepicker.changed.subscribe(function () { return console.log('test'); });
        console.log(stuff);
    };
    Search_homestayPage.prototype.event = function (data) {
        this.localDate = data;
    };
    Search_homestayPage.prototype.setDate = function (date) {
        console.log(date);
        this.initDate = date;
    };
    Search_homestayPage.prototype.list_of_homestay = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__list_of_homestay_list_of_homestay__["a" /* List_of_homestayPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_9" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_2_ion_datepicker__["a" /* DatePickerDirective */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ion_datepicker__["a" /* DatePickerDirective */])
    ], Search_homestayPage.prototype, "datepicker", void 0);
    Search_homestayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-search_homestay',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\search_homestay\search_homestay.html"*/'<ion-header class="theme_header bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            {{\'search_homestays\' | translate}}\n        </ion-title>\n    </ion-navbar>\n    <div class="banner from">\n        <div class="banner_bg center_img">\n            <img src="assets/imgs/homestay.png" class="crop_img">\n        </div>\n        <ion-list no-lines class="form">\n            <ion-item>\n                <ion-icon class="zmdi zmdi-pin" item-start></ion-icon>\n                <h4>{{\'where_are_you_going\' | translate}}</h4>\n                <!--                <ion-input type="text" value="MHK - Manhattan, USA"></ion-input>-->\n                <h2>Manhattan, USA</h2>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-header>\n\n<ion-content>\n    <div class="tab_container">\n        <div class="tab_contant">\n            <!--\n            <ion-item>\n                <span ion-datepicker [(value)]="initDate" locale="en-US" clear class="ScheduleDate">\n                    <span>{{initDate | date}}</span>\n                </span>\n            </ion-item>\n-->\n            <ion-list no-lines>\n                <ion-card>\n                    <ion-row>\n                        <ion-col col-5>\n                            <h3>{{\'check_in\' | translate}}</h3>\n                            <ion-item ion-datepicker [(value)]="initDate" locale="en-US" clear>\n                                <div class="text">\n                                    <h2>23</h2>\n                                    <h4>Jul 2019 <span>Tuesday</span></h4>\n                                </div>\n                            </ion-item>\n                        </ion-col>\n                        <ion-col col-2> </ion-col>\n                        <ion-col col-5>\n                            <h3>{{\'check_out\' | translate}}</h3>\n                            <ion-item ion-datepicker [(value)]="initDate" locale="en-US" clear>\n                                <div class="text">\n                                    <h2>27</h2>\n                                    <h4>Jul 2019 <span>Saturday</span></h4>\n                                </div>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n\n                <ion-card>\n                    <h3>{{\'guests\' | translate}}</h3>\n                    <ion-row>\n                        <ion-col col-4>\n                            <ion-item>\n                                <ion-select [(ngModel)]="abult" interface="action-sheet" item-start>\n                                    <ion-option value="1">01</ion-option>\n                                    <ion-option value="2">02</ion-option>\n                                    <ion-option value="3">03</ion-option>\n                                    <ion-option value="4">04</ion-option>\n                                    <ion-option value="5">05</ion-option>\n                                </ion-select>\n                                <ion-label>{{\'abult\' | translate}}</ion-label>\n                            </ion-item>\n                        </ion-col>\n\n                        <ion-col col-4>\n                            <ion-item>\n                                <ion-select [(ngModel)]="children" interface="action-sheet" item-start>\n                                    <ion-option value="0">0</ion-option>\n                                    <ion-option value="1">01</ion-option>\n                                    <ion-option value="2">02</ion-option>\n                                    <ion-option value="3">03</ion-option>\n                                    <ion-option value="4">04</ion-option>\n                                    <ion-option value="5">05</ion-option>\n                                </ion-select>\n                                <ion-label>{{\'children\' | translate}}</ion-label>\n                            </ion-item>\n                        </ion-col>\n\n                        <ion-col col-4>\n                            <ion-item>\n                                <ion-select [(ngModel)]="infrat" interface="action-sheet" item-start>\n                                    <ion-option value="0">0</ion-option>\n                                    <ion-option value="1">01</ion-option>\n                                    <ion-option value="2">02</ion-option>\n                                    <ion-option value="3">03</ion-option>\n                                    <ion-option value="4">04</ion-option>\n                                    <ion-option value="5">05</ion-option>\n                                </ion-select>\n                                <ion-label>{{\'infrat\' | translate}}</ion-label>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n\n                <ion-card>\n                    <h3>{{\'rooms\' | translate}}</h3>\n                    <ion-row>\n                        <ion-col col-12>\n                            <ion-item>\n                                <ion-select [(ngModel)]="rooms" interface="action-sheet" item-start>\n                                    <ion-option value="1">01</ion-option>\n                                    <ion-option value="2">02</ion-option>\n                                    <ion-option value="3">03</ion-option>\n                                </ion-select>\n                                <ion-label>{{\'rooms\' | translate}}</ion-label>\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>   \n                <ion-card>\n                    <h3>{{\'home_type\' | translate}}</h3>\n                    <ion-row>\n                        <ion-col col-12>\n                            <ion-item>\n                                <ion-select [(ngModel)]="home_type" interface="action-sheet" item-start>\n                                    <ion-option value="1">Any Home</ion-option>\n                                    <ion-option value="2">Bungalow</ion-option>\n                                </ion-select>\n<!--                                <ion-label>{{\'rooms\' | translate}}</ion-label>-->\n                            </ion-item>\n                        </ion-col>\n                    </ion-row>\n                </ion-card>\n            </ion-list>\n        </div>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <button ion-button text-uppercase no-margin full class="btn" (click)="list_of_homestay()">{{\'show_result\' | translate}}</button>\n</ion-footer>'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\search_homestay\search_homestay.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2_ion_datepicker__["a" /* DatePickerDirective */]],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Search_homestayPage);
    return Search_homestayPage;
}());

//# sourceMappingURL=search_homestay.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List_of_homestayPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__homestay_info_homestay_info__ = __webpack_require__(237);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var List_of_homestayPage = /** @class */ (function () {
    function List_of_homestayPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    List_of_homestayPage.prototype.homestay_info = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__homestay_info_homestay_info__["a" /* Homestay_infoPage */]);
    };
    List_of_homestayPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-list_of_homestay',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\list_of_homestay\list_of_homestay.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>\n            <h2>Manhattan, USA</h2>\n            <p class="d-flex">\n                <span>{{\'check_in\' | translate}} 23 Jul </span>\n                <ion-icon></ion-icon>\n                <span>{{\'check_out\' | translate}} 27 Jul </span>\n                <ion-icon></ion-icon>\n                <span>1 {{\'guests\' | translate}}</span>\n            </p>\n        </ion-title>\n    </ion-navbar>\n    <div class="header_bg">\n        <img src="assets/imgs/hotel.png">\n    </div>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines>\n        <ion-item (click)="homestay_info()">\n            <ion-badge class="end">4.7 <ion-icon class="zmdi zmdi-star"></ion-icon>\n            </ion-badge>\n            <ion-scroll scrollX="true">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/house3.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/house1.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/house2.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/house3.png" class="crop_img">\n                </div>\n            </ion-scroll>\n            <div class="item_details">\n                <h2 class="d-flex">White Heaven Villa <span class="end">$120.00</span></h2>\n                <p class="d-flex">City Cricle, Manhattan <span class="end">For 1 {{\'guests\' | translate}}</span></p>\n            </div>\n            <div class="item_facilitate">\n                <div class="icon_text_box d-flex">\n                    <span>\n                        <ion-icon class="zmdi zmdi-wifi-alt"></ion-icon>\n                        <p> WiFi</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-iridescent"></ion-icon>\n                        <p>AC</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-tv"></ion-icon>\n                        <p>TV</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-invert-colors"></ion-icon>\n                        <p>Pool</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-cutlery"></ion-icon>\n                        <p>Kitchen</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-fire"></ion-icon>\n                        <p>Geyser</p>\n                    </span>\n                </div>\n            </div>\n        </ion-item>\n\n     <ion-item (click)="homestay_info()">\n            <ion-badge class="end">4.7 <ion-icon class="zmdi zmdi-star"></ion-icon>\n            </ion-badge>\n            <ion-scroll scrollX="true">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/house3.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/house1.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/house2.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/house3.png" class="crop_img">\n                </div>\n            </ion-scroll>\n            <div class="item_details">\n                <h2 class="d-flex">White Heaven Villa <span class="end">$120.00</span></h2>\n                <p class="d-flex">City Cricle, Manhattan <span class="end">For 1 {{\'guests\' | translate}}</span></p>\n            </div>\n            <div class="item_facilitate">\n                <div class="icon_text_box d-flex">\n                    <span>\n                        <ion-icon class="zmdi zmdi-wifi-alt"></ion-icon>\n                        <p> WiFi</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-iridescent"></ion-icon>\n                        <p>AC</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-tv"></ion-icon>\n                        <p>TV</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-invert-colors"></ion-icon>\n                        <p>Pool</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-cutlery"></ion-icon>\n                        <p>Kitchen</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-fire"></ion-icon>\n                        <p>Geyser</p>\n                    </span>\n                </div>\n            </div>\n        </ion-item>\n\n        <ion-item (click)="homestay_info()">\n            <ion-badge class="end">4.7 <ion-icon class="zmdi zmdi-star"></ion-icon>\n            </ion-badge>\n            <ion-scroll scrollX="true">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/house3.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/house1.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/house2.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/house3.png" class="crop_img">\n                </div>\n            </ion-scroll>\n            <div class="item_details">\n                <h2 class="d-flex">White Heaven Villa <span class="end">$120.00</span></h2>\n                <p class="d-flex">City Cricle, Manhattan <span class="end">For 1 {{\'guests\' | translate}}</span></p>\n            </div>\n            <div class="item_facilitate">\n                <div class="icon_text_box d-flex">\n                    <span>\n                        <ion-icon class="zmdi zmdi-wifi-alt"></ion-icon>\n                        <p> WiFi</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-iridescent"></ion-icon>\n                        <p>AC</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-tv"></ion-icon>\n                        <p>TV</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-invert-colors"></ion-icon>\n                        <p>Pool</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-cutlery"></ion-icon>\n                        <p>Kitchen</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-fire"></ion-icon>\n                        <p>Geyser</p>\n                    </span>\n                </div>\n            </div>\n        </ion-item>\n\n        <ion-item (click)="homestay_info()">\n            <ion-badge class="end">4.7 <ion-icon class="zmdi zmdi-star"></ion-icon>\n            </ion-badge>\n            <ion-scroll scrollX="true">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/house3.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/house1.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/house2.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/house3.png" class="crop_img">\n                </div>\n            </ion-scroll>\n            <div class="item_details">\n                <h2 class="d-flex">White Heaven Villa <span class="end">$120.00</span></h2>\n                <p class="d-flex">City Cricle, Manhattan <span class="end">For 1 {{\'guests\' | translate}}</span></p>\n            </div>\n            <div class="item_facilitate">\n                <div class="icon_text_box d-flex">\n                    <span>\n                        <ion-icon class="zmdi zmdi-wifi-alt"></ion-icon>\n                        <p> WiFi</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-iridescent"></ion-icon>\n                        <p>AC</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-tv"></ion-icon>\n                        <p>TV</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-invert-colors"></ion-icon>\n                        <p>Pool</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-cutlery"></ion-icon>\n                        <p>Kitchen</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-fire"></ion-icon>\n                        <p>Geyser</p>\n                    </span>\n                </div>\n            </div>\n        </ion-item>\n\n        <ion-item (click)="homestay_info()">\n            <ion-badge class="end">4.7 <ion-icon class="zmdi zmdi-star"></ion-icon>\n            </ion-badge>\n            <ion-scroll scrollX="true">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/house3.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/house1.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/house2.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/house3.png" class="crop_img">\n                </div>\n            </ion-scroll>\n            <div class="item_details">\n                <h2 class="d-flex">White Heaven Villa <span class="end">$120.00</span></h2>\n                <p class="d-flex">City Cricle, Manhattan <span class="end">For 1 {{\'guests\' | translate}}</span></p>\n            </div>\n            <div class="item_facilitate">\n                <div class="icon_text_box d-flex">\n                    <span>\n                        <ion-icon class="zmdi zmdi-wifi-alt"></ion-icon>\n                        <p> WiFi</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-iridescent"></ion-icon>\n                        <p>AC</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-tv"></ion-icon>\n                        <p>TV</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-invert-colors"></ion-icon>\n                        <p>Pool</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-cutlery"></ion-icon>\n                        <p>Kitchen</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-fire"></ion-icon>\n                        <p>Geyser</p>\n                    </span>\n                </div>\n            </div>\n        </ion-item>\n\n        <ion-item (click)="homestay_info()">\n            <ion-badge class="end">4.7 <ion-icon class="zmdi zmdi-star"></ion-icon>\n            </ion-badge>\n            <ion-scroll scrollX="true">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/house3.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/house1.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/house2.png" class="crop_img">\n                </div>\n                <div class="img_box center_img">\n                    <img src="assets/imgs/house3.png" class="crop_img">\n                </div>\n            </ion-scroll>\n            <div class="item_details">\n                <h2 class="d-flex">White Heaven Villa <span class="end">$120.00</span></h2>\n                <p class="d-flex">City Cricle, Manhattan <span class="end">For 1 {{\'guests\' | translate}}</span></p>\n            </div>\n            <div class="item_facilitate">\n                <div class="icon_text_box d-flex">\n                    <span>\n                        <ion-icon class="zmdi zmdi-wifi-alt"></ion-icon>\n                        <p> WiFi</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-iridescent"></ion-icon>\n                        <p>AC</p>\n                    </span>\n                    \n                    <span>\n                        <ion-icon class="zmdi zmdi-tv"></ion-icon>\n                        <p>TV</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-invert-colors"></ion-icon>\n                        <p>Pool</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-cutlery"></ion-icon>\n                        <p>Kitchen</p>\n                    </span>\n                    <span>\n                        <ion-icon class="zmdi zmdi-fire"></ion-icon>\n                        <p>Geyser</p>\n                    </span>\n                </div>\n            </div>\n        </ion-item>\n\n        \n    </ion-list>\n</ion-content>\n<ion-footer no-border>\n    <ion-row>\n        <ion-col col-6 no-padding>\n            <button ion-button text-uppercase no-margin full icon-start class="btn">\n                <ion-icon class="zmdi zmdi-tune"></ion-icon>\n                {{\'filters\' | translate}}\n            </button>\n        </ion-col>\n        <ion-col col-6 no-padding>\n            <button ion-button text-uppercase no-margin full icon-start class="btn">\n                <ion-icon class="zmdi zmdi-map"></ion-icon>\n                {{\'map_view\' | translate}}\n            </button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\list_of_homestay\list_of_homestay.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], List_of_homestayPage);
    return List_of_homestayPage;
}());

//# sourceMappingURL=list_of_homestay.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Homestay_infoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_reviews_home_reviews__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__homestay_booked_homestay_booked__ = __webpack_require__(239);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var Homestay_infoPage = /** @class */ (function () {
    function Homestay_infoPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Homestay_infoPage.prototype.home_reviews = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_reviews_home_reviews__["a" /* Home_reviewsPage */]);
    };
    Homestay_infoPage.prototype.homestay_booked = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__homestay_booked_homestay_booked__["a" /* Homestay_bookedPage */]);
    };
    Homestay_infoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-homestay_info',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\homestay_info\homestay_info.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="banner">\n        <ion-slides autoplay="5000" loop="true" speed="500" pager dir="ltr">\n            <ion-slide>\n                <div class="slide_box">\n                    <div class="profile_img center_img">\n                        <img src="assets/imgs/house3.png" class="crop_img">\n                    </div>\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div class="slide_box">\n                    <div class="profile_img center_img">\n                        <img src="assets/imgs/house1.png" class="crop_img">\n                    </div>\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div class="slide_box">\n                    <div class="profile_img center_img">\n                        <img src="assets/imgs/house2.png" class="crop_img">\n                    </div>\n                </div>\n            </ion-slide>\n            <ion-slide>\n                <div class="slide_box">\n                    <div class="profile_img center_img">\n                        <img src="assets/imgs/house1.png" class="crop_img">\n                    </div>\n                </div>\n            </ion-slide>\n        </ion-slides>\n\n        <div class="banner_details">\n            <h2 class="d-flex"><span>White Heaven Villa</span>\n                <ion-badge class="end">4.7 <ion-icon class="zmdi zmdi-star"></ion-icon>\n                </ion-badge>\n            </h2>\n            <h3 class="d-flex"><span>City Cricle, Manhattan</span> <span class="end">1.5k {{\'people_rated\' | translate}}</span></h3>\n        </div>\n    </div>\n\n    <ion-list no-lines>\n        <ion-item class="amenities">\n            <h2>{{\'amenities\' | translate}}</h2>\n            <ion-scroll scrollX="true">\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-wifi-alt"></ion-icon>\n                    <p>WiFi</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-iridescent"></ion-icon>\n                    <p>Ac</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-tv"></ion-icon>\n                    <p>Tv</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-invert-colors"></ion-icon>\n                    <p>Pool</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-cutlery"></ion-icon>\n                    <p>Kitchen</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-fire"></ion-icon>\n                    <p>Geyser</p>\n                </div>\n\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-wifi-alt"></ion-icon>\n                    <p>WiFi</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-iridescent"></ion-icon>\n                    <p>Ac</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-tv"></ion-icon>\n                    <p>Tv</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-invert-colors"></ion-icon>\n                    <p>Pool</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-cutlery"></ion-icon>\n                    <p>Kitchen</p>\n                </div>\n                <div class="scroll_box" text-center>\n                    <ion-icon class="zmdi zmdi-fire"></ion-icon>\n                    <p>Geyser</p>\n                </div>\n            </ion-scroll>\n        </ion-item>\n\n        <ion-item class="about">\n            <h2>{{\'about\' | translate}}</h2>\n            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using.\n            </p>\n        </ion-item>\n\n        <ion-item class="icon_container">\n            <ion-row>\n                <ion-col col-3>\n                    <div class="icon_box" text-center>\n                        <ion-icon class="zmdi zmdi-map"></ion-icon>\n                        <p>{{\'location\' | translate}}</p>\n                    </div>\n                </ion-col>\n                <ion-col col-3 (click)="home_reviews()">\n                    <div class="icon_box" text-center>\n                        <ion-icon class="zmdi zmdi-star"></ion-icon>\n                        <p>{{\'reviews\' | translate}}</p>\n                    </div>\n                </ion-col>\n                <ion-col col-3>\n                    <div class="icon_box" text-center>\n                        <ion-icon class="zmdi zmdi-image"></ion-icon>\n                        <p>{{\'photos\' | translate}}</p>\n                    </div>\n                </ion-col>\n                <ion-col col-3>\n                    <div class="icon_box" text-center>\n                        <ion-icon class="zmdi zmdi-collection-text"></ion-icon>\n                        <p>{{\'similar\' | translate}}</p>\n                    </div>\n                </ion-col>\n            </ion-row>\n        </ion-item>\n    </ion-list>\n</ion-content>\n<ion-footer no-border (click)="homestay_booked()">\n    <h2 class="d-flex">$120.00 <small>For 2 Guests</small><span class="end" text-uppercase>{{\'book_now\' | translate}}</span></h2>\n</ion-footer>\n'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\homestay_info\homestay_info.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Homestay_infoPage);
    return Homestay_infoPage;
}());

//# sourceMappingURL=homestay_info.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Home_reviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Home_reviewsPage = /** @class */ (function () {
    function Home_reviewsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Home_reviewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-home_reviews',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\home_reviews\home_reviews.html"*/'<ion-header class="theme_header">\n    <ion-navbar>\n        <ion-title>\n            <h2 class="d-flex"><span>White Heaven Villa </span>\n                <ion-badge class="end">4.7 <ion-icon class="zmdi zmdi-star"></ion-icon>\n                </ion-badge>\n            </h2>\n            <h3 class="d-flex"><span>City park, Manhattan</span> <span class="end">1.5k {{\'people_rated\' | translate}}</span></h3>\n        </ion-title>\n    </ion-navbar>\n    <h1>{{\'reviews\' | translate}}</h1>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines>\n        <ion-item>\n            <div class="reviews_details">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/g9.png" class="crop_img">\n                </div>\n                <div class="other_details">\n                    <h2 class="d-flex">\n                        <span class="name">Emili Williamson</span>\n                        <span class="end ratings_icon">\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                        </span>\n                    </h2>\n                    <h3>22 Jan 19. 11:30 am</h3>\n                </div>\n            </div>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n            </p>\n        </ion-item>\n\n        <ion-item>\n            <div class="reviews_details">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/g3.png" class="crop_img">\n                </div>\n                <div class="other_details">\n                    <h2 class="d-flex">\n                        <span class="name">George Smith</span>\n                        <span class="end ratings_icon">\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star "></ion-icon>\n                        </span>\n                    </h2>\n                    <h3>22 Jan 19. 11:30 am</h3>\n                </div>\n            </div>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n            </p>\n        </ion-item>\n\n        <ion-item>\n            <div class="reviews_details">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/g6.png" class="crop_img">\n                </div>\n                <div class="other_details">\n                    <h2 class="d-flex">\n                        <span class="name">Elvis Taylor</span>\n                        <span class="end ratings_icon">\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                        </span>\n                    </h2>\n                    <h3>22 Jan 19. 11:30 am</h3>\n                </div>\n            </div>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n            </p>\n        </ion-item>\n\n        <ion-item>\n            <div class="reviews_details">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/g9.png" class="crop_img">\n                </div>\n                <div class="other_details">\n                    <h2 class="d-flex">\n                        <span class="name">Emili Williamson</span>\n                        <span class="end ratings_icon">\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star "></ion-icon>\n                            <ion-icon class="zmdi zmdi-star "></ion-icon>\n                        </span>\n                    </h2>\n                    <h3>22 Jan 19. 11:30 am</h3>\n                </div>\n            </div>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n            </p>\n        </ion-item>\n\n        <ion-item>\n            <div class="reviews_details">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/g7.png" class="crop_img">\n                </div>\n                <div class="other_details">\n                    <h2 class="d-flex">\n                        <span class="name">Shoun Jamson</span>\n                        <span class="end ratings_icon">\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                        </span>\n                    </h2>\n                    <h3>22 Jan 19. 11:30 am</h3>\n                </div>\n            </div>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n            </p>\n        </ion-item>\n\n\n        <ion-item>\n            <div class="reviews_details">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/g9.png" class="crop_img">\n                </div>\n                <div class="other_details">\n                    <h2 class="d-flex">\n                        <span class="name">Emili Williamson</span>\n                        <span class="end ratings_icon">\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                        </span>\n                    </h2>\n                    <h3>22 Jan 19. 11:30 am</h3>\n                </div>\n            </div>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n            </p>\n        </ion-item>\n\n        <ion-item>\n            <div class="reviews_details">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/g3.png" class="crop_img">\n                </div>\n                <div class="other_details">\n                    <h2 class="d-flex">\n                        <span class="name">George Smith</span>\n                        <span class="end ratings_icon">\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star "></ion-icon>\n                        </span>\n                    </h2>\n                    <h3>22 Jan 19. 11:30 am</h3>\n                </div>\n            </div>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n            </p>\n        </ion-item>\n\n        <ion-item>\n            <div class="reviews_details">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/g6.png" class="crop_img">\n                </div>\n                <div class="other_details">\n                    <h2 class="d-flex">\n                        <span class="name">Elvis Taylor</span>\n                        <span class="end ratings_icon">\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                        </span>\n                    </h2>\n                    <h3>22 Jan 19. 11:30 am</h3>\n                </div>\n            </div>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n            </p>\n        </ion-item>\n\n        <ion-item>\n            <div class="reviews_details">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/g9.png" class="crop_img">\n                </div>\n                <div class="other_details">\n                    <h2 class="d-flex">\n                        <span class="name">Emili Williamson</span>\n                        <span class="end ratings_icon">\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star "></ion-icon>\n                            <ion-icon class="zmdi zmdi-star "></ion-icon>\n                        </span>\n                    </h2>\n                    <h3>22 Jan 19. 11:30 am</h3>\n                </div>\n            </div>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n            </p>\n        </ion-item>\n\n        <ion-item>\n            <div class="reviews_details">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/g7.png" class="crop_img">\n                </div>\n                <div class="other_details">\n                    <h2 class="d-flex">\n                        <span class="name">Shoun Jamson</span>\n                        <span class="end ratings_icon">\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                        </span>\n                    </h2>\n                    <h3>22 Jan 19. 11:30 am</h3>\n                </div>\n            </div>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n            </p>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\home_reviews\home_reviews.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Home_reviewsPage);
    return Home_reviewsPage;
}());

//# sourceMappingURL=home_reviews.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Homestay_bookedPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Homestay_bookedPage = /** @class */ (function () {
    function Homestay_bookedPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Homestay_bookedPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-homestay_booked',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\homestay_booked\homestay_booked.html"*/'<ion-header class="bg-transparent">\n    <ion-navbar>\n        <ion-title>{{\'homestay_booked\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="booking_receipt">\n        <div class="container receipt_header">\n            <h2>Hotel Sky Garden</h2>\n            <h6 class="d-flex">City Park, Manhattan <span class="end">$120.00</span></h6>\n        </div>\n        <div class="banner">\n            <ion-scroll scrollX="true">\n                <div class="item_scroll">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/house3.png" class="crop_img">\n                    </div>\n                </div>\n                <div class="item_scroll">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/house2.png" class="crop_img">\n                    </div>\n                </div>\n                <div class="item_scroll">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/house1.png" class="crop_img">\n                    </div>\n                </div>\n                <div class="item_scroll">\n                    <div class="img_box center_img">\n                        <img src="assets/imgs/house1.png" class="crop_img">\n                    </div>\n                </div>\n            </ion-scroll>\n        </div>\n        <div class="container receipt_containt">\n            <ion-row>\n                <ion-col col-6>\n                    <h3>{{\'check_in\' | translate}}</h3>\n                    <h2>23 Jun, 11:00 am</h2>\n                </ion-col>\n                <ion-col col-6 text-end>\n                    <h3>{{\'check_out\' | translate}}</h3>\n                    <h2>24 Jun, 10:00 am</h2>\n                </ion-col>\n            </ion-row> \n            <ion-row>\n                <ion-col col-6>\n                    <h3>{{\'room_num\' | translate}}</h3>\n                    <h2>B112</h2>\n                </ion-col>\n                <ion-col col-6 text-end>\n                    <h3>{{\'total_guest\' | translate}}</h3>\n                    <h2>02</h2>\n                </ion-col>\n            </ion-row>\n            <ion-row>\n                <ion-col col-5>\n                    <h3>{{\'booked_by\' | translate}}</h3>\n                    <h2>Sam Smith</h2>\n                </ion-col>\n                <ion-col col-2 text-center>\n                    <h3>{{\'age\' | translate}}</h3>\n                    <h2>25</h2>\n                </ion-col>\n                <ion-col col-5 text-end>\n                    <h3>{{\'gender\' | translate}}</h3>\n                    <h2>Male</h2>\n                </ion-col>\n            </ion-row>\n        </div>\n\n        <div class="container map">\n           <div class="map_box">\n               <img src="assets/imgs/map.png">\n               <ion-icon class="zmdi zmdi-pin" style="left: 50%; top: 50%;"></ion-icon>\n            </div>\n        </div>\n    </div>\n      <button ion-button text-uppercase full clear no-margin class="btn">{{\'get_direction\' | translate}}</button>\n</ion-content>'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\homestay_booked\homestay_booked.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Homestay_bookedPage);
    return Homestay_bookedPage;
}());

//# sourceMappingURL=homestay_booked.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return About_usPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var About_usPage = /** @class */ (function () {
    function About_usPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    About_usPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-about_us',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\about_us\about_us.html"*/'<ion-header class="theme_header">\n    <ion-navbar>\n        <ion-title>\n            {{\'about_us\' | translate}}\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="text_container">\n        <h2>{{\'how_we_started\' | translate}}</h2>\n        <p>\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n        </p>\n\n        <p>\n            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.\n        </p>\n\n        <h2>{{\'about_vision\' | translate}}</h2>\n\n        <p>\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n        </p>\n\n        <p>\n            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.\n        </p>\n    </div>\n</ion-content>\n'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\about_us\about_us.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], About_usPage);
    return About_usPage;
}());

//# sourceMappingURL=about_us.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__my_profile_my_profile__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__support_support__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__about_us_about_us__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__condition_condition__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__my_reviews_my_reviews__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signin_signin__ = __webpack_require__(249);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var AccountPage = /** @class */ (function () {
    function AccountPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    AccountPage.prototype.my_profile = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__my_profile_my_profile__["a" /* My_profilePage */]);
    };
    AccountPage.prototype.support = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__support_support__["a" /* SupportPage */]);
    };
    AccountPage.prototype.about_us = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__about_us_about_us__["a" /* About_usPage */]);
    };
    AccountPage.prototype.condition = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__condition_condition__["a" /* ConditionPage */]);
    };
    AccountPage.prototype.my_reviews = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__my_reviews_my_reviews__["a" /* My_reviewsPage */]);
    };
    AccountPage.prototype.signin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__signin_signin__["a" /* SigninPage */]);
    };
    AccountPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-account',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\account\account.html"*/'<ion-header>\n    <ion-navbar>\n        <ion-title>{{\'account\' | translate}}</ion-title>\n    </ion-navbar>\n    <div class="profile_box d-flex" (click)="my_profile()">\n        <div class="img_box center_img">\n            <img src="assets/imgs/g8.png" class="crop_img">\n        </div>\n        <div class="profile_details">\n            <h2>Sam Smith</h2>\n            <p>{{\'view_profile\' | translate}}</p>\n        </div>\n    </div>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines>\n        <ion-item (click)="support()">\n            <h2 class="d-flex">\n                <ion-icon class="zmdi zmdi-email"></ion-icon>\n                {{\'support\' | translate}}\n            </h2>\n        </ion-item>\n        <ion-item (click)="about_us()">\n            <h2 class="d-flex">\n                <ion-icon class="zmdi zmdi-assignment-account"></ion-icon>\n                {{\'about_us\' | translate}}\n            </h2>\n        </ion-item>\n        <ion-item (click)="condition()">\n            <h2 class="d-flex">\n                <ion-icon class="zmdi zmdi-assignment"></ion-icon>\n                {{\'terms_conditions\' | translate}}\n            </h2>\n        </ion-item>\n        <ion-item (click)="my_reviews()">\n            <h2 class="d-flex">\n                <ion-icon class="zmdi zmdi-star"></ion-icon>\n                {{\'my_reviews\' | translate}}\n            </h2>\n        </ion-item>\n        <ion-item>\n            <h2 class="d-flex">\n                <ion-icon class="zmdi zmdi-share"></ion-icon>\n                {{\'share_app\' | translate}}\n            </h2>\n        </ion-item>\n        <ion-item>\n            <h2 class="d-flex">\n                <ion-icon class="zmdi zmdi-thumb-up"></ion-icon>\n                {{\'rate_app\' | translate}}\n            </h2>\n        </ion-item>\n        <ion-item (click)="signin()">\n            <h2 class="d-flex">\n                <ion-icon class="zmdi zmdi-power-off"></ion-icon>\n                {{\'logout\' | translate}}\n            </h2>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\account\account.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], AccountPage);
    return AccountPage;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return My_profilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var My_profilePage = /** @class */ (function () {
    function My_profilePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.select_gender = "male";
    }
    My_profilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-my_profile',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\my_profile\my_profile.html"*/'<ion-header class="theme_header">\n    <ion-navbar>\n        <ion-title>{{\'my_profile\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="form">\n        <div class="profile_img">\n            <div class="img_box center_img">\n                <img src="assets/imgs/g8.png" class="crop_img">\n            </div>\n            <ion-icon class="zmdi zmdi-camera"></ion-icon>\n        </div>\n        <ion-list no-lines>\n            <ion-item>\n                <ion-label>{{\'enter_full_name\' | translate}}</ion-label>\n                <ion-input type="text" value="Sam Smith"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{\'email_address\' | translate}}</ion-label>\n                <ion-input type="text" value="samsmith@mail.com"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{\'phone_number\' | translate}}</ion-label>\n                <ion-input type="text" value="+1 987 654 3210"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label class="d-flex">{{\'select_gender\' | translate}}</ion-label>\n                <ion-select [(ngModel)]="select_gender">\n                    <ion-option value="male">Male</ion-option>\n                    <ion-option value="female">Female</ion-option>\n                </ion-select>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <button ion-button text-uppercase no-margin full class="btn">{{\'update_profile\' | translate}}</button>\n</ion-footer>\n'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\my_profile\my_profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], My_profilePage);
    return My_profilePage;
}());

//# sourceMappingURL=my_profile.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SupportPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SupportPage = /** @class */ (function () {
    function SupportPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SupportPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-support',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\support\support.html"*/'<ion-header class="theme_header">\n    <ion-navbar>\n        <ion-title>\n            {{\'we_are_happy_to\' | translate}}<br>{{\'hear_from_you\' | translate}}\n            <h2> {{\'let_us_know_your_queries_feedback\' | translate}}</h2>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="banner">\n        <ion-row>\n            <ion-col col-6>\n                <button ion-button block clear no-margin icon-start class="btn">\n                    <ion-icon class="zmdi zmdi-local-phone"></ion-icon>\n                    {{\'call_us\' | translate}}\n                </button>\n            </ion-col>\n            <ion-col col-6>\n                <button ion-button block no-margin icon-start class="btn">\n                    <ion-icon class="zmdi zmdi-email"></ion-icon>\n                    {{\'mail_us\' | translate}}\n                </button>\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <div class="form">\n        <h2>{{\'or_send_your_message\' | translate}}</h2>\n        <ion-list no-lines>\n            <ion-item>\n                <ion-label>{{\'full_name\' | translate}}</ion-label>\n                <ion-input type="text" value="Sam Smith"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{\'contact_number\' | translate}}</ion-label>\n                <ion-input type="text" value="samsmith@mail.com"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{\'your_message\' | translate}}</ion-label>\n                <ion-input type="text" value="{{\'write_your_message\' | translate}}"></ion-input>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <button ion-button text-uppercase no-margin full class="btn">{{\'submit_now\' | translate}}</button>\n</ion-footer>\n'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\support\support.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SupportPage);
    return SupportPage;
}());

//# sourceMappingURL=support.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConditionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ConditionPage = /** @class */ (function () {
    function ConditionPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    ConditionPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-condition',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\condition\condition.html"*/'<ion-header class="theme_header">\n    <ion-navbar>\n        <ion-title>\n            {{\'terms_conditions\' | translate}}\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="text_container">\n        <h2>{{\'companies_polies\' | translate}}</h2>\n        <p>\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n        </p>\n\n        <p>\n            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.\n        </p>\n\n        <h2>{{\'terms_of_use\' | translate}}</h2>\n\n        <p>\n            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,\n        </p>\n\n        <p>\n            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using \'Content here, content here\', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for \'lorem ipsum\' will uncover many web sites still in their infancy.\n        </p>\n    </div>\n</ion-content>\n'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\condition\condition.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], ConditionPage);
    return ConditionPage;
}());

//# sourceMappingURL=condition.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return My_reviewsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var My_reviewsPage = /** @class */ (function () {
    function My_reviewsPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    My_reviewsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-my_reviews',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\my_reviews\my_reviews.html"*/'<ion-header class="theme_header">\n    <ion-navbar>\n        <ion-title>{{\'reviews_by_you\' | translate}}\n            <h2 text-lowercase> 78 {{\'reviews\' | translate}}</h2>\n        </ion-title>\n    </ion-navbar>\n    <h1>{{\'reviews\' | translate}}</h1>\n</ion-header>\n\n<ion-content class="bg-color">\n    <ion-list no-lines>\n        <ion-item>\n            <div class="reviews_details">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/1.png" class="crop_img">\n                </div>\n                <div class="other_details">\n                    <h2 class="d-flex">\n                        <span class="name">Hotel Green view</span>\n                        <span class="end ratings_icon">\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                        </span>\n                    </h2>\n                    <h3>22 Jan 19. 11:30 am</h3>\n                </div>\n            </div>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n            </p>\n        </ion-item>\n\n        <ion-item>\n            <div class="reviews_details">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/2.png" class="crop_img">\n                </div>\n                <div class="other_details">\n                    <h2 class="d-flex">\n                        <span class="name">White house Villa</span>\n                        <span class="end ratings_icon">\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star "></ion-icon>\n                        </span>\n                    </h2>\n                    <h3>22 Jan 19. 11:30 am</h3>\n                </div>\n            </div>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n            </p>\n        </ion-item>\n\n\n        <ion-item>\n            <div class="reviews_details">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/3.png" class="crop_img">\n                </div>\n                <div class="other_details">\n                    <h2 class="d-flex">\n                        <span class="name">John Travels</span>\n                        <span class="end ratings_icon">\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star"></ion-icon>\n                        </span>\n                    </h2>\n                    <h3>22 Jan 19. 11:30 am</h3>\n                </div>\n            </div>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n            </p>\n        </ion-item>\n\n        <ion-item>\n            <div class="reviews_details">\n                <div class="img_box center_img">\n                    <img src="assets/imgs/4.png" class="crop_img">\n                </div>\n                <div class="other_details">\n                    <h2 class="d-flex">\n                        <span class="name">Hotel Rainbow</span>\n                        <span class="end ratings_icon">\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                            <ion-icon class="zmdi zmdi-star active"></ion-icon>\n                        </span>\n                    </h2>\n\n                    <h3>22 Jan 19. 11:30 am</h3>\n                </div>\n            </div>\n            <p>\n                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.\n            </p>\n        </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\my_reviews\my_reviews.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], My_reviewsPage);
    return My_reviewsPage;
}());

//# sourceMappingURL=my_reviews.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SigninPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup_signup__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tabs_tabs__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SigninPage = /** @class */ (function () {
    function SigninPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SigninPage.prototype.signup = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__signup_signup__["a" /* SignupPage */]);
    };
    SigninPage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__tabs_tabs__["a" /* TabsPage */]);
    };
    SigninPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signin',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\signin\signin.html"*/'<ion-header class="theme_header">\n    <ion-navbar>\n        <ion-title>\n            {{\'welcome_to\' | translate}}<br>{{\'app_title\' | translate}}\n            <div class="logo end">\n                <img src="assets/imgs/logo.png">\n            </div>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="socila_section">\n        <p> {{\'continue_with_social_account\' | translate}}</p>\n        <ion-row>\n            <ion-col col-6>\n\n                <button ion-button block clear icon-start class="btn facebook">\n                    <img src="assets/imgs/fb.png">\n                    {{\'facebook\' | translate}}\n                </button>\n            </ion-col>\n            <ion-col col-6>\n\n                <button ion-button clear block icon-start class="btn google">\n                    <img src="assets/imgs/google.png">\n                    {{\'google\' | translate}}</button>\n            </ion-col>\n        </ion-row>\n    </div>\n\n    <div class="form">\n        <h2> {{\'or_signin_with_your_account\' | translate}}</h2>\n        <ion-list no-lines>\n            <ion-item>\n                <ion-label>{{\'email_phone_number\' | translate}}</ion-label>\n                <ion-input type="text" value="+1 987 654 310"></ion-input>\n            </ion-item>\n            <ion-item class="password">\n                <ion-label class="d-flex">{{\'password\' | translate}}<span class="end">{{\'forgot\' | translate}}</span></ion-label>\n                <ion-input type="password" value="222222"></ion-input>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <ion-row>\n        <ion-col col-6 no-padding>\n            <button ion-button text-uppercase full clear no-margin class="btn" (click)="signup()">{{\'sign_up\' | translate}}</button>\n        </ion-col>\n        <ion-col col-6 no-padding>\n            <button ion-button text-uppercase no-margin full class="btn" (click)="tabs()">{{\'sign_in_now\' | translate}}</button>\n        </ion-col>\n    </ion-row>\n</ion-footer>\n'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\signin\signin.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SigninPage);
    return SigninPage;
}());

//# sourceMappingURL=signin.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__verification_code_verification_code__ = __webpack_require__(251);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupPage = /** @class */ (function () {
    function SignupPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    SignupPage.prototype.verification_code = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__verification_code_verification_code__["a" /* Verification_codePage */]);
    };
    SignupPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-signup',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\signup\signup.html"*/'<ion-header class="theme_header">\n    <ion-navbar>\n        <ion-title>{{\'create_account\' | translate}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="form">\n        <div class="img_box center_img">\n            <!--            <img src="" class="crop_img">-->\n            <ion-icon class="zmdi zmdi-camera"></ion-icon>\n        </div>\n        <ion-list no-lines>\n            <ion-item>\n                <ion-label>{{\'enter_full_name\' | translate}}</ion-label>\n                <ion-input type="text" value="Sam Smith"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{\'email_address\' | translate}}</ion-label>\n                <ion-input type="text" value="samsmith@mail.com"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>{{\'phone_number\' | translate}}</ion-label>\n                <ion-input type="text" value="+1 987 654 3210"></ion-input>\n            </ion-item>\n            <ion-item class="password">\n                <ion-label class="d-flex">{{\'create_password\' | translate}}</ion-label>\n                <ion-input type="password" value="222222"></ion-input>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n<ion-footer no-border>\n    <button ion-button text-uppercase no-margin full class="btn" (click)="verification_code()">{{\'sign_up_now\' | translate}}</button>\n</ion-footer>\n'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\signup\signup.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], SignupPage);
    return SignupPage;
}());

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 251:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Verification_codePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(108);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Verification_codePage = /** @class */ (function () {
    function Verification_codePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    Verification_codePage.prototype.tabs = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
    };
    Verification_codePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-verification_code',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\verification_code\verification_code.html"*/'<ion-header class="theme_header">\n    <ion-navbar>\n        <ion-title>\n            {{\'verification_code\' | translate}}\n            <h2> {{\'verification_code_massage\' | translate}}</h2>\n        </ion-title>\n    </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <div class="form">\n        <ion-list no-lines>\n            <ion-item class="password">\n                <ion-label class="d-flex">{{\'enter_verification_code\' | translate}}</ion-label>\n                <ion-input type="text" value="5887"></ion-input>\n            </ion-item>\n        </ion-list>\n    </div>\n\n    <button ion-button text-uppercase no-margin full class="btn" (click)="tabs()">{{\'sign_up_now\' | translate}}</button>\n</ion-content>\n'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\verification_code\verification_code.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], Verification_codePage);
    return Verification_codePage;
}());

//# sourceMappingURL=verification_code.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return My_bookingsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var My_bookingsPage = /** @class */ (function () {
    function My_bookingsPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.bookings = "all_bookings";
    }
    My_bookingsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'page-my_bookings',template:/*ion-inline-start:"E:\server\htdocs\ionic\src\pages\my_bookings\my_bookings.html"*/'<ion-header class="theme_header">\n    <ion-navbar>\n        <ion-title>{{\'my_bookings\' | translate}}</ion-title>\n    </ion-navbar>\n    <div class="tab_btn_box">\n        <ion-scroll scrollX="true">\n            <ion-segment [(ngModel)]="bookings">\n                <ion-segment-button value="all_bookings">\n                    {{\'all_bookings\' | translate}}\n                </ion-segment-button>\n                <ion-segment-button value="flight">\n                    {{\'flight\' | translate}}\n                </ion-segment-button>\n                <ion-segment-button value="train">\n                    {{\'train\' | translate}}\n                </ion-segment-button>\n                <ion-segment-button value="hotel">\n                    {{\'hotel\' | translate}}\n                </ion-segment-button>\n                <ion-segment-button value="cab">\n                    {{\'cab\' | translate}}\n                </ion-segment-button>\n                <ion-segment-button value="holiday">\n                    {{\'holiday\' | translate}}\n                </ion-segment-button>\n                <ion-segment-button value="homestays">\n                    {{\'homestays\' | translate}}\n                </ion-segment-button>\n            </ion-segment>\n        </ion-scroll>\n    </div>\n</ion-header>\n\n<ion-content class="bg-color">\n    <div class="" [ngSwitch]="bookings">\n        <ion-list no-lines *ngSwitchCase="\'all_bookings\'">\n            <ion-item>\n                <div class="item_header">\n                    <h2 class="d-flex">{{\'flight_booked\' | translate}}<span class="end">$165.00</span></h2>\n                </div>\n                <div class="item_details d-flex">\n                    <div class="img_box">\n                        <img src="assets/imgs/ic_flight.png">\n                    </div>\n                    <div class="text_box">\n                        <h3>American Airlines</h3>\n                        <p>Houatone, USA to Manhattan, USA</p>\n                        <p>23 Jul, 12:35am</p>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item>\n                <div class="item_header">\n                    <h2 class="d-flex">{{\'hotel_booked\' | translate}}<span class="end">$100.00</span></h2>\n                </div>\n                <div class="item_details d-flex">\n                    <div class="img_box">\n                        <img src="assets/imgs/ic_hotels.png">\n                    </div>\n                    <div class="text_box">\n                        <h3>Hotel Sky Garden</h3>\n                        <p>City park, Manthattan</p>\n                        <p>23 Jun, 11:00 am - 24 Jun, 10:00 am</p>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item>\n                <div class="item_header">\n                    <h2 class="d-flex">{{\'train_booked\' | translate}}<span class="end">$35.00</span></h2>\n                </div>\n                <div class="item_details d-flex">\n                    <div class="img_box">\n                        <img src="assets/imgs/ic_train.png">\n                    </div>\n                    <div class="text_box">\n                        <h3>American Superfast express</h3>\n                        <p>Houatone, USA to Manhattan, USA</p>\n                        <p>23 Jul, 12:35am</p>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item>\n                <div class="item_header">\n                    <h2 class="d-flex">{{\'holiday_booked\' | translate}}<span class="end">$250.00</span></h2>\n                </div>\n                <div class="item_details d-flex">\n                    <div class="img_box">\n                        <img src="assets/imgs/ic_holiday.png">\n                    </div>\n                    <div class="text_box">\n                        <h3>Hotel Sky Garden</h3>\n                        <p>Rockaway Beach, Fort Tulden, Brighton Beach</p>\n                        <p>22 Nov - 25 Nov (3D 4N)</p>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item>\n                <div class="item_header">\n                    <h2 class="d-flex">{{\'bus_booked\' | translate}}<span class="end">$90.50</span></h2>\n                </div>\n                <div class="item_details d-flex">\n                    <div class="img_box">\n                        <img src="assets/imgs/ic_bus.png">\n                    </div>\n                    <div class="text_box">\n                        <h3>Polo Travels</h3>\n                        <p>Old City Market To White Church</p>\n                        <p>23 Jul, 12:35am</p>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item>\n                <div class="item_header">\n                    <h2 class="d-flex">{{\'flight_booked\' | translate}}<span class="end">$165.00</span></h2>\n                </div>\n                <div class="item_details d-flex">\n                    <div class="img_box">\n                        <img src="assets/imgs/ic_flight.png">\n                    </div>\n                    <div class="text_box">\n                        <h3>American Airlines</h3>\n                        <p>Houatone, USA to Manhattan, USA</p>\n                        <p>23 Jul, 12:35am</p>\n                    </div>\n                </div>\n            </ion-item>\n\n\n            <ion-item>\n                <div class="item_header">\n                    <h2 class="d-flex">{{\'hotel_booked\' | translate}}<span class="end">$100.00</span></h2>\n                </div>\n                <div class="item_details d-flex">\n                    <div class="img_box">\n                        <img src="assets/imgs/ic_hotels.png">\n                    </div>\n                    <div class="text_box">\n                        <h3>Hotel Sky Garden</h3>\n                        <p>City park, Manthattan</p>\n                        <p>23 Jun, 11:00 am - 24 Jun, 10:00 am</p>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item>\n                <div class="item_header">\n                    <h2 class="d-flex">{{\'train_booked\' | translate}}<span class="end">$35.00</span></h2>\n                </div>\n                <div class="item_details d-flex">\n                    <div class="img_box">\n                        <img src="assets/imgs/ic_train.png">\n                    </div>\n                    <div class="text_box">\n                        <h3>American Superfast express</h3>\n                        <p>Houatone, USA to Manhattan, USA</p>\n                        <p>23 Jul, 12:35am</p>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item>\n                <div class="item_header">\n                    <h2 class="d-flex">{{\'holiday_booked\' | translate}}<span class="end">$250.00</span></h2>\n                </div>\n                <div class="item_details d-flex">\n                    <div class="img_box">\n                        <img src="assets/imgs/ic_holiday.png">\n                    </div>\n                    <div class="text_box">\n                        <h3>Hotel Sky Garden</h3>\n                        <p>Rockaway Beach, Fort Tulden, Brighton Beach</p>\n                        <p>22 Nov - 25 Nov (3D 4N)</p>\n                    </div>\n                </div>\n            </ion-item>\n\n            <ion-item>\n                <div class="item_header">\n                    <h2 class="d-flex">{{\'bus_booked\' | translate}}<span class="end">$90.50</span></h2>\n                </div>\n                <div class="item_details d-flex">\n                    <div class="img_box">\n                        <img src="assets/imgs/ic_bus.png">\n                    </div>\n                    <div class="text_box">\n                        <h3>Polo Travels</h3>\n                        <p>Old City Market To White Church</p>\n                        <p>23 Jul, 12:35am</p>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n\n        <ion-list no-lines *ngSwitchCase="\'flight\'">\n            <ion-item>\n                <div class="item_header">\n                    <h2 class="d-flex">{{\'flight_booked\' | translate}}<span class="end">$165.00</span></h2>\n                </div>\n                <div class="item_details d-flex">\n                    <div class="img_box">\n                        <img src="assets/imgs/ic_flight.png">\n                    </div>\n                    <div class="text_box">\n                        <h3>American Airlines</h3>\n                        <p>Houatone, USA to Manhattan, USA</p>\n                        <p>23 Jul, 12:35am</p>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n\n\n        <ion-list no-lines *ngSwitchCase="\'train\'">\n            <ion-item>\n                <div class="item_header">\n                    <h2 class="d-flex">{{\'train_booked\' | translate}}<span class="end">$35.00</span></h2>\n                </div>\n                <div class="item_details d-flex">\n                    <div class="img_box">\n                        <img src="assets/imgs/ic_train.png">\n                    </div>\n                    <div class="text_box">\n                        <h3>American Superfast express</h3>\n                        <p>Houatone, USA to Manhattan, USA</p>\n                        <p>23 Jul, 12:35am</p>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n\n\n        <ion-list no-lines *ngSwitchCase="\'hotel\'">\n            <ion-item>\n                <div class="item_header">\n                    <h2 class="d-flex">{{\'hotel_booked\' | translate}}<span class="end">$100.00</span></h2>\n                </div>\n                <div class="item_details d-flex">\n                    <div class="img_box">\n                        <img src="assets/imgs/ic_hotels.png">\n                    </div>\n                    <div class="text_box">\n                        <h3>Hotel Sky Garden</h3>\n                        <p>City park, Manthattan</p>\n                        <p>23 Jun, 11:00 am - 24 Jun, 10:00 am</p>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n\n\n        <ion-list no-lines *ngSwitchCase="\'holiday\'">\n            <ion-item>\n                <div class="item_header">\n                    <h2 class="d-flex">{{\'holiday_booked\' | translate}}<span class="end">$250.00</span></h2>\n                </div>\n                <div class="item_details d-flex">\n                    <div class="img_box">\n                        <img src="assets/imgs/ic_holiday.png">\n                    </div>\n                    <div class="text_box">\n                        <h3>Hotel Sky Garden</h3>\n                        <p>Rockaway Beach, Fort Tulden, Brighton Beach</p>\n                        <p>22 Nov - 25 Nov (3D 4N)</p>\n                    </div>\n                </div>\n            </ion-item>\n        </ion-list>\n    </div>\n</ion-content>\n'/*ion-inline-end:"E:\server\htdocs\ionic\src\pages\my_bookings\my_bookings.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]])
    ], My_bookingsPage);
    return My_bookingsPage;
}());

//# sourceMappingURL=my_bookings.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(271);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__ = __webpack_require__(337);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ion_datepicker__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_about_us_about_us__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_account_account__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_bus_info_bus_info__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_bus_list_bus_list__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_bus_ticket_bus_ticket__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_cab_info_cab_info__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_cab_list_cab_list__ = __webpack_require__(233);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_condition_condition__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_confirm_booking_confirm_booking__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_filter_filter__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_flight_info_flight_info__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_flight_result_flight_result__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_flight_ticket_flight_ticket__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_holiday_booked_holiday_booked__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_holiday_info_holiday_info__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_holiday_list_holiday_list__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_home_reviews_home_reviews__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_homestay_booked_homestay_booked__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__pages_homestay_info_homestay_info__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__pages_hotel_booked_hotel_booked__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__pages_hotel_info_hotel_info__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__pages_hotel_review_hotel_review__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_hotels_list_hotels_list__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_list_of_homestay_list_of_homestay__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_my_bookings_my_bookings__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pages_my_profile_my_profile__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_my_reviews_my_reviews__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_search_bus_search_bus__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__pages_search_cab_search_cab__ = __webpack_require__(232);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__pages_search_flights_search_flights__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__pages_search_holiday_search_holiday__ = __webpack_require__(224);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__pages_search_homestay_search_homestay__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__pages_search_hotel_search_hotel__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__pages_search_train_search_train__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__pages_signin_signin__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__pages_signup_signup__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__pages_support_support__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__pages_tabs_tabs__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__pages_tain_ticket_tain_ticket__ = __webpack_require__(223);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__pages_train_info_train_info__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__pages_train_result_train_result__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__pages_verification_code_verification_code__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__ionic_native_splash_screen__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















































function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_6__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["J" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_us_about_us__["a" /* About_usPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_bus_info_bus_info__["a" /* Bus_infoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_bus_list_bus_list__["a" /* Bus_listPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_bus_ticket_bus_ticket__["a" /* Bus_ticketPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_cab_info_cab_info__["a" /* Cab_infoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cab_list_cab_list__["a" /* Cab_listPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_condition_condition__["a" /* ConditionPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_confirm_booking_confirm_booking__["a" /* Confirm_bookingPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_flight_info_flight_info__["a" /* Flight_infoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_flight_result_flight_result__["a" /* Flight_resultPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_flight_ticket_flight_ticket__["a" /* Flight_ticketPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_holiday_booked_holiday_booked__["a" /* Holiday_bookedPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_holiday_info_holiday_info__["a" /* Holiday_infoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_holiday_list_holiday_list__["a" /* Holiday_listPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_home_reviews_home_reviews__["a" /* Home_reviewsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_homestay_booked_homestay_booked__["a" /* Homestay_bookedPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_homestay_info_homestay_info__["a" /* Homestay_infoPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_hotel_booked_hotel_booked__["a" /* Hotel_bookedPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_hotel_info_hotel_info__["a" /* Hotel_infoPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_hotel_review_hotel_review__["a" /* Hotel_reviewPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_hotels_list_hotels_list__["a" /* Hotels_listPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_list_of_homestay_list_of_homestay__["a" /* List_of_homestayPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_my_bookings_my_bookings__["a" /* My_bookingsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_my_profile_my_profile__["a" /* My_profilePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_my_reviews_my_reviews__["a" /* My_reviewsPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_search_bus_search_bus__["a" /* Search_busPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_search_cab_search_cab__["a" /* Search_cabPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_search_flights_search_flights__["a" /* Search_flightsPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_search_holiday_search_holiday__["a" /* Search_holidayPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_search_homestay_search_homestay__["a" /* Search_homestayPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_search_hotel_search_hotel__["a" /* Search_hotelPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_search_train_search_train__["a" /* Search_trainPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_support_support__["a" /* SupportPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_tain_ticket_tain_ticket__["a" /* Tain_ticketPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_train_info_train_info__["a" /* Train_infoPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_train_result_train_result__["a" /* Train_resultPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_verification_code_verification_code__["a" /* Verification_codePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_7_ion_datepicker__["b" /* DatePickerModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: createTranslateLoader,
                        deps: [__WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]]
                    }
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_about_us_about_us__["a" /* About_usPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_account_account__["a" /* AccountPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_bus_info_bus_info__["a" /* Bus_infoPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_bus_list_bus_list__["a" /* Bus_listPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_bus_ticket_bus_ticket__["a" /* Bus_ticketPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_cab_info_cab_info__["a" /* Cab_infoPage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_cab_list_cab_list__["a" /* Cab_listPage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_condition_condition__["a" /* ConditionPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_confirm_booking_confirm_booking__["a" /* Confirm_bookingPage */],
                __WEBPACK_IMPORTED_MODULE_17__pages_filter_filter__["a" /* FilterPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_flight_info_flight_info__["a" /* Flight_infoPage */],
                __WEBPACK_IMPORTED_MODULE_19__pages_flight_result_flight_result__["a" /* Flight_resultPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_flight_ticket_flight_ticket__["a" /* Flight_ticketPage */],
                __WEBPACK_IMPORTED_MODULE_21__pages_holiday_booked_holiday_booked__["a" /* Holiday_bookedPage */],
                __WEBPACK_IMPORTED_MODULE_22__pages_holiday_info_holiday_info__["a" /* Holiday_infoPage */],
                __WEBPACK_IMPORTED_MODULE_23__pages_holiday_list_holiday_list__["a" /* Holiday_listPage */],
                __WEBPACK_IMPORTED_MODULE_24__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_25__pages_home_reviews_home_reviews__["a" /* Home_reviewsPage */],
                __WEBPACK_IMPORTED_MODULE_26__pages_homestay_booked_homestay_booked__["a" /* Homestay_bookedPage */],
                __WEBPACK_IMPORTED_MODULE_27__pages_homestay_info_homestay_info__["a" /* Homestay_infoPage */],
                __WEBPACK_IMPORTED_MODULE_28__pages_hotel_booked_hotel_booked__["a" /* Hotel_bookedPage */],
                __WEBPACK_IMPORTED_MODULE_29__pages_hotel_info_hotel_info__["a" /* Hotel_infoPage */],
                __WEBPACK_IMPORTED_MODULE_30__pages_hotel_review_hotel_review__["a" /* Hotel_reviewPage */],
                __WEBPACK_IMPORTED_MODULE_31__pages_hotels_list_hotels_list__["a" /* Hotels_listPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_list_of_homestay_list_of_homestay__["a" /* List_of_homestayPage */],
                __WEBPACK_IMPORTED_MODULE_33__pages_my_bookings_my_bookings__["a" /* My_bookingsPage */],
                __WEBPACK_IMPORTED_MODULE_34__pages_my_profile_my_profile__["a" /* My_profilePage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_my_reviews_my_reviews__["a" /* My_reviewsPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_search_bus_search_bus__["a" /* Search_busPage */],
                __WEBPACK_IMPORTED_MODULE_37__pages_search_cab_search_cab__["a" /* Search_cabPage */],
                __WEBPACK_IMPORTED_MODULE_38__pages_search_flights_search_flights__["a" /* Search_flightsPage */],
                __WEBPACK_IMPORTED_MODULE_39__pages_search_holiday_search_holiday__["a" /* Search_holidayPage */],
                __WEBPACK_IMPORTED_MODULE_40__pages_search_homestay_search_homestay__["a" /* Search_homestayPage */],
                __WEBPACK_IMPORTED_MODULE_41__pages_search_hotel_search_hotel__["a" /* Search_hotelPage */],
                __WEBPACK_IMPORTED_MODULE_42__pages_search_train_search_train__["a" /* Search_trainPage */],
                __WEBPACK_IMPORTED_MODULE_43__pages_signin_signin__["a" /* SigninPage */],
                __WEBPACK_IMPORTED_MODULE_44__pages_signup_signup__["a" /* SignupPage */],
                __WEBPACK_IMPORTED_MODULE_45__pages_support_support__["a" /* SupportPage */],
                __WEBPACK_IMPORTED_MODULE_46__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_47__pages_tain_ticket_tain_ticket__["a" /* Tain_ticketPage */],
                __WEBPACK_IMPORTED_MODULE_48__pages_train_info_train_info__["a" /* Train_infoPage */],
                __WEBPACK_IMPORTED_MODULE_49__pages_train_result_train_result__["a" /* Train_resultPage */],
                __WEBPACK_IMPORTED_MODULE_50__pages_verification_code_verification_code__["a" /* Verification_codePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_51__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_52__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_translate_core__ = __webpack_require__(240);
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
    function MyApp(platform, statusBar, splashScreen, translate) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.translate = translate;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.translate.setDefaultLang('en');
            _this.translate.use('en');
        });
    };
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"E:\server\htdocs\ionic\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"E:\server\htdocs\ionic\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__node_modules_ngx_translate_core__["c" /* TranslateService */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[253]);
//# sourceMappingURL=main.js.map