/**
 *
 * Tests for SocialBar
 *
 * Organism
 */

// import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import React from 'react';
import SocialBar from '../index';

describe('<SocialBar />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<SocialBar />);
    expect(spy).not.toHaveBeenCalled();
  });
});
