import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";



import { CustomerComponent } from "../Component/CustomerComponent";
import { GridComponent } from "../Component/GridComponent";
import { ReverseStringPipe } from "../Pipes/ReverseStringPipe";
import { FactoryCustomer } from "../Service/FactoryCustomer";
import { CountryStateService } from "../Service/CountryStateService";
import { SupplierComponent } from "../Component/SupplierComponent";
import { WelcomeComponent } from "../Component/WelcomeComponent";
import { MasterPageComponent } from "../Component/MasterPageComponent";
import { CustomerInfoComponent } from "../Component/CustomerInfoComponent";
import { JQueryComponent } from "../Component/JQueryComponent";
import { MainApplicationRoutes } from "../Routing/MainRoute";


@NgModule({
    providers: [FactoryCustomer, CountryStateService, { provide: LocationStrategy, useClass: HashLocationStrategy }],
    imports: [RouterModule.forRoot(MainApplicationRoutes), BrowserModule, FormsModule, ReactiveFormsModule, HttpModule],
    declarations: [CustomerComponent, GridComponent, ReverseStringPipe, SupplierComponent, WelcomeComponent, MasterPageComponent, CustomerInfoComponent, JQueryComponent],
    bootstrap: [MasterPageComponent]
})
export class MainModule {

}
