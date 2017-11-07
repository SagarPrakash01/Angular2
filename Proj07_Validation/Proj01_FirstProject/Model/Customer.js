"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var forms_1 = require("@angular/forms");
var Customer = (function () {
    function Customer() {
        this.CustomerType = "";
        this.CustomerId = "";
        this.CustomerName = "";
        this.CustomerAmount = 0;
        this.CustomerGroupValidator = null;
        var _builder = new forms_1.FormBuilder();
        this.CustomerGroupValidator = _builder.group({
            'CustomerId': ['', forms_1.Validators.compose([forms_1.Validators.required,
                    forms_1.Validators.pattern("^[C]{1,1}[0-9]{4,4}$")])],
            'CustomerName': ['', forms_1.Validators.required],
            'CustomerAmount': ['', forms_1.Validators.required]
        });
    }
    //validate customer - all three fields are compulsory
    //IsValid(): boolean {   
    //    //this is working on group level
    //    return this.CustomerGroupValidator.valid; 
    //}
    //check validation for individual control and not in one group
    Customer.prototype.IsValid = function (controlName, typeofValidator) {
        if (controlName == undefined) {
            return this.CustomerGroupValidator.valid; //No Error so return true
        }
        else {
            return (!this.CustomerGroupValidator.controls[controlName].hasError(typeofValidator));
        }
    };
    Customer.prototype.IsDirty = function (controlName, typeofValidator) {
        return (this.CustomerGroupValidator.controls[controlName].dirty);
        //a control is dirty if user has changed the value in UI                
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