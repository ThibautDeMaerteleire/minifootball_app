import { I18NextModule } from 'angular-i18next';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './routes/app-routing.module';
import { App } from './app.component';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IconsProviderModule } from './icons-provider.module';
import { I18N_PROVIDERS } from './i18n.provider';


@NgModule({
  declarations: [
    App,
  ],
  imports: [
    I18NextModule.forRoot(),
    BrowserModule,
    AppRoutingModule,
    ScullyLibModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    IconsProviderModule
  ],
  providers: [I18N_PROVIDERS],
  bootstrap: [App]
})
export class AppModule { }
