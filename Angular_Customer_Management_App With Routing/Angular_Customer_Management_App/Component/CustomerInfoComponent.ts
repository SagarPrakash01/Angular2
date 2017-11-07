import { Component } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { Subscription } from "rxjs/Subscription";

@Component({
    template: `
        <p>User with CustomerId {{customer.id}} loaded </p>
        <p>Customer Name is {{customer.name}} </p>
    `
})
export class CustomerInfoComponent {
    customer: { id: number, name: string };
    paramSubscription: Subscription;
    route: ActivatedRoute = null;

    constructor(_route: ActivatedRoute) {
        this.route = _route;
        //initialize customer object 
        this.customer = {
            id: 0,
            name: ''
        };
        //observable Params will recreate component when new data comes
        this.paramSubscription = this.route.params.subscribe(
            (params: Params) => {
                this.customer.id = params['id'];
                this.customer.name = params['name'];
            }
        );

    }

   
}