import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AntdComponentsModule } from '../antd-components.module';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    AntdComponentsModule,
    RouterModule,
  ],
  exports: [
    AntdComponentsModule,
  ]
})
export class SharedComponentsModule { }
