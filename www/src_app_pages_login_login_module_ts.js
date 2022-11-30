"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_login_login_module_ts"],{

/***/ 3403:
/*!*****************************************************!*\
  !*** ./src/app/pages/login/login-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageRoutingModule": () => (/* binding */ LoginPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page */ 3058);




const routes = [
    {
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
    }
];
let LoginPageRoutingModule = class LoginPageRoutingModule {
};
LoginPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], LoginPageRoutingModule);



/***/ }),

/***/ 1053:
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPageModule": () => (/* binding */ LoginPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 3403);
/* harmony import */ var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page */ 3058);







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule
        ],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
    })
], LoginPageModule);



/***/ }),

/***/ 3058:
/*!*******************************************!*\
  !*** ./src/app/pages/login/login.page.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginPage": () => (/* binding */ LoginPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.page.html?ngResource */ 6752);
/* harmony import */ var _login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.page.scss?ngResource */ 8433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../guards/auth.guard */ 6982);







let LoginPage = class LoginPage {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
        this.registrado = null;
        this.user = {
            id: '',
            username: '',
            password: '',
            email: '',
            type: ''
        };
        this.opennedSesion = null;
        this.sesion = {
            type: 'session',
            name: '',
            id: ''
        };
    }
    ngOnInit() {
    }
    onSubmit() {
        console.log(this.user);
        this.logear();
    }
    deleteElement(element) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.storage.remove(element);
        });
    }
    logear() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.registrado = yield this.storage.get(this.user.username);
            if (this.registrado != null) {
                this.sesion.name = this.user.username;
                this.sesion.id = this.registrado.id;
                this.opennedSesion = yield this.storage.get(this.sesion.type);
                if (this.opennedSesion == null) {
                    // creamos una sesion
                    yield this.storage.set(this.sesion.type, this.sesion);
                }
                else {
                    this.storage.forEach(element => {
                        if (element.type === 'session') {
                            this.deleteElement(element);
                        }
                    });
                    yield this.storage.set(this.sesion.type, this.sesion);
                }
                if (this.user.username === this.registrado.username && this.user.password === this.registrado.password) {
                    // abrir pagina estudiante
                    _guards_auth_guard__WEBPACK_IMPORTED_MODULE_2__.AuthGuard.itsCorrect = true;
                    this.router.navigate(['/homestudent']);
                }
                else {
                    console.log('Usuario no existe!!!');
                }
            }
            else {
                console.log('Pa la casa por agilao');
            }
        });
    }
};
LoginPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
LoginPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _login_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_login_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginPage);



/***/ }),

/***/ 6982:
/*!**********************************!*\
  !*** ./src/guards/auth.guard.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ 2816);



let AuthGuard = class AuthGuard {
    constructor(router) {
        this.router = router;
    }
    // esta funcion nos retornara un valor dependiendo de si es o no correcto
    autorizar() {
        if (AuthGuard.itsCorrect == true) {
            return true;
        }
        else {
            return false;
            this.router.navigate(['/login']);
        }
    }
    canActivate(route, state) {
        return this.autorizar();
    }
};
// aqui comprobamos el inicio de sesion
AuthGuard.itsCorrect = false;
AuthGuard.username = '';
AuthGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 8433:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.scss?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = ".backgroundButton {\n  padding: 0 0;\n  margin-top: 5vh !important;\n  margin-bottom: 5vh !important;\n  border: 2px solid #E5E9F0;\n  margin: 0 auto;\n  width: 70%;\n  height: 10%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.teacher {\n  border-radius: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50%;\n  height: 100%;\n  text-align: center;\n}\n\n.student {\n  border-radius: 100px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 50%;\n  height: 100%;\n  color: #1E1E1E;\n  background-color: #E5E9F0;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSwwQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmRCdXR0b24ge1xuICAgIHBhZGRpbmc6IDAgMDtcbiAgICBtYXJnaW4tdG9wOiA1dmggIWltcG9ydGFudDtcbiAgICBtYXJnaW4tYm90dG9tOiA1dmggIWltcG9ydGFudDtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjRTVFOUYwO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgaGVpZ2h0OiAxMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4udGVhY2hlciB7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN0dWRlbnQge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB3aWR0aDogNTAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBjb2xvcjogIzFFMUUxRTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTVFOUYwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */";

/***/ }),

/***/ 6752:
/*!********************************************************!*\
  !*** ./src/app/pages/login/login.page.html?ngResource ***!
  \********************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Login</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"backgroundButton\">\n    QrAttendance\n  </div>\n  <div class=\"general\">\n    <form #miformulario=\"ngForm\" (ngSubmit)=\"onSubmit()\" >\n      <div class=\"inputs\">\n        <ion-item>\n          <ion-label  position=\"floating\">Usuario</ion-label>\n          <ion-input required name=\"username\" [(ngModel)]=\"user.username\"></ion-input>\n        </ion-item>\n\n        <ion-item>\n          <ion-label position=\"floating\">Password</ion-label>\n          <ion-input type=\"password\" required name=\"password\"  [(ngModel)]=\"user.password\"></ion-input>\n        </ion-item>\n      </div>  \n      <ion-button expand=\"block\" class=\"ion-margin-top\" type=\"submit\" class=\"login\"  [disabled]=\"miformulario.invalid\">\n        Iniciar sesion\n      </ion-button>\n      <ion-button routerLink=\"/passrecovery\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        Recuperar contraseña\n      </ion-button>\n      <ion-button routerLink=\"/register\" expand=\"block\" fill=\"clear\" shape=\"round\">\n        <ion-row>\n        <ion-col size=\"10\">No tienes una cuenta?</ion-col>\n        </ion-row>\n      </ion-button>\n    </form>\n  </div>  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_login_login_module_ts.js.map