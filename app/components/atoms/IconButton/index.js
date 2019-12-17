/**
 *
 * IconButton
 *
 * Atom
 */

import Icon from 'atoms/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

export const IconContainer = styled.div`
  padding: ${props => props.padding};
  transition: transform 200ms ease-in-out;
  &:hover {
    cursor: pointer;
    transform: scale(1.035) rotate(2deg);
  }
`;

const IconButton = ({ url, onClick, Component, ...props }) => (
  <IconContainer>
    <Component onClick={() => onClick(url)} {...props} />
  </IconContainer>
);

IconButton.defaultProps = {
  onClick: url => window.open(url),
  url: '_blank',
  Component: Icon,
};

IconButton.propTypes = {
  onClick: PropTypes.func,
  url: PropTypes.string,
  Component: PropTypes.func,
};

export default IconButton;
