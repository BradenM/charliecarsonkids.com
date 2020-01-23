/**
 *
 * Header
 *
 * Organism
 */

import IconButton from 'atoms/IconButton';
import LogoBlack from 'images/logo_black.png';
import IconGroup from 'molecules/IconGroup';
import Navigation from 'molecules/Navigation';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { Social } from 'utils/constants';
import * as S from './styles';

const Header = () => (
  <Container fluid>
    <Row className="pt-2 px-3 header--container">
      <Col className="d-flex justify-content-start align-items-center ml-3">
        <IconGroup>
          <IconButton
            name={Social.facebook.iconName}
            url={Social.facebook.url}
            iconSize="50"
            width="32"
          />
          <IconButton
            name={Social.instagram.iconName}
            url={Social.instagram.url}
            iconSize="50"
            width="32"
          />
          <IconButton name="search" iconSize="50" width="32" />
        </IconGroup>
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
          <IconButton name="user" iconSize="50" width="32" />
          <IconButton name="shopping" iconSize="50" width="32" />
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
