import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { InputCurrencyComponent } from './components/form/input-currency/input-currency.component';
import { LogoComponent } from './components/images/logo/logo.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/app/dashboard/dashboard.component';
import { TeamsComponent } from './pages/app/teams/teams.component';

@NgModule({
  declarations: [
    AppComponent,
    InputCurrencyComponent,
    LogoComponent,
    LoginComponent,
    ErrorComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    TeamsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
