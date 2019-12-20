/**
 *
 * Tests for SubscribeForm
 *
 * Molecules
 */

import { render } from '@testing-library/react';
import React from 'react';
// import '@testing-library/jest-dom/extend-expect'; // add some helpful assertions
import SubscribeForm from '../index';

describe('<SubscribeForm />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<SubscribeForm />);
    expect(spy).not.toHaveBeenCalled();
  });
});
