import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BhumikaCustomersRoutingModule } from './bhumika-customers-routing.module';
import { BhumikaCustomersComponent } from './bhumika-customers.component';


@NgModule({
  declarations: [
    BhumikaCustomersComponent
  ],
  imports: [
    CommonModule,
    BhumikaCustomersRoutingModule
  ]
})
export class BhumikaCustomersModule { }
