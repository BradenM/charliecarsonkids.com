/**
 *
 * Tests for Hero
 *
 * Molecules
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions
import Hero from '../index';

describe('<Hero />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Hero text="text" imageSrc="image" />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<Hero text="hi there" imageSrc="image" />);
    expect(firstChild).toMatchSnapshot();
  });
});
