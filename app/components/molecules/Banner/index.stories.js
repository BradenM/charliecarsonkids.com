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
};

export const defaultBanner = () => <Banner />;
export const withText = () => <Banner content="My Custom Content!" />;
export const withDynamicVariables = () => (
  <Banner content={text('Text', 'Banner Content!')} />
);
