import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {CustomerComponent} from "../Component/CustomerComponent";
import {GridComponent} from "../Component/GridComponent";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [CustomerComponent, GridComponent],
    bootstrap: [CustomerComponent]
})
export class CustomerModule {

}
