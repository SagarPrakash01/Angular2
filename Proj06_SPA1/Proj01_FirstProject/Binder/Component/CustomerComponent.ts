import {Component} from "@angular/core";
import {Customer, LoyalCustomer} from "../../Model/Customer";
import {FactoryCustomer} from "../../service/factorycustomer";

@Component({
    selector: "customer-ui",
    providers: [FactoryCustomer],
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

    customerType: string = "Customer";
    currentCustomer: Customer = null;
    factoryCustomer: FactoryCustomer = new FactoryCustomer();

    onCustomerTypeChange(_typeOfCustomer) {
        this.customerType = _typeOfCustomer
        this.currentCustomer = this.factoryCustomer.Create(this.customerType);
        this.currentCustomer.CustomerType = this.customerType;
    }

    constructor(_factoryCustomer: FactoryCustomer) {
        this.factoryCustomer = _factoryCustomer;
        //depends on the requirement        
        this.currentCustomer = this.factoryCustomer.Create(this.customerType);
        this.currentCustomer.CustomerType = this.customerType;
        }
    //create new customers collection 
    customers: Array<Customer> = new Array<Customer>();

    //add current customer to collection    
    Add() {
        this.customers.push(this.currentCustomer);
        //new fresh reference
        this.customers = this.customers.slice();

        //clear the object so textboxes
        this.currentCustomer = new Customer();

    }

    Select(selectedCustomer: Customer) {
        //this.currentCustomer = Object.assign({}, selectedCustomer);
        this.currentCustomer = this.factoryCustomer.Create(this.customerType);
        this.currentCustomer.CustomerId = selectedCustomer.CustomerId;
        this.currentCustomer.CustomerName = selectedCustomer.CustomerName;
        this.currentCustomer.CustomerAmount = selectedCustomer.CustomerAmount;
        this.currentCustomer.CustomerType = selectedCustomer.CustomerType;
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
