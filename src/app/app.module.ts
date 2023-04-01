import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {DataModule} from './data/data.module';
import {SharedModule} from './shared/shared.module';
import {CommonModule, LocationStrategy, PathLocationStrategy} from "@angular/common";
import {HeaderComponent} from './layout/header/header.component';
import {SidenavComponent} from './layout/sidenav/sidenav.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MainComponent} from './layout/main/main.component';
import {FooterComponent} from './layout/footer/footer.component';
import {LandingPageComponent} from './layout/landing-page/landing-page.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatLineModule} from "@angular/material/core";
import {MatMenuModule} from "@angular/material/menu";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FilterAddEmployeesTeamPipe } from './pipes/pages/filter-employees-add-team/filter-add-employees-team.pipe';






@NgModule({

  declarations: [
    AppComponent,
    HeaderComponent,
    SidenavComponent,
    MainComponent,
    FooterComponent,
    LandingPageComponent,
    FilterAddEmployeesTeamPipe,


  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    //Modules
    DataModule,
    CoreModule,
    SharedModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,


    //Material Modules
    MatSidenavModule,
    MatLineModule,
    MatMenuModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    NgbModule


  ],
  providers: [

    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ],
  exports: [
    FilterAddEmployeesTeamPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
