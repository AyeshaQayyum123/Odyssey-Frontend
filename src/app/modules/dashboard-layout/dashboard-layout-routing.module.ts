
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard-layout/dashboard-layout.component';
import { EmployeesComponent } from 'src/app/components/employees/employees.component';
import { FileComponent } from 'src/app/components/file/file.component';


const routes: Routes = [
    { path: 'dashboard',
      component: DashboardComponent,
      children: [
        { path: 'employee-detail', component: EmployeesComponent },
        { path: 'files', component: FileComponent }
      ]},
  ];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }

