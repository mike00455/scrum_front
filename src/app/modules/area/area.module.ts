import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreaComponent } from './pages/area/area.component';
import {ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {AreaRoutingModule} from "@app/modules/area/area-routing.module";
import { AreaEditComponent } from './pages/area-edit/area-edit.component';



@NgModule({
  declarations: [
    AreaComponent,
    AreaEditComponent
  ],
  imports: [
    CommonModule,
    AreaRoutingModule,
    ReactiveFormsModule,
    MatButtonModule
  ]
})
export class AreaModule { }
