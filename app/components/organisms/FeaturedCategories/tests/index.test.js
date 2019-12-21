/**
 *
 * Tests for FeaturedCategories
 *
 * Organism
 */

import { render } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'; // add some helpful assertions
import { PlaceholderURL } from 'utils/getStatic';
import { createStates, withRouter } from 'utils/testHelpers';
import FeaturedCategories from '../index';

const testCategories = [
  {
    title: 'Card Title',
    linkTo: 'categories/boys',
    imageSrc: PlaceholderURL('400'),
  },
];

describe('<FeaturedCategories />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const { store, history } = createStates();
    render(
      withRouter(FeaturedCategories, store, history, {
        categories: testCategories,
      }),
    );
    expect(spy).not.toHaveBeenCalled();
  });
});
