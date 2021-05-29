
import { setCompodocJson } from "@storybook/addon-docs/angular";
import { moduleMetadata } from '@storybook/angular';
import { ComponentsModule } from "../src/app/components/components.module";
import { AppModule } from '../src/app/app.module';
import { viewports } from './viewports';
import docJson from "../documentation.json";
setCompodocJson(docJson);
import '../src/styles/index.scss';


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, undefined, { numeric: true }),
  },
  viewport: { viewports: viewports },
}

export const decorators = [
  moduleMetadata(ComponentsModule),
]