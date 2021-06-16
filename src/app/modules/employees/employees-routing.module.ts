import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EmployeesComponent } from 'src/app/components/employees/employees.component';


const ROUTES = [
    { path: 'employee-detail', component: EmployeesComponent }
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [RouterModule],
})
export class EmployeesRoutingModule { }
