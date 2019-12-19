/**
 *
 * Tests for A
 *
 *
 */

import React from 'react';
import { render } from '@testing-library/react';
import A from '../index';

describe('<A />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<A />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<A />);
    expect(firstChild).toMatchSnapshot();
  });
});
