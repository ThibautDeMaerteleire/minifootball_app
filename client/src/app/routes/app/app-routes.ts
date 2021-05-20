import { Routes } from '@angular/router';
import { appRoutesEnum } from '../../constants/routes.enum';
import { DashboardComponent } from '../../pages/app/dashboard/dashboard.component';
import { TeamsComponent } from '../../pages/app/teams/teams.component';

export const AppRoutes: Routes = [{
  path: appRoutesEnum.dashboard,
  component: DashboardComponent
}, {
  path: appRoutesEnum.teams,
  component: TeamsComponent
}];
