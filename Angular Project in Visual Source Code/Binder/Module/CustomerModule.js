"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var forms_2 = require("@angular/forms");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var CustomerComponent_1 = require("../Component/CustomerComponent");
var SupplierComponent_1 = require("../Component/SupplierComponent");
var WelcomeComponent_1 = require("../Component/WelcomeComponent");
var MasterPageComponent_1 = require("../Component/MasterPageComponent");
var GridComponent_1 = require("../Component/GridComponent");
var FactoryCustomer_1 = require("../../service/FactoryCustomer");
var AppRouting_1 = require("./AppRouting");
var CustomerModule = (function () {
    function CustomerModule() {
    }
    return CustomerModule;
}());
CustomerModule = __decorate([
    core_1.NgModule({
        providers: [FactoryCustomer_1.FactoryCustomer],
        imports: [router_1.RouterModule.forRoot(AppRouting_1.ApplicationRoutes), platform_browser_1.BrowserModule, forms_1.FormsModule, forms_2.ReactiveFormsModule, http_1.HttpModule],
        declarations: [CustomerComponent_1.CustomerComponent, GridComponent_1.GridComponent, SupplierComponent_1.SupplierComponent, WelcomeComponent_1.WelcomeComponent, MasterPageComponent_1.MasterPageComponent],
        bootstrap: [MasterPageComponent_1.MasterPageComponent]
    })
], CustomerModule);
exports.CustomerModule = CustomerModule;
//# sourceMappingURL=CustomerModule.js.map