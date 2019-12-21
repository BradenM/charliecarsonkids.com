/**
 *
 * Tests for FeaturedCategory
 *
 * Molecules
 */

// import '@testing-library/jest-dom/extend-expect'; // add some helpful assertions
import { render } from '@testing-library/react';
import { createStates, withRouter } from 'utils/testHelpers';
import FeaturedCategory from '../index';

const testProps = {
  linkTo: 'testlink',
};

describe('<FeaturedCategory />', () => {
  let store;
  let history;

  beforeAll(() => {
    const states = createStates(history);
    store = states.store;
    history = states.history;
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(withRouter(FeaturedCategory, store, history, testProps));
    expect(spy).not.toHaveBeenCalled();
  });
});
