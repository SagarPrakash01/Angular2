import {Component, Input, Output, EventEmitter} from "@angular/core";

@Component({
    selector: "grid-ui",
    templateUrl: "../../UI/Grid.html"
})
export class GridComponent {
    //declare  generic collection for data
    gridData: Array<Object> = new Array<Object>();
    //generic column collection
    gridColumns: Array<Object> = new Array<Object>();
    //Entity Name 
    @Input("grid-entityname")
    EntityName: string = "";

    @Input("grid-data")
    set gridDataSet(_gridData: Array<Object>) {
        if (_gridData.length > 0) {
            if (this.gridColumns.length == 0) { //Add column heading once
                //fill column names in gridColumns collection
                var columnNames = Object.keys(_gridData[0]); //JavaScript method to which pass the first object of the collection                
                for (var index in columnNames) {
                    this.gridColumns.push(columnNames[index]);
                }
            }
        }
        this.gridData = _gridData;
    }

    //selected is an event which emit out an object back to the parent component
    @Output("grid-selected")
    selected: EventEmitter<Object> = new EventEmitter<Object>(); //selected is an event which is getting raised from Select() method
    Select(_selected: Object) {
        this.selected.emit(_selected);  //emit out selected object to the parent component
    }

}
