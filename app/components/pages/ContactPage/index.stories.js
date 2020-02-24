/**
 *
 * Stories for ContactPage
 *
 * Pages
 */

import React from 'react';
// import { text, number, boolean } from '@storybook/addon-knobs';
import ContactPage from '.';

export default {
  title: 'Design|Pages/ContactPage',
  component: ContactPage,
  parameters: {
    centered: { disable: true },
  },
};

export const defaultStory = () => <ContactPage />;
