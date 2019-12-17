/**
 *
 * Stories for Img
 *
 *
 */

import React from 'react';
import Img from '.';

const image = {
  src: 'https://via.placeholder.com/200',
  alt: 'placeholder - 200x200',
};

export default {
  title: 'Design|Atoms/Img',
  component: Img,
};

export const defaultImage = () => <Img {...image} />;
