import { Routes } from '@angular/router';
import { appRoutesEnum } from '../constants/routes.enum';
import { DashboardComponent } from '../pages/app/dashboard/dashboard.component';

export const AppRoutes: Routes = [{
  pathMatch: appRoutesEnum.dashboard,
  component: DashboardComponent
}, {

}];
