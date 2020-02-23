/**
 *
 * Input
 *
 * Atom
 */

import PropTypes from 'prop-types';
import React from 'react';
import * as S from './styles';

const INPUT_VARIANTS = {
  default: S.BaseInput,
};

const Input = ({ variant, ...props }) => {
  const InputComponent = INPUT_VARIANTS[variant];
  return <InputComponent {...props} />;
};

Input.defaultProps = {
  variant: 'default',
};

Input.propTypes = {
  variant: PropTypes.string,
};

export default Input;
