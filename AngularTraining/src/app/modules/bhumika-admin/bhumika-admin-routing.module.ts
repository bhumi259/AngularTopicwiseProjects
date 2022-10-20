import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BhumikaAboutComponent } from '../admin/components/bhumika-about/bhumika-about.component';
import { BhumikaAdminDashboardComponent } from '../admin/components/bhumika-admin-dashboard/bhumika-admin-dashboard.component';
import { BhumikaContactComponent } from '../admin/components/bhumika-contact/bhumika-contact.component';
import { BhumikaHomeComponent } from '../admin/components/bhumika-home/bhumika-home.component';
import { BhumikaServicesComponent } from '../admin/components/bhumika-services/bhumika-services.component';

const routes: Routes = [
  {
    path: '', component: BhumikaAdminDashboardComponent,
    children: [
      { path: 'home', component: BhumikaHomeComponent },
      { path: 'about', component: BhumikaAboutComponent },
      { path: 'services', component: BhumikaServicesComponent },
      { path: 'contact', component: BhumikaContactComponent },
      { path: '', redirectTo: '/admin/home', pathMatch: 'full' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BhumikaAdminRoutingModule { }
