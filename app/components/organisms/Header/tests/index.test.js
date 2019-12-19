/**
 *
 * Tests for Header
 *
 * Organism
 */

import { render } from '@testing-library/react';
import { ConnectedRouter } from 'connected-react-router/immutable';
import { createMemoryHistory } from 'history';
import Header from 'organisms/Header';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from '../../../../configureStore';

const renderComponent = (store, history, props = {}) =>
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Header {...props} />
      </ConnectedRouter>
    </Provider>,
  );

describe('<Header />', () => {
  let store;
  let history;

  beforeAll(() => {
    history = createMemoryHistory();
    store = configureStore({}, history);
  });
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    renderComponent(store, history);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = renderComponent(store, history);
    expect(firstChild).toMatchSnapshot();
  });
});
