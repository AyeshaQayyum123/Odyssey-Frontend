import { Component, Input, OnInit } from "@angular/core";

@Component({
    selector: 'forminput',
    templateUrl: './form-input.component.html',
    styleUrls: ['./form-input.component.scss']

})
export class FormInputComponent implements OnInit{
@Input() type: string = "text";
@Input() placeholder: string = "placeholder";
@Input() lable: string = "lable";
    constructor(){

    }
    ngOnInit(){

    }
}