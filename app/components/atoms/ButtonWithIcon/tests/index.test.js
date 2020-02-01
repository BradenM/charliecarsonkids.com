/**
 *
 * Tests for ButtonWithIcon
 *
 *
 */

import { render } from '@testing-library/react';
import React from 'react';
import ButtonWithIcon from '../index';

const testProps = {
  button: {
    variant: 'light',
  },
  icon: {
    width: '30',
    name: 'heart',
  },
};

describe('<ButtonWithIcon />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(
      <ButtonWithIcon {...testProps}>
        <p>Button</p>
      </ButtonWithIcon>,
    );
    expect(spy).not.toHaveBeenCalled();
  });
});
