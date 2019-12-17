import centered from '@storybook/addon-centered/react';
import '@storybook/addon-console';
import { setConsoleOptions, withConsole } from '@storybook/addon-console';
import { withInfo } from '@storybook/addon-info';
import { withKnobs } from '@storybook/addon-knobs/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import { addDecorator, addParameters, configure } from '@storybook/react';
import { withHTML } from '@whitespace/storybook-addon-html/react';
import requireContext from 'require-context.macro';
import './storybook.css';

const req = requireContext('../app', true, /\.stories.js$/);

// automatically import all files ending in *.stories.js
setConsoleOptions({
  panelExclude: [],
});
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
addDecorator(withInfo);
addDecorator(withKnobs);
addDecorator(centered);
addDecorator(
  withHTML({
    prettier: {
      tabWidth: 4,
      useTabs: false,
      htmlWhitespaceSensitivity: 'strict',
    },
  }),
);
addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'responsive',
  },
  backgrounds: [
    { name: 'dark', value: '#c4c4c4' },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ],
  options: {
    panelPosition: 'bottom',
  },
});
configure(req, module);
