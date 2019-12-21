/**
 *
 * FeaturedCategories
 *
 * Organism
 */

import FeaturedCategory from 'molecules/FeaturedCategory';
import PropTypes from 'prop-types';
import React from 'react';
// import styled from 'styled-components';
import CardColumns from 'react-bootstrap/CardColumns';

export const FeaturedCategories = ({ categories }) => (
  <CardColumns>
    {categories.map(c => (
      <FeaturedCategory key={`featured-category-${c.title}`} {...c} />
    ))}
  </CardColumns>
);

FeaturedCategories.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      ...FeaturedCategory.propTypes,
    }),
  ),
};

export default FeaturedCategories;
