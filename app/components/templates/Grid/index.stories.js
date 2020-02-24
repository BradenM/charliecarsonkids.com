/**
 *
 * Stories for Grid
 *
 * Templates
 */

import React from 'react';
// import { text, number, boolean } from '@storybook/addon-knobs';
import Grid from '.';

export default {
  title: 'Design|Templates/Grid',
  component: Grid,
  parameters: {
    centered: { disable: true },
  },
};

export const defaultStory = () => <Grid />;
