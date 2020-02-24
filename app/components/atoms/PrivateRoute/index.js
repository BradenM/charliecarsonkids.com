/**
 *
 * PrivateRoute
 *
 * Atom
 */

import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useStore } from 'store';

const PrivateRoute = ({ children, ...rest }) => {
  const [{ user }] = useStore();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.isAuthed ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

PrivateRoute.propTypes = {
  ...Route.propTypes,
};

export default PrivateRoute;
