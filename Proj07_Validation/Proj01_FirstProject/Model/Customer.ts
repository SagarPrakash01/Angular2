import {NgForm, FormGroup, FormControl,Validators, FormBuilder} from "@angular/forms";

export class Customer {
    CustomerType: string = "";
    CustomerId: string = "";
    CustomerName: string = "";
    CustomerAmount: number = 0;

    CustomerGroupValidator: FormGroup = null;

    constructor() {
        var _builder = new FormBuilder();
        this.CustomerGroupValidator = _builder.group(
            {
                'CustomerId': ['', Validators.compose( [Validators.required,
                    Validators.pattern("^[C]{1,1}[0-9]{4,4}$")])],
                'CustomerName': ['', Validators.required],
                'CustomerAmount': ['', Validators.required]
            }
        );
    }


    //validate customer - all three fields are compulsory
    //IsValid(): boolean {   
    //    //this is working on group level
    //    return this.CustomerGroupValidator.valid; 
    //}

    //check validation for individual control and not in one group
    IsValid(controlName, typeofValidator): boolean {
        if (controlName == undefined) {
            return this.CustomerGroupValidator.valid;  //No Error so return true
        }
        else {
            return (!this.CustomerGroupValidator.controls[controlName].hasError(typeofValidator));
            //Why negation
            //hasError will return true if element has error
            //so IsValid() should be false if hasError() return true
            //IsValid() should be true if hasError() return false            
        }
    }


    IsDirty(controlName, typeofValidator): boolean {
        return (this.CustomerGroupValidator.controls[controlName].dirty);
            //a control is dirty if user has changed the value in UI                
    }
}

export class LoyalCustomer extends Customer {
    // Shadowing parent function
    IsValid(): boolean {
        if (this.CustomerId.length == 0) {
            return false;
        }
        if (this.CustomerName.length == 0) {
            return false;
        }
        
        return true;
    }
}
