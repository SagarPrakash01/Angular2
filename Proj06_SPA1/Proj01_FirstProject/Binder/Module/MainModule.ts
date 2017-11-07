import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {CustomerComponent} from "../Component/CustomerComponent";
import {GridComponent} from "../Component/GridComponent";
import {MasterPageComponent} from "../Component/MasterPageComponent";
import {SupplierComponent} from "../Component/SupplierComponent";
import {WelcomeComponent} from "../Component/WelcomeComponent";
import {ApplicationRoutes} from "./AppRouting";


@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule.forRoot(ApplicationRoutes)],
    declarations: [MasterPageComponent, CustomerComponent, GridComponent, SupplierComponent, WelcomeComponent],
    bootstrap: [MasterPageComponent]
})
export class MainModuleModule {

}
