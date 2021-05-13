import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { InputCurrencyComponent } from './components/shared/form/input-currency/input-currency.component';
import { LogoComponent } from './components/shared/images/logo/logo.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { LoginComponent } from './pages/login/login.component';
import { ErrorComponent } from './pages/error/error.component';
import { RegisterComponent } from './pages/register/register.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/app/dashboard/dashboard.component';
import { TeamsComponent } from './pages/app/teams/teams.component';
import { CardBaseComponent } from './components/shared/card/card-base/card-base.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { nl_BE } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import nl from '@angular/common/locales/nl';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';

registerLocaleData(nl);

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
    CardBaseComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule,
    NzLayoutModule,
    NzMenuModule
  ],
  providers: [{ provide: NZ_I18N, useValue: nl_BE }],
  bootstrap: [AppComponent]
})
export class AppModule { }
