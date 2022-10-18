import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BhumikaItemDetailComponent } from './bhumika-item-detail/bhumika-item-detail.component';
import { BhumikaChildComponent } from './bhumika-child/bhumika-child.component';

@NgModule({
  declarations: [
    AppComponent,
    BhumikaItemDetailComponent,
    BhumikaChildComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
