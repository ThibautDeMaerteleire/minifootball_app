// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { StaticNavigationComponent } from './static-navigation.component';


export default {
  title: 'Components/Header',
  component: StaticNavigationComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        CommonModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<StaticNavigationComponent> = (args: StaticNavigationComponent) => ({
  props: args,
});



export const Static = Template.bind({});
Static.args = {
};
