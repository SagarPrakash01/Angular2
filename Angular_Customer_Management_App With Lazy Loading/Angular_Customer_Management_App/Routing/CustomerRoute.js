"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CustomerComponent_1 = require("../Component/CustomerComponent");
var CustomerInfoComponent_1 = require("../Component/CustomerInfoComponent");
exports.CustomerRoutes = [
    { path: '', component: CustomerComponent_1.CustomerComponent },
    { path: 'Add', component: CustomerComponent_1.CustomerComponent },
    { path: '""/:id/:name', component: CustomerInfoComponent_1.CustomerInfoComponent }
];
//# sourceMappingURL=CustomerRoute.js.map