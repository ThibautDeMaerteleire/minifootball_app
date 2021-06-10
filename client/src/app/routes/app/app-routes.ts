import { Routes } from '@angular/router';
import { BirthdaysComponent } from 'src/app/pages/app/birthdays/birthdays.component';
import { TutorialsComponent } from 'src/app/pages/app/tutorials/tutorials.component';
import { UpdatesComponent } from 'src/app/pages/app/updates/updates.component';
import { DashboardComponent } from '../../pages/app/dashboard/dashboard.component';
import { appRoutesEnum, baseRoutesEnum } from '../../constants/routes.enum';
import { MeComponent } from 'src/app/pages/app/me/me.component';
import { PlayerComponent } from 'src/app/pages/app/player/player.component';
import { TeamRoutes } from './team-routes';
import { TeamComponent } from 'src/app/pages/app/team/team.component';
import { DetailTeamRoutes } from './detail-team-routes';

export const AppRoutes: Routes = [{
  path: appRoutesEnum.dashboard,
  component: DashboardComponent
}, {
  path: appRoutesEnum.teams,
  children: TeamRoutes
}, {
  path: appRoutesEnum.birthdays,
  component: BirthdaysComponent
}, {
  path: appRoutesEnum.tutorials,
  component: TutorialsComponent
}, {
  path: appRoutesEnum.updates,
  component: UpdatesComponent
}, {
  path: appRoutesEnum.me,
  component: MeComponent
}, {
  path: appRoutesEnum.player,
  component: PlayerComponent
}, {
  path: appRoutesEnum.team,
  component: TeamComponent,
  children: DetailTeamRoutes
}, {
  path: baseRoutesEnum.all_routes,
  redirectTo: appRoutesEnum.dashboard
}];
