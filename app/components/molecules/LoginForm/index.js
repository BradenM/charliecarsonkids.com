/**
 *
 * LoginForm
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
  signInInfo: 'Sign in to view past orders, account information, and more!',
  signIn: 'SIGN IN',
};

const LoginForm = () => (
  <S.Form>
    <S.Header className=" text-center my-4">
      <Text color="dark">{Messages.signInInfo}</Text>
    </S.Header>
    <S.FormWrapper>
      <Input type="email" placeholder="Email Address" />
      <Input type="password" placeholder="Password" />
      <Button className="px-4 py-3" variant="dark">
        {Messages.signIn}
      </Button>
    </S.FormWrapper>
  </S.Form>
);

LoginForm.propTypes = {};

export default LoginForm;
