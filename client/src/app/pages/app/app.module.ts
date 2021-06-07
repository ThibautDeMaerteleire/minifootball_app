import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';

import { AppLayoutComponent } from './layout/app-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { InfoCreateTeamComponent } from './teams/create-team/slides/info-create-team/info-create-team.component';
import { WidgetsModule } from 'src/app/widgets/widgets.module';
import { TeamsOverviewComponent } from './teams/teams-overview/teams-overview.component';
import { CreateTeamComponent } from './teams/create-team/create-team.component';
import { SearchTeamComponent } from './teams/search-team/search-team.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppLayoutComponent,
    DashboardComponent,
    InfoCreateTeamComponent,
    TeamsOverviewComponent,
    CreateTeamComponent,
    SearchTeamComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    WidgetsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  bootstrap: [
    AppLayoutComponent
  ],
})
export class AppPagesModule { }
