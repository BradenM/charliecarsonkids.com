/**
 *
 * HomeLayout
 *
 * Templates
 */

import Text from 'atoms/Text';
import Banner from 'molecules/Banner';
import Header from 'organisms/Header';
import HomeHero from 'organisms/HomeHero';
import PropTypes from 'prop-types';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { PlaceholderURL } from 'utils/getStatic';

const HomeLayout = ({ children, bannerOptions, heroOptions }) => (
  <Container fluid className="homepage-container">
    <Row>
      <Col className="p-0">
        {bannerOptions && (
          <Banner backgroundColor={bannerOptions.color}>
            <Text className="m-0 p-1" color="dark">
              {bannerOptions.text}
            </Text>
          </Banner>
        )}
      </Col>
    </Row>
    <Row>
      <Col>
        <Header />
      </Col>
    </Row>
    <Row>
      <Col>
        <HomeHero {...heroOptions} />
      </Col>
    </Row>
    {children}
  </Container>
);

HomeLayout.defaultProps = {
  bannerOptions: {
    text: 'banner content',
    color: '#ff9999',
  },
  heroOptions: {
    text: 'Hero Title',
    buttonText: 'Click Me',
    imageSrc: PlaceholderURL('1200'),
  },
};

HomeLayout.propTypes = {
  children: PropTypes.element,
  bannerOptions: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.shape({
      text: PropTypes.string,
      color: PropTypes.string,
    }),
  ]),
  heroOptions: PropTypes.shape({
    ...HomeHero.propTypes,
  }),
};

export default HomeLayout;
