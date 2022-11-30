"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_register_register_module_ts"],{

/***/ 1557:
/*!***********************************************************!*\
  !*** ./src/app/pages/register/register-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": () => (/* binding */ RegisterPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 6690);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 207:
/*!***************************************************!*\
  !*** ./src/app/pages/register/register.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": () => (/* binding */ RegisterPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 1557);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 6690);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 6690:
/*!*************************************************!*\
  !*** ./src/app/pages/register/register.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": () => (/* binding */ RegisterPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page.html?ngResource */ 6325);
/* harmony import */ var _register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss?ngResource */ 7863);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);




 // npm i @ionic/storage-angular

let RegisterPage = class RegisterPage {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
        this.user = {
            id: this.idGenerator().toString(),
            username: '',
            password: '',
            email: '',
            type: 'user'
        };
        this.classes = {
            userId: '',
            classes: []
        };
    }
    ngOnInit() {
    }
    idGenerator() {
        return Math.floor(Math.random() * 1000000000);
    }
    onSubmit() {
        this.guardar();
    }
    guardar() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            // we check if the user exists
            const usr = yield this.storage.get(this.user.username);
            // if its null (not exist) we create a new one
            if (usr == null) {
                console.log('Usuario registrado');
                this.classes.userId = this.user.id;
                yield this.storage.set(this.user.username, this.user);
                yield this.storage.set(this.classes.userId, this.classes);
                this.router.navigate(['/']);
            }
            else {
                // else we dont do nothing
                console.log('Usuario ya existe');
            }
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-register',
        template: _register_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_register_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], RegisterPage);



/***/ }),

/***/ 7863:
/*!**************************************************************!*\
  !*** ./src/app/pages/register/register.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "#teacherForm {\n  display: flex;\n  flex-direction: column;\n}\n\n.backgroundButton {\n  padding: 0 0;\n  margin-top: 5vh !important;\n  margin-bottom: 5vh !important;\n  border: 2px solid #E5E9F0;\n  margin: 0 auto;\n  width: 70%;\n  height: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.teachers {\n  border-radius: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50%;\n  height: 100%;\n  text-align: center;\n}\n\n.students {\n  border-radius: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50%;\n  height: 100%;\n  color: #1E1E1E;\n  background-color: #E5E9F0;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksWUFBQTtFQUNBLDBCQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBQ0E7RUFDSSxvQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsVUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtBQUVKOztBQUNBO0VBQ0ksb0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7QUFFSiIsImZpbGUiOiJyZWdpc3Rlci5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjdGVhY2hlckZvcm0ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLmJhY2tncm91bmRCdXR0b24ge1xuICAgIHBhZGRpbmc6IDAgMDtcbiAgICBtYXJnaW4tdG9wOiA1dmggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiA1dmggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRTVFOUYwO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRlYWNoZXJzIHtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uc3R1ZGVudHMge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjb2xvcjogIzFFMUUxRTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFOUYwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";

/***/ }),

/***/ 6325:
/*!**************************************************************!*\
  !*** ./src/app/pages/register/register.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button defaultHref=\"/\"></ion-back-button>\n    </ion-buttons>\n    <ion-title>Register</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"backgroundButton\">\n    QrAttendance\n  </div>\n  <form id=\"teacherForm\" #form=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n    <ion-item>\n      <ion-label position=\"floating\">Usuario</ion-label>\n      <ion-input required type=\"text\" name=\"usrname\" [(ngModel)]=\"user.username\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Password</ion-label>\n      <ion-input required type=\"password\" name=\"pass\" [(ngModel)]=\"user.password\" ></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label position=\"floating\">Correo</ion-label>\n      <ion-input type=\"email\" name=\"mail\" [(ngModel)]=\"user.email\" required></ion-input>\n    </ion-item>\n    <ion-button expand=\"full\"\n     type=\"submit\" [disabled]=\"form.invalid\" class=\"ion-margin-top\">\n      Create Account\n    </ion-button>\n  </form>\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_register_register_module_ts.js.map