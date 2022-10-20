import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BhumikaLoginComponent } from './bhumikacomponents/bhumika-login/bhumika-login.component';
import { BhumikaForgotPasswordComponent } from './bhumikacomponents/bhumika-forgot-password/bhumika-forgot-password.component';
import { BhumikaNotFoundComponent } from './bhumikacomponents/bhumika-not-found/bhumika-not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BhumikaLoginComponent,
    BhumikaForgotPasswordComponent,
    BhumikaNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
