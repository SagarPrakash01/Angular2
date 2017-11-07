"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var CustomerInfoComponent = (function () {
    function CustomerInfoComponent(_route) {
        var _this = this;
        this.route = null;
        this.route = _route;
        //initialize customer object 
        this.customer = {
            id: 0,
            name: ''
        };
        //observable Params will recreate component when new data comes
        this.paramSubscription = this.route.params.subscribe(function (params) {
            _this.customer.id = params['id'];
            _this.customer.name = params['name'];
        });
    }
    return CustomerInfoComponent;
}());
CustomerInfoComponent = __decorate([
    core_1.Component({
        template: "\n        <p>User with CustomerId {{customer.id}} loaded </p>\n        <p>Customer Name is {{customer.name}} </p>\n    "
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute])
], CustomerInfoComponent);
exports.CustomerInfoComponent = CustomerInfoComponent;
//# sourceMappingURL=CustomerInfoComponent.js.map