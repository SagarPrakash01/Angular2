import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { LocationStrategy, HashLocationStrategy } from "@angular/common";



import { MasterPageComponent } from "../Component/MasterPageComponent";
import { WelcomeComponent } from "../Component/WelcomeComponent";
import { MainApplicationRoutes } from "../Routing/MainRoute";


@NgModule({    
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    imports: [RouterModule.forRoot(MainApplicationRoutes), BrowserModule],
    declarations: [MasterPageComponent, WelcomeComponent],
    bootstrap: [MasterPageComponent]
})
export class MainModule {

}
