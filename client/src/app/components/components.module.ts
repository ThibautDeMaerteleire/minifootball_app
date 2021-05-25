import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntdComponentsModule } from './antd-components.module';
import { AppComponentsModule } from './app/app-components.module';
import { StaticComponentsModule } from './static/static-components.module';
import { SharedComponentsModule } from './shared/shared-components.module';


@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AppComponentsModule,
    AntdComponentsModule,
    StaticComponentsModule,
    SharedComponentsModule,
  ],
  exports: [
    AppComponentsModule,
    AntdComponentsModule,
    StaticComponentsModule,
    SharedComponentsModule,
  ]
})
export class ComponentsModule { }
