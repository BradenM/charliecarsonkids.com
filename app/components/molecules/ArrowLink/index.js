/**
 *
 * ArrowLink
 *
 * Molecule
 */

import Text from 'atoms/Text';
import React from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

const ArrowLink = ({ to, children, ...props }) => (
  <S.Wrapper className="mx-auto">
    <Link to={to}>
      <Text variant="h6" {...props}>
        {children}
      </Text>
    </Link>
    <S.Icon width="32" name="arrow-right" iconSize="50" />
  </S.Wrapper>
);

ArrowLink.propTypes = {
  ...Text.propTypes,
};

export default ArrowLink;
