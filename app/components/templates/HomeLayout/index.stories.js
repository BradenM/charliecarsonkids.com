/**
 *
 * Stories for HomeLayout
 *
 * Templates
 */

import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import React from 'react';
import StoryRouter from 'storybook-react-router';
import { PlaceholderURL } from 'utils/getStatic';
import HomeLayout from '.';

export default {
  title: 'Design|Templates/HomeLayout',
  default: HomeLayout,
  decorators: [StoryRouter()],
  parameters: {
    centered: { disable: true },
  },
};

export const withPlaceholders = () => <HomeLayout />;

export const withDynamicVariables = () => {
  const bannerOpts = {
    text: text('Banner Text', 'banner text'),
    color: text('Banner Color', '#cecece'),
  };
  const heroOpts = {
    onButtonClick: action('onButtonClick'),
    text: text('Hero Text', 'Hero Title'),
    buttonText: text('Button Text', 'Click me'),
    imageSrc: text('Image Source', PlaceholderURL('1200')),
  };
  return (
    <HomeLayout bannerOptions={bannerOpts} heroOptions={heroOpts}>
      <div></div>
    </HomeLayout>
  );
};
