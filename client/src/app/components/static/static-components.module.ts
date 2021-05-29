import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntdComponentsModule } from '../antd-components.module';
import { StaticNavigationComponent } from './static-navigation/static-navigation.component';
import { RouterModule } from '@angular/router';
import { SharedComponentsModule } from '../shared/shared-components.module';
import { StaticFooterComponent } from './static-footer/static-footer.component';

@NgModule({
  declarations: [
    StaticNavigationComponent,
    StaticFooterComponent
  ],
  imports: [
    CommonModule,
    AntdComponentsModule,
    RouterModule,
    SharedComponentsModule,
  ],
  exports: [
    StaticNavigationComponent,
    StaticFooterComponent
  ]
})
export class StaticComponentsModule { }
