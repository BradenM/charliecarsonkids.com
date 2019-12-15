import { configure } from '@storybook/react';
import requireContext from 'require-context.macro';

const req = requireContext('../app', true, /\.stories.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

// automatically import all files ending in *.stories.js
configure(loadStories, module);
