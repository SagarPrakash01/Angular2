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
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var Customer_1 = require("../Model/Customer");
var Country_1 = require("../Model/Country");
var State_1 = require("../Model/State");
var FactoryCustomer_1 = require("../Service/FactoryCustomer");
var CountryStateService_1 = require("../Service/CountryStateService");
var CustomerComponent = (function () {
    function CustomerComponent(_factoryCustomer, _countrystateService, _http, _router) {
        this.customerObj = null;
        this.factoryCustomer = null;
        this.CustomerType = "Customer";
        this.http = null;
        this.router = null;
        this.countrystateService = null;
        this.selectedCountry = new Country_1.Country(0, '');
        this.selectedState = new State_1.State(0, 0, '');
        this.customers = new Array();
        this.factoryCustomer = _factoryCustomer;
        this.countrystateService = _countrystateService;
        this.http = _http;
        this.router = _router;
        this.customerObj = this.factoryCustomer.Create(this.CustomerType);
        this.countries = this.countrystateService.getCountries();
        this.customerObj.CustomerId = "C1001";
        this.customerObj.CustomerName = "bhavana";
        this.customerObj.CustomerAmount = 5000;
        this.customerObj.CustomerType = this.CustomerType;
    }
    CustomerComponent.prototype.onSelectCountry = function (countryid) {
        //return Array of states matching with countryid
        this.states = this.countrystateService.getStates().filter(function (item) { return item.CountryId == countryid; });
        //assign value to customerObj
        var country = this.countries.filter(function (item) { return item.CountryId == countryid; });
        this.customerObj.CustomerCountry = country[0].CountryName;
    };
    CustomerComponent.prototype.onSelectState = function (stateid) {
        var state = this.states.filter(function (item) { return item.StateId == stateid; });
        this.customerObj.CustomerState = state[0].StateName;
    };
    //add customerObj to collection
    CustomerComponent.prototype.Add = function () {
        console.log(this.customerObj);
        if (this.customerObj.CustomerType == "") {
            this.customerObj.CustomerType = this.CustomerType;
        }
        this.customers.push(this.customerObj);
        //new fresh reference
        this.customers = this.customers.slice();
        //clear customer obj so all textbox gets clear
        this.customerObj = new Customer_1.Customer();
    };
    CustomerComponent.prototype.Select = function (selectedCustomer) {
        //this.customerObj = selectedCustomer;
        //this.customerObj = Object.assign({}, selectedCustomer);
        //handle through Factory
        this.customerObj = this.factoryCustomer.Create(this.CustomerType);
        this.customerObj.CustomerId = selectedCustomer.CustomerId;
        this.customerObj.CustomerName = selectedCustomer.CustomerName;
        this.customerObj.CustomerAmount = selectedCustomer.CustomerAmount;
        this.customerObj.CustomerType = selectedCustomer.CustomerType;
        this.CustomerType = this.customerObj.CustomerType;
    };
    CustomerComponent.prototype.Update = function () {
        for (var _i = 0, _a = this.customers; _i < _a.length; _i++) {
            var customer = _a[_i];
            if (customer.CustomerId == this.customerObj.CustomerId) {
                customer.CustomerName = this.customerObj.CustomerName;
                customer.CustomerAmount = this.customerObj.CustomerAmount;
            }
        }
        this.customerObj = new Customer_1.Customer();
    };
    CustomerComponent.prototype.Clear = function () {
        this.customerObj = new Customer_1.Customer();
    };
    CustomerComponent.prototype.onCustomerTypeChange = function (_typeOfCustomer) {
        console.log(_typeOfCustomer);
        this.CustomerType = _typeOfCustomer;
        this.customerObj = this.factoryCustomer.Create(this.CustomerType);
        this.customerObj.CustomerType = this.CustomerType;
    };
    //x-www-form-urlencoded
    //These are different Form content types defined by W3C
    //If you want to send simple text/ ASCII data, then x-www-form-urlencoded will work. This is the default
    //But if you have to send non-ASCII text or large binary data, the form-data is for that
    CustomerComponent.prototype.submit = function () {
        var _this = this;
        var headers = new http_1.Headers({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        var options = new http_1.RequestOptions({
            headers: headers
        });
        var observable = this.http.get("http://localhost:56344/Component/data.json", options);
        observable.subscribe(function (res) { return _this.Success(res); }, function (res) { return _this.Error(res); });
    };
    CustomerComponent.prototype.Success = function (datas) {
        this.customers = JSON.parse(datas._body);
    };
    CustomerComponent.prototype.Error = function (err) {
        console.log(err);
    };
    CustomerComponent.prototype.customerInfo = function () {
        this.router.navigate(['Customer', this.customerObj.CustomerId, this.customerObj.CustomerName]);
    };
    return CustomerComponent;
}());
CustomerComponent = __decorate([
    core_1.Component({
        selector: "customer-ui",
        templateUrl: "../UI/Customer.html",
        styleUrls: ["../UI/myStyles.css"]
    }),
    __metadata("design:paramtypes", [FactoryCustomer_1.FactoryCustomer, CountryStateService_1.CountryStateService, http_1.Http, router_1.Router])
], CustomerComponent);
exports.CustomerComponent = CustomerComponent;
//# sourceMappingURL=CustomerComponent.js.map