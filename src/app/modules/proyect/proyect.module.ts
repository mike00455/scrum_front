import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProyectRoutingModule } from './proyect-routing.module';
import { ProyectComponent } from "@app/modules/proyect/pages/proyect/proyect.component";
import { ProyectEditComponent } from './pages/proyect-edit/proyect-edit.component';
import { SharedModule } from "@app/shared/shared.module";
import { ProyectAddComponent } from './pages/proyect-add/proyect-add.component';
import { SubprojetcComponent } from './pages/subprojetc/subprojetc.component';
import { SubprojetcEditComponent } from './pages/subprojetc-edit/subprojetc-edit.component';
import { SubprojetcAddComponent } from './pages/subprojetc-add/subprojetc-add.component';



@NgModule({
  declarations: [
    ProyectComponent,
    ProyectEditComponent,
    ProyectAddComponent,
    SubprojetcComponent,
    SubprojetcEditComponent,
    SubprojetcAddComponent,
  ],
  imports: [
    CommonModule,
    ProyectRoutingModule,
    SharedModule
  ]
})
export class ProyectModule { }
