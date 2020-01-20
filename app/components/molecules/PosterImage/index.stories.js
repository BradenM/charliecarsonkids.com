/**
 *
 * Stories for PosterImage
 *
 * Molecules
 */

import React from 'react';
// import { text, number, boolean } from '@storybook/addon-knobs';
import { PlaceholderURL } from 'utils/getStatic';
import PosterImage from '.';

export default {
  title: 'Design|Molecules/PosterImage',
  component: PosterImage,
};

export const defaultStory = () => (
  <PosterImage imageSrc={PlaceholderURL('200')} />
);
