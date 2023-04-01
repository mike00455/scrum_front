import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './pages/board/board.component';
import {ManageBoardRoutingModule} from "@app/modules/manage-board/manage-board-routing.module";
import {ReactiveFormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";




@NgModule({
  declarations: [
    BoardComponent
  ],

    imports: [
        CommonModule,
        ManageBoardRoutingModule,
        ReactiveFormsModule,
        MatCardModule,
        MatButtonModule
    ]
})
export class ManageBoardModule { }
