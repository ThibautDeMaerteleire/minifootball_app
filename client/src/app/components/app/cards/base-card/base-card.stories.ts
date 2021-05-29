// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BaseCardComponent } from './base-card.component';

export default {
  title: 'Components/Cards',
  component: BaseCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [ BaseCardComponent ],
      imports: [
        CommonModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<BaseCardComponent> = (args: BaseCardComponent) => ({
  props: args,
  template: `<app-base-card>This is the content.</app-base-card>`
});



export const BaseCard = Template.bind({});
BaseCard.args = {
};
