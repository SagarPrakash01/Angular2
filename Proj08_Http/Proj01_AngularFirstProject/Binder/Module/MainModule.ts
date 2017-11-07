import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {HttpModule, Jsonp} from "@angular/http";


import {CustomerComponent} from "../Component/CustomerComponent";
import {GridComponent} from "../Component/GridComponent";

@NgModule({
    imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpModule],
    declarations: [CustomerComponent, GridComponent],
    bootstrap: [CustomerComponent]
})
export class MainModule {

}