"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_start_start_module_ts"],{

/***/ 8059:
/*!*****************************************************!*\
  !*** ./src/app/pages/start/start-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPageRoutingModule": () => (/* binding */ StartPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start.page */ 2723);




const routes = [
    {
        path: '',
        component: _start_page__WEBPACK_IMPORTED_MODULE_0__.StartPage
    }
];
let StartPageRoutingModule = class StartPageRoutingModule {
};
StartPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], StartPageRoutingModule);



/***/ }),

/***/ 9243:
/*!*********************************************!*\
  !*** ./src/app/pages/start/start.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPageModule": () => (/* binding */ StartPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _start_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start-routing.module */ 8059);
/* harmony import */ var _start_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start.page */ 2723);







let StartPageModule = class StartPageModule {
};
StartPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _start_routing_module__WEBPACK_IMPORTED_MODULE_0__.StartPageRoutingModule
        ],
        declarations: [_start_page__WEBPACK_IMPORTED_MODULE_1__.StartPage]
    })
], StartPageModule);



/***/ }),

/***/ 2723:
/*!*******************************************!*\
  !*** ./src/app/pages/start/start.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StartPage": () => (/* binding */ StartPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _start_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./start.page.html?ngResource */ 8197);
/* harmony import */ var _start_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./start.page.scss?ngResource */ 9269);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let StartPage = class StartPage {
    constructor() { }
    ngOnInit() {
    }
};
StartPage.ctorParameters = () => [];
StartPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-start',
        template: _start_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_start_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], StartPage);



/***/ }),

/***/ 9269:
/*!********************************************************!*\
  !*** ./src/app/pages/start/start.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".login {\n  --background: #E5E9F0;\n  --color: #1E1E1E;\n}\n\n.general {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\nh1 {\n  margin-bottom: 10%;\n  margin-top: 30%;\n}\n\nh6 {\n  margin-bottom: 90%;\n}\n\n.button {\n  margin: 0 auto;\n  width: 80%;\n  height: 25%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0YXJ0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoic3RhcnQucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxvZ2lue1xuICAgIC0tYmFja2dyb3VuZDogI0U1RTlGMDtcbiAgICAtLWNvbG9yOiAjMUUxRTFFO1xufVxuXG4uZ2VuZXJhbCB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuaDF7XG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xuICAgIG1hcmdpbi10b3A6IDMwJTtcbn1cblxuaDZ7XG4gICAgbWFyZ2luLWJvdHRvbTogOTAlO1xufVxuXG4uYnV0dG9uIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICB3aWR0aDogODAlO1xuICAgIGhlaWdodDogMjUlO1xufVxuIl19 */";

/***/ }),

/***/ 8197:
/*!********************************************************!*\
  !*** ./src/app/pages/start/start.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n  <div class=\"general\">\n    <ion-text class=\"ion-text-center\"> \n      <h1>QrAttendance</h1>\n      <h6>Your digital way to get attendance</h6>\n    </ion-text>\n    <div class=\"button\">\n     <ion-button routerLink=\"/login\" expand=\"block\" class=\"login\">Next</ion-button>\n    </div>\n  </div>  \n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_start_start_module_ts.js.map