import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

import {CustomerComponent} from "../Component/CustomerComponent";
import {GridComponent} from "../Component/GridComponent";
import {MasterPageComponent} from "../Component/MasterPageComponent";
import {SupplierComponent} from "../Component/SupplierComponent";
import {WelcomeComponent} from "../Component/WelcomeComponent";
import {ApplicationRoutes} from "./AppRouting";


@NgModule({
    imports: [RouterModule.forRoot(ApplicationRoutes),
        BrowserModule, FormsModule, ReactiveFormsModule, CommonModule],
    declarations: [MasterPageComponent, CustomerComponent, GridComponent, SupplierComponent, WelcomeComponent],
    bootstrap: [MasterPageComponent]
})
export class MainModuleModule {

}
