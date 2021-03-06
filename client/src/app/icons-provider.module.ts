import { NgModule } from '@angular/core';
import { NZ_ICONS, NzIconModule } from 'ng-zorro-antd/icon';

import {
  ArrowRightOutline,
  ArrowLeftOutline,
  ArrowUpOutline,
  ArrowDownOutline,
  BulbOutline,
  CalendarOutline,
  CloseOutline,
  CommentOutline,
  CrownOutline,
  DashboardOutline,
  DeleteOutline,
  EuroCircleOutline,
  FireOutline,
  FormOutline,
  HeartOutline,
  HomeOutline,
  InfoCircleOutline,
  LeftOutline,
  MailOutline,
  MenuFoldOutline,
  MenuOutline,
  MenuUnfoldOutline,
  MessageOutline,
  NotificationOutline,
  PieChartOutline,
  PoweroffOutline,
  RightOutline,
  SaveOutline,
  SearchOutline,
  SendOutline,
  SettingOutline,
  SyncOutline,
  TeamOutline,
  UserAddOutline,
  UserDeleteOutline,
  UsergroupAddOutline,
  UserOutline
} from '@ant-design/icons-angular/icons';

const icons = [
  ArrowDownOutline,
  ArrowLeftOutline,
  ArrowUpOutline,
  ArrowRightOutline,
  BulbOutline,
  CalendarOutline,
  CloseOutline,
  CommentOutline,
  CrownOutline,
  DashboardOutline,
  DeleteOutline,
  EuroCircleOutline,
  FireOutline,
  FormOutline,
  HeartOutline,
  HomeOutline,
  InfoCircleOutline,
  LeftOutline,
  MailOutline,
  MenuFoldOutline,
  MenuOutline,
  MenuUnfoldOutline,
  MessageOutline,
  NotificationOutline,
  PieChartOutline,
  PoweroffOutline,
  RightOutline,
  SaveOutline,
  SearchOutline,
  SendOutline,
  SettingOutline,
  SyncOutline,
  TeamOutline,
  UserAddOutline,
  UserDeleteOutline,
  UsergroupAddOutline,
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
