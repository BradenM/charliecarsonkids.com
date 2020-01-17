/**
 *
 * Text
 *
 * Atom
 */

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

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

export const TextVariants = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', '', 'p'];

const StyledText = styled.p`
  font-family: 'GT Walsheim Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
    'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
`;

const Text = ({ variant, color, className, children }) => {
  const elClass = `${variant} text-${color} ${className}`;
  return <StyledText className={elClass}>{children}</StyledText>;
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
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default Text;
