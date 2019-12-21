/**
 *
 * Stories for FeaturedCategories
 *
 * Organisms
 */

import React from 'react';
import StoryRouter from 'storybook-react-router';
// import { text, number, boolean } from '@storybook/addon-knobs';
import { ImageURL, PlaceholderURL } from 'utils/getStatic';
import FeaturedCategories from '.';

const categories = [
  {
    title: 'Shop Girls',
    linkTo: 'categories/girls',
    imageSrc: ImageURL('shop-girls'),
    borderColor: 'danger',
  },
  {
    title: 'Shop Boys',
    linkTo: 'categories/boys',
    imageSrc: PlaceholderURL('400'),
    borderColor: 'info',
  },
];

const placeholders = [
  {
    title: 'Card One',
    linkTo: 'categories/one',
    imageSrc: PlaceholderURL('400'),
  },
  {
    title: 'Card Two',
    linkTo: 'categories/two',
    imageSrc: PlaceholderURL('400'),
  },
  {
    title: 'Card Three',
    linkTo: 'categories/three',
    imageSrc: PlaceholderURL('400'),
  },
];

export default {
  title: 'Design|Organisms/FeaturedCategories',
  component: FeaturedCategories,
  decorators: [StoryRouter()],
};

export const defaultStory = () => (
  <FeaturedCategories categories={placeholders} />
);

export const exampleCategories = () => (
  <FeaturedCategories categories={categories} />
);
