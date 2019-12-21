/**
 *
 * Stories for HomePage
 *
 * Pages
 */

// import { text, number, boolean } from '@storybook/addon-knobs';
import React from 'react';
import StoryRouter from 'storybook-react-router';
import HomePage from '.';

export default {
  title: 'Design|Pages/HomePage',
  component: HomePage,
  decorators: [StoryRouter()],
  parameters: {
    centered: { disable: true },
  },
};

export const defaultStory = () => <HomePage />;
