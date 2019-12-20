/**
 *
 * Stories for SocialBar
 *
 * Organism
 */

import { text } from '@storybook/addon-knobs';
import React from 'react';
import SocialBar from '.';

export default {
  title: 'Design|Organisms/SocialBar',
  component: SocialBar,
};

export const withSizes = () => (
  <div>
    <SocialBar />
    <SocialBar iconWidth="100" />
  </div>
);

export const withDynamicVariables = () => (
  <SocialBar iconWidth={text('Icon Width', '100')} />
);
