import { Routes } from '@angular/router';
import { baseRoutesEnum } from '../constants/routes.enum';
import { AppLayoutComponent } from '../pages/app/layout/app-layout.component';
import { ErrorComponent } from '../pages/error/error.component';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { RegisterComponent } from '../pages/register/register.component';
import { AuthGuardService } from '../services/auth-guard/auth-guard.service';
import { AppRoutes } from './app/app-routes';

export const BaseRoutes: Routes = [
  {
    path: baseRoutesEnum.home,
    redirectTo: baseRoutesEnum.landing
  },
  {
    path: baseRoutesEnum.landing,
    component: HomeComponent
  },
  {
    path: baseRoutesEnum.login,
    component: LoginComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: baseRoutesEnum.register,
    component: RegisterComponent,
    canActivate: [AuthGuardService]
  },
  {
    path: baseRoutesEnum.app,
    component: AppLayoutComponent,
    children: AppRoutes,
    canActivate: [AuthGuardService]
  },
  {
    path: baseRoutesEnum.error,
    component: ErrorComponent,
  },
  {
    path: baseRoutesEnum.all_routes,
    redirectTo: '/error/404'
  }
];
