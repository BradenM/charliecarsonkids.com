/**
 *
 * Button
 *
 * Atom
 */

import PropTypes from 'prop-types';
import React from 'react';
import * as S from './styles';

const BUTTON_VARIANTS = {
  'outline-dark': S.OutlineDark,
  'outline-light': S.OutlineLight,
  dark: S.Dark,
  light: S.BaseButton,
};

const Button = ({ variant, ...props }) => {
  const BtnComponent = BUTTON_VARIANTS[variant];
  return <BtnComponent variant={variant} {...props} />;
};

Button.defaultProps = {
  variant: 'light',
};

Button.propTypes = {
  variant: PropTypes.string,
};

export default Button;
