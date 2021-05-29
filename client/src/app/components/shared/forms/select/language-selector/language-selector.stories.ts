// also exported from '@storybook/angular' if you can deal with breaking changes in 6.1
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { AntdComponentsModule } from 'src/app/components/antd-components.module';
import { IconsProviderModule } from 'src/app/icons-provider.module';
import { LanguageSelectorComponent } from './language-selector.component';


export default {
  title: 'Components/Forms/Select',
  component: LanguageSelectorComponent,
  decorators: [
    moduleMetadata({
      declarations: [
      ],
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

const Template: Story<LanguageSelectorComponent> = (args: LanguageSelectorComponent) => ({
  props: args,
});



export const LanguageSelector = Template.bind({});
LanguageSelector.args = {
};
