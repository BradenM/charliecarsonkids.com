/**
 *
 * Stories for Icon
 *
 * Atom
 */

import { text } from '@storybook/addon-knobs';
import React from 'react';
import Icon from '.';

export default {
  title: 'Design|Atoms/Icon',
  component: Icon,
};

export const facebookIcon = () => (
  <Icon
    name={text('Icon Name', 'facebook')}
    width={text('Width', '100')}
    iconSize="100"
  />
);
