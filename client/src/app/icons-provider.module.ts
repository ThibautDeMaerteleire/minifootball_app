import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  BulbOutline,
  CrownOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  FormOutline,
  DashboardOutline,
  MailOutline,
  ArrowRightOutline,
  ArrowLeftOutline,
  ArrowUpOutline,
  ArrowDownOutline,
  DeleteOutline,
  PieChartOutline,
  CalendarOutline,
  EuroCircleOutline,
  FireOutline,
  HomeOutline,
  HeartOutline,
  MessageOutline,
  NotificationOutline,
  PoweroffOutline,
  SaveOutline,
  SearchOutline,
  SendOutline,
  SettingOutline,
  SyncOutline,
  TeamOutline,
  UserAddOutline,
  UsergroupAddOutline,
  UserDeleteOutline,
  UserOutline
} from '@ant-design/icons-angular/icons';

const icons = [
  BulbOutline,
  CrownOutline,
  MenuFoldOutline,
  MenuUnfoldOutline,
  DashboardOutline,
  FormOutline,
  MailOutline,
  ArrowDownOutline,
  ArrowLeftOutline,
  ArrowUpOutline,
  ArrowRightOutline,
  DeleteOutline,
  PieChartOutline,
  CalendarOutline,
  EuroCircleOutline,
  FireOutline,
  HomeOutline,
  HeartOutline,
  MessageOutline,
  NotificationOutline,
  PoweroffOutline,
  SaveOutline,
  SearchOutline,
  SendOutline,
  SettingOutline,
  SyncOutline,
  TeamOutline,
  UserAddOutline,
  UsergroupAddOutline,
  UserDeleteOutline,
  UserOutline,
];

@NgModule({
  imports: [NzIconModule.forChild(icons)],
  exports: [NzIconModule],
  providers: [
    { provide: NZ_ICONS, useValue: icons }
  ]
})
export class IconsProviderModule {
}
