/**
 *
 * LoginForm
 *
 * Molecule
 */

import { useMutation } from '@apollo/react-hooks';
import { CreateToken } from 'api/mutations/auth.graphql';
import Button from 'atoms/Button';
import Input from 'atoms/Input';
import Text from 'atoms/Text';
import { Formik } from 'formik';
import React from 'react';
import { useStore } from '../../../store';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import * as S from './styles';

const Messages = {
  signInInfo: 'Sign in to view past orders, account information, and more!',
  signIn: 'SIGN IN',
};

const LoginForm = () => {
  const [createToken, { data }] = useMutation(CreateToken);
  const [state, dispatch] = useStore();

  const userLogin = async (values, { setSubmitting }) => {
    console.warn('CURRENT DATA:', data);
    const response = await createToken({ variables: values });
    const { token } = response.data.tokenCreate;
    dispatch({
      type: 'userLogin',
      payload: token,
    });
    console.warn('UPDATED', state);
    setSubmitting(false);
  };

  return (
    <Formik
      onSubmit={userLogin}
      initialValues={{
        email: '',
        password: '',
      }}
    >
      {({ values, handleChange, handleSubmit, isSubmitting }) => (
        <S.Form onSubmit={handleSubmit}>
          <S.Header className=" text-center my-4">
            <Text color="dark">{Messages.signInInfo}</Text>
          </S.Header>
          <S.FormWrapper>
            <Input
              onChange={handleChange}
              name="email"
              type="email"
              placeholder="Email Address"
              value={values.email}
            />
            <Input
              onChange={handleChange}
              name="password"
              type="password"
              placeholder="Password"
              value={values.password}
            />
            <Button
              type="submit"
              disabled={isSubmitting}
              className="px-4 py-3"
              variant="dark"
            >
              {Messages.signIn}
            </Button>
          </S.FormWrapper>
        </S.Form>
      )}
    </Formik>
  );
};

LoginForm.propTypes = {};

export default LoginForm;
