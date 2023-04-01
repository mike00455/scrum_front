import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ManageImprovementsRoutingModule } from './manage-improvements-routing.module';
import { ManageImprovementsComponent } from './pages/manage-improvements/manage-improvements.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ManageImprovementsComponent
  ],
  imports: [
    CommonModule,
    ManageImprovementsRoutingModule,
    ReactiveFormsModule
  ]
})
export class ManageImprovementsModule { }
