import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {TeamManageComponent} from "@app/modules/teams/team-manage/team-manage.component";
import {ManageTeamsEditFormComponent} from "@app/modules/teams/team-manage-edit-form/manage-teams-edit-form.component";
import {TeamAddEmployeeComponent} from "@app/modules/teams/team-add-employee/team-add-employee.component";
import {TeamTasksComponent} from "@app/modules/teams/team-tasks/team-tasks.component";
import {TeamTasksEditFormComponent} from "@app/modules/teams/team-tasks-edit-form/team-tasks-edit-form.component";


const routes: Routes = [
  {
    path: '',
    component: TeamManageComponent
  },
  {
    path: 'teams-edit/:teamId',
    component: ManageTeamsEditFormComponent
  },
  {
    path: 'add-employee.ts-team/:teamId',
    component: TeamAddEmployeeComponent
  },
  {
    path: 'team-task',
    component: TeamTasksComponent
  },
  {
    path: 'team-task-edit/:taskTeamId',
    component: TeamTasksEditFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamsRoutingModule {
}
