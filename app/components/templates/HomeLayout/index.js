/**
 *
 * HomeLayout
 *
 * Templates
 */

import Typography from '@bit/mui-org.material-ui.typography';
import Banner from 'molecules/Banner';
import Header from 'organisms/Header';
import HomeHero from 'organisms/HomeHero';
import PropTypes from 'prop-types';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const HomeSection = ({ children }) => (
  <Row>
    <Col>{children}</Col>
  </Row>
);

HomeSection.propTypes = { children: PropTypes.element.isRequired };

const HomeLayout = ({ children }) => (
  <Container fluid className="homepage-container">
    <Row>
      <Col className="p-0">
        <Banner backgroundColor="#ff9999">
          <Typography variant="subtitle1">
            free shipping for orders over $100!
          </Typography>
        </Banner>
      </Col>
    </Row>
    <HomeSection>
      <Header />
    </HomeSection>
    <HomeSection>
      <HomeHero />
    </HomeSection>
    {children}
  </Container>
);

HomeLayout.Section = HomeSection;

HomeLayout.propTypes = {
  children: PropTypes.element,
};

export default HomeLayout;
