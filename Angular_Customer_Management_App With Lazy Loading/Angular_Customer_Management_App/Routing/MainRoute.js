"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WelcomeComponent_1 = require("../Component/WelcomeComponent");
exports.MainApplicationRoutes = [
    { path: '', component: WelcomeComponent_1.WelcomeComponent },
    { path: 'UI/Index.html', component: WelcomeComponent_1.WelcomeComponent },
    { path: 'Home', component: WelcomeComponent_1.WelcomeComponent },
    { path: 'Customer', loadChildren: '../Module/CustomerModule#CustomerModule' },
    { path: 'Supplier', loadChildren: '../Module/SupplierModule#SupplierModule' }
];
//# sourceMappingURL=MainRoute.js.map