/**
 *
 * Tests for PlainLink
 *
 *
 */

import { render } from '@testing-library/react';
import { createStates, withRouter } from 'utils/testHelpers';
import PlainLink from '../index';

describe('<PlainLink />', () => {
  let store;
  let history;

  beforeAll(() => {
    const states = createStates(history);
    store = states.store;
    history = states.history;
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(withRouter(PlainLink, store, history));
    expect(spy).not.toHaveBeenCalled();
  });
});
