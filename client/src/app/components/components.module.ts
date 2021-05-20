import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './app/layout/side-nav/side-nav.component';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { BirthdayCardComponent } from './app/cards/birthday-card/birthday-card.component';
import { HeaderComponent } from './app/layout/header/header.component';
import { IconsProviderModule } from '../icons-provider.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { navigationReducer } from '../states/app/navigation/navigation.reducer';


@NgModule({
  declarations: [
    SideNavComponent,
    BirthdayCardComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    NzLayoutModule,
    NzMenuModule,
    IconsProviderModule,
    BrowserAnimationsModule,
    StoreModule.forRoot({ navigationCollapse: navigationReducer })
  ],
  exports: [
    SideNavComponent,
    BirthdayCardComponent,
    HeaderComponent,
  ]
})
export class ComponentsModule { }
