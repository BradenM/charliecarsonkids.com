/**
 *
 * SocialBar
 *
 * Organism
 */

import IconButton from 'atoms/IconButton';
import IconGroup from 'molecules/IconGroup';
import PropTypes from 'prop-types';
import React from 'react';
import { Social } from 'utils/constants';

export const SocialBar = ({ iconWidth, ...props }) => (
  <IconGroup {...props}>
    <IconButton
      name={Social.facebook.iconName}
      url={Social.facebook.url}
      iconSize="50"
      width="32"
    />
    <IconButton
      name={Social.instagram.iconName}
      url={Social.instagram.url}
      iconSize="50"
      width="32"
    />
    <IconButton name="search" iconSize="50" width="32" />
  </IconGroup>
);

SocialBar.defaultProps = {
  iconWidth: '40',
};

SocialBar.propTypes = {
  iconWidth: PropTypes.string,
};

export default SocialBar;
