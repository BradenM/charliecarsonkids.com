/**
 *
 * Tests for Icon
 *
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import Icon from '../index';

describe('<Icon />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Icon name="icon" />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Icon name="icon" />);
    expect(firstChild).toMatchSnapshot();
  });

  it('Should render and match the snapshot with width', () => {
    const {
      container: { firstChild },
    } = render(<Icon name="icon" width="50" />);
    expect(firstChild).toMatchSnapshot();
  });
});
