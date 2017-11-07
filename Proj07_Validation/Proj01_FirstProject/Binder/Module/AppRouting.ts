import {NgModule} from "@angular/core";

import {CustomerComponent} from "../Component/CustomerComponent";
import {SupplierComponent} from "../Component/SupplierComponent";
import {WelcomeComponent} from "../Component/WelcomeComponent";

export const ApplicationRoutes = [   
    { path: '', component: WelcomeComponent },
    { path: 'UI/StartAngular.html', component: WelcomeComponent },
    { path: 'Customer', component: CustomerComponent },
    { path: 'Supplier', component: SupplierComponent }
];