/**
 *
 * Stories for Banner
 *
 * Molecule
 */

import { text } from '@storybook/addon-knobs/react';
import React from 'react';
import Banner from '.';

export default {
  title: 'Design|Molecules/Banner',
  component: Banner,
  parameters: {
    centered: { disable: true },
  },
};

export const defaultBanner = () => (
  <Banner>
    <h3>Banner</h3>
  </Banner>
);
export const withText = () => (
  <Banner>
    <h3>Hi</h3>
  </Banner>
);
export const withDynamicVariables = () => (
  <Banner>
    <h3>{text('Text', 'Banner Content!')}</h3>
  </Banner>
);
