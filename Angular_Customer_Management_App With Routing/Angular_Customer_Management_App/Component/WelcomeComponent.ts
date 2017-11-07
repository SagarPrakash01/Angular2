import { Component } from "@angular/core";
import { Router } from '@angular/router';

@Component({
    template: `
        <div>
            <h3 style="color:Orange;">Welcome to Angular Application</h3>
             <br/>
             <input type="button" value="Customer" (click)="MoveToCustomer()" />
             <br/><br/>
             <input type="button" value="Supplier" (click)="MoveToSupplier()" />
        </div>
    `
})
export class WelcomeComponent {
    router: Router = null;
    constructor(_router: Router) {
        this.router = _router;
    }

    MoveToCustomer() {
        this.router.navigate(['Customer']);     //matching route
    }

    MoveToSupplier() {
        this.router.navigateByUrl('/Supplier'); //matching absolute path url
    }
}