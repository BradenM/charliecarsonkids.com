/**
 *
 * Tests for PrivateRoute
 *
 *
 */

import React from 'react';
import { render } from '@testing-library/react';

import PrivateRoute from '../index';

describe('<PrivateRoute />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<PrivateRoute />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have additional unit tests specified', () => {
    expect(true).toEqual(false);
  });
});
