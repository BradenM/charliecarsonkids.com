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

export const defaultBanner = () => <Banner>Banner</Banner>;
export const withText = () => (
  <Banner backgroundColor="#cecece">
    <h3>Hi</h3>
  </Banner>
);
export const withDynamicVariables = () => (
  <Banner backgroundColor={text('Color', '#cecece')}>
    <h3>{text('Text', 'Banner Content!')}</h3>
  </Banner>
);
