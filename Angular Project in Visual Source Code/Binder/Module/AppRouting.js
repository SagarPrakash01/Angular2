"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomerComponent_1 = require("../Component/CustomerComponent");
var SupplierComponent_1 = require("../Component/SupplierComponent");
var WelcomeComponent_1 = require("../Component/WelcomeComponent");
exports.ApplicationRoutes = [
    { path: '', component: WelcomeComponent_1.WelcomeComponent },
    { path: 'UI/StartAngulat.html', component: WelcomeComponent_1.WelcomeComponent },
    { path: 'Customer', component: CustomerComponent_1.CustomerComponent },
    { path: 'Supplier', component: SupplierComponent_1.SupplierComponent }
];
//# sourceMappingURL=AppRouting.js.map