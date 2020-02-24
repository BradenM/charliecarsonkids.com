/**
 *
 * SignupForm
 *
 * Molecule
 */

import { useMutation } from '@apollo/react-hooks';
import { CreateToken, RegisterAccount } from 'api/mutations/auth.graphql';
import { UpdateAccount } from 'api/mutations/user.graphql';
import Button from 'atoms/Button';
import Input from 'atoms/Input';
import Text from 'atoms/Text';
import { Formik } from 'formik';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useStore } from 'store';
import * as yup from 'yup';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import * as S from './styles';

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup
    .string()
    .email()
    .required(),
  password: yup
    .string()
    .min(8)
    .max(50)
    .required(),
});

const Messages = {
  signUpInfo: 'Sign up to save your checkout details, manage orders, and more!',
  signUp: 'SIGN UP',
};

const SignupForm = () => {
  const [, dispatch] = useStore();
  const [registerAccount] = useMutation(RegisterAccount);
  const [createToken] = useMutation(CreateToken);
  const [updateAccount] = useMutation(UpdateAccount);
  const history = useHistory();

  const registerUser = async (values, { setSubmitting }) => {
    const { email, password, firstName, lastName } = values;
    const options = {
      variables: {
        redirectUrl: '/',
        email,
        password,
      },
      onCompletion: () =>
        dispatch({
          type: 'userSignup',
          payload: values,
        }),
    };
    const { errors } = await registerAccount(options);
    if (errors) {
      // eslint-disable-next-line no-console
      console.warn('REGISTER FAILED', errors);
      return setSubmitting(false);
    }
    // Authenticate
    const { data } = await createToken({ variables: { email, password } });
    const { token } = data.tokenCreate;
    dispatch({
      type: 'userLogin',
      payload: token,
    });
    // Update
    const resp = await updateAccount({
      variables: { input: { firstName, lastName } },
    });
    if (resp.errors) {
      // eslint-disable-next-line no-console
      console.warn('UPDATE FAILED', errors);
    }
    setSubmitting(false);
    return history.push('/');
  };

  return (
    <Formik
      onSubmit={registerUser}
      validationSchema={schema}
      initialValues={{
        email: '',
        password: '',
        firstName: '',
        lastName: '',
      }}
    >
      {({
        values,
        handleChange,
        handleSubmit,
        touched,
        errors,
        isSubmitting,
      }) => (
        <S.Form noValidate onSubmit={handleSubmit}>
          <S.Header className="text-center my-4">
            <Text color="dark">{Messages.signUpInfo}</Text>
          </S.Header>
          <S.Body>
            <Input
              name="firstName"
              onChange={handleChange}
              value={values.firstName}
              isInvalid={!!errors.firstName}
              feedback={{
                children:
                  errors.firstName && touched.firstName
                    ? errors.firstName
                    : undefined,
              }}
              placeholder="First Name"
            />
            <Input
              name="lastName"
              onChange={handleChange}
              value={values.lastName}
              isInvalid={!!errors.lastName}
              feedback={{
                children:
                  errors.lastName && touched.lastName
                    ? errors.lastName
                    : undefined,
              }}
              placeholder="Last Name"
            />
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
              {Messages.signUp}
            </Button>
          </S.Body>
        </S.Form>
      )}
    </Formik>
  );
};

SignupForm.propTypes = {};

export default SignupForm;
