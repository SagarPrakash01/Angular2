import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";



import { SupplierComponent } from "../Component/SupplierComponent";
import { SupplierRoutes } from "../Routing/SupplierRoute";


@NgModule({   
    imports: [RouterModule.forChild(SupplierRoutes), FormsModule,  CommonModule],
    declarations: [SupplierComponent],
    bootstrap: [SupplierComponent]
})
export class SupplierModule {

}
