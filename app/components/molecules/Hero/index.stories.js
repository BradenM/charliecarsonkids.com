/**
 *
 * Stories for Hero
 *
 * Molecule
 */

import { text } from '@storybook/addon-knobs';
import React from 'react';
import { host } from 'storybook-host';
import { ImageURL } from 'utils/getStatic';
import Hero from '.';

export default {
  title: 'Design|Molecules/Hero',
  component: Hero,
  decorators: [
    host({
      title: 'Hero Component',
      align: 'top left',
      width: '100%',
      height: 500,
      border: true,
    }),
  ],
  parameters: {
    centered: { disable: true },
  },
};

export const defaultHero = () => (
  <Hero text="new arrivals" imageSrc={ImageURL('hero')} />
);

export const withDynamicVariables = () => (
  <Hero text={text('Text', 'new arrivals')} imageSrc={ImageURL('hero')} />
);
