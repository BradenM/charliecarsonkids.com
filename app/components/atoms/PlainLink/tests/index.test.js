/**
 *
 * Tests for PlainLink
 *
 *
 */

import React from 'react';
import { render } from '@testing-library/react';

import PlainLink from '../index';

describe('<PlainLink />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<PlainLink />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have additional unit tests specified', () => {
    expect(true).toEqual(false);
  });
});
