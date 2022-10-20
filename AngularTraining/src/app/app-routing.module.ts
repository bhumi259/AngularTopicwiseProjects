import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BhumikaForgotPasswordComponent } from './components/bhumika-forgot-password/bhumika-forgot-password.component';
import { BhumikaLoginComponent } from './components/bhumika-login/bhumika-login.component';
import { BhumikaNotFoundComponent } from './components/bhumika-not-found/bhumika-not-found.component';
import { BhumikaAuthGuard } from './guards/bhumika-auth.guard';

const routes: Routes = [
  {path:'login', component:BhumikaLoginComponent},
  {path:'forgot-password', component:BhumikaForgotPasswordComponent},
  // {path:'admin',loadChildren:()=> import('./modules/admin/bhumika-admin.module').then((m)=>m.BhumikaAdminModule)},
  {path:'admin', 
  canActivate:[BhumikaAuthGuard],
  loadChildren:()=> import('./modules/bhumika-admin/bhumika-admin.module')
  .then((m)=>m.BhumikaAdminModule)},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path:'**', component:BhumikaNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
