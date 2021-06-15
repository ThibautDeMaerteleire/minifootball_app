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
import { TutorialsComponent } from './tutorials/tutorials.component';
import { BirthdaysComponent } from './birthdays/birthdays.component';
import { UpdatesComponent } from './updates/updates.component';
import { PlayerComponent } from './player/player.component';
import { MeComponent } from './me/me.component';
import { OverviewTeamComponent } from './team/overview-team/overview-team.component';
import { TeamComponent } from './team/team.component';
import { RankingTeamComponent } from './team/ranking-team/ranking-team.component';
import { MatchesTeamComponent } from './team/matches-team/matches-team.component';
import { PracticeMatchesTeamComponent } from './team/practice-matches-team/practice-matches-team.component';
import { PlayersTeamComponent } from './team/players-team/players-team.component';
import { AddPlayersTeamComponent } from './team/add-players-team/add-players-team.component';
import { SettingsTeamComponent } from './team/settings-team/settings-team.component';
import { LineUpsOverviewComponent } from './team/line-ups/line-ups-overview/line-ups-overview.component';
import { LineUpsDetailComponent } from './team/line-ups/line-ups-detail/line-ups-detail.component';
import { LineUpsCreateComponent } from './team/line-ups/line-ups-create/line-ups-create.component';

@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    AppLayoutComponent,
    DashboardComponent,
    InfoCreateTeamComponent,
    TeamsOverviewComponent,
    CreateTeamComponent,
    SearchTeamComponent,
    TutorialsComponent,
    BirthdaysComponent,
    UpdatesComponent,
    PlayerComponent,
    MeComponent,
    OverviewTeamComponent,
    TeamComponent,
    RankingTeamComponent,
    MatchesTeamComponent,
    PracticeMatchesTeamComponent,
    PlayersTeamComponent,
    AddPlayersTeamComponent,
    SettingsTeamComponent,
    LineUpsOverviewComponent,
    LineUpsDetailComponent,
    LineUpsCreateComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    BrowserModule,
    RouterModule,
    HttpClientModule,
    WidgetsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  bootstrap: [
    AppLayoutComponent
  ],
})
export class AppPagesModule { }
