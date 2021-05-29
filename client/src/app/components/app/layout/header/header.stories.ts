// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AntdComponentsModule } from 'src/app/components/antd-components.module';
import { HeaderComponent } from './header.component';

export default {
  title: 'Components/Header/App',
  component: HeaderComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        CommonModule,
        AntdComponentsModule
      ],
    }),
  ],
} as Meta;

const Template: Story<HeaderComponent> = (args: HeaderComponent) => ({
  props: args,
  template: `<app-header>This is the content.</app-header>`
});



export const App = Template.bind({});
App.args = {
};
