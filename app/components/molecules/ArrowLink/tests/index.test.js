/**
 *
 * Tests for ArrowLink
 *
 * Molecules
 */

import { render } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'; // add some helpful assertions
import { createStates, withRouter } from 'utils/testHelpers';
import ArrowLink from '../index';

describe('<ArrowLink />', () => {
  let store;
  let history;

  beforeAll(() => {
    const states = createStates(history);
    store = states.store;
    history = states.history;
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(withRouter(ArrowLink, store, history, { to: '#' }));
    expect(spy).not.toHaveBeenCalled();
  });
});
