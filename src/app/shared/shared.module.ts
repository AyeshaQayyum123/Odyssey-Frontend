import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { InputComponent } from "./controls/input/input.component";


@NgModule({
  declarations: [
    InputComponent
  ],
  imports: [
    
    
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    InputComponent
  ]
})
export class SharedModule { }
