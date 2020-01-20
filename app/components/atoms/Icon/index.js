/**
 *
 * Icon
 *
 * Atom
 */

import PropTypes from 'prop-types';
import React from 'react';
import { ReactSVG } from 'react-svg';
import { IconURL } from 'utils/getStatic';

const Icon = ({ name, iconSize, width, ...props }) => (
  <ReactSVG
    beforeInjection={svg =>
      svg.setAttribute(
        'style',
        `width: ${width || iconSize}px;height: ${width || iconSize}px`,
      )
    }
    src={IconURL(name, iconSize)}
    {...props}
  />
);

Icon.defaultProps = {
  iconSize: '100',
  width: undefined,
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  iconSize: PropTypes.oneOf(['50', '100', '500', '32', '24']),
  width: PropTypes.string,
};

export default Icon;
