import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamManageComponent} from './team-manage/team-manage.component';
import {TeamsRoutingModule} from "@app/modules/teams/teams-routing.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {ManageTeamsEditFormComponent} from './team-manage-edit-form/manage-teams-edit-form.component';
import {TeamAddEmployeeComponent} from './team-add-employee/team-add-employee.component';
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatTableModule} from "@angular/material/table";
import {EmployeesModule} from "@app/modules/employees/employees.module";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatButtonModule} from "@angular/material/button";
import {TeamTasksComponent} from './team-tasks/team-tasks.component';
import {TeamTasksEditFormComponent} from './team-tasks-edit-form/team-tasks-edit-form.component';
import {TeamEmployeesListComponent} from "@app/modules/teams/team-employees-list/team-employees-list.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatSortModule} from "@angular/material/sort";



@NgModule({
  declarations: [
    TeamManageComponent,
    ManageTeamsEditFormComponent,
    TeamAddEmployeeComponent,
    TeamTasksComponent,
    TeamTasksEditFormComponent,
    TeamEmployeesListComponent,
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    FormsModule,
    MatTableModule,
    EmployeesModule,
    MatPaginatorModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
  ]
})
export class TeamsModule {
}
