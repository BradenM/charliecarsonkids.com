/**
 *
 * Tests for HomePage
 *
 * Pages
 */

import { render } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'; // add some helpful assertions
import { createStates, withRouter } from 'utils/testHelpers';
import HomePage, { HomeHero } from '../index';
import AsyncHomePage from '../loadable';

const testProps = {
  ...HomeHero,
};

describe('<HomePage />', () => {
  let store;
  let history;

  beforeAll(() => {
    const states = createStates();
    store = states.store;
    history = states.history;
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(withRouter(HomePage, store, history, testProps));
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to not log errors in console when loaded asynchronously', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(withRouter(AsyncHomePage, store, history, testProps));
    expect(spy).not.toHaveBeenCalled();
  });
});
