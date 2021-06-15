import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { ButtonComponent } from "./controls/button/button.component";
import { DataTableComponent } from "./controls/data-table/data-table.component";
import { FormInputComponent } from "./controls/form-input/form-input.component";
import { InputComponent } from "./controls/input/input.component";
import { NavbarComponent } from "./controls/navbar/tsnavbar.component";
import { RadioButtonComponent } from "./controls/radio-button/radio-button.component";
import { SidebarComponent } from "./controls/sidebar/sidebar.component";

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    NavbarComponent,
    SidebarComponent,
    DataTableComponent,
    RadioButtonComponent,
    FormInputComponent
  
  ],
  imports: [
    

  ],
  exports: [
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    InputComponent,
    ButtonComponent,
    NavbarComponent,
    SidebarComponent,
    DataTableComponent,
    RadioButtonComponent,
    FormInputComponent
  ]
})
export class SharedModule { }
