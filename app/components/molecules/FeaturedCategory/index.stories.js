/**
 *
 * Stories for FeaturedCategory
 *
 * Molecules
 */

import { text } from '@storybook/addon-knobs';
import React from 'react';
import StoryRouter from 'storybook-react-router';
import { PlaceholderURL } from 'utils/getStatic';
import FeaturedCategory from '.';

export default {
  title: 'Design|Molecules/FeaturedCategory',
  component: FeaturedCategory,
  decorators: [StoryRouter()],
};

export const defaultStory = () => <FeaturedCategory linkTo="category" />;

export const withDynamicVariables = () => (
  <FeaturedCategory
    title={text('Title', 'Shop Category')}
    linkTo="category"
    imageSrc={text('Image Source', PlaceholderURL('400'))}
  />
);
