import { Routes } from '@angular/router';
import { BirthdaysComponent } from 'src/app/pages/app/birthdays/birthdays.component';
import { TutorialsComponent } from 'src/app/pages/app/tutorials/tutorials.component';
import { UpdatesComponent } from 'src/app/pages/app/updates/updates.component';
import { DashboardComponent } from '../../pages/app/dashboard/dashboard.component';
import { appRoutesEnum, baseRoutesEnum } from '../../constants/routes.enum';
import { TeamRoutes } from './team-routes';

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
  path: baseRoutesEnum.all_routes,
  redirectTo: appRoutesEnum.dashboard
}];
