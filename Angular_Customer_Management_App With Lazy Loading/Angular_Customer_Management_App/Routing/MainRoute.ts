import { NgModule } from "@angular/core";


import { WelcomeComponent } from "../Component/WelcomeComponent";


export const MainApplicationRoutes = [
    { path: '', component: WelcomeComponent },  //will be loaded at the start
    { path: 'UI/Index.html', component: WelcomeComponent },
    { path: 'Home', component: WelcomeComponent },
    { path: 'Customer', loadChildren: '../Module/CustomerModule#CustomerModule' }, //on demand loading
    { path: 'Supplier', loadChildren: '../Module/SupplierModule#SupplierModule'  }
];

