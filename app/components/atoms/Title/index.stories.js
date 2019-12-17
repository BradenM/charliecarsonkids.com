/**
 *
 * Stories for Title
 *
 * Atom
 */

import React from 'react';
import Title from '.';

export default {
  title: 'Design|Atoms/Title',
  component: Title,
};

export const defaultSize = () => <Title>Large Title</Title>;
export const mediumSize = () => <Title size="medium">Medium Title</Title>;
export const smallSize = () => <Title size="small">Small Title</Title>;

export const blueTitle = () => <Title color="blue">Blue Title</Title>;
