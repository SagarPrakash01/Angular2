import { Component } from "@angular/core";
import * as $ from "jquery";

@Component({
    template: `    
    <div  id="demo">
        <h3>JQuery Toggle demo</h3>
    </div>
    <br/><br/>
    <input type="button"  value="JQuery Toggle" (click)="Toggle()" />
`
})

export class JQueryComponent {
    Toggle() {
        $("#demo").toggle(); //toggle is jquery method
    }
}