// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AntdComponentsModule } from 'src/app/components/antd-components.module';
import { SkeletonComponent } from './skeleton.component';

export default {
  title: 'Components/Skeleton',
  component: SkeletonComponent,
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

const Template: Story<SkeletonComponent> = (args: SkeletonComponent) => ({
  props: args,
});



export const Base = Template.bind({});
Base.args = {
  class: 'sk-5 w-100',
};
