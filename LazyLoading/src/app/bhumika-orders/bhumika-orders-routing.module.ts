import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BhumikaOrdersComponent } from './bhumika-orders.component';

const routes: Routes = [
  { 
    path: '', 
    component: BhumikaOrdersComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BhumikaOrdersRoutingModule { }
