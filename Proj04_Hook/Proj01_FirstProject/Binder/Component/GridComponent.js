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
var core_1 = require("@angular/core");
var GridComponent = (function () {
    function GridComponent() {
        //declare  generic collection for data
        this.gridData = new Array();
        //generic column collection
        this.gridColumns = new Array();
        //Entity Name 
        this.EntityName = "";
        //selected is an event which emit out an object back to the parent component
        this.selected = new core_1.EventEmitter(); //selected is an event which is getting raised from Select() method
        console.log("Constructor");
    }
    Object.defineProperty(GridComponent.prototype, "gridDataSet", {
        set: function (_gridData) {
            if (_gridData.length > 0) {
                if (this.gridColumns.length == 0) {
                    //fill column names in gridColumns collection
                    var columnNames = Object.keys(_gridData[0]); //JavaScript method to which pass the first object of the collection                
                    for (var index in columnNames) {
                        this.gridColumns.push(columnNames[index]);
                    }
                }
            }
            this.gridData = _gridData;
        },
        enumerable: true,
        configurable: true
    });
    GridComponent.prototype.Select = function (_selected) {
        this.selected.emit(_selected); //emit out selected object to the parent component
    };
    GridComponent.prototype.ngOnChanges = function () {
        console.log("ngOnchanges");
    };
    GridComponent.prototype.ngOnInit = function () {
        console.log("ngOnInit");
    };
    GridComponent.prototype.ngDoCheck = function () {
        console.log("ngDoCheck");
    };
    GridComponent.prototype.ngAfterContentInit = function () {
        console.log("ngAfterContentInit");
    };
    GridComponent.prototype.ngAfterContentChecked = function () {
        console.log("ngAfterContentChecked");
    };
    GridComponent.prototype.ngAfterViewInit = function () {
        console.log("ngAfterViewInit");
    };
    GridComponent.prototype.ngAfterViewChecked = function () {
        console.log("ngAfterViewChecked");
    };
    GridComponent.prototype.ngOnDestroy = function () {
        console.log("ngOnDestroy");
    };
    __decorate([
        core_1.Input("grid-entityname"), 
        __metadata('design:type', String)
    ], GridComponent.prototype, "EntityName", void 0);
    __decorate([
        core_1.Input("grid-data"), 
        __metadata('design:type', Array), 
        __metadata('design:paramtypes', [Array])
    ], GridComponent.prototype, "gridDataSet", null);
    __decorate([
        core_1.Output("grid-selected"), 
        __metadata('design:type', core_1.EventEmitter)
    ], GridComponent.prototype, "selected", void 0);
    GridComponent = __decorate([
        core_1.Component({
            selector: "grid-ui",
            templateUrl: "../../UI/Grid.html"
        }), 
        __metadata('design:paramtypes', [])
    ], GridComponent);
    return GridComponent;
}());
exports.GridComponent = GridComponent;
//# sourceMappingURL=GridComponent.js.map