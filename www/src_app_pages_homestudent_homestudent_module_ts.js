"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_homestudent_homestudent_module_ts"],{

/***/ 5976:
/*!*****************************************************************!*\
  !*** ./src/app/pages/homestudent/homestudent-routing.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomestudentPageRoutingModule": () => (/* binding */ HomestudentPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _homestudent_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homestudent.page */ 5046);




const routes = [
    {
        path: '',
        component: _homestudent_page__WEBPACK_IMPORTED_MODULE_0__.HomestudentPage
    }
];
let HomestudentPageRoutingModule = class HomestudentPageRoutingModule {
};
HomestudentPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], HomestudentPageRoutingModule);



/***/ }),

/***/ 201:
/*!*********************************************************!*\
  !*** ./src/app/pages/homestudent/homestudent.module.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomestudentPageModule": () => (/* binding */ HomestudentPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _homestudent_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homestudent-routing.module */ 5976);
/* harmony import */ var _homestudent_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homestudent.page */ 5046);







let HomestudentPageModule = class HomestudentPageModule {
};
HomestudentPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _homestudent_routing_module__WEBPACK_IMPORTED_MODULE_0__.HomestudentPageRoutingModule
        ],
        declarations: [_homestudent_page__WEBPACK_IMPORTED_MODULE_1__.HomestudentPage]
    })
], HomestudentPageModule);



/***/ }),

/***/ 5046:
/*!*******************************************************!*\
  !*** ./src/app/pages/homestudent/homestudent.page.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomestudentPage": () => (/* binding */ HomestudentPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _homestudent_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homestudent.page.html?ngResource */ 1580);
/* harmony import */ var _homestudent_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./homestudent.page.scss?ngResource */ 5182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);




 // npm i @ionic/storage-angular

let HomestudentPage = class HomestudentPage {
    constructor(storage, router) {
        this.storage = storage;
        this.router = router;
        this.sesionS = {
            type: 'session',
            name: '',
            id: ''
        };
        this.class = {
            title: 'Arquitectura de software',
            classCount: 4,
            assistedClasses: ['29/11/2022', '30/11/2022', '3/12/2022'],
            type: 'class',
        };
        this.clasS = {
            title: 'calidad de software',
            classCount: 8,
            assistedClasses: ['11/11/2022', '12/11/2022'],
            type: 'class',
        };
        this.classesList = [];
    }
    ngOnInit() {
        this.loadSesion();
        // this.createClass();
    }
    createClass() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            // traigo la lista de clases del usuario y la aplico
            //await this.storage.set(this.class.id, this.class);
        });
    }
    idGenerator() {
        return Math.floor(Math.random() * 1000000000);
    }
    loadSesion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            this.sesionS = yield this.storage.get(this.sesionS.type);
            this.usernameS = this.sesionS.name;
            // this.loadClasses()
        });
    }
    loadClasses() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__awaiter)(this, void 0, void 0, function* () {
            const classesG = yield this.storage.get(this.sesionS.id);
            if (classesG != null) {
                classesG.classes.push(this.class);
                classesG.classes.push(this.clasS);
                yield this.storage.set(this.sesionS.id, classesG);
            }
        });
    }
};
HomestudentPage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_3__.Storage },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
HomestudentPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-homestudent',
        template: _homestudent_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_homestudent_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomestudentPage);



/***/ }),

/***/ 5182:
/*!********************************************************************!*\
  !*** ./src/app/pages/homestudent/homestudent.page.scss?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = ".login {\n  --background: #E5E9F0;\n  --color: #1E1E1E;\n  height: 4vh !important;\n}\n\n.classItem {\n  margin: 2vh;\n  display: flex;\n  align-items: center;\n  padding: 0 0;\n  height: 1vh !important;\n  padding-left: 5vw;\n}\n\n.seemore {\n  margin-top: 5vh !important;\n  --background: #E5E9F0;\n  --color: #1E1E1E;\n  width: 40% !important;\n  height: 4vh !important;\n}\n\n#title {\n  margin-bottom: 4vh;\n}\n\n.title {\n  margin-bottom: 20%;\n}\n\n.attendance {\n  margin-bottom: 30%;\n}\n\n.general {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n}\n\n.button {\n  margin: 0 auto;\n  width: 80%;\n  height: 25%;\n}\n\n.inputs {\n  margin-top: -40%;\n  height: 90%;\n  margin-bottom: 50%;\n}\n\np {\n  color: #888D99;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWVzdHVkZW50LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSwwQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksZ0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSiIsImZpbGUiOiJob21lc3R1ZGVudC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubG9naW57XHJcbiAgICAtLWJhY2tncm91bmQ6ICNFNUU5RjA7XHJcbiAgICAtLWNvbG9yOiAjMUUxRTFFO1xyXG4gICAgaGVpZ2h0OiA0dmggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmNsYXNzSXRlbSB7XHJcbiAgICBtYXJnaW46IDJ2aDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcGFkZGluZzogMCAwO1xyXG4gICAgaGVpZ2h0OiAxdmggIWltcG9ydGFudDtcclxuICAgIHBhZGRpbmctbGVmdDogNXZ3O1xyXG59XHJcblxyXG4uc2VlbW9yZSB7XHJcbiAgICBtYXJnaW4tdG9wOiA1dmggIWltcG9ydGFudDtcclxuICAgIC0tYmFja2dyb3VuZDogI0U1RTlGMDtcclxuICAgIC0tY29sb3I6ICMxRTFFMUU7XHJcbiAgICB3aWR0aDogNDAlICFpbXBvcnRhbnQ7XHJcbiAgICBoZWlnaHQ6IDR2aCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4jdGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHZoO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjAlO1xyXG59XHJcblxyXG4uYXR0ZW5kYW5jZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzMCU7XHJcbn1cclxuXHJcbi5nZW5lcmFsIHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgaGVpZ2h0OiAyNSU7XHJcbn1cclxuXHJcbi5pbnB1dHMge1xyXG4gICAgbWFyZ2luLXRvcDogLTQwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNTAlO1xyXG59XHJcblxyXG5we1xyXG4gICAgY29sb3I6ICM4ODhEOTk7XHJcbn0iXX0= */";

/***/ }),

/***/ 1580:
/*!********************************************************************!*\
  !*** ./src/app/pages/homestudent/homestudent.page.html?ngResource ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n  <ion-toolbar>\r\n    <ion-title>Student</ion-title>\r\n    <ion-buttons slot=\"start\">\r\n      <ion-back-button defaultHref=\"/login\"></ion-back-button>\r\n    </ion-buttons>\r\n  </ion-toolbar>\r\n</ion-header>\r\n\r\n<ion-content>\r\n  <div class=\"general\">\r\n    <div class=\"title\">\r\n      <ion-text class=\"ion-text-center\"> \r\n        <h1>Hi {{usernameS}}</h1>\r\n      </ion-text>\r\n    </div>\r\n\r\n    <div  class=\"attendance\">\r\n      <h3 id=\"title\" class=\"ion-text-center\">general attendance</h3>\r\n      <ion-button routerLink=\"/general-attendance\" expand=\"block\" class=\"seemore\"> See more</ion-button>\r\n\r\n    </div>\r\n    \r\n<!--     <div class=\"button\">\r\n     <ion-button routerLink=\"/confirmation\" expand=\"block\" class=\"login\"> Check the code</ion-button>\r\n    </div> -->\r\n    <div class=\"button\">\r\n      <ion-button routerLink=\"/scanqr\" expand=\"block\" class=\"login\"> Check the code</ion-button>\r\n     </div>\r\n\r\n  </div>  \r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_homestudent_homestudent_module_ts.js.map