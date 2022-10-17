import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DynamicformComponent } from './dynamicform/dynamicform.component';
import { FormBuilderComponent } from './form-builder/form-builder.component';
import { FormOneComponent } from './form-one/form-one.component';
import { FormTwoComponent } from './form-two/form-two.component';
import { NestedFormGroupComponent } from './nested-form-group/nested-form-group.component';

const routes: Routes = [
  {path:'form-control-example', component:FormOneComponent},
  {path:'form-group-example', component:FormTwoComponent},
  {path:'nested-form-group', component:NestedFormGroupComponent},
  {path:'form-builder-in-form-group-example', component:FormBuilderComponent},
  {path:'dynamic-form-example', component:DynamicformComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
