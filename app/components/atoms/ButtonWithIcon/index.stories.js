/**
 *
 * Stories for ButtonWithIcon
 *
 * Atoms
 */

import React from 'react';
// import { text, number, boolean } from '@storybook/addon-knobs';
import ButtonWithIcon from '.';

const testProps = {
  button: {
    variant: 'light',
  },
  icon: {
    width: '30',
    name: 'heart',
  },
};

export default {
  title: 'Design|Atoms/ButtonWithIcon',
  component: ButtonWithIcon,
};

export const defaultStory = () => (
  <ButtonWithIcon {...testProps}>
    <p>Button</p>
  </ButtonWithIcon>
);
