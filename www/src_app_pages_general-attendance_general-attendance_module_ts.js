"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_general-attendance_general-attendance_module_ts"],{

/***/ 945:
/*!*******************************************************************************!*\
  !*** ./src/app/pages/general-attendance/general-attendance-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralAttendancePageRoutingModule": () => (/* binding */ GeneralAttendancePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _general_attendance_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general-attendance.page */ 8214);




const routes = [
    {
        path: '',
        component: _general_attendance_page__WEBPACK_IMPORTED_MODULE_0__.GeneralAttendancePage
    }
];
let GeneralAttendancePageRoutingModule = class GeneralAttendancePageRoutingModule {
};
GeneralAttendancePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], GeneralAttendancePageRoutingModule);



/***/ }),

/***/ 895:
/*!***********************************************************************!*\
  !*** ./src/app/pages/general-attendance/general-attendance.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralAttendancePageModule": () => (/* binding */ GeneralAttendancePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _general_attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general-attendance-routing.module */ 945);
/* harmony import */ var _general_attendance_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general-attendance.page */ 8214);







let GeneralAttendancePageModule = class GeneralAttendancePageModule {
};
GeneralAttendancePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _general_attendance_routing_module__WEBPACK_IMPORTED_MODULE_0__.GeneralAttendancePageRoutingModule
        ],
        declarations: [_general_attendance_page__WEBPACK_IMPORTED_MODULE_1__.GeneralAttendancePage]
    })
], GeneralAttendancePageModule);



/***/ }),

/***/ 8214:
/*!*********************************************************************!*\
  !*** ./src/app/pages/general-attendance/general-attendance.page.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GeneralAttendancePage": () => (/* binding */ GeneralAttendancePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _general_attendance_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./general-attendance.page.html?ngResource */ 7264);
/* harmony import */ var _general_attendance_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./general-attendance.page.scss?ngResource */ 643);
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/data.service */ 2468);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/storage-angular */ 190);





 // npm i @ionic/storage-angular
let GeneralAttendancePage = class GeneralAttendancePage {
    constructor(storage, dataService) {
        this.storage = storage;
        this.dataService = dataService;
        this.listData = [];
        this.classes = {
            userId: '',
            classes: []
        };
        this.sesionS = {
            type: 'session',
            name: '',
            id: ''
        };
        // this.loadData();
    }
    ngOnInit() {
        this.loadSesion();
    }
    loadSesion() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.sesionS = yield this.storage.get(this.sesionS.type);
            this.loadData();
        });
    }
    loadData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.classes = yield this.storage.get(this.sesionS.id);
            this.classes.classes.forEach(element => {
                console.log(element.title);
                this.listData.push(element);
            });
            // this.listData = await this.dataService.getdata();
        });
    }
    addData() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            yield this.dataService.addData(`simon ${Math.floor(Math.random() * 100)}`);
            //this.loadData();
        });
    }
    removeData(index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            this.dataService.remvoveItem(index);
            this.listData.splice(index, 1);
        });
    }
};
GeneralAttendancePage.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_4__.Storage },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__.DataService }
];
GeneralAttendancePage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-general-attendance',
        template: _general_attendance_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_general_attendance_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], GeneralAttendancePage);



/***/ }),

/***/ 2468:
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataService": () => (/* binding */ DataService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/storage-angular */ 190);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



const STORAGE_KEY = 'milista';
let DataService = class DataService {
    constructor(storage) {
        this.storage = storage;
    }
    init() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            console.log('INIT');
            this.storage.create();
            console.log('lito');
        });
    }
    getdata() {
        console.log('obteniendo data');
        return this.storage.get(STORAGE_KEY) || [];
    }
    addData(item) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const storedData = (yield this.storage.get(STORAGE_KEY)) || [];
            storedData.push(item);
            return this.storage.set(STORAGE_KEY, storedData);
        });
    }
    remvoveItem(index) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
            const storedData = (yield this.storage.get(STORAGE_KEY)) || [];
            storedData.splice(index, 1);
            return this.storage.set(STORAGE_KEY, storedData);
        });
    }
};
DataService.ctorParameters = () => [
    { type: _ionic_storage_angular__WEBPACK_IMPORTED_MODULE_1__.Storage }
];
DataService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Injectable)({
        providedIn: 'root'
    })
], DataService);



/***/ }),

/***/ 643:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/general-attendance/general-attendance.page.scss?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJnZW5lcmFsLWF0dGVuZGFuY2UucGFnZS5zY3NzIn0= */";

/***/ }),

/***/ 7264:
/*!**********************************************************************************!*\
  !*** ./src/app/pages/general-attendance/general-attendance.page.html?ngResource ***!
  \**********************************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\r\n    <ion-toolbar>\r\n      <ion-title>Attendance</ion-title>\r\n      <ion-buttons slot=\"start\">\r\n        <ion-back-button defaultHref=\"/homestudent\"></ion-back-button>\r\n      </ion-buttons>\r\n    </ion-toolbar>\r\n</ion-header>\r\n  \r\n<ion-content>\r\n\r\n  <ion-list>\r\n   \r\n    <ion-item-sliding *ngFor=\"let name of listData; let i = index;\">\r\n      <ion-accordion-group>\r\n        <ion-accordion>\r\n          <ion-item slot=\"header\" color=\"light\">\r\n            <ion-label>{{name.title}} ({{name.assistedClasses.length}}/{{name.classCount}})</ion-label>\r\n          </ion-item>\r\n          <div class=\"ion-padding\" slot=\"content\">\r\n            <ion-list *ngFor=\"let i of name.assistedClasses\" >\r\n              <ion-item><ion-label >{{i}} (asistida)</ion-label></ion-item>\r\n            </ion-list>\r\n            <div class=\"ion-padding\"><b>({{name.assistedClasses.length}} asistidas de {{name.classCount}} totales)</b></div>\r\n            <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"primary\" (click)=\"removeData(i)\">\r\n          <ion-icon name=\"thrash\" slot=\"icon-only\"></ion-icon>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n          </div>\r\n        </ion-accordion>\r\n      </ion-accordion-group>\r\n      <ion-item-options side=\"end\">\r\n        <ion-item-option color=\"primary\" (click)=\"removeData(i)\">\r\n          <ion-icon name=\"thrash\" slot=\"icon-only\"></ion-icon>\r\n        </ion-item-option>\r\n      </ion-item-options>\r\n    </ion-item-sliding>\r\n\r\n    </ion-list>\r\n\r\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_general-attendance_general-attendance_module_ts.js.map