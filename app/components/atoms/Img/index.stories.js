/**
 *
 * Stories for Img
 *
 *
 */

import { storiesOf } from '@storybook/react';
import React from 'react';
import Img from '.';

const image = {
  src: 'https://via.placeholder.com/200',
  alt: 'placeholder - 200x200',
};

storiesOf('Img', module).add('default', () => <Img {...image} />);
