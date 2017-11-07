"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var forms_1 = require("@angular/forms");
var Customer = (function () {
    function Customer() {
        this.CustomerType = "";
        this.CustomerId = "";
        this.CustomerName = "";
        this.CustomerAmount = 0;
        this.CustomerCountry = "";
        this.CustomerState = "";
        this.CustomerGroupValidator = null;
        var _builder = new forms_1.FormBuilder();
        this.CustomerGroupValidator = _builder.group({
            'CustomerId': ['', forms_1.Validators.compose([forms_1.Validators.required,
                    forms_1.Validators.pattern("^[Cc]{1,1}[0-9]{4,4}$")])],
            'CustomerName': ['', forms_1.Validators.required],
            'CustomerAmount': ['', forms_1.Validators.required]
        });
    }
    Customer.prototype.IsValid = function (controlName, typeofValidator) {
        if (controlName == undefined) {
            return this.CustomerGroupValidator.valid; //return true
        }
        else {
            return (!this.CustomerGroupValidator.controls[controlName].hasError(typeofValidator));
            //Why negation
            //hasError will return true if element has error
            //so IsValid() should be false if hasError() return true
            //IsValid() should be true if hasError() return false            
        }
    };
    Customer.prototype.IsDirty = function (controlName) {
        return (this.CustomerGroupValidator.controls[controlName].dirty);
        //a control is dirty if user has changed the value in UI                
    };
    return Customer;
}());
exports.Customer = Customer;
//# sourceMappingURL=Customer.js.map