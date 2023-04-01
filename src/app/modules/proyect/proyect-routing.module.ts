import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProyectComponent } from "@app/modules/proyect/pages/proyect/proyect.component";
import { ProyectEditComponent } from "@app/modules/proyect/pages/proyect-edit/proyect-edit.component";
import { ProyectAddComponent } from "@app/modules/proyect/pages/proyect-add/proyect-add.component";
import { SubprojetcComponent } from "@app/modules/proyect/pages/subprojetc/subprojetc.component";
import { SubprojetcAddComponent } from "@app/modules/proyect/pages/subprojetc-add/subprojetc-add.component";
import { SubprojetcEditComponent } from "@app/modules/proyect/pages/subprojetc-edit/subprojetc-edit.component";

const routes: Routes = [
  {
    path: '',
    component: ProyectComponent
  },
  {
    path: 'proyect-edit/:proyectId',
    component: ProyectEditComponent
  },
  {
    path: 'proyect-add',
    component: ProyectAddComponent
  },
  {
    path: 'subproject-see',
    component: SubprojetcComponent
  },
  {
    path: 'subproject-add',
    component: SubprojetcAddComponent
  },
  {
    path: 'subproject-edit/:subProjectId',
    component: SubprojetcEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProyectRoutingModule {
}
