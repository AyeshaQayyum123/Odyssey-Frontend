import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FileService } from './../../services/file.service';

@Component({
    templateUrl: './file.component.html',
    encapsulation: ViewEncapsulation.None,
    styleUrls: ['./file.component.scss']
  })
export class FileComponent implements OnInit{
    data: any;
    constructor(private fileService: FileService){

    }

    ngOnInit(){
        let data = this.fileService.getAllFile().subscribe((resp: any) => {
            data = resp;
            console.log(resp);
        });
        
    }


}