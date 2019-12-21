/**
 *
 * Stories for FeaturedProduct
 *
 * Molecules
 */

import React from 'react';
// import { text, number, boolean } from '@storybook/addon-knobs';
import StoryRouter from 'storybook-react-router';
import { ImageURL } from 'utils/getStatic';
import FeaturedProduct from '.';

export default {
  title: 'Design|Molecules/FeaturedProduct',
  component: FeaturedProduct,
  decorators: [StoryRouter()],
};

export const defaultStory = () => (
  <FeaturedProduct
    toLink="product/product-name"
    price="29.99"
    title="Cool Shirt"
  />
);

export const withProduct = () => (
  <FeaturedProduct
    toLink="product/product-name"
    price="29.99"
    title="Cool Shirt"
    imageSrc={ImageURL('featured-p1')}
  />
);
