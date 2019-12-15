/**
 *
 * Tests for Img
 *
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
// import 'jest-dom/extend-expect'; // add some helpful assertions
import Img from '../index';

const src = 'test.png';
const alt = 'test';
const renderComponent = (props = {}) =>
  render(<Img src={src} alt={alt} {...props} />);

describe('<Img />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    renderComponent();
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should have a src attribute', () => {
    const { container } = renderComponent();
    const element = container.querySelector('img');
    expect(element.hasAttribute('src')).toBe(true);
  });

  it('Should have an alt attribute', () => {
    const { container } = renderComponent();
    const element = container.querySelector('img');
    expect(element.hasAttribute('alt')).toBe(true);
  });

  it('Should not have class attribute', () => {
    const { container } = renderComponent();
    const element = container.querySelector('img');
    expect(element.hasAttribute('class')).toBe(false);
  });

  it('Should adopt a className attribute', () => {
    const className = 'test';
    const { container } = renderComponent({ className });
    const element = container.querySelector('img');
    expect(element.className).toEqual(className);
  });

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = renderComponent();
    expect(firstChild).toMatchSnapshot();
  });
});
