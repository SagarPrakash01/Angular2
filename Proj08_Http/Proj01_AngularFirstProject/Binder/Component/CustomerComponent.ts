import {Component} from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from "rxjs/Rx";

import {Customer} from "../../Model/Customer";


@Component({
    selector: "customer-ui",
    templateUrl: "../../UI/Customer.html",
    styles : ['.redborder {border : 1px solid red}']
})
export class CustomerComponent {
//current customer objct
    currentCustomer: Customer = new Customer();
    //customer collection
    customers: Array<Customer> = new Array<Customer>();
    httpService: Http;

    constructor(_http: Http) {
        this.httpService = _http;

        this.currentCustomer.CustomerId = "C1001";
        this.currentCustomer.CustomerName = "bhavana";
        this.currentCustomer.CustomerAmount = 5000;
    }

    //add current customer to collection
    Add() {
        //add customer to collection
        this.customers.push(this.currentCustomer);
        //create new fresh collection
        this.customers = this.customers.slice();
        //clear textboxed
        this.currentCustomer = new Customer();
    }
    
    Select(selectedCustomer: Customer) {
        // this.currentCustomer = selectedCustomer;
        //clone
        this.currentCustomer = Object.assign({}, selectedCustomer);
    }

    Update() {
        for (let customer of this.customers) {
            if (this.currentCustomer.CustomerId == customer.CustomerId) {
                customer.CustomerName = this.currentCustomer.CustomerName ;
                customer.CustomerAmount = this.currentCustomer.CustomerAmount ;
            }
        }
        //clear all textbox
        this.currentCustomer = new Customer();
    }

    Clear() {
        this.currentCustomer = new Customer();
    }

    Submit() {
       
        var customerCollection = [];
        //take necessary data from customers array, as we do not want to pass validation form group which is the part of customers array
        for (let item of this.customers) {
            var custObj: any = {};
            
            custObj.CustomerId = item.CustomerId;
            custObj.CustomerName = item.CustomerName;
            custObj.CustomerAmount = item.CustomerAmount;
            customerCollection.push(custObj);
        }

        //convert data into JSON string
        let data = JSON.stringify(customerCollection);
        //prepare headers
        let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
        let options = new RequestOptions({ headers: headers });
        //make Http POST
        var observable = this.httpService.post("http://localhost:49722/api/Customer", data, options); //this call is async call with the help of rxjs
        observable.subscribe(result => this.SuccessData(result), err => this.ErrorData(err));

    }

    SuccessData(result) {
        this.customers = result.json();
    }

    ErrorData(err) {
        console.log(err);
    }
}