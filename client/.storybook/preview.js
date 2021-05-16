
import { setCompodocJson } from "@storybook/addon-docs/angular";
import { moduleMetadata } from '@storybook/angular';
import { AppModule } from '../src/app/app.module';
import docJson from "../documentation.json";
setCompodocJson(docJson);


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  moduleMetadata(AppModule),
]