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
import { useHistory } from 'react-router-dom';
import * as yup from 'yup';
import { useStore } from '../../../store';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import * as S from './styles';

const schema = yup.object().shape({
  email: yup
    .string()
    .email()
    .required(),
  password: yup.string().required(),
});
const Messages = {
  signInInfo: 'Sign in to view past orders, account information, and more!',
  signIn: 'SIGN IN',
};

const LoginForm = () => {
  const [createToken, { data }] = useMutation(CreateToken);
  const [state, dispatch] = useStore();
  const history = useHistory();

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
    return history.push('/account');
  };

  return (
    <Formik
      validationSchema={schema}
      onSubmit={userLogin}
      initialValues={{
        email: '',
        password: '',
      }}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        errors,
        touched,
        isSubmitting,
      }) => (
        <S.Form onSubmit={handleSubmit}>
          <S.Header className=" text-center my-4">
            <Text color="dark">{Messages.signInInfo}</Text>
          </S.Header>
          <S.FormWrapper>
            <Input
              type="email"
              name="email"
              onChange={handleChange}
              value={values.email}
              placeholder="Email Address"
              isInvalid={!!errors.email}
              feedback={{
                children:
                  errors.email && touched.email ? errors.email : undefined,
              }}
            />
            <Input
              type="password"
              name="password"
              onChange={handleChange}
              value={values.password}
              placeholder="Password"
              isInvalid={!!errors.password}
              feedback={{
                children:
                  errors.password && touched.password
                    ? errors.password
                    : undefined,
              }}
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
