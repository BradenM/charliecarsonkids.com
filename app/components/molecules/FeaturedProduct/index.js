/**
 *
 * FeaturedProduct
 *
 * Molecule
 */

import PropTypes from 'prop-types';
import React from 'react';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import styled from 'styled-components';
import { PlaceholderURL } from 'utils/getStatic';

const StyledImg = styled(Card.Img)`
  object-fit: cover;
  height: 23rem;
`;
const StyledTitle = styled(Card.Title)`
  font-size: 1rem;
  font-family: 'Poppins', 'GT Walsheim Pro', Georgia, Times, 'Times New Roman',
    serif;
`;
const StyledSubtitle = styled(Card.Subtitle)`
  font-size: 0.75rem;
  font-weight: 600;
`;

const StyledCard = styled(Card)`
  border: 0;
  text-align: left;
  cursor: pointer;
  background-color: transparent;

  ${StyledTitle},
  ${StyledImg} {
    transition: all 200ms ease-out;
  }

  &:hover {
    ${StyledImg} {
      transform: scale(1.05);
    }
  }
`;

const FeaturedProduct = ({ imageSrc, toLink, price, title }) => (
  <LinkContainer to={toLink}>
    <StyledCard>
      <StyledImg className="shadow-sm" variant="top" src={imageSrc} />
      <StyledTitle className="pt-3 lead p">{title}</StyledTitle>
      <StyledSubtitle>${price}</StyledSubtitle>
    </StyledCard>
  </LinkContainer>
);

FeaturedProduct.defaultProps = {
  imageSrc: PlaceholderURL('400'),
  price: '',
  title: '',
};

FeaturedProduct.propTypes = {
  imageSrc: PropTypes.string,
  toLink: PropTypes.string.isRequired,
  price: PropTypes.string,
  title: PropTypes.string,
};

export default FeaturedProduct;
