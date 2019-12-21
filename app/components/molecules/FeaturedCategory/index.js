/**
 *
 * FeaturedCategory
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
  width: 18rem;
  cursor: pointer;
  transition: transform 300ms ease-in-out;
  position: relative;

  &:before {
    content: ' ';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0;
    transition: opacity 300ms;
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175);
  }

  &:hover {
    &:before {
      opacity: 1;
    }
    transform: translateY(-3%);
  }
`;

const FeaturedCategory = ({
  className,
  imageSrc,
  title,
  linkTo,
  borderColor,
}) => (
  <LinkContainer to={linkTo}>
    <StyledCard className={`shadow ${className}`} border={borderColor}>
      <Card.Img variant="top" src={imageSrc} />
      <Card.Body>
        <Card.Title className="text-center">{title}</Card.Title>
      </Card.Body>
    </StyledCard>
  </LinkContainer>
);

FeaturedCategory.defaultProps = {
  className: '',
  imageSrc: PlaceholderURL('400'),
  title: 'Card Title',
  borderColor: 'dark',
};

FeaturedCategory.propTypes = {
  className: PropTypes.string,
  imageSrc: PropTypes.string,
  title: PropTypes.string,
  linkTo: PropTypes.string.isRequired,
  borderColor: PropTypes.string,
};

export default FeaturedCategory;
