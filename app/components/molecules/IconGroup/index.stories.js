/**
 *
 * Stories for IconGroup
 *
 * Molecule
 */

import Icon from 'atoms/Icon';
import IconButton from 'atoms/IconButton';
import React from 'react';
import IconGroup from '.';

export default {
  title: 'Design|Molecules/IconGroup',
  component: IconGroup,
};

export const socialIconGroup = () => (
  <IconGroup>
    <Icon name="facebook" width="50" />
    <Icon name="instagram" width="50" />
    <Icon name="mail" width="50" />
  </IconGroup>
);

export const socialIconButtonGroup = () => (
  <IconGroup>
    <IconButton name="facebook" url="https://facebook.com" />
    <IconButton name="instagram" url="https://instagram.com" />
    <IconButton name="mail" url="https://mail.com" />
  </IconGroup>
);
