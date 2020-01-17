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
import Color from 'utils/color';
import { PlaceholderURL } from 'utils/getStatic';

const StyledImg = styled(Card.Img)``;
const StyledTitle = styled(Card.Title)``;

const NavHoverColor = Color.primary.darken(0.15).string();
const StyledCard = styled(Card)`
  border: 0;
  text-align: center;
  cursor: pointer;
  max-width: 12rem;
  background-color: transparent;

  ${StyledTitle},
  ${StyledImg} {
    transition: all 200ms ease-in;
  }

  &:hover {
    ${StyledImg} {
      transform: scale(1.05) rotate(1deg);
    }
    ${StyledTitle} {
      color: ${NavHoverColor};
    }
  }
`;

const FeaturedProduct = ({ imageSrc, toLink, price, title }) => (
  <LinkContainer to={toLink}>
    <StyledCard>
      <StyledImg variant="top" src={imageSrc} />
      <StyledTitle className="pt-3">{title}</StyledTitle>
      <Card.Subtitle>${price}</Card.Subtitle>
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
