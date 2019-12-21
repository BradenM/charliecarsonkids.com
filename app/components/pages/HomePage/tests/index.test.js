/**
 *
 * Tests for HomePage
 *
 * Pages
 */

import { render } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'; // add some helpful assertions
import { createStates, withRouter } from 'utils/testHelpers';
import HomePage, { HomeBanner, HomeHero } from '../index';

const testProps = {
  ...HomeBanner,
  ...HomeHero,
};

describe('<HomePage />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const { store, history } = createStates();
    render(withRouter(HomePage, store, history, testProps));
    expect(spy).not.toHaveBeenCalled();
  });
});
