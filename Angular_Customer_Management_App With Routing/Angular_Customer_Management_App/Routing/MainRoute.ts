import { NgModule } from "@angular/core";

import { CustomerComponent } from "../Component/CustomerComponent";
import { SupplierComponent } from "../Component/SupplierComponent";
import { WelcomeComponent } from "../Component/WelcomeComponent";
import { CustomerInfoComponent } from "../Component/CustomerInfoComponent";
import { JQueryComponent } from "../Component/JQueryComponent";

export const MainApplicationRoutes = [
    { path: '', component: WelcomeComponent },
    { path: 'UI/Index.html', component: WelcomeComponent },
    { path: 'Home', component: WelcomeComponent },
    { path: 'Customer', component: CustomerComponent },
    { path: 'Supplier', component: SupplierComponent },
    { path: 'JQueryDemo', component: JQueryComponent },
    { path: 'Customer/:id/:name', component: CustomerInfoComponent }
];

