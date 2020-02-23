/**
 *
 * Tests for Button
 *
 *
 */

import React from 'react';
import { render } from '@testing-library/react';

import Button from '../index';

describe('<Button />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Button />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have additional unit tests specified', () => {
    expect(true).toEqual(false);
  });
});
