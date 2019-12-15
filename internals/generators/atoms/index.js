/**
 * Atom Generator
 */

/* eslint strict: ["off"] */

'use strict';

const componentExists = require('../utils/componentExists');
const getComponentPaths = require('../utils/componentPaths')

const getPaths = getComponentPaths('atoms');

module.exports = {
  description: 'Add an unconnected atom',
  prompts: [
    {
      type: 'input',
      name: 'name',
      message: 'What should it be called?',
      default: 'Button',
      validate: value => {
        if (/.+/.test(value)) {
          return componentExists(value)
            ? 'A component or container with this name already exists'
            : true;
        }

        return 'The name is required';
      },
    },
    {
      type: 'confirm',
      name: 'memo',
      default: false,
      message: 'Do you want to wrap your atom in React.memo?',
    },
    {
      type: 'confirm',
      name: 'wantMessages',
      default: false,
      message: 'Do you want i18n messages (i.e. will this atom use text)?',
    },
  ],
  actions: data => {
    // Generate files
    const actions = [
      getPaths('index.js'),
      getPaths('index.stories.js'),
      getPaths('tests/index.test.js')
    ];

    // If the user wants i18n messages
    if (data.wantMessages) {
      actions.push(getPaths('messages.js'));
    }

    actions.push({
      type: 'prettify',
      path: '/components/atoms/',
    });

    return actions;
  },
};
