import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEmployeeComponent } from './Employee/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Employee/edit-employee/edit-employee.component';
import { EmployeeGuard } from './Employee/employee.guard';
import { ListEmployeeComponent } from './Employee/list-employee/list-employee.component';
import { LoginEmployeeComponent } from './Employee/login-employee/login-employee.component';
import { LogoutEmployeeComponent } from './Employee/logout-employee/logout-employee.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [

  { path: '',
    redirectTo: '/employee-login',
    pathMatch: 'full'
  },
  {path:'employee-login', component:LoginEmployeeComponent},
  {path:'employee-logout', component:LogoutEmployeeComponent},
  {path:'employee-list', component:ListEmployeeComponent,canActivate:[EmployeeGuard]},
  {path:'edit/:id', component:EditEmployeeComponent,canActivate:[EmployeeGuard]},
  {path:'employee-add', component:AddEmployeeComponent,canActivate:[EmployeeGuard]},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
