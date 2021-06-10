import { FileRoutingModule } from './file-routing.module';
import { NgModule } from "@angular/core";
import { FileComponent } from "src/app/components/file/file.component";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputComponent } from 'src/app/shared/controls/input/input.component';

@NgModule({
    declarations: [
        FileComponent,
        InputComponent
    ],
    imports: [
        FileRoutingModule,
        CommonModule,
        FormsModule
    ]
})
export class FileModule{

}