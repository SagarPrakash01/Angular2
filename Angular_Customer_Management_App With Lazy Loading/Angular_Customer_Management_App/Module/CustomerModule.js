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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var forms_2 = require("@angular/forms");
var common_1 = require("@angular/common");
var CustomerComponent_1 = require("../Component/CustomerComponent");
var GridComponent_1 = require("../Component/GridComponent");
var CustomerInfoComponent_1 = require("../Component/CustomerInfoComponent");
var ReverseStringPipe_1 = require("../Pipes/ReverseStringPipe");
var FactoryCustomer_1 = require("../Service/FactoryCustomer");
var CountryStateService_1 = require("../Service/CountryStateService");
var CustomerRoute_1 = require("../Routing/CustomerRoute");
var CustomerModule = (function () {
    function CustomerModule() {
    }
    return CustomerModule;
}());
CustomerModule = __decorate([
    core_1.NgModule({
        providers: [FactoryCustomer_1.FactoryCustomer, CountryStateService_1.CountryStateService],
        imports: [router_1.RouterModule.forChild(CustomerRoute_1.CustomerRoutes), forms_2.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, common_1.CommonModule],
        declarations: [CustomerComponent_1.CustomerComponent, GridComponent_1.GridComponent, ReverseStringPipe_1.ReverseStringPipe, CustomerInfoComponent_1.CustomerInfoComponent],
        bootstrap: [CustomerComponent_1.CustomerComponent]
    })
], CustomerModule);
exports.CustomerModule = CustomerModule;
//# sourceMappingURL=CustomerModule.js.map