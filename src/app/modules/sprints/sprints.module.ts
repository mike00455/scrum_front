import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { SprintsRoutingModule } from './sprints-routing.module';
import { ManageSprintsComponent } from './pages/manage-sprints/manage-sprints.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { SprintsUpdateComponent } from "@app/modules/sprints/pages/add-userStory-sprint/sprints-update.component";
import { CalculateSprintPointsComponent } from './pages/calculate-sprint-points/calculate-sprint-points.component';
import { EditEmployeeSprintComponent } from './pages/edit-employee-sprint/edit-employee-sprint.component';
import { ScoreSprintDaysComponent } from './pages/score-sprint-days/score-sprint-days.component';




@NgModule({
  providers:[
    DatePipe
  ],
  declarations: [
    ManageSprintsComponent,
    SprintsUpdateComponent,
    CalculateSprintPointsComponent,
    EditEmployeeSprintComponent,
    ScoreSprintDaysComponent
  ],
    imports: [
        CommonModule,
        SprintsRoutingModule,
        ReactiveFormsModule,
        MatButtonModule,
        FormsModule
    ]
})
export class SprintsModule { }
