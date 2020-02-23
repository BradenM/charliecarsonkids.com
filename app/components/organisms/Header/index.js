/**
 *
 * Header
 *
 * Organism
 */

import IconButton from 'atoms/IconButton';
import PlainLink from 'atoms/PlainLink';
import LogoBlack from 'images/logo_black.png';
import IconGroup from 'molecules/IconGroup';
import Navigation from 'molecules/Navigation';
import SocialBar from 'organisms/SocialBar';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import { useHistory } from 'react-router-dom';
import * as S from './styles';

const Header = () => {
  const history = useHistory();
  return (
    <Container fluid>
      <Row className="pt-2 px-3 header--container">
        <Col className="d-flex justify-content-start align-items-center ml-3">
          <SocialBar />
        </Col>
        <Col
          xs={3}
          xl={2}
          className="d-flex justify-content-center align-items-center"
        >
          <PlainLink to="/">
            <Image src={LogoBlack} fluid />
          </PlainLink>
        </Col>
        <Col className="d-flex justify-content-end align-items-center">
          <IconGroup>
            <IconButton
              onClick={() => history.push('/account/login')}
              name="user"
              iconSize="50"
              width="32"
            />
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
};

Header.propTypes = {};

export default Header;
