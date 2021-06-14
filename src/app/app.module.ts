import { LoginModule } from './modules/login/login.module';
import { FileModule } from './modules/file/file.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardModule } from './modules/dashboard-layout/dashboard-layout.module';
import {TableModule} from 'primeng/table';
import { SharedModule } from './shared/shared.module';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FileModule,
    LoginModule,
    DashboardModule,
    TableModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
