/**
 *
 * Tests for Footer
 *
 * Organism
 */

import { render } from '@testing-library/react';
import React from 'react';
// import '@testing-library/jest-dom/extend-expect'; // add some helpful assertions
import Footer from '../index';

describe('<Footer />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Footer />);
    expect(spy).not.toHaveBeenCalled();
  });
});
