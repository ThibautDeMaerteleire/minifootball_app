import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { BirthdayCardComponent } from './cards/birthday-card/birthday-card.component';
import { HeaderComponent } from './layout/header/header.component';
import { IconsProviderModule } from '../../icons-provider.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BaseCardComponent } from './cards/base-card/base-card.component';
import { AntdComponentsModule } from '../antd-components.module';
import { SkeletonComponent } from './skeleton/skeleton.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    SideNavComponent,
    BirthdayCardComponent,
    HeaderComponent,
    BaseCardComponent,
    SkeletonComponent,
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
    BrowserAnimationsModule,
    AntdComponentsModule,
    RouterModule,
  ],
  exports: [
    SideNavComponent,
    BirthdayCardComponent,
    HeaderComponent,
    BaseCardComponent,
    SkeletonComponent,
  ]
})
export class AppComponentsModule { }
