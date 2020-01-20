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
import Navigation, { NavLink } from 'molecules/Navigation';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import * as S from './styles';

const Header = () => (
  <Container fluid>
    <Row className="pt-2 px-3 header--container">
      <Col className="d-flex justify-content-start align-items-center ml-3">
        <NavLink type="alt" text="Shop CCK" to="/" />
      </Col>
      <Col
        xs={3}
        xl={2}
        className="d-flex justify-content-center align-items-center"
      >
        <Image src={LogoBlack} fluid />
      </Col>
      <Col className="d-flex justify-content-end align-items-center">
        <IconGroup>
          <IconButton
            Component={Anicon}
            width="30px"
            name="search"
            rotate="90"
            moveTo={14}
            speed={0.8}
          />
          <IconButton
            Component={Anicon}
            moveTo={14}
            width="30px"
            name="shopping"
          />
        </IconGroup>
      </Col>
    </Row>
    <S.NavRow className="mb-3">
      <Col>
        <Navigation />
      </Col>
    </S.NavRow>
  </Container>
);

Header.propTypes = {};

export default Header;
