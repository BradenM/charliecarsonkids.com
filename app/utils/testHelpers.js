/**
 *
 * Testing Helper Functions
 *
 */

import { ConnectedRouter } from 'connected-react-router/immutable';
import { createMemoryHistory } from 'history';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../configureStore';

export const withRouter = (Component, store, history, props = {}) => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Component {...props} />
    </ConnectedRouter>
  </Provider>
);

export const createStates = history => {
  let curHistory = history;
  if (!curHistory) {
    curHistory = createMemoryHistory();
  }
  return {
    history: curHistory,
    store: configureStore({}, curHistory),
  };
};
