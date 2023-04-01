import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AreaComponent} from "@app/modules/area/pages/area/area.component";
import {AreaEditComponent} from "@app/modules/area/pages/area-edit/area-edit.component";

const routes: Routes = [
  {
    path: '',
    component: AreaComponent
  },
  {
    path: 'edit-area/:areaId',
    component: AreaEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  AreaRoutingModule {}
