/**
 *
 * Stories for Title
 *
 * Atom
 */

import { number, text } from '@storybook/addon-knobs/react';
import _ from 'lodash';
import React from 'react';
import Title from '.';

export default {
  title: 'Design|Atoms/Title',
  component: Title,
};

export const defaultTitle = () => <Title>Large Title</Title>;
export const withSizes = () => (
  <div>
    {_.range(1, 5).map(i => (
      <Title key={`size-${i}`} size={i}>{`Size ${i}`}</Title>
    ))}
  </div>
);

export const withDynamicVariables = () => (
  <Title size={number('Size', 1)} color={text('Color', 'inherit')}>
    {text('Content', 'Title')}
  </Title>
);

export const blueTitle = () => <Title color="blue">Blue Title</Title>;
