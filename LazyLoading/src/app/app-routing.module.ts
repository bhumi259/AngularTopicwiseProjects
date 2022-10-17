import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'bhumika_customers', 
    loadChildren: () => import('./bhumika-customers/bhumika-customers.module').then(m => 
      m.BhumikaCustomersModule) 
    }, 
    { 
      path: 'bhumika_orders', 
      loadChildren: () => import('./bhumika-orders/bhumika-orders.module').then(m => 
        m.BhumikaOrdersModule) 
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full'
      }
    ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
