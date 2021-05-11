import { Routes } from '@angular/router';
import { baseRoutesEnum } from '../constants/routes.enum';
import { ErrorComponent } from '../pages/error/error.component';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';
import { AppRoutes } from './app-routes';

export const BaseRoutes: Routes = [{
  path: baseRoutesEnum.home,
  redirectTo: baseRoutesEnum.landing
}, {
  path: baseRoutesEnum.landing,
  component: HomeComponent
}, {
  path: baseRoutesEnum.login,
  component: LoginComponent
}, {
  path: baseRoutesEnum.register,
  component: RegisterComponent
}, {
  path: baseRoutesEnum.app,
  children: AppRoutes
}, {
  path: baseRoutesEnum.error,
  component: ErrorComponent,
}, {
  path: '**',
  redirectTo: '/error/404'
}];
