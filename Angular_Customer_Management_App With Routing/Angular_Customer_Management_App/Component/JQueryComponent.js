"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var $ = require("jquery");
var JQueryComponent = (function () {
    function JQueryComponent() {
    }
    JQueryComponent.prototype.Toggle = function () {
        $("#demo").toggle(); //toggle is jquery method
    };
    return JQueryComponent;
}());
JQueryComponent = __decorate([
    core_1.Component({
        template: "    \n    <div  id=\"demo\">\n        <h3>JQuery Toggle demo</h3>\n    </div>\n    <br/><br/>\n    <input type=\"button\"  value=\"JQuery Toggle\" (click)=\"Toggle()\" />\n"
    })
], JQueryComponent);
exports.JQueryComponent = JQueryComponent;
//# sourceMappingURL=JQueryComponent.js.map