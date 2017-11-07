"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Customer = (function () {
    function Customer() {
        this.CustomerType = "";
        this.CustomerId = "";
        this.CustomerName = "";
        this.CustomerAmount = 0;
    }
    //validate customer - all three fields are compulsory
    Customer.prototype.IsValid = function () {
        if (this.CustomerId.length == 0) {
            return false;
        }
        if (this.CustomerName.length == 0) {
            return false;
        }
        if (this.CustomerAmount <= 0) {
            return false;
        }
        return true;
    };
    return Customer;
}());
exports.Customer = Customer;
var LoyalCustomer = (function (_super) {
    __extends(LoyalCustomer, _super);
    function LoyalCustomer() {
        _super.apply(this, arguments);
    }
    // Shadowing parent function
    LoyalCustomer.prototype.IsValid = function () {
        if (this.CustomerId.length == 0) {
            return false;
        }
        if (this.CustomerName.length == 0) {
            return false;
        }
        return true;
    };
    return LoyalCustomer;
}(Customer));
exports.LoyalCustomer = LoyalCustomer;
//# sourceMappingURL=Customer.js.map