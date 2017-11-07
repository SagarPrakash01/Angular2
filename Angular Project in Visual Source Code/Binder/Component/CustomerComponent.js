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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Customer_1 = require("../../Model/Customer");
var FactoryCustomer_1 = require("../../service/FactoryCustomer");
var http_1 = require("@angular/http");
require("rxjs/Rx");
var CustomerComponent = (function () {
    function CustomerComponent(_factory, _http) {
        this.http = null;
        this.customerType = "Customer";
        this.customerObj = null;
        this.factoryCustomer = null;
        this.customers = new Array();
        this.factoryCustomer = _factory;
        this.http = _http;
        this.customerObj = this.factoryCustomer.Create("Customer");
        this.customerObj.CustomerType = "Customer";
    }
    ;
    CustomerComponent.prototype.onCustomerTypeChange = function (_typeofcustomer) {
        this.customerType = _typeofcustomer;
        this.customerObj = this.factoryCustomer.Create(this.customerType);
    };
    CustomerComponent.prototype.Add = function () {
        this.customerObj.CustomerType = this.customerType;
        this.customers.push(this.customerObj);
        //new fresh address to reference
        this.customers = this.customers.slice();
        //clear the textbox
        this.customerObj = new Customer_1.Customer();
    };
    CustomerComponent.prototype.Select = function (selectedCustomer) {
        //this.customerObj = Object.assign({}, selectedCustomer);
        this.customerObj = this.factoryCustomer.Create(this.customerType);
        this.customerObj.CustomerId = selectedCustomer.CustomerId;
        this.customerObj.CustomerName = selectedCustomer.CustomerName;
        this.customerObj.CustomerAmount = selectedCustomer.CustomerAmount;
        this.customerObj.CustomerType = selectedCustomer.CustomerType;
    };
    CustomerComponent.prototype.Update = function () {
        for (var _i = 0, _a = this.customers; _i < _a.length; _i++) {
            var customer = _a[_i];
            if (customer.CustomerId == this.customerObj.CustomerId) {
                customer.CustomerName = this.customerObj.CustomerName;
                customer.CustomerAmount = this.customerObj.CustomerAmount;
            }
        }
        //clear textbox
        this.customerObj = new Customer_1.Customer();
    };
    CustomerComponent.prototype.Clear = function () {
        this.customerObj = new Customer_1.Customer();
    };
    CustomerComponent.prototype.submit = function () {
        var _this = this;
        var headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new http_1.RequestOptions({
            headers: headers
        });
        var observable = this.http.get("http://localhost:8080/Binder/Component/data.json", options);
        observable.subscribe(function (res) { return _this.Success(res); }, function (res) { return _this.Error(res); });
    };
    CustomerComponent.prototype.Success = function (datas) {
        this.customers = JSON.parse(datas._body);
    };
    CustomerComponent.prototype.Error = function (err) {
        console.log(err);
    };
    return CustomerComponent;
}());
CustomerComponent = __decorate([
    core_1.Component({
        templateUrl: "../../UI/Customer.html",
        styles: ['.redborder {border : 1px solid red }']
    }),
    __metadata("design:paramtypes", [FactoryCustomer_1.FactoryCustomer, http_1.Http])
], CustomerComponent);
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=CustomerComponent.js.map