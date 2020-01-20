/**
 *
 * Stories for PosterImage
 *
 * Molecules
 */

import { withActions } from '@storybook/addon-actions';
import React from 'react';
// import { text, number, boolean } from '@storybook/addon-knobs';
import { PlaceholderURL } from 'utils/getStatic';
import PosterImage from '.';

export default {
  title: 'Design|Molecules/PosterImage',
  component: PosterImage,
  decorators: [withActions('mouseenter', 'mouseleave')],
};

export const defaultStory = () => (
  <PosterImage imageSrc={PlaceholderURL('200')} />
);
