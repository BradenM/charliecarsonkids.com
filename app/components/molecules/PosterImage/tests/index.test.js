/**
 *
 * Tests for PosterImage
 *
 * Molecules
 */

import { render } from '@testing-library/react';
import React from 'react';
// import '@testing-library/jest-dom/extend-expect'; // add some helpful assertions
import { PlaceholderURL } from 'utils/getStatic';
import PosterImage from '../index';

describe('<PosterImage />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<PosterImage imageSrc={PlaceholderURL('200')} />);
    expect(spy).not.toHaveBeenCalled();
  });
});
