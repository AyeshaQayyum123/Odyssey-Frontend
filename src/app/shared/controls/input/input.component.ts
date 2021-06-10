import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'Input1',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss']

})
export class InputComponent implements OnInit{
@Input() type: string = "text";
@Input() placeholder: string = "placeholder";
    constructor(){

    }
    ngOnInit(){

    }
}