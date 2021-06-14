import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from 'src/app/components/dashboard-layout/dashboard-layout.component';


const ROUTES = [
    { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [RouterModule],
})
export class DashboardRoutingModule { }
