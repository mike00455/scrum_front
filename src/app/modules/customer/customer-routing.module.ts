import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CustomerComponent} from "@app/modules/customer/pages/customer/customer.component";
import {CustomerEditFormComponent} from "@app/modules/customer/pages/customer-edit-form/customer-edit-form.component";


const routes: Routes = [
  {
    path: '',
    component: CustomerComponent
  },
  {
    path:'customer_edit_form/:clientId',
    component:CustomerEditFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class customerRoutingModule { }
