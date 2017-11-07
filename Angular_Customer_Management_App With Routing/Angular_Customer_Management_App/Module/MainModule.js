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
var common_1 = require("@angular/common");
var CustomerComponent_1 = require("../Component/CustomerComponent");
var GridComponent_1 = require("../Component/GridComponent");
var ReverseStringPipe_1 = require("../Pipes/ReverseStringPipe");
var FactoryCustomer_1 = require("../Service/FactoryCustomer");
var CountryStateService_1 = require("../Service/CountryStateService");
var SupplierComponent_1 = require("../Component/SupplierComponent");
var WelcomeComponent_1 = require("../Component/WelcomeComponent");
var MasterPageComponent_1 = require("../Component/MasterPageComponent");
var CustomerInfoComponent_1 = require("../Component/CustomerInfoComponent");
var JQueryComponent_1 = require("../Component/JQueryComponent");
var MainRoute_1 = require("../Routing/MainRoute");
var MainModule = (function () {
    function MainModule() {
    }
    return MainModule;
}());
MainModule = __decorate([
    core_1.NgModule({
        providers: [FactoryCustomer_1.FactoryCustomer, CountryStateService_1.CountryStateService, { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        imports: [router_1.RouterModule.forRoot(MainRoute_1.MainApplicationRoutes), platform_browser_1.BrowserModule, forms_1.FormsModule, forms_2.ReactiveFormsModule, http_1.HttpModule],
        declarations: [CustomerComponent_1.CustomerComponent, GridComponent_1.GridComponent, ReverseStringPipe_1.ReverseStringPipe, SupplierComponent_1.SupplierComponent, WelcomeComponent_1.WelcomeComponent, MasterPageComponent_1.MasterPageComponent, CustomerInfoComponent_1.CustomerInfoComponent, JQueryComponent_1.JQueryComponent],
        bootstrap: [MasterPageComponent_1.MasterPageComponent]
    })
], MainModule);
exports.MainModule = MainModule;
//# sourceMappingURL=MainModule.js.map