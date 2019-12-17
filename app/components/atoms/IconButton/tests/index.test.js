/**
 *
 * Tests for IconButton
 *
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
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
