/**
 *
 * Tests for ButtonWithIcon
 *
 *
 */

import React from 'react';
import { render } from '@testing-library/react';

import ButtonWithIcon from '../index';

describe('<ButtonWithIcon />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<ButtonWithIcon />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have additional unit tests specified', () => {
    expect(true).toEqual(false);
  });
});
