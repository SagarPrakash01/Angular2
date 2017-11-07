import { Component } from "@angular/core";
import { Http, Response, Headers, RequestOptions } from "@angular/http";
import { Observable } from "rxjs/Rx";
import { Router } from "@angular/router";


import { Customer } from "../Model/Customer";
import { Country } from "../Model/Country";
import { State } from "../Model/State";
import {FactoryCustomer} from "../Service/FactoryCustomer";
import {CountryStateService} from "../Service/CountryStateService";


@Component({
    selector: "customer-ui",
    templateUrl: "../UI/Customer.html",
    styleUrls: ["../UI/myStyles.css"]
})
export class CustomerComponent {
    customerObj: Customer = null;
    factoryCustomer: FactoryCustomer = null;
    CustomerType: string = "Customer";
    http: Http = null;
    router: Router = null;

    countrystateService: CountryStateService = null;
    selectedCountry: Country = new Country(0, '');
    selectedState: State = new State(0, 0, '');
    countries: Country[];
    states: State[];   


    customers: Array<Customer> = new Array<Customer>();

    constructor(_factoryCustomer: FactoryCustomer, _countrystateService: CountryStateService, _http: Http, _router: Router) {
        this.factoryCustomer = _factoryCustomer;
        this.countrystateService = _countrystateService;
        this.http = _http;
        this.router = _router;

        this.customerObj = this.factoryCustomer.Create(this.CustomerType);

        this.countries = this.countrystateService.getCountries();

        this.customerObj.CustomerId = "C1001";
        this.customerObj.CustomerName = "bhavana";
        this.customerObj.CustomerAmount = 5000;
        this.customerObj.CustomerType = this.CustomerType;
    }

    onSelectCountry(countryid: number) {
        //return Array of states matching with countryid
        this.states = this.countrystateService.getStates().filter((item) => item.CountryId == countryid);
        
        //assign value to customerObj
        let country = this.countries.filter((item) => item.CountryId == countryid);
        this.customerObj.CustomerCountry = country[0].CountryName;        
    }


    onSelectState(stateid: number) {
        let state = this.states.filter((item) => item.StateId == stateid);
        this.customerObj.CustomerState = state[0].StateName;        
    }

      //add customerObj to collection
    Add() {
        console.log(this.customerObj);
        if (this.customerObj.CustomerType == "") {
            this.customerObj.CustomerType = this.CustomerType;
        }
          this.customers.push(this.customerObj);
          //new fresh reference
          this.customers = this.customers.slice();
          //clear customer obj so all textbox gets clear
          this.customerObj = new Customer();
      }

      Select(selectedCustomer: Customer) {
          //this.customerObj = selectedCustomer;
          //this.customerObj = Object.assign({}, selectedCustomer);

          //handle through Factory
          this.customerObj = this.factoryCustomer.Create(this.CustomerType);
          this.customerObj.CustomerId = selectedCustomer.CustomerId;
          this.customerObj.CustomerName = selectedCustomer.CustomerName;
          this.customerObj.CustomerAmount = selectedCustomer.CustomerAmount;
          this.customerObj.CustomerType = selectedCustomer.CustomerType;
          this.CustomerType = this.customerObj.CustomerType;
      }

      Update() {
          for (let customer of this.customers) {
              if (customer.CustomerId == this.customerObj.CustomerId) {
                  customer.CustomerName = this.customerObj.CustomerName;
                  customer.CustomerAmount = this.customerObj.CustomerAmount;
              }
          }
          this.customerObj = new Customer();
      }

      Clear() {
          this.customerObj = new Customer();
      }

      onCustomerTypeChange(_typeOfCustomer) {
          console.log(_typeOfCustomer);
          this.CustomerType = _typeOfCustomer;
          this.customerObj = this.factoryCustomer.Create(this.CustomerType);
          this.customerObj.CustomerType = this.CustomerType;
      }

    //x-www-form-urlencoded
    //These are different Form content types defined by W3C
    //If you want to send simple text/ ASCII data, then x-www-form-urlencoded will work. This is the default
    //But if you have to send non-ASCII text or large binary data, the form-data is for that

      submit() {
          let headers = new Headers({
              'Content-Type': 'application/x-www-form-urlencoded'
          });
          let options = new RequestOptions({
              headers: headers
          });
          var observable = this.http.get("http://localhost:56344/Component/data.json", options);
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

      customerInfo() {
          this.router.navigate(['Customer', this.customerObj.CustomerId, this.customerObj.CustomerName]);
      }
}
