/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import CatalogPage from 'pages/CatalogPage/loadable';
import HomePage from 'pages/HomePage/loadable';
import Login from 'pages/Login/loadable';
import ProductPage from 'pages/ProductPage/loadable';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeLayout from 'templates/HomeLayout';
import GlobalStyle from '../../global-styles';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <HomeLayout>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/category/:slug" component={CatalogPage} />
          <Route path="/product/:slug" component={ProductPage} />
          <Route path="/account" component={Login} />
          <Route component={NotFoundPage} />
        </Switch>
      </HomeLayout>
    </>
  );
}
