/**
 *
 * Banner
 *
 * Molecule
 */

import Subtitle from 'atoms/Subtitle';
import PropTypes from 'prop-types';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';

const BannerContainer = styled(Container)`
  background-color: ${props => props.backgroundColor || 'gray'};
`;

const Banner = props => (
  <BannerContainer fluid className="p-0">
    <Row className="align-items-center">
      <Col className="text-center">
        <Subtitle className="lead" size="small" color="white">
          {props.content}
        </Subtitle>
      </Col>
    </Row>
  </BannerContainer>
);

Banner.defaultProps = {
  content: 'Banner Content',
};

Banner.propTypes = {
  content: PropTypes.string,
};

export default Banner;
