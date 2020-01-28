/**
 *
 * HomePage
 *
 * Pages
 */

import Title from 'atoms/Title';
import ArrowLink from 'molecules/ArrowLink';
import NewsletterForm from 'molecules/NewsletterForm';
import PosterImage from 'molecules/PosterImage';
import FeaturedProducts from 'organisms/FeaturedProducts/loadable';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
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
    size: 3,
  },
];

const HomePage = () => (
  <section className="home--content-container">
    <Container fluid>
      <Row className="justify-content-center align-items-center">
        <Col xs={9}>
          <Image src={HomeHero.imageSrc} fluid />
        </Col>
      </Row>

      <Row className="justify-content-center align-items-baseline my-5">
        {HomeMast.map(({ size, ...i }) => (
          <Col xs={size || 3}>
            <PosterImage {...i} />
          </Col>
        ))}
      </Row>

      <div className="home--title pb-4 d-flex flex-column">
        <Title size={5} className="text-center h2 font-weight-normal mb-0">
          New Arrivals
        </Title>
        <ArrowLink to="#" className="text-center font-weight-light">
          Shop Now
        </ArrowLink>
      </div>

      <Row className="justify-content-center">
        <Col xs={9}>
          <Row className="justify-content-between align-content-center">
            <FeaturedProducts
              ItemContainer={({ children }) => (
                <Col xs={3}>
                  <div className="d-flex align-items-end justify-content-center">
                    {children}
                  </div>
                </Col>
              )}
            />
          </Row>
        </Col>
      </Row>
    </Container>

    <Container className="my-5" fluid>
      <Row className="py-5 justify-content-center">
        <Col xs={9}>
          <NewsletterForm />
        </Col>
      </Row>
    </Container>
  </section>
);

HomePage.propTypes = {};

export default HomePage;
