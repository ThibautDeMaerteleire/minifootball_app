import { Routes } from '@angular/router';
import { appRoutesEnum, baseRoutesEnum } from '../../constants/routes.enum';
import { DashboardComponent } from '../../pages/app/dashboard/dashboard.component';
import { TeamRoutes } from './team-routes';

export const AppRoutes: Routes = [{
  path: appRoutesEnum.dashboard,
  component: DashboardComponent
}, {
  path: appRoutesEnum.teams,
  children: TeamRoutes
}, {
  path: baseRoutesEnum.all_routes,
  redirectTo: appRoutesEnum.dashboard
}];
