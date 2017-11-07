import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {RouterModule} from "@angular/router";

import {CustomerComponent} from "../Component/CustomerComponent";
import {SupplierComponent} from "../Component/SupplierComponent";
import {WelcomeComponent} from "../Component/WelcomeComponent";
import {MasterPageComponent} from "../Component/MasterPageComponent";
import {GridComponent} from "../Component/GridComponent";
import {FactoryCustomer} from "../../service/FactoryCustomer";
import {ApplicationRoutes} from "./AppRouting";

@NgModule({
    providers : [FactoryCustomer],
    imports: [RouterModule.forRoot(ApplicationRoutes), BrowserModule, FormsModule, ReactiveFormsModule, HttpModule],
    declarations: [CustomerComponent, GridComponent, SupplierComponent, WelcomeComponent, MasterPageComponent],
    bootstrap: [MasterPageComponent]
})
export class CustomerModule {

}
