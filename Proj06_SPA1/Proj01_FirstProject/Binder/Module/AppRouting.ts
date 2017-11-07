import {NgModule} from "@angular/core";

import {CustomerComponent} from "../Component/CustomerComponent";
import {SupplierComponent} from "../Component/SupplierComponent";
import {WelcomeComponent} from "../Component/WelcomeComponent";

export const ApplicationRoutes = [
    { path: '', component: WelcomeComponent },   
    { path: 'Customer', component: CustomerComponent },
    { path: 'Supplier', component: SupplierComponent }
    
];










//{ path: '', redirectTo : '/Supplier', pathMatch: 'full' },

//{ path: 'Supplier/:id', component: SupplierComponent }