import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpModule, Jsonp } from "@angular/http";
import { RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";



import { CustomerComponent } from "../Component/CustomerComponent";
import { GridComponent } from "../Component/GridComponent";
import { CustomerInfoComponent } from "../Component/CustomerInfoComponent";
import { ReverseStringPipe } from "../Pipes/ReverseStringPipe";
import { FactoryCustomer } from "../Service/FactoryCustomer";
import { CountryStateService } from "../Service/CountryStateService";
import { CustomerRoutes } from "../Routing/CustomerRoute";


@NgModule({
    providers: [FactoryCustomer, CountryStateService],
    imports: [RouterModule.forChild(CustomerRoutes), FormsModule, ReactiveFormsModule, HttpModule, CommonModule],
    declarations: [CustomerComponent, GridComponent, ReverseStringPipe, CustomerInfoComponent],
    bootstrap: [CustomerComponent]
})
export class CustomerModule {

}
