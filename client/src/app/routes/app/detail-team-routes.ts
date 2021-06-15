import { Routes } from '@angular/router';
import { baseRoutesEnum, detailTeamRoutesEnum, } from 'src/app/constants/routes.enum';
import { AddPlayersTeamComponent } from 'src/app/pages/app/team/add-players-team/add-players-team.component';
import { MatchesTeamComponent } from 'src/app/pages/app/team/matches-team/matches-team.component';
import { OverviewTeamComponent } from 'src/app/pages/app/team/overview-team/overview-team.component';
import { PlayersTeamComponent } from 'src/app/pages/app/team/players-team/players-team.component';
import { PracticeMatchesTeamComponent } from 'src/app/pages/app/team/practice-matches-team/practice-matches-team.component';
import { RankingTeamComponent } from 'src/app/pages/app/team/ranking-team/ranking-team.component';
import { SettingsTeamComponent } from 'src/app/pages/app/team/settings-team/settings-team.component';
import { LineUpRoutes } from './line-up-routes';

export const DetailTeamRoutes: Routes = [{
  path: detailTeamRoutesEnum.overview,
  component: OverviewTeamComponent
}, {
  path: detailTeamRoutesEnum.ranking,
  component: RankingTeamComponent
}, {
  path: detailTeamRoutesEnum.matches,
  component: MatchesTeamComponent
}, {
  path: detailTeamRoutesEnum.practice_matches,
  component: PracticeMatchesTeamComponent
}, {
  path: detailTeamRoutesEnum.players,
  component: PlayersTeamComponent
}, {
  path: detailTeamRoutesEnum.add_players,
  component: AddPlayersTeamComponent
}, {
  path: detailTeamRoutesEnum['line-ups'],
  children: LineUpRoutes
}, {
  path: detailTeamRoutesEnum.settings,
  component: SettingsTeamComponent
}, {
  path: baseRoutesEnum.all_routes,
  redirectTo: detailTeamRoutesEnum.overview
}];
