/**
 *
 * Tests for Form
 *
 *
 */

import React from 'react';
import { render } from '@testing-library/react';

import Form from '../index';

describe('<Form />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Form />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have additional unit tests specified', () => {
    expect(true).toEqual(false);
  });
});
