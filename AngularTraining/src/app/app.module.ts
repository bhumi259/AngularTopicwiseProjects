import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BhumikaLoginComponent } from './components/bhumika-login/bhumika-login.component';
import { BhumikaForgotPasswordComponent } from './components/bhumika-forgot-password/bhumika-forgot-password.component';
import { BhumikaNotFoundComponent } from './components/bhumika-not-found/bhumika-not-found.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BhumikaAdminDashboardComponent } from './modules/admin/components/bhumika-admin-dashboard/bhumika-admin-dashboard.component';
import { BhumikaHeaderComponent } from './modules/admin/components/bhumika-header/bhumika-header.component';
import { BhumikaFooterComponent } from './modules/admin/components/bhumika-footer/bhumika-footer.component';
import { BhumikaHomeComponent } from './modules/admin/components/bhumika-home/bhumika-home.component';
import { BhumikaAboutComponent } from './modules/admin/components/bhumika-about/bhumika-about.component';
import { BhumikaContactComponent } from './modules/admin/components/bhumika-contact/bhumika-contact.component';
import { BhumikaServicesComponent } from './modules/admin/components/bhumika-services/bhumika-services.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BhumikaLoginComponent,
    BhumikaForgotPasswordComponent,
    BhumikaNotFoundComponent,
    BhumikaAdminDashboardComponent,
    BhumikaHeaderComponent,
    BhumikaFooterComponent,
    BhumikaHomeComponent,
    BhumikaAboutComponent,
    BhumikaContactComponent,
    BhumikaServicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
