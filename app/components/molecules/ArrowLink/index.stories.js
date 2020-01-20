/**
 *
 * Stories for ArrowLink
 *
 * Molecules
 */

import { text } from '@storybook/addon-knobs';
import React from 'react';
import StoryRouter from 'storybook-react-router';
import ArrowLink from '.';

export default {
  title: 'Design|Molecules/ArrowLink',
  component: ArrowLink,
  decorators: [StoryRouter()],
};

export const defaultStory = () => <ArrowLink to="#">Title</ArrowLink>;

export const withDynamicVariables = () => (
  <ArrowLink to="#">{text('Text', 'Text')}</ArrowLink>
);
