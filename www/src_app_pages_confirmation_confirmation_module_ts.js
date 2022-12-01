"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_confirmation_confirmation_module_ts"],{

/***/ 2636:
/*!*******************************************************************!*\
  !*** ./src/app/pages/confirmation/confirmation-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationPageRoutingModule": () => (/* binding */ ConfirmationPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _confirmation_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmation.page */ 2999);




const routes = [
    {
        path: '',
        component: _confirmation_page__WEBPACK_IMPORTED_MODULE_0__.ConfirmationPage
    }
];
let ConfirmationPageRoutingModule = class ConfirmationPageRoutingModule {
};
ConfirmationPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConfirmationPageRoutingModule);



/***/ }),

/***/ 4561:
/*!***********************************************************!*\
  !*** ./src/app/pages/confirmation/confirmation.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationPageModule": () => (/* binding */ ConfirmationPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _confirmation_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmation-routing.module */ 2636);
/* harmony import */ var _confirmation_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmation.page */ 2999);







let ConfirmationPageModule = class ConfirmationPageModule {
};
ConfirmationPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _confirmation_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConfirmationPageRoutingModule
        ],
        declarations: [_confirmation_page__WEBPACK_IMPORTED_MODULE_1__.ConfirmationPage]
    })
], ConfirmationPageModule);



/***/ }),

/***/ 2999:
/*!*********************************************************!*\
  !*** ./src/app/pages/confirmation/confirmation.page.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmationPage": () => (/* binding */ ConfirmationPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _confirmation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./confirmation.page.html?ngResource */ 6528);
/* harmony import */ var _confirmation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./confirmation.page.scss?ngResource */ 6108);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 3819);





 // npm i @ionic/storage-angular


let ConfirmationPage = class ConfirmationPage {
    constructor(storage, router, _route, nav) {
        this.storage = storage;
        this.router = router;
        this._route = _route;
        this.nav = nav;
        this.sesionP = {
            type: 'session',
            name: '',
            id: ''
        };
        this.classesH = {
            userId: '',
            classes: []
        };
        this.clase = {
            clase: '',
            classCount: 0,
            identity: '' // puede ser una fecha o un nombre de la clase
        };
        this.class = {
            title: '',
            classCount: 0,
            assistedClasses: [],
            type: 'class',
        };
        this.classesList = [];
        // Acá guardo los datos que envié desde ScanQR
        this._route.queryParams.subscribe(params => {
            this.clase.clase = params.clase;
            this.clase.classCount = params.classCount;
            this.clase.identity = params.identity;
        });
    }
    ngOnInit() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            yield this.loadSesion();
            this.classesH = yield this.storage.get(this.sesionP.id);
            console.log(this.classesH.userId);
        });
    }
    // !FIJATE AWEONAO: esto se aplica solo despues de que se presione el "aceptar"
    detalles() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            let classExists = false;
            let dateExists = false;
            for (let j = 0; j < this.classesH.classes.length; j++) {
                let element = this.classesH.classes[j];
                if (element.title == this.clase.clase) {
                    classExists = true; // esta clase ya existe
                    for (let i = 0; i < element.assistedClasses.length; i++) {
                        if (element.assistedClasses[i] == this.clase.identity) {
                            dateExists = true; // se ha agregado la fecha nueva
                            break;
                        }
                        else {
                            dateExists = false; // esta fecha ya existe en tu lista
                            break;
                        }
                    }
                    break;
                }
                else {
                    classExists = false; // esta clase no existe, crearemos clase y fecha
                    dateExists = false;
                }
            }
            if (classExists) {
                if (!dateExists) {
                    this.classesH.classes.forEach(element => {
                        if (element.title == this.clase.clase) {
                            element.assistedClasses.push(this.clase.identity);
                            console.log('agregamos un identity');
                        }
                    });
                }
                else {
                    // show error message
                    console.log('la clase ya existe tontito');
                }
            }
            else if (!classExists) {
                console.log('esta clase no existe');
                this.class.classCount = this.clase.classCount;
                this.class.title = this.clase.clase;
                this.class.assistedClasses.push(this.clase.identity);
                this.classesH.classes.push(this.class);
            }
            yield this.storage.set(this.sesionP.id, this.classesH);
            console.log('elemento agregado');
        });
    }
    idGenerator() {
        return Math.floor(Math.random() * 1000000000);
    }
    loadSesion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.sesionP = yield this.storage.get('session');
            this.usernameP = this.sesionP.name;
            console.log(this.sesionP.id);
        });
    }
};
ConfirmationPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.NavController }
];
ConfirmationPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-confirmation',
        template: _confirmation_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_confirmation_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConfirmationPage);



/***/ }),

/***/ 6108:
/*!**********************************************************************!*\
  !*** ./src/app/pages/confirmation/confirmation.page.scss?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = ".login {\n  --background: #E5E9F0;\n  --color: #1E1E1E;\n}\n\n.cancel {\n  margin: 10%;\n  --background: #D23D4C;\n  --color: #1E1E1E;\n}\n\n.title {\n  margin-bottom: 10%;\n}\n\n.attendance {\n  margin-bottom: 40%;\n}\n\n.general {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.button {\n  margin: 0 auto;\n  width: 80%;\n  margin-top: 3vh;\n}\n\nh6 {\n  color: #888D99;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm1hdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0FBQ0o7O0FBR0E7RUFDSSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtBQUFKOztBQUlBO0VBQ0ksa0JBQUE7QUFESjs7QUFJQTtFQUNJLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0ksY0FBQTtBQURKIiwiZmlsZSI6ImNvbmZpcm1hdGlvbi5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW57XHJcbiAgICAtLWJhY2tncm91bmQ6ICNFNUU5RjA7XHJcbiAgICAtLWNvbG9yOiAjMUUxRTFFO1xyXG4gICAgXHJcbn1cclxuXHJcbi5jYW5jZWx7XHJcbiAgICBtYXJnaW46IDEwJTtcclxuICAgIC0tYmFja2dyb3VuZDogI0QyM0Q0QztcclxuICAgIC0tY29sb3I6ICMxRTFFMUU7XHJcbn1cclxuXHJcblxyXG4udGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTAlO1xyXG59XHJcblxyXG4uYXR0ZW5kYW5jZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0MCU7XHJcbn1cclxuXHJcbi5nZW5lcmFsIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgbWFyZ2luLXRvcDogM3ZoO1xyXG59XHJcblxyXG5oNntcclxuICAgIGNvbG9yOiAjODg4RDk5O1xyXG59Il19 */";

/***/ }),

/***/ 6528:
/*!**********************************************************************!*\
  !*** ./src/app/pages/confirmation/confirmation.page.html?ngResource ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\r\n  <div class=\"general\">\r\n    <div class=\"title\">\r\n      <ion-text class=\"ion-text-center\"> \r\n        <h3>{{clase.clase}}</h3>\r\n        <h6>{{clase.identity}}</h6>\r\n      </ion-text>\r\n    </div>\r\n    \r\n    <div class=\"button\">\r\n      <ion-button routerLink=\"/homestudent\" expand=\"block\" class=\"login\" (click)=\"detalles()\">Confirm</ion-button>\r\n      <ion-button routerLink=\"/homestudent\" expand=\"block\" class=\"cancel\">Cancel</ion-button>\r\n    </div>\r\n  </div>  \r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_confirmation_confirmation_module_ts.js.map