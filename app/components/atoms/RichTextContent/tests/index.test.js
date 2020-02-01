/**
 *
 * Tests for RichTextContent
 *
 *
 */

import React from 'react';
import { render } from '@testing-library/react';

import RichTextContent from '../index';

describe('<RichTextContent />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<RichTextContent />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Expect to have additional unit tests specified', () => {
    expect(true).toEqual(false);
  });
});
