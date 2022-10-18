import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BhumikaDynamicFormComponent } from './bhumika-dynamic-form/bhumika-dynamic-form.component';
import { BhumikaFormControlComponent } from './bhumika-form-control/bhumika-form-control.component';
import { BhumikaFormGroupComponent } from './bhumika-form-group/bhumika-form-group.component';
import { BhumikaNestedFormGroupComponent } from './bhumika-nested-form-group/bhumika-nested-form-group.component';

const routes: Routes = [
  {path:'form-control-example', component:BhumikaFormControlComponent},
  {path:'form-group-example', component:BhumikaFormGroupComponent},
  {path:'nested-form-group', component:BhumikaNestedFormGroupComponent},
  {path:'dynamic-form-group-example', component:BhumikaDynamicFormComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
