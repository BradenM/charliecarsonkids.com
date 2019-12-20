/**
 *
 * Header
 *
 * Organism
 */

import Anicon from 'atoms/Anicon';
import IconButton from 'atoms/IconButton';
import LogoBlack from 'images/logo_black.png';
import IconGroup from 'molecules/IconGroup';
import Navigation from 'molecules/Navigation';
import SocialBar from 'organisms/SocialBar';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

const Header = () => (
  <Container>
    <Row>
      <Col className="d-flex justify-content-start px-3 py-2">
        <SocialBar />
      </Col>
      <Col className="d-flex justify-content-end px-3 py-2">
        <IconGroup>
          <IconButton
            Component={Anicon}
            width="40px"
            name="search"
            rotate="90"
            moveTo={14}
            speed={0.8}
          />
          <IconButton
            Component={Anicon}
            moveTo={14}
            width="40px"
            name="shopping"
          />
        </IconGroup>
      </Col>
    </Row>
    <Row className="justify-content-md-center">
      <Col md="auto" className="d-flex justify-content-center py-3">
        <div className="w-50">
          <Image src={LogoBlack} fluid />
        </div>
      </Col>
    </Row>
    <Row>
      <Col>
        <Navigation />
      </Col>
    </Row>
  </Container>
);

Header.propTypes = {};

export default Header;
