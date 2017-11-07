import {NgForm, FormGroup, FormControl, Validators, FormBuilder} from "@angular/forms";


export class Customer {
    //name: datatype = "";
   
    CustomerId: string = "";
    CustomerName: string = "";
    CustomerAmount: number = 0;

    //CustomerGroupValidator: FormGroup = null;

    //constructor() {
    //    var _builder = new FormBuilder();
    //    this.CustomerGroupValidator = _builder.group(
    //        {
    //            'CustomerId': ['', Validators.compose([Validators.required,
    //                Validators.pattern("^[Cc]{1,1}[0-9]{4,4}$")])],
    //            'CustomerName': ['', Validators.required],
    //            'CustomerAmount': ['', Validators.required]
    //        }
    //    );
    //}

    //   IsValid(): boolean {   
    //    //this is working on group level
    //    return this.CustomerGroupValidator.valid; 
    //}
}