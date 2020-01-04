/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import NotFoundPage from 'containers/NotFoundPage/Loadable';
import HomePage from 'pages/HomePage/loadable';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeLayout from 'templates/HomeLayout';
import GlobalStyle from '../../global-styles';

export const HomeBanner = {
  text: 'free shipping on orders over $100!',
};

export default function App() {
  return (
    <>
      <HomeLayout bannerOptions={HomeBanner}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route component={NotFoundPage} />
        </Switch>
      </HomeLayout>
      <GlobalStyle />
    </>
  );
}
