import { SharedModule } from './../../shared/shared.module';
import { FileRoutingModule } from './file-routing.module';
import { NgModule } from "@angular/core";
import { FileComponent } from "src/app/components/file/file.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        FileComponent
    ],
    imports: [
        FileRoutingModule,
        CommonModule,
        FormsModule,
        SharedModule
    ]
})
export class FileModule{

}