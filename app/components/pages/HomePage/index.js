/**
 *
 * HomePage
 *
 * Pages
 */

import FeaturedCategories from 'organisms/FeaturedCategories';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
// import PropTypes from 'prop-types';
import styled from 'styled-components';
import HomeLayout from 'templates/HomeLayout';
import { ImageURL } from 'utils/getStatic';

export const HomeBanner = {
  text: 'free shipping on orders over $100!',
  // color: Theme.primary,
};

export const HomeHero = {
  text: 'new arrivals',
  imageSrc: ImageURL('hero'),
};

const HomeCategories = [
  {
    title: 'Shop Girls',
    linkTo: 'categories/girls',
    imageSrc: ImageURL('shop-girls'),
    borderColor: 'danger',
  },
  {
    title: 'Shop Baby',
    linkTo: 'categories/baby',
    imageSrc: ImageURL('shop-baby'),
    borderColor: 'warning',
  },
  {
    title: 'Shop Boys',
    linkTo: 'categories/boys',
    imageSrc: ImageURL('shop-boys'),
    borderColor: 'info',
  },
];

const StyledFeaturedCategories = styled(FeaturedCategories)`
  display: flex;
  justify-content: space-around;
`;

const HomePage = () => (
  <HomeLayout bannerOptions={HomeBanner} heroOptions={HomeHero}>
    <Container>
      <Row>
        <Col>
          <StyledFeaturedCategories categories={HomeCategories} />
        </Col>
      </Row>
    </Container>
  </HomeLayout>
);

HomePage.propTypes = {};

export default HomePage;
