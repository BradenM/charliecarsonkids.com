/**
 *
 * Stories for CatalogPage
 *
 * Pages
 */

import React from 'react';
//import { text, number, boolean } from '@storybook/addon-knobs';
import CatalogPage from '.';

export default {
  title: 'Design|Pages/CatalogPage',
  component: CatalogPage,
  parameters: {
    centered: { disable: true },
  },
};

export const defaultStory = () => <CatalogPage />;
