/**
 *
 * Footer
 *
 * Organism
 */

import SubscribeForm from 'molecules/SubscribeForm';
import React from 'react';
import Col from 'react-bootstrap/Col';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

const Footer = () => (
  <Container className="bg-info p-3" fluid>
    <Row>
      <Col xs="4">
        <SubscribeForm className="bg-info" />
      </Col>
      <Col></Col>
    </Row>
  </Container>
);

Footer.propTypes = {};

export default Footer;
