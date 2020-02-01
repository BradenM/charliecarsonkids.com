/**
 *
 * ButtonWithIcon
 *
 * Atom
 */

import Icon from 'atoms/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import bsButton from 'react-bootstrap/Button';
import styled from 'styled-components';

const Button = styled(bsButton)`
  display: inline-flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  background-color: white;
  border-radius: 0;
  border: 1px solid var(--dark);
  &:hover {
    background-color: white;
    color: var(--dark);
  }
  &:focus {
    box-shadow: none;
  }
`;

export const ButtonWithIcon = ({ icon, button, children }) => (
  <Button {...button}>
    <Icon {...icon}></Icon>
    {children}
  </Button>
);

ButtonWithIcon.propTypes = {
  icon: PropTypes.object.isRequired,
  button: PropTypes.object.isRequired,
  children: PropTypes.element.isRequired,
};

export default ButtonWithIcon;
