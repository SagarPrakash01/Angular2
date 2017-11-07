"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomerComponent_1 = require("../Component/CustomerComponent");
var SupplierComponent_1 = require("../Component/SupplierComponent");
var WelcomeComponent_1 = require("../Component/WelcomeComponent");
var CustomerInfoComponent_1 = require("../Component/CustomerInfoComponent");
var JQueryComponent_1 = require("../Component/JQueryComponent");
exports.MainApplicationRoutes = [
    { path: '', component: WelcomeComponent_1.WelcomeComponent },
    { path: 'UI/Index.html', component: WelcomeComponent_1.WelcomeComponent },
    { path: 'Home', component: WelcomeComponent_1.WelcomeComponent },
    { path: 'Customer', component: CustomerComponent_1.CustomerComponent },
    { path: 'Supplier', component: SupplierComponent_1.SupplierComponent },
    { path: 'JQueryDemo', component: JQueryComponent_1.JQueryComponent },
    { path: 'Customer/:id/:name', component: CustomerInfoComponent_1.CustomerInfoComponent }
];
//# sourceMappingURL=MainRoute.js.map