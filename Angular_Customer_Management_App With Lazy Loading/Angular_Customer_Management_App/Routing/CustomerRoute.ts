import { NgModule } from "@angular/core";

import { CustomerComponent } from "../Component/CustomerComponent";
import { CustomerInfoComponent } from "../Component/CustomerInfoComponent";

export const CustomerRoutes = [
    { path: '', component: CustomerComponent },
    { path: 'Add', component: CustomerComponent },
    { path: '""/:id/:name', component: CustomerInfoComponent }


];

