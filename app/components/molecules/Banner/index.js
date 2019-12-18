/**
 *
 * Banner
 *
 * Molecule
 */

import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const BannerContainer = styled.div`
  background-color: ${props => props.backgroundColor};
  .banner {
    &-text {
      &:first-child {
        margin: 0;
      }
    }
  }
`;

const Banner = ({ backgroundColor, children }) => (
  <BannerContainer backgroundColor={backgroundColor} fluid className="p-0">
    <div className="banner-wrapper py-1">
      <div className="banner-text text-center">{children}</div>
    </div>
  </BannerContainer>
);

Banner.defaultProps = {
  backgroundColor: 'gray',
};

Banner.propTypes = {
  children: PropTypes.element.isRequired,
  backgroundColor: PropTypes.string,
};

export default Banner;
