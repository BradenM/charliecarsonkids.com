/**
 *
 * ContactPage
 *
 * Pages
 */

import ContactForm from 'molecules/ContactForm';
import React from 'react';
import Col from 'react-bootstrap/Col';
import * as G from 'templates/Grid';

const Login = () => (
  <G.Wrapper>
    <G.FullRow className="justify-content-center align-content-center my-4">
      <Col xs={6}>
        <ContactForm />
      </Col>
    </G.FullRow>
  </G.Wrapper>
);
Login.propTypes = {};

export default Login;
