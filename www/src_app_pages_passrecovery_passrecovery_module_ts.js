"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_passrecovery_passrecovery_module_ts"],{

/***/ 9444:
/*!*******************************************************************!*\
  !*** ./src/app/pages/passrecovery/passrecovery-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassrecoveryPageRoutingModule": () => (/* binding */ PassrecoveryPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _passrecovery_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passrecovery.page */ 9731);




const routes = [
    {
        path: '',
        component: _passrecovery_page__WEBPACK_IMPORTED_MODULE_0__.PassrecoveryPage
    }
];
let PassrecoveryPageRoutingModule = class PassrecoveryPageRoutingModule {
};
PassrecoveryPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], PassrecoveryPageRoutingModule);



/***/ }),

/***/ 5766:
/*!***********************************************************!*\
  !*** ./src/app/pages/passrecovery/passrecovery.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassrecoveryPageModule": () => (/* binding */ PassrecoveryPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _passrecovery_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passrecovery-routing.module */ 9444);
/* harmony import */ var _passrecovery_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passrecovery.page */ 9731);







let PassrecoveryPageModule = class PassrecoveryPageModule {
};
PassrecoveryPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _passrecovery_routing_module__WEBPACK_IMPORTED_MODULE_0__.PassrecoveryPageRoutingModule
        ],
        declarations: [_passrecovery_page__WEBPACK_IMPORTED_MODULE_1__.PassrecoveryPage]
    })
], PassrecoveryPageModule);



/***/ }),

/***/ 9731:
/*!*********************************************************!*\
  !*** ./src/app/pages/passrecovery/passrecovery.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassrecoveryPage": () => (/* binding */ PassrecoveryPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _passrecovery_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./passrecovery.page.html?ngResource */ 6193);
/* harmony import */ var _passrecovery_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./passrecovery.page.scss?ngResource */ 1625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage-angular */ 190);








let PassrecoveryPage = class PassrecoveryPage {
    // eslint-disable-next-line max-len
    constructor(storage, router, loadingCtrl, alertController) {
        this.storage = storage;
        this.router = router;
        this.loadingCtrl = loadingCtrl;
        this.alertController = alertController;
        this.usuario = {
            username: '',
            password: '',
            email: '',
            id: '',
            type: ''
        };
    }
    showLoading() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: 'Se ha modificado la contraseña exitosamente',
                duration: 1000,
            });
            loading.present();
        });
    }
    ngOnInit() {
    }
    obtener() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const usr = yield this.storage.get(this.usuario.username);
            if (this.usuario.username === usr.username && this.usuario.email === usr.email) {
                yield this.storage.set(this.usuario.username, usr);
                this.showLoading();
                this.router.navigate(['/login']);
            }
            else {
                this.presentAlert();
                console.log('Denegado');
            }
        });
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Acceso Denegado',
                subHeader: '',
                message: 'Usuario o Correo incorrecto',
                buttons: [
                    {
                        text: 'Cancelar',
                        role: 'cancel',
                        handler: () => {
                            console.log('Alert canceled');
                        },
                    },
                    {
                        text: 'Aceptar',
                        role: 'confirm',
                        handler: () => {
                            console.log('Alert confirmed');
                        },
                    },
                ],
                mode: 'ios',
                backdropDismiss: false,
                cssClass: 'miclase',
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            console.log(`Dismissed with role: ${role}`);
        });
    }
    onSubmit() {
        this.obtener();
    }
};
PassrecoveryPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.LoadingController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.AlertController }
];
PassrecoveryPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-passrecovery',
        template: _passrecovery_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_passrecovery_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PassrecoveryPage);



/***/ }),

/***/ 1625:
/*!**********************************************************************!*\
  !*** ./src/app/pages/passrecovery/passrecovery.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".inputs {\n  margin-top: 10vh;\n  margin-bottom: 40vh;\n}\n\n.login {\n  --background: #E5E9F0;\n  --color: #1E1E1E;\n}\n\n.button {\n  margin: 0 auto;\n  width: 80%;\n  height: 7vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3NyZWNvdmVyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBRUE7RUFDSSxjQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUFDSiIsImZpbGUiOiJwYXNzcmVjb3ZlcnkucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0cyB7XG4gICAgbWFyZ2luLXRvcDogMTB2aDtcbiAgICBtYXJnaW4tYm90dG9tOiA0MHZoO1xufVxuXG4ubG9naW57XG4gICAgLS1iYWNrZ3JvdW5kOiAjRTVFOUYwO1xuICAgIC0tY29sb3I6ICMxRTFFMUU7XG59XG5cbi5idXR0b24ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHdpZHRoOiA4MCU7XG4gICAgaGVpZ2h0OiA3dmg7XG59Il19 */";

/***/ }),

/***/ 6193:
/*!**********************************************************************!*\
  !*** ./src/app/pages/passrecovery/passrecovery.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Recuperar contraseña</ion-title>\n    <ion-buttons slot=\"start\">\n      \n      <ion-back-button defaultHref=\"login\"><ion-icon slot=\"start\" name=\"exit\"></ion-icon></ion-back-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-text class=\"ion-text-center ion-text-capitalize\">\n    <h1 class=\"\">Cambiar Contraseña</h1>\n  </ion-text>\n  <form #frm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\n    <ion-item>\n      <ion-label position=\"floating\">Usuario</ion-label>\n      <ion-input required type=\"text\" name=\"username\" [(ngModel)]=\"usuario.username\" clearInput></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label position=\"floating\">Correo</ion-label>\n      <ion-input required type=\"text\" name=\"Correo\" [(ngModel)]=\"usuario.email\"  clearInput></ion-input>\n    </ion-item>\n    \n    <ion-item >\n      <ion-label position=\"floating\">Nueva Password</ion-label>\n      <ion-input required type=\"password\" name=\"pass\" [(ngModel)]=\"usuario.password\"></ion-input>\n    </ion-item>\n\n    <ion-button  expand=\"block\" color=\"primary\" type=\"submit\" [disabled]=\"frm.invalid\" >\n      Cambiar Contraseña\n    </ion-button>\n  </form>\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_passrecovery_passrecovery_module_ts.js.map