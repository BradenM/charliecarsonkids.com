/**
 *
 * Input
 *
 * Atom
 */

import PropTypes from 'prop-types';
import React from 'react';
import bsForm from 'react-bootstrap/Form';
import * as S from './styles';

const INPUT_VARIANTS = {
  default: S.BaseInput,
};

const Input = ({ variant, controlId, feedback, ...props }) => {
  const InputComponent = INPUT_VARIANTS[variant];
  return (
    <bsForm.Group controlId={controlId}>
      <InputComponent {...props} />
      <bsForm.Control.Feedback type="invalid" {...feedback} />
    </bsForm.Group>
  );
};

Input.defaultProps = {
  variant: 'default',
  controlId: '',
};

Input.propTypes = {
  variant: PropTypes.string,
  controlId: PropTypes.string,
  ...bsForm.Control.Feedback.PropTypes,
};

export default Input;
