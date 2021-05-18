import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './app/side-nav/side-nav.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';



@NgModule({
  declarations: [
    SideNavComponent,
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule
  ],
  exports: [
    // SideNavComponent,
  ]
})
export class ComponentsModule { }
