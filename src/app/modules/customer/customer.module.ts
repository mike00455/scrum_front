import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerComponent } from './pages/customer/customer.component';
import {customerRoutingModule} from "@app/modules/customer/customer-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {CustomerEditFormComponent} from "@app/modules/customer/pages/customer-edit-form/customer-edit-form.component";




@NgModule({
  declarations: [
    CustomerComponent,
    CustomerEditFormComponent
  ],
    imports: [
        CommonModule,
        customerRoutingModule,
        ReactiveFormsModule
    ]
})
export class CustomerModule { }
