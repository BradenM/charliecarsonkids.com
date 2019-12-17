/**
 *
 * Stories for Header
 *
 * Organism
 */

import React from 'react';
import { host } from 'storybook-host';
import StoryRouter from 'storybook-react-router';
import Header from '.';

export default {
  title: 'Design|Organisms/Header',
  component: Header,
  decorators: [
    StoryRouter(),
    host({
      title: 'Header Component',
      align: 'center bottom',
      maxWidth: '100%',
      height: '100%',
      border: true,
    }),
  ],
  parameters: {
    centered: {
      disable: true,
    },
  },
};

export const defaultHeader = () => <Header />;
