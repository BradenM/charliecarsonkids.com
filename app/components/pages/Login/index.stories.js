/**
 *
 * Stories for Login
 *
 * Pages
 */

import React from 'react';
// import { text, number, boolean } from '@storybook/addon-knobs';
import Login from '.';

export default {
  title: 'Design|Pages/Login',
  component: Login,
  parameters: {
    centered: { disable: true },
  },
};

export const defaultStory = () => <Login />;
