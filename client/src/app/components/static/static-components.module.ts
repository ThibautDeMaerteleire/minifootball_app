import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntdComponentsModule } from '../antd-components.module';
import { StaticNavigationComponent } from './static-navigation/static-navigation.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    StaticNavigationComponent
  ],
  imports: [
    CommonModule,
    AntdComponentsModule,
    RouterModule,
  ],
  exports: [
    AntdComponentsModule,
    StaticNavigationComponent,
  ]
})
export class StaticComponentsModule { }
