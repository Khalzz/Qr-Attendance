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

module.exports = ".inputs {\n  margin-top: 10vh;\n  margin-bottom: 40vh;\n}\n\n.login {\n  --background: #E5E9F0;\n  --color: #1E1E1E;\n  margin-top: 10vh !important;\n}\n\n.button {\n  margin: 0 auto;\n  width: 80%;\n  height: 7vh;\n}\n\n.title {\n  margin-top: 10vh;\n  margin-bottom: 5vh;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3NyZWNvdmVyeS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtBQUNKIiwiZmlsZSI6InBhc3NyZWNvdmVyeS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5wdXRzIHtcclxuICAgIG1hcmdpbi10b3A6IDEwdmg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MHZoO1xyXG59XHJcblxyXG4ubG9naW57XHJcbiAgICAtLWJhY2tncm91bmQ6ICNFNUU5RjA7XHJcbiAgICAtLWNvbG9yOiAjMUUxRTFFO1xyXG4gICAgbWFyZ2luLXRvcDogMTB2aCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYnV0dG9uIHtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGhlaWdodDogN3ZoO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgbWFyZ2luLXRvcDogMTB2aDtcclxuICAgIG1hcmdpbi1ib3R0b206IDV2aDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 6193:
/*!**********************************************************************!*\
  !*** ./src/app/pages/passrecovery/passrecovery.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Recuperar contraseña</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"login\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <ion-text class=\"ion-text-center ion-text-capitalize\">\r\n    <h3 class=\"title\">Cambiar Contraseña</h3>\r\n  </ion-text>\r\n  <form #frm=\"ngForm\" (ngSubmit)=\"onSubmit()\">\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Usuario</ion-label>\r\n      <ion-input required type=\"text\" name=\"username\" [(ngModel)]=\"usuario.username\" clearInput></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-item>\r\n      <ion-label position=\"floating\">Correo</ion-label>\r\n      <ion-input required type=\"text\" name=\"Correo\" [(ngModel)]=\"usuario.email\"  clearInput></ion-input>\r\n    </ion-item>\r\n    \r\n    <ion-item >\r\n      <ion-label position=\"floating\">Nueva Password</ion-label>\r\n      <ion-input required type=\"password\" name=\"pass\" [(ngModel)]=\"usuario.password\"></ion-input>\r\n    </ion-item>\r\n\r\n    <ion-button class=\"login\"  expand=\"block\" color=\"primary\" type=\"submit\" [disabled]=\"frm.invalid\" >\r\n      Cambiar Contraseña\r\n    </ion-button>\r\n  </form>\r\n\r\n</ion-content>\r\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_passrecovery_passrecovery_module_ts.js.map