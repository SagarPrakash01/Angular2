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
var Customer_1 = require("../../Model/Customer");
var CustomerComponent = (function () {
    function CustomerComponent() {
        //customerObj: Customer = new Customer();
        //constructor() {
        //    this.customerObj.CustomerId = "1001";
        //    this.customerObj.CustomerName = "bhavana";
        //    this.customerObj.CustomerAmount = 5000;
        //}
        this.currentCustomer = new Customer_1.Customer();
        //create new customers collection 
        this.customers = new Array();
    }
    //add current customer to collection    
    CustomerComponent.prototype.Add = function () {
        this.customers.push(this.currentCustomer);
        //clear the object so textboxes
        this.currentCustomer = new Customer_1.Customer();
    };
    CustomerComponent.prototype.Select = function (selectedCustomer) {
        this.currentCustomer = Object.assign({}, selectedCustomer);
    };
    CustomerComponent.prototype.Update = function () {
        for (var _i = 0, _a = this.customers; _i < _a.length; _i++) {
            var customer = _a[_i];
            if (customer.CustomerId == this.currentCustomer.CustomerId) {
                customer.CustomerName = this.currentCustomer.CustomerName;
                customer.CustomerAmount = this.currentCustomer.CustomerAmount;
            }
        }
        this.currentCustomer = new Customer_1.Customer();
    };
    CustomerComponent.prototype.Clear = function () {
        this.currentCustomer = new Customer_1.Customer();
    };
    CustomerComponent = __decorate([
        core_1.Component({
            selector: "customer-ui",
            templateUrl: "../../UI/Customer.html",
            styles: ['.redborder {border : 1px solid red }']
        }), 
        __metadata('design:paramtypes', [])
    ], CustomerComponent);
    return CustomerComponent;
}());
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=CustomerComponent.js.map