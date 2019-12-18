/**
 *
 * Tests for HomeHero
 *
 * Organism
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions
import HomeHero from '../index';

describe('<HomeHero />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<HomeHero />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(<HomeHero />);
    expect(firstChild).toMatchSnapshot();
  });
});
