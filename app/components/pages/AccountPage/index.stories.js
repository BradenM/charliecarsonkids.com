/**
 *
 * Stories for AccountPage
 *
 * Pages
 */

import React from 'react';
// import { text, number, boolean } from '@storybook/addon-knobs';
import AccountPage from '.';

export default {
  title: 'Design|Pages/AccountPage',
  component: AccountPage,
  parameters: {
    centered: { disable: true },
  },
};

export const defaultStory = () => <AccountPage />;
