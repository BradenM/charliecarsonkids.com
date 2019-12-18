/**
 *
 * Stories for Hero
 *
 * Molecule
 */

import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import React from 'react';
import { host } from 'storybook-host';
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
  <Hero
    onButtonClick={action('onButtonClick')}
    buttonText="Click Me"
    text="hero text"
    imageSrc="https://via.placeholder.com/1200"
  />
);

export const withDynamicVariables = () => (
  <Hero
    onButtonClick={action('onButtonClick')}
    text={text('Text', 'Title')}
    buttonText={text('Button Text', 'Click Me')}
    imageSrc="https://via.placeholder.com/1200"
  />
);
