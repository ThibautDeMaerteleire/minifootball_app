import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';

import { AppLayoutComponent } from './layout/app-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamsComponent } from './teams/teams.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { SwiperModule } from 'swiper/angular';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppLayoutComponent,
    DashboardComponent,
    TeamsComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    BrowserModule,
    RouterModule,
    SwiperModule,
    HttpClientModule
  ],
  bootstrap: [
    AppLayoutComponent
  ],
})
export class AppPagesModule { }
