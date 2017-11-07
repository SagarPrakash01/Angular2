"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var CustomerComponent_1 = require("../Component/CustomerComponent");
var GridComponent_1 = require("../Component/GridComponent");
var MasterPageComponent_1 = require("../Component/MasterPageComponent");
var SupplierComponent_1 = require("../Component/SupplierComponent");
var WelcomeComponent_1 = require("../Component/WelcomeComponent");
var AppRouting_1 = require("./AppRouting");
var MainModuleModule = (function () {
    function MainModuleModule() {
    }
    MainModuleModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, router_1.RouterModule.forRoot(AppRouting_1.ApplicationRoutes)],
            declarations: [MasterPageComponent_1.MasterPageComponent, CustomerComponent_1.CustomerComponent, GridComponent_1.GridComponent, SupplierComponent_1.SupplierComponent, WelcomeComponent_1.WelcomeComponent],
            bootstrap: [MasterPageComponent_1.MasterPageComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], MainModuleModule);
    return MainModuleModule;
}());
exports.MainModuleModule = MainModuleModule;
//# sourceMappingURL=MainModule.js.map