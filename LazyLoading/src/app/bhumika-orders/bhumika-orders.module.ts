import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BhumikaOrdersRoutingModule } from './bhumika-orders-routing.module';
import { BhumikaOrdersComponent } from './bhumika-orders.component';


@NgModule({
  declarations: [
    BhumikaOrdersComponent
  ],
  imports: [
    CommonModule,
    BhumikaOrdersRoutingModule
  ]
})
export class BhumikaOrdersModule { }
