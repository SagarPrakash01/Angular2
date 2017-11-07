import { NgForm, FormGroup, FormControl, Validators, FormBuilder } from "@angular/forms";

export class Customer {
    CustomerType: string = "";
    CustomerId: string = "";
    CustomerName: string = "";
    CustomerAmount: number = 0;
    CustomerCountry: string = "";
    CustomerState: string = "";

    CustomerGroupValidator: FormGroup = null;

    constructor() {
        var _builder = new FormBuilder();
        this.CustomerGroupValidator = _builder.group(
            {
                'CustomerId': ['', Validators.compose([Validators.required,
                Validators.pattern("^[Cc]{1,1}[0-9]{4,4}$")])],
                'CustomerName': ['', Validators.required],
                'CustomerAmount': ['', Validators.required]
            }
        );
    }

  


    IsValid(controlName, typeofValidator): boolean {
        if (controlName == undefined) {
            return this.CustomerGroupValidator.valid;  //return true
        }
        else {
            return (!this.CustomerGroupValidator.controls[controlName].hasError(typeofValidator));
            //Why negation
            //hasError will return true if element has error
            //so IsValid() should be false if hasError() return true
            //IsValid() should be true if hasError() return false            
        }
    }

    IsDirty(controlName): boolean {
        return (this.CustomerGroupValidator.controls[controlName].dirty);
        //a control is dirty if user has changed the value in UI                
    }

    //IsValid(): boolean {
    //    return this.CustomerGroupValidator.valid;
    //}

    //IsValid(): boolean {
    //    if (this.CustomerId.length == 0) {
    //        return false;
    //    }
    //    if (this.CustomerName.length == 0) {
    //        return false;
    //    }
    //    if (this.CustomerAmount <= 0) {
    //        return false;
    //    }
    //    return true;
    //}

}
