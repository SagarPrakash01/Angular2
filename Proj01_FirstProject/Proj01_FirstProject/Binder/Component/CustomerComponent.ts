import {Component} from "@angular/core";
import {Customer} from "../../Model/Customer";

@Component({
    selector: "customer-ui",
    templateUrl: "../../UI/Customer.html"
})
export class CustomerComponent {
    customerObj: Customer = new Customer();


    
}
