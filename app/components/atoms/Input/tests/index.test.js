/**
 *
 * Tests for Input
 *
 *
 */

import React from 'react';
import { render } from '@testing-library/react';

import Input from '../index';

describe('<Input />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Input />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have additional unit tests specified', () => {
    expect(true).toEqual(false);
  });
});
