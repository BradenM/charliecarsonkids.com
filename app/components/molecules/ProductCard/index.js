/**
 *
 * ProductCard
 *
 * Molecule
 */

import PropTypes from 'prop-types';
import React from 'react';
import * as S from './styles';

const ProductCard = ({ imageSrc, name, price }) => (
  <S.Wrapper className="py-2">
    <S.Img src={imageSrc} variant="top" className="shadow-sm" />
    <S.Title className="pt-3 lead p">{name}</S.Title>
    <S.Subtitle>${price}</S.Subtitle>
  </S.Wrapper>
);

ProductCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default ProductCard;
