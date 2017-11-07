import {NgModule} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {CustomerComponent} from "../Component/CustomerComponent";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [CustomerComponent],
    bootstrap: [CustomerComponent]
})
export class CustomerModule {

}
