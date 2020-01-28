/**
 *
 * ProductCard
 *
 * Molecule
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import * as S from './styles';

const ProductCard = ({ imageSrc, name, price }) => (
  <S.Wrapper>
    <S.Img src={imageSrc} variant="top" className="shadow-sm" />
    <S.Title className="pt-3 lead p">{name}</S.Title>
    <S.Subtitle>${price}</S.Subtitle>
  </S.Wrapper>
);

ProductCard.propTypes = {};

export default ProductCard;
