/**
 *
 * Tests for Anicon
 *
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import Anicon from '../index';

const renderComponent = props => render(<Anicon name="icon" {...props} />);

describe('<Anicon />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Anicon name="icon" />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild).toMatchSnapshot();
  });
});
