// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { BirthdayCardComponent } from './birthday-card.component';

export default {
  title: 'Components/Cards/Birthday Card',
  component: BirthdayCardComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        CommonModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<BirthdayCardComponent> = (args: BirthdayCardComponent) => ({
  props: args,
  template: `<app-birthday-card ${args}></app-birthday-card>`
});

export const BirthdayCard = Template.bind({});
BirthdayCard.args = {
  name: 'King',
  surname: 'Leopold',
  username: 'kingleo2',
  birthday: new Date(),
};