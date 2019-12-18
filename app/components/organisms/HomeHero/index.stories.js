/**
 *
 * Stories for HomeHero
 *
 * Organism
 */

import React from 'react';
import HomeHero from '.';

export default {
  title: 'Design|Organisms/HomeHero',
  component: HomeHero,
  parameters: {
    centered: { disable: true },
  },
};

export const defaultStory = () => <HomeHero />;
