/**
 *
 * HomePage
 *
 * Pages
 */

import Title from 'atoms/Title';
import FeaturedProduct from 'molecules/FeaturedProduct';
import Hero from 'molecules/Hero';
import FeaturedCategories from 'organisms/FeaturedCategories';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import { ImageURL } from 'utils/getStatic';

export const HomeHero = {
  text: '',
  imageSrc: ImageURL('hero', undefined, 'jpg'),
  buttonText: '',
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

const HomeProducts = [
  {
    title: 'Cool Shirt',
    toLink: 'product/cool-shirt',
    price: '29.99',
    imageSrc: ImageURL('featured-p1'),
  },
  {
    title: 'Nice Shirt',
    toLink: 'product/nice-shirt',
    price: '29.99',
    imageSrc: ImageURL('featured-p2'),
  },
  {
    title: 'Awesome Shirt',
    toLink: 'product/awesome-shirt',
    price: '29.99',
    imageSrc: ImageURL('featured-p3'),
  },
];

const StyledFeaturedCategories = styled(FeaturedCategories)`
  display: flex;
  justify-content: space-around;
`;

const HomePage = () => (
  <section className="home--content-container">
    <Hero {...HomeHero} />
    <Container className="my-5 py-5">
      <Title size={4} className="text-center pb-3">
        New Arrivals
      </Title>
      <Row className="d-flex justify-content-around align-items-bottom">
        {HomeProducts.map(p => (
          <Col
            key={`fp-${p.title}-col`}
            className="d-flex align-items-end justify-content-center"
          >
            <FeaturedProduct key={`fp-${p.title}`} {...p} />
          </Col>
        ))}
      </Row>
    </Container>
    <Container className="my-5 py-5">
      <Row>
        <Col>
          <StyledFeaturedCategories categories={HomeCategories} />
        </Col>
      </Row>
    </Container>
  </section>
);

HomePage.propTypes = {};

export default HomePage;
