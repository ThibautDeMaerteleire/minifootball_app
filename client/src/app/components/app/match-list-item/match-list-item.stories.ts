// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { MatchListItemComponent } from './match-list-item.component';

export default {
  title: 'Components/List Items',
  component: MatchListItemComponent,
  decorators: [
    moduleMetadata({
      declarations: [ MatchListItemComponent ],
      imports: [
        CommonModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<MatchListItemComponent> = (args: MatchListItemComponent) => ({
  props: args,
});



export const MatchListItem = Template.bind({});
MatchListItem.args = {
};
