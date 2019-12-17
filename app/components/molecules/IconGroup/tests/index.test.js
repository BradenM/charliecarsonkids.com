/**
 *
 * Tests for IconGroup
 *
 * Molecules
 */

import Icon from 'atoms/Icon';
import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions
import IconGroup from '../index';

describe('<IconGroup />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <IconGroup>
        <Icon name="icon" />
        <Icon name="icon" />
      </IconGroup>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IconGroup>
        <Icon name="icon" />
        <Icon name="icon" />
      </IconGroup>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
