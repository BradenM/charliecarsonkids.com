/**
 *
 * IconButton
 *
 * Atom
 */

import Icon from 'atoms/Icon';
import PropTypes from 'prop-types';
import React from 'react';
import * as S from './styles';

const IconButton = ({ url, onClick, Component, ...props }) => (
  <S.Wrapper>
    <Component onClick={() => onClick(url)} {...props} />
  </S.Wrapper>
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
