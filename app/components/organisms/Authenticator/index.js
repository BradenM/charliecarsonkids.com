/**
 *
 * Authenticator
 *
 * Organism
 */

import LoginForm from 'molecules/LoginForm';
import SignupForm from 'molecules/SignupForm';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import * as S from './styles';

export const Authenticator = () => (
  <S.TabContainer id="authenticator-tabs" defaultActiveKey="signIn">
    <Row className="justify-content-center mb-4 mx-2">
      <Col>
        <S.Nav className="flex-row align-items-center">
          <S.NavItem>
            <S.NavLink eventKey="signUp">
              <S.NavText>Sign Up</S.NavText>
            </S.NavLink>
          </S.NavItem>
          <S.Seperator />
          <S.NavItem>
            <S.NavLink eventKey="signIn">
              <S.NavText className="active">Sign In</S.NavText>
            </S.NavLink>
          </S.NavItem>
        </S.Nav>
      </Col>
    </Row>
    <Row>
      <Col>
        <S.TabContent>
          <S.TabPane eventKey="signUp">
            <SignupForm />
          </S.TabPane>
          <S.TabPane eventKey="signIn">
            <LoginForm />
          </S.TabPane>
        </S.TabContent>
      </Col>
    </Row>
  </S.TabContainer>
);

Authenticator.propTypes = {};

export default Authenticator;
