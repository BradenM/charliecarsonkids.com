/**
 *
 * HomePage
 *
 * Pages
 */

import Text from 'atoms/Text';
import Title from 'atoms/Title';
import FeaturedProduct from 'molecules/FeaturedProduct';
import Hero from 'molecules/Hero';
import FeaturedCategories from 'organisms/FeaturedCategories';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import { ImageURL, ProductURL } from 'utils/getStatic';

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
    price: '19.99',
    imageSrc: ProductURL('18020614-0'),
  },
  {
    title: 'Nice Shirt',
    toLink: 'product/nice-shirt',
    price: '29.99',
    imageSrc: ProductURL('19071669-0'),
  },
  {
    title: 'Awesome Shirt',
    toLink: 'product/awesome-shirt',
    price: '89.99',
    imageSrc: ProductURL('19101202-0'),
  },
  {
    title: 'Awesome Shirt',
    toLink: 'product/awesome-shirt',
    price: '89.99',
    imageSrc: ProductURL('19101202-0'),
  },
];

const HomeMast = [
  {
    imageSrc: ImageURL('mast-0', undefined, 'jpg'),
  },
  {
    imageSrc: ImageURL('mast-1', undefined, 'jpg'),
  },
  {
    imageSrc: ImageURL('mast-2', undefined, 'jpg'),
    size: 6,
  },
];

const StyledFeaturedCategories = styled(FeaturedCategories)`
  display: flex;
  justify-content: space-around;
`;

const MastImage = styled(Image)`
  object-fit: cover;
  height: 24rem;
`;

const HomePage = () => (
  <section className="home--content-container">
    <Hero {...HomeHero} />
    <Container className="mb-5">
      <Row className="d-flex justify-content-center align-items-center">
        <Col className="d-flex justify-content-around">
          {HomeMast.map(i => (
            <MastImage src={i.imageSrc} fluid />
          ))}
        </Col>
      </Row>
    </Container>
    <Container className="my-5">
      <div className="home--title pb-4">
        <Title size={5} className="text-center h2 font-weight-normal">
          New Arrivals
        </Title>
        <Text variant="h6" className="text-center font-weight-light">
          Shop Now
        </Text>
      </div>
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
