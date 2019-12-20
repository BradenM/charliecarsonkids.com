/**
 *
 * HomeLayout
 *
 * Templates
 */

import Text from 'atoms/Text';
import Banner from 'molecules/Banner';
import Footer from 'organisms/Footer';
import Header from 'organisms/Header';
import HomeHero from 'organisms/HomeHero';
import PropTypes from 'prop-types';
import React from 'react';
import Container from 'react-bootstrap/Container';
import { PlaceholderURL } from 'utils/getStatic';

const HomeLayout = ({ children, bannerOptions, heroOptions }) => (
  <Container fluid className="homepage-container p-0">
    {bannerOptions && (
      <Banner backgroundColor={bannerOptions.color}>
        <Text className="m-0 p-1" color="dark">
          {bannerOptions.text}
        </Text>
      </Banner>
    )}
    <Header />
    <HomeHero {...heroOptions} />
    {children}
    <Footer />
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
