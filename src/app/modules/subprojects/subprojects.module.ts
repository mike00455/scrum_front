import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {UserStoryComponent} from './pages/user-story/user-story.component';
import {SubprojectsRoutingModule} from "@app/modules/subprojects/subprojects-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {UserStoryManagementComponent} from './pages/user-story-management/user-story-management.component';



@NgModule({
  declarations: [
    UserStoryComponent,
    UserStoryManagementComponent,
  ],
  imports: [
    CommonModule,
    SubprojectsRoutingModule,
    ReactiveFormsModule,
    MatButtonModule,


  ]
})
export class SubprojectsModule { }
