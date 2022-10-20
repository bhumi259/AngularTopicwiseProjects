import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BhumikaForgotPasswordComponent } from './bhumikacomponents/bhumika-forgot-password/bhumika-forgot-password.component';
import { BhumikaLoginComponent } from './bhumikacomponents/bhumika-login/bhumika-login.component';
import { BhumikaNotFoundComponent } from './bhumikacomponents/bhumika-not-found/bhumika-not-found.component';

const routes: Routes = [
  {path: 'login',component:BhumikaLoginComponent},
  {path:'forgot-password',component:BhumikaForgotPasswordComponent},
  {path:'admin',loadChildren:()=> import('./bhumikaModules/bhumika-admin/bhumika-admin.module').then((m)=>m.BhumikaAdminModule)},
  {path:'',redirectTo:'/login',pathMatch:'full'},
  {path: '**', component: BhumikaNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
