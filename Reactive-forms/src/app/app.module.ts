import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BhumikaFormGroupComponent } from './bhumika-form-group/bhumika-form-group.component';
import { BhumikaFormControlComponent } from './bhumika-form-control/bhumika-form-control.component';
import { BhumikaNestedFormGroupComponent } from './bhumika-nested-form-group/bhumika-nested-form-group.component';
import { BhumikaDynamicFormComponent } from './bhumika-dynamic-form/bhumika-dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BhumikaFormGroupComponent,
    BhumikaFormControlComponent,
    BhumikaNestedFormGroupComponent,
    BhumikaDynamicFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
