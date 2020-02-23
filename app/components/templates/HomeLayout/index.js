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
import PropTypes from 'prop-types';
import React from 'react';

const HomeLayout = ({ children, bannerOptions }) => (
  <section className="homepage--wrapper h-100 w-100">
    {bannerOptions && (
      <Banner>
        <Text className="m-0 p-1" color="body">
          {bannerOptions.text}
        </Text>
      </Banner>
    )}
    <Header />
    {children}
    <Footer />
  </section>
);

HomeLayout.defaultProps = {
  bannerOptions: false,
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
};

export default HomeLayout;
