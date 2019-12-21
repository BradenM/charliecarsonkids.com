/**
 *
 * Tests for FeaturedProduct
 *
 * Molecules
 */

import { render } from '@testing-library/react';
import { createStates, withRouter } from 'utils/testHelpers';
// import '@testing-library/jest-dom/extend-expect'; // add some helpful assertions
import FeaturedProduct from '../index';

const testProps = {
  toLink: 'product/page',
};

describe('<FeaturedProduct />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const { store, history } = createStates();
    render(withRouter(FeaturedProduct, store, history, testProps));
    expect(spy).not.toHaveBeenCalled();
  });
});
