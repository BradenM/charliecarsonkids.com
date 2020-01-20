/**
 *
 * ArrowLink
 *
 * Molecule
 */

import Text from 'atoms/Text';
import React from 'react';
import * as S from './styles';

const ArrowLink = ({ to, children, ...props }) => (
  <S.Wrapper to={to}>
    <Text variant="h6" {...props}>
      {children}
    </Text>
    <S.Icon width="32" name="arrow-right" iconSize="50" />
  </S.Wrapper>
);

ArrowLink.propTypes = {
  ...Text.propTypes,
};

export default ArrowLink;
