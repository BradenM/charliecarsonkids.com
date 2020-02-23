/**
 *
 * Login
 *
 * Pages
 */

import Authenticator from 'organisms/Authenticator';
import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Col from 'react-bootstrap/Col';
import * as S from './styles';

const Login = () => (
  <S.Wrapper>
    <S.FullRow className="justify-content-center align-content-center my-4">
      <Col xs={6}>
        <Authenticator />
      </Col>
    </S.FullRow>
  </S.Wrapper>
);

Login.propTypes = {};

export default Login;
