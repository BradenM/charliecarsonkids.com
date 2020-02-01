/**
 *
 * ProductCard
 *
 * Molecule
 */

import Text from 'atoms/Text';
import PropTypes from 'prop-types';
import React from 'react';
import * as S from './styles';

const ProductCard = ({ imageSrc, name, price, category }) => (
  <S.Wrapper className="mt-4">
    <S.Img src={imageSrc} variant="top" className="shadow-sm" />
    <S.Title className="pt-3">
      <Text font="Poppins" variant="h6" className="font-weight-light mb-0">
        {name}
      </Text>
      <Text font="Poppins" variant="h6" className="font-weight-lighter">
        {category}
      </Text>
    </S.Title>
    <S.Subtitle>${price}</S.Subtitle>
  </S.Wrapper>
);

ProductCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
};

export default ProductCard;
