import {Component} from "@angular/core";
import {Customer} from "../../Model/Customer";

@Component({
    selector: "customer-ui",
    templateUrl: "../../UI/Customer.html",
    styles: ['.redborder {border : 1px solid red }']
})
export class CustomerComponent {
    //customerObj: Customer = new Customer();
    //constructor() {
    //    this.customerObj.CustomerId = "1001";
    //    this.customerObj.CustomerName = "bhavana";
    //    this.customerObj.CustomerAmount = 5000;
    //}

    currentCustomer: Customer = new Customer();
    //create new customers collection 
    customers: Array<Customer> = new Array<Customer>();

    //add current customer to collection    
    Add() {
        this.customers.push(this.currentCustomer);
        //clear the object so textboxes
        this.currentCustomer = new Customer();

    }

    Select(selectedCustomer: Customer) {
        this.currentCustomer = Object.assign({}, selectedCustomer);
    }

    Update() {
        for (let customer of this.customers) {
            if (customer.CustomerId == this.currentCustomer.CustomerId) {
                customer.CustomerName = this.currentCustomer.CustomerName;
                customer.CustomerAmount= this.currentCustomer.CustomerAmount;
            }
        }
        this.currentCustomer = new Customer();
    }

    Clear() {
        this.currentCustomer = new Customer();
    }


}
