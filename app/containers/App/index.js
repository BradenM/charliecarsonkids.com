/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import { useMutation } from '@apollo/react-hooks';
import { VerifyToken } from 'api/mutations/auth.graphql';
import PrivateRoute from 'atoms/PrivateRoute';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import AccountPage from 'pages/AccountPage/loadable';
import CatalogPage from 'pages/CatalogPage/loadable';
import ContactPage from 'pages/ContactPage/loadable';
import HomePage from 'pages/HomePage/loadable';
import Login from 'pages/Login/loadable';
import ProductPage from 'pages/ProductPage/loadable';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeLayout from 'templates/HomeLayout';
import GlobalStyle from '../../global-styles';
import { useStore } from '../../store';

const App = () => {
  const [verifyToken] = useMutation(VerifyToken);
  const [, dispatch] = useStore();

  const refreshAuth = async () => {
    const token = JSON.parse(localStorage.getItem('token'));
    if (typeof token === 'string') {
      const options = { variables: { token } };
      const { errors } = await verifyToken(options);
      if (errors) {
        return dispatch({
          type: 'userLogout',
        });
      }
      return dispatch({
        type: 'userLogin',
        payload: token,
      });
    }
    return true;
  };

  useEffect(() => {
    refreshAuth();
  }, []);

  return (
    <>
      <GlobalStyle />
      <HomeLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/category/:slug" component={CatalogPage} />
          <Route path="/product/:slug" component={ProductPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/login" component={Login} />
          <PrivateRoute path="/account">
            <AccountPage />
          </PrivateRoute>
          <Route component={NotFoundPage} />
        </Switch>
      </HomeLayout>
    </>
  );
};

export default App;
