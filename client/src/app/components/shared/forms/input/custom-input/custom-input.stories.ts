// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AntdComponentsModule } from 'src/app/components/antd-components.module';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { CustomInputComponent } from './custom-input.component';


export default {
  title: 'Components/Forms/Input',
  component: CustomInputComponent,
  decorators: [
    moduleMetadata({
      declarations: [],
      imports: [
        CommonModule,
        AntdComponentsModule,
        ReactiveFormsModule,
        HttpClientModule,
        IconsProviderModule
      ],
    }),
  ],
} as Meta;

const Template: Story<CustomInputComponent> = (args: CustomInputComponent) => ({
  props: args,
});



export const CustomInput = Template.bind({});
CustomInput.args = {
  subtitle: 'custom',
  placeholder: 'custom',
  defaultInputValue: 'lalalal'
};
