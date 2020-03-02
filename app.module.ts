import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import {RouterModule,Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { EmployeeShowAllComponent } from './employee-show-all/employee-show-all.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { ManagerDetailsComponent } from './manager-details/manager-details.component';
import { PendingComponent } from './pending/pending.component';
import { AppdenyComponent } from './appdeny/appdeny.component';


const appRoutes : Routes = [ 
  {path:'', component:EmployeeShowAllComponent},
  {path:'Login', component:LoginComponent},
  {path:'Dashboard', component:DashboardComponent},
  {path:'Pending', component:PendingComponent},
  {path:'Appdeny', component:AppdenyComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeeShowAllComponent,
    LoginComponent,
    DashboardComponent,
    EmployeeDetailsComponent,
    ManagerDetailsComponent,
    PendingComponent,
    AppdenyComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
