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
var GridComponent = (function () {
    function GridComponent() {
        //declare  generic collection for data
        this.gridData = new Array();
        //generic column collection
        this.gridColumns = new Array();
        //Entity Name  
        this.EntityName = "";
        this.selected = new core_1.EventEmitter();
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
    //selected is an event which will get raised from Select() method
    GridComponent.prototype.Select = function (_selectedrow) {
        this.selected.emit(_selectedrow); //emit out selected row to parent Component
    };
    return GridComponent;
}());
__decorate([
    core_1.Input("grid-entityname"),
    __metadata("design:type", String)
], GridComponent.prototype, "EntityName", void 0);
__decorate([
    core_1.Input("grid-data"),
    __metadata("design:type", Array),
    __metadata("design:paramtypes", [Array])
], GridComponent.prototype, "gridDataSet", null);
__decorate([
    core_1.Output("grid-selectedrecord"),
    __metadata("design:type", core_1.EventEmitter)
], GridComponent.prototype, "selected", void 0);
GridComponent = __decorate([
    core_1.Component({
        selector: "grid-ui",
        templateUrl: "../../UI/grid.html"
    })
], GridComponent);
exports.GridComponent = GridComponent;
//# sourceMappingURL=GridComponent.js.map