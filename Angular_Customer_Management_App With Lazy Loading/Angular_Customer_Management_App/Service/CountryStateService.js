"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var Country_1 = require("../Model/Country");
var State_1 = require("../Model/State");
var CountryStateService = (function () {
    function CountryStateService() {
    }
    CountryStateService.prototype.getCountries = function () {
        return [
            new Country_1.Country(1, 'United States'),
            new Country_1.Country(2, 'India'),
            new Country_1.Country(3, 'Australia'),
            new Country_1.Country(4, 'New Zealand'),
            new Country_1.Country(5, 'South Africa'),
            new Country_1.Country(6, 'United Kingdom')
        ];
    };
    CountryStateService.prototype.getStates = function () {
        return [
            new State_1.State(1, 1, 'Alabama'),
            new State_1.State(2, 1, 'Alaska'),
            new State_1.State(3, 1, 'Arizona'),
            new State_1.State(5, 1, 'Arkansas'),
            new State_1.State(6, 1, 'California'),
            new State_1.State(7, 1, 'Colorado'),
            new State_1.State(8, 1, 'Connecticut'),
            new State_1.State(9, 1, 'Delaware'),
            new State_1.State(10, 1, 'Florida'),
            new State_1.State(11, 1, 'Georgia'),
            new State_1.State(12, 1, 'Hawaii'),
            new State_1.State(13, 1, 'Idaho'),
            new State_1.State(14, 1, 'Illinois'),
            new State_1.State(15, 1, 'Indiana'),
            new State_1.State(16, 2, 'New Delhi'),
            new State_1.State(17, 2, 'Maharashtra'),
            new State_1.State(18, 2, 'Goa'),
            new State_1.State(19, 2, 'Punjab'),
            new State_1.State(20, 2, 'Haryana'),
            new State_1.State(21, 2, 'Uttar Pradesh'),
            new State_1.State(22, 2, 'Rajasthan'),
            new State_1.State(23, 2, 'Andhra Pradesh'),
            new State_1.State(24, 2, 'Jharkhand'),
            new State_1.State(25, 2, 'Madhya Pradesh'),
            new State_1.State(26, 3, 'New South Wales'),
            new State_1.State(27, 3, 'Tasmania'),
            new State_1.State(28, 3, 'Qweensland'),
            new State_1.State(29, 3, 'Western Australia'),
            new State_1.State(30, 3, 'Victoria'),
            new State_1.State(31, 4, 'Auckland'),
            new State_1.State(32, 4, 'Wellington'),
            new State_1.State(33, 4, 'Christchurch'),
            new State_1.State(34, 4, 'Hamilton'),
            new State_1.State(35, 4, 'Napier'),
            new State_1.State(31, 5, 'Eastern Cape'),
            new State_1.State(32, 5, 'Limpopo'),
            new State_1.State(33, 5, 'Mpumalanga'),
            new State_1.State(34, 5, 'North West'),
            new State_1.State(35, 5, 'Northern Cape'),
            new State_1.State(31, 6, 'Herefordshire'),
            new State_1.State(32, 6, 'Durham'),
            new State_1.State(33, 6, 'Manchester'),
            new State_1.State(34, 6, 'South Yorkshire'),
            new State_1.State(35, 6, 'Birmingham')
        ];
    };
    return CountryStateService;
}());
CountryStateService = __decorate([
    core_1.Injectable()
], CountryStateService);
exports.CountryStateService = CountryStateService;
//# sourceMappingURL=CountryStateService.js.map