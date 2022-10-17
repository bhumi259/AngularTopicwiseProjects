import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BhumikaCustomersComponent } from './bhumika-customers.component';

const routes: Routes = [
  { 
    path: '', 
    component: BhumikaCustomersComponent 
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BhumikaCustomersRoutingModule { }
