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
var http_1 = require('@angular/http');
var Customer_1 = require("../../Model/Customer");
var CustomerComponent = (function () {
    function CustomerComponent(_http) {
        //current customer objct
        this.currentCustomer = new Customer_1.Customer();
        //customer collection
        this.customers = new Array();
        this.httpService = _http;
        this.currentCustomer.CustomerId = "C1001";
        this.currentCustomer.CustomerName = "bhavana";
        this.currentCustomer.CustomerAmount = 5000;
    }
    //add current customer to collection
    CustomerComponent.prototype.Add = function () {
        //add customer to collection
        this.customers.push(this.currentCustomer);
        //create new fresh collection
        this.customers = this.customers.slice();
        //clear textboxed
        this.currentCustomer = new Customer_1.Customer();
    };
    CustomerComponent.prototype.Select = function (selectedCustomer) {
        // this.currentCustomer = selectedCustomer;
        //clone
        this.currentCustomer = Object.assign({}, selectedCustomer);
    };
    CustomerComponent.prototype.Update = function () {
        for (var _i = 0, _a = this.customers; _i < _a.length; _i++) {
            var customer = _a[_i];
            if (this.currentCustomer.CustomerId == customer.CustomerId) {
                customer.CustomerName = this.currentCustomer.CustomerName;
                customer.CustomerAmount = this.currentCustomer.CustomerAmount;
            }
        }
        //clear all textbox
        this.currentCustomer = new Customer_1.Customer();
    };
    CustomerComponent.prototype.Clear = function () {
        this.currentCustomer = new Customer_1.Customer();
    };
    CustomerComponent.prototype.Submit = function () {
        var _this = this;
        var customerCollection = [];
        //take necessary data from customers array, as we do not want to pass validation form group which is the part of customers array
        for (var _i = 0, _a = this.customers; _i < _a.length; _i++) {
            var item = _a[_i];
            var custObj = {};
            custObj.CustomerId = item.CustomerId;
            custObj.CustomerName = item.CustomerName;
            custObj.CustomerAmount = item.CustomerAmount;
            customerCollection.push(custObj);
        }
        //convert data into JSON string
        var data = JSON.stringify(customerCollection);
        //prepare headers
        var headers = new http_1.Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var options = new http_1.RequestOptions({ headers: headers });
        //make Http POST
        var observable = this.httpService.post("http://localhost:49722/api/Customer", data, options); //this call is async call with the help of rxjs
        observable.subscribe(function (result) { return _this.SuccessData(result); }, function (err) { return _this.ErrorData(err); });
    };
    CustomerComponent.prototype.SuccessData = function (result) {
        this.customers = result.json();
    };
    CustomerComponent.prototype.ErrorData = function (err) {
        console.log(err);
    };
    CustomerComponent = __decorate([
        core_1.Component({
            selector: "customer-ui",
            templateUrl: "../../UI/Customer.html",
            styles: ['.redborder {border : 1px solid red}']
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], CustomerComponent);
    return CustomerComponent;
}());
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=CustomerComponent.js.map