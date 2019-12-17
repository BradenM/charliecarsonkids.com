/**
 *
 * Stories for Subtitle
 *
 * Atom
 */

import React from 'react';
import Subtitle from '.';

export default {
  title: 'Design|Atoms/Subtitle',
  component: Subtitle,
};

export const defaultSize = () => <Subtitle>Large Subtitle</Subtitle>;
export const mediumSize = () => (
  <Subtitle size="medium">Medium Subtitle</Subtitle>
);
export const smallSize = () => <Subtitle size="small">Small Subtitle</Subtitle>;

export const blueSubtitle = () => (
  <Subtitle color="blue">Blue Subtitle</Subtitle>
);
