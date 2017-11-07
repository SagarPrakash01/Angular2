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
var WelcomeComponent = (function () {
    function WelcomeComponent(_router) {
        this.router = null;
        this.router = _router;
    }
    WelcomeComponent.prototype.MoveToCustomer = function () {
        this.router.navigate(['Customer']); //matching route
    };
    WelcomeComponent.prototype.MoveToSupplier = function () {
        this.router.navigateByUrl('/Supplier'); //matching absolute path url
    };
    return WelcomeComponent;
}());
WelcomeComponent = __decorate([
    core_1.Component({
        template: "\n        <div>\n            <h3 style=\"color:Orange;\">Welcome to Angular Application</h3>\n             <br/>\n             <input type=\"button\" value=\"Customer\" (click)=\"MoveToCustomer()\" />\n             <br/><br/>\n             <input type=\"button\" value=\"Supplier\" (click)=\"MoveToSupplier()\" />\n        </div>\n    "
    }),
    __metadata("design:paramtypes", [router_1.Router])
], WelcomeComponent);
exports.WelcomeComponent = WelcomeComponent;
//# sourceMappingURL=WelcomeComponent.js.map