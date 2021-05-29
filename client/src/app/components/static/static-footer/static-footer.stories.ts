// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { StaticFooterComponent } from './static-footer.component';


export default {
  title: 'Components/Footer',
  component: StaticFooterComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        CommonModule,
      ],
    }),
  ],
} as Meta;

const Template: Story<StaticFooterComponent> = (args: StaticFooterComponent) => ({
  props: args,
});



export const Static = Template.bind({});
Static.args = {
};
