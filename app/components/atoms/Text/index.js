/**
 *
 * Text
 *
 * Atom
 */

import PropTypes from 'prop-types';
import React from 'react';

export const TextColors = [
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
  'info',
  'dark',
  'light',
  'body',
  'muted',
  'white',
  'black-50',
  'white-50',
];

export const TextVariants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', ''];

const Text = ({ variant, color, className, children }) => {
  const elClass = `${variant} text-${color} ${className}`;
  return <p className={elClass}>{children}</p>;
};

Text.defaultProps = {
  variant: '',
  color: 'body',
  className: '',
};

Text.propTypes = {
  variant: PropTypes.oneOf(TextVariants),
  color: PropTypes.oneOf(TextColors),
  className: PropTypes.string,
  children: PropTypes.string,
};

export default Text;
