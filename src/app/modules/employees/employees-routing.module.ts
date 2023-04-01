import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {EmployeeComponent} from "@app/modules/employees/pages/employee/employee.component";
import {EmployeeEditFormComponent} from "@app/modules/employees/pages/employee-edit-form/employee-edit-form.component";

const routes: Routes = [
  {
  path: '',
  component: EmployeeComponent
  },
  {
    path: 'employee-edit-form/:employeeId',
    component: EmployeeEditFormComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeesRoutingModule { }
