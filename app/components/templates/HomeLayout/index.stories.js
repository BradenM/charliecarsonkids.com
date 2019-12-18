/**
 *
 * Stories for HomeLayout
 *
 * Templates
 */

import React from 'react';
import StoryRouter from 'storybook-react-router';
import HomeLayout from '.';

export default {
  title: 'Design|Templates/HomeLayout',
  default: HomeLayout,
  decorators: [StoryRouter()],
  parameters: {
    centered: { disable: true },
  },
};

export const withHomeLayout = () => <HomeLayout />;
