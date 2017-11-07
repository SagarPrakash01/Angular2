import {Component, Input, Output, EventEmitter} from "@angular/core";


@Component({
    selector: "grid-ui",
    templateUrl : "../../UI/Grid.html"
})
export class GridComponent {
    gridData: Array<Object> = new Array<Object>();

    @Input("grid-entityname")
    EntityName: string = "";

    gridColumns: Array<Object> = new Array<Object>();

    @Input("grid-data")
    set gridDataSet(_gridData: Array<Object>) {
         //check if _gridData has records
        if (_gridData.length > 0) {
            //if yes populate column names only once
            if (this.gridColumns.length == 0) {
               //read all column name from first record 
                var colNames = Object.keys(_gridData[0]);
                //populate collection gridColumns
                for (var index in colNames) {
                    this.gridColumns.push(colNames[index]);
                }
            }
            this.gridData = _gridData;
        }
    }


    //selected is an event which emit out an object back to the parent component

    @Output("grid-selected")
    selected: EventEmitter<Object> = new EventEmitter<Object>(); //selected is an event which is getting raised from Select() method

    Select(_selected: Object) {
        this.selected.emit(_selected);  //emit out selected object to the parent component
    }



}