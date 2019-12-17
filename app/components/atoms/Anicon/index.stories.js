/**
 *
 * Stories for Anicon
 *
 * Atom
 */

import { withActions } from '@storybook/addon-actions';
import { boolean, number, text } from '@storybook/addon-knobs';
import React from 'react';
import Anicon from '.';

export default {
  title: 'Design|Atoms/Anicon',
  component: Anicon,
  decorators: [withActions('mouseenter', 'mouseleave')],
};

// const eventsWithName = actions('onMouseEnter', 'onMouseLeave');

export const searchAnicon = () => (
  <Anicon name="search" width="100px" moveTo={14} />
);

export const withDynamicVariables = () => {
  const knobs = {
    name: text('Icon', 'shopping'),
    width: '100px',
    speed: number('Speed', 1),
    rotate: text('Rotate', '0'),
    hoverable: boolean('Hoverable', true),
    moveTo: number('Frame on Hover', 14),
  };

  return <Anicon {...knobs} />;
};
