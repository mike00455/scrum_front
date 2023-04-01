import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LandingPageComponent} from "@app/layout/landing-page/landing-page.component";
import {MainComponent} from "@app/layout/main/main.component";


const routes: Routes = [
  {
    path: '',
    component: LandingPageComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('@app/modules/auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'app',
    component: MainComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('@app/modules/dashboard/dashboard.module').then(m => m.DashboardModule),
      },
      {
        path: 'subprojectsM',
        loadChildren: () => import('@app/modules/subprojects/subprojects.module').then(m => m.SubprojectsModule)
      },
      {
        path: 'customer',
        loadChildren: () => import('@app/modules/customer/customer.module').then(m => m.CustomerModule)
      },
      {
        path: 'area',
        loadChildren: () => import('@app/modules/area/area.module').then(m => m.AreaModule)
      },
      {
        path: 'employees',
        loadChildren: () => import('@app/modules/employees/employees.module').then(m => m.EmployeesModule)
      },
      {
        path: 'teams',
        loadChildren: () => import('@app/modules/teams/teams.module').then(m => m.TeamsModule)
      },
      {
        path:'manage-board',
        loadChildren:()=>import('@app/modules/manage-board/manage-board.module').then(m => m.ManageBoardModule)
      },
      {
        path: 'sprints',
        loadChildren: () => import('@app/modules/sprints/sprints.module').then(m => m.SprintsModule)
      },

      {
        path: 'proyect',
        loadChildren: () => import('@app/modules/proyect/proyect.module').then(m => m.ProyectModule)
      },

      {
        path: 'board',
        loadChildren: () => import('@app/modules/manage-board/manage-board.module').then(m => m.ManageBoardModule)
      },

      {
        path: 'improvements',
        loadChildren: () => import('@app/modules/manage-improvements/manage-improvements.module').then(m => m.ManageImprovementsModule)
      }

    ]
  },

];






@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
