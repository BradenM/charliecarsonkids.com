/**
 *
 * SignupForm
 *
 * Molecule
 */

import Button from 'atoms/Button';
import Input from 'atoms/Input';
import Text from 'atoms/Text';
import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import * as S from './styles';

const Messages = {
  signUpInfo: 'Sign up to save your checkout details, manage orders, and more!',
  signUp: 'SIGN UP',
};

const SignupForm = () => (
  <S.Form>
    <S.Header className="text-center my-4">
      <Text color="dark">{Messages.signUpInfo}</Text>
    </S.Header>
    <S.Body>
      <Input placeholder="First Name" />
      <Input placeholder="Last Name" />
      <Input type="email" placeholder="Email Address" />
      <Input type="password" placeholder="Password" />
      <Button className="px-4 py-3" variant="dark">
        {Messages.signUp}
      </Button>
    </S.Body>
  </S.Form>
);

SignupForm.propTypes = {};

export default SignupForm;
