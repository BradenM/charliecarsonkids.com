/**
 *
 * Tests for IconButton
 *
 *
 */

import { render } from '@testing-library/react';
import React from 'react';
import IconButton from '../index';

describe('<IconButton />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<IconButton name="icon" />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<IconButton name="icon" />);
    expect(firstChild).toMatchSnapshot();
  });
});
