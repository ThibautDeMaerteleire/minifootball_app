import { Routes } from '@angular/router';
import { CreateTeamComponent } from 'src/app/pages/app/teams/create-team/create-team.component';
import { SearchTeamComponent } from 'src/app/pages/app/teams/search-team/search-team.component';
import { TeamsOverviewComponent } from 'src/app/pages/app/teams/teams-overview/teams-overview.component';
import { baseRoutesEnum, teamRoutesEnum } from '../../constants/routes.enum';

export const TeamRoutes: Routes = [{
  path: teamRoutesEnum.overview,
  component: TeamsOverviewComponent
}, {
  path: teamRoutesEnum.create,
  component: CreateTeamComponent
}, {
  path: teamRoutesEnum.searchTeam,
  component: SearchTeamComponent
}, {
  path: baseRoutesEnum.all_routes,
  redirectTo: teamRoutesEnum.overview
}];
