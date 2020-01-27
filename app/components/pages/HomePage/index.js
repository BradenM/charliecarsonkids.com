/**
 *
 * HomePage
 *
 * Pages
 */

import Title from 'atoms/Title';
import ArrowLink from 'molecules/ArrowLink';
import Hero from 'molecules/Hero';
import NewsletterForm from 'molecules/NewsletterForm';
import PosterImage from 'molecules/PosterImage';
import FeaturedProducts from 'organisms/FeaturedProducts/loadable';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { ImageURL } from 'utils/getStatic';

export const HomeHero = {
  text: '',
  imageSrc: ImageURL('hero', undefined, 'jpg'),
  buttonText: '',
};

const HomeMast = [
  {
    title: 'Lets Play',
    imageSrc: ImageURL('mast-0', undefined, 'jpg'),
  },
  {
    title: 'Shop Sweaters',
    imageSrc: ImageURL('mast-1', undefined, 'jpg'),
  },
  {
    title: 'Shop All in Ones',
    imageSrc: ImageURL('mast-2', undefined, 'jpg'),
    size: 6,
  },
];

const HomePage = () => (
  <section className="home--content-container">
    <Container fluid>
      <Hero {...HomeHero} />
    </Container>
    <Container className="mb-5">
      <Row className="d-flex justify-content-center align-items-center">
        <Col className="d-flex justify-content-between">
          {HomeMast.map(i => (
            <PosterImage key={`mast_image-${i.imageSrc}`} {...i} />
          ))}
        </Col>
      </Row>
    </Container>
    <Container className="my-5">
      <div className="home--title pb-4 d-flex flex-column">
        <Title size={5} className="text-center h2 font-weight-normal mb-0">
          New Arrivals
        </Title>
        <ArrowLink to="#" className="text-center font-weight-light">
          Shop Now
        </ArrowLink>
      </div>
      <Row className="d-flex justify-content-around align-items-bottom">
        <FeaturedProducts
          ItemContainer={({ children }) => (
            <Col className="d-flex align-items-end justify-content-center">
              {children}
            </Col>
          )}
        />
      </Row>
    </Container>
    <Container className="my-5 py-5">
      <Row>
        <Col>
          <NewsletterForm />
        </Col>
      </Row>
    </Container>
  </section>
);

HomePage.propTypes = {};

export default HomePage;
