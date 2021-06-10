import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ButtonComponent } from "./controls/button/button.component";
import { InputComponent } from "./controls/input/input.component";


@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent
  ],
  imports: [
    
    
  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    InputComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
