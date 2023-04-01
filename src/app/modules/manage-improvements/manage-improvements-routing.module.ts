import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageImprovementsComponent } from "@app/modules/manage-improvements/pages/manage-improvements/manage-improvements.component";

const routes: Routes = [
  {
    path: '',
    component: ManageImprovementsComponent
  }
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManageImprovementsRoutingModule { }
