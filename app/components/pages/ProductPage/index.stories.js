/**
 *
 * Stories for ProductPage
 *
 * Pages
 */

import React from 'react';
// import { text, number, boolean } from '@storybook/addon-knobs';
import ProductPage from '.';

export default {
  title: 'Design|Pages/ProductPage',
  component: ProductPage,
  parameters: {
    centered: { disable: true },
  },
};

export const defaultStory = () => <ProductPage />;
