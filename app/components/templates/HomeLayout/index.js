/**
 *
 * HomeLayout
 *
 * Templates
 */

import Text from 'atoms/Text';
import Banner from 'molecules/Banner';
import Hero from 'molecules/Hero';
import Footer from 'organisms/Footer';
import Header from 'organisms/Header';
import PropTypes from 'prop-types';
import React from 'react';
import { PlaceholderURL } from 'utils/getStatic';

const HomeLayout = ({ children, bannerOptions, heroOptions }) => (
  <section className="homepage--wrapper">
    {bannerOptions && (
      <Banner>
        <Text className="m-0 p-1" color="body">
          {bannerOptions.text}
        </Text>
      </Banner>
    )}
    <Header />
    <Hero {...heroOptions} />
    <section className="homepage--content">{children}</section>
    <Footer />
  </section>
);

HomeLayout.defaultProps = {
  bannerOptions: {
    text: 'banner content',
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
      text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
      color: PropTypes.string,
    }),
  ]),
  heroOptions: PropTypes.shape({
    ...Hero.propTypes,
  }),
};

export default HomeLayout;
