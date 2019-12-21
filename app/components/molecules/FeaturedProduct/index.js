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

const StyledCard = styled(Card)`
  border: 0;
  text-align: center;
  cursor: pointer;
  max-width: 12rem;
`;

const FeaturedProduct = ({ imageSrc, toLink, price, title }) => (
  <LinkContainer to={toLink}>
    <StyledCard>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Title className="pt-3">{title}</Card.Title>
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
