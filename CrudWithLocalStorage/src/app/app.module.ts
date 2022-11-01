import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmployeeComponent } from './Employee/list-employee/list-employee.component';
import { EditEmployeeComponent } from './Employee/edit-employee/edit-employee.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmployeeService } from './Employee/employee.service';
import { AddEmployeeComponent } from './Employee/add-employee/add-employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginEmployeeComponent } from './Employee/login-employee/login-employee.component';
import { LogoutEmployeeComponent } from './Employee/logout-employee/logout-employee.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ListEmployeeComponent,
    EditEmployeeComponent,
    AddEmployeeComponent,
    PageNotFoundComponent,
    LoginEmployeeComponent,
    LogoutEmployeeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
