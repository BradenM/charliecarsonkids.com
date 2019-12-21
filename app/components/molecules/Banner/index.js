/**
 *
 * Banner
 *
 * Molecule
 */

import PropTypes from 'prop-types';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

const BannerContainer = styled(Container)`
  background-color: #ffd1dc;
  .banner {
    &-text {
      &:first-child {
        margin: 0;
      }
    }
  }
`;

const Banner = ({ children, className }) => (
  <BannerContainer fluid className={`p-0 ${className}`}>
    <Row className="banner-wrapper py-1">
      <Col>
        <div className="banner-text text-center">{children}</div>
      </Col>
    </Row>
  </BannerContainer>
);

Banner.propTypes = {
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
};

export default Banner;
