import {  DashboardRoutingModule  } from './dashboard-layout-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { DashboardComponent } from 'src/app/components/dashboard-layout/dashboard-layout.component';


@NgModule({
  declarations: [
    DashboardComponent
  
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
     SharedModule,
  ]
})
export class DashboardModule { }
