/**
 *
 * Tests for Text
 *
 *
 */

import { render } from '@testing-library/react';
import React from 'react';
import Text from '../index';

describe('<Text />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Text>Content</Text>);
    expect(spy).not.toHaveBeenCalled();
  });
});
