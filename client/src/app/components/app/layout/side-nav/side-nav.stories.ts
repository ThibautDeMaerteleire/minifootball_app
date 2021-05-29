// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { HeaderComponent } from '../header/header.component';
import { SideNavComponent } from './side-nav.component';

export default {
  title: 'Components/Navigation/Side Nav',
  component: SideNavComponent,
  decorators: [
    moduleMetadata({
      declarations: [HeaderComponent],
      imports: [
        CommonModule,
        NzMenuModule,
        NzLayoutModule,
        BrowserAnimationsModule,
        IconsProviderModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<SideNavComponent> = (args: SideNavComponent) => ({
  props: args,
  template: `<app-side-nav>This is the content.</app-side-nav>`
});



export const SideNav = Template.bind({});
SideNav.args = {
  isCollapsed: true,
};
