/**
 *
 * Tests for NewsletterForm
 *
 * Molecules
 */

import { render } from '@testing-library/react';
import React from 'react';
// import '@testing-library/jest-dom/extend-expect'; // add some helpful assertions
import NewsletterForm from '../index';

describe('<NewsletterForm />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<NewsletterForm />);
    expect(spy).not.toHaveBeenCalled();
  });
});
