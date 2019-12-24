/**
 *
 * Footer
 *
 * Organism
 */

import SubscribeForm from 'molecules/SubscribeForm';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import styled from 'styled-components';
import { Color } from '../../../global-styles';

const FooterContainer = styled(Container)`
  background-color: ${Color('primary')
    .fade(0.5)
    .string()} !important;
`;

const Footer = () => (
  <FooterContainer className="p-3" fluid>
    <Row>
      <Col xs="4">
        <SubscribeForm className="bg-none" />
      </Col>
      <Col></Col>
    </Row>
  </FooterContainer>
);

Footer.propTypes = {};

export default Footer;
