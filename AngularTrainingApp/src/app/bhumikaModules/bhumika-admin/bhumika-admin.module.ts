import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BhumikaAdminRoutingModule } from './bhumika-admin-routing.module';
import { BhumikaAdminDashboardComponent } from './bhumikaComponents/bhumika-admin-dashboard/bhumika-admin-dashboard.component';
import { BhumikaHeaderComponent } from './bhumikaComponents/bhumika-header/bhumika-header.component';
import { BhumikaFooterComponent } from './bhumikaComponents/bhumika-footer/bhumika-footer.component';
import { BhumikaHomeComponent } from './bhumikaComponents/bhumika-home/bhumika-home.component';
import { BhumikaAboutComponent } from './bhumikaComponents/bhumika-about/bhumika-about.component';
import { BhumikaContactComponent } from './bhumikaComponents/bhumika-contact/bhumika-contact.component';
import { BhumikaServicesComponent } from './bhumikaComponents/bhumika-services/bhumika-services.component';


@NgModule({
  declarations: [
    BhumikaAdminDashboardComponent,
    BhumikaHeaderComponent,
    BhumikaFooterComponent,
    BhumikaHomeComponent,
    BhumikaAboutComponent,
    BhumikaContactComponent,
    BhumikaServicesComponent
  ],
  imports: [
    CommonModule,
    BhumikaAdminRoutingModule
  ]
})
export class BhumikaAdminModule { }
