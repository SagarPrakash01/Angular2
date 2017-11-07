import {Component} from "@angular/core";
import {Customer} from "../../Model/Customer";
import {LoyalCustomer} from "../../Model/LoyalCustomer";
import {FactoryCustomer} from "../../service/FactoryCustomer";
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import  "rxjs/Rx";

@Component({
   
    templateUrl: "../../UI/Customer.html",
    styles: ['.redborder {border : 1px solid red }' ]
})
export class CustomerComponent {
    http: Http = null;
    customerType : string = "Customer";
    customerObj: Customer = null;
    factoryCustomer : FactoryCustomer = null;;

    customers : Array<Customer> = new Array<Customer>();

    constructor(_factory : FactoryCustomer, _http : Http)
    {
        this.factoryCustomer = _factory;
        this.http = _http;
     this.customerObj = this.factoryCustomer.Create("Customer");  
     this.customerObj.CustomerType = "Customer";
     
    }

    onCustomerTypeChange(_typeofcustomer) {
        this.customerType = _typeofcustomer;
        this.customerObj = this.factoryCustomer.Create(this.customerType);
        
    }

   Add() {
       this.customerObj.CustomerType = this.customerType;
       this.customers.push(this.customerObj);
       //new fresh address to reference
       this.customers = this.customers.slice();
       //clear the textbox
       this.customerObj = new Customer();
   }

   Select(selectedCustomer : Customer) {
       //this.customerObj = Object.assign({}, selectedCustomer);
         this.customerObj = this.factoryCustomer.Create(this.customerType);
        this.customerObj.CustomerId = selectedCustomer.CustomerId;
        this.customerObj.CustomerName = selectedCustomer.CustomerName;
        this.customerObj.CustomerAmount = selectedCustomer.CustomerAmount;
        this.customerObj.CustomerType = selectedCustomer.CustomerType;
   }

   Update() {
       for  (let customer of this.customers) {
           if (customer.CustomerId == this.customerObj.CustomerId) {
               customer.CustomerName = this.customerObj.CustomerName;
               customer.CustomerAmount = this.customerObj.CustomerAmount;
           }
       }
       //clear textbox
       this.customerObj = new Customer();
   }
    
    Clear() {
        this.customerObj = new Customer();
    }

     submit() {
        let headers = new Headers ({
            'Content-Type': 'application/x-www-form-urlencoded'
        });
        let options = new RequestOptions({
            headers : headers
        });
        var observable = this.http.get("http://localhost:8080/Binder/Component/data.json",options);
        observable.subscribe(res => this.Success(res),
                            res => this.Error(res)
        );

       
    }
   Success(datas) {
            this.customers = JSON.parse(datas._body);
        }

        Error(err) {
            console.log(err);
        }
}
