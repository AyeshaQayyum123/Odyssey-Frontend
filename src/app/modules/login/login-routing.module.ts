import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from 'src/app/components/login/login.component';


const ROUTES = [
    { path: 'login', component: LoginComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [RouterModule],
})
export class LoginRoutingModule { }


