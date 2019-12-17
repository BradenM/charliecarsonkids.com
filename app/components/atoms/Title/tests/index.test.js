/**
 *
 * Tests for Title
 *
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import Title, { TitleSize } from '../index';

describe('<Title />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Title />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should display passed content', () => {
    const { container } = render(<Title>Content</Title>);
    const element = container.querySelector('h1');
    expect(element.textContent === 'Content');
  });

  it('Should default to large size', () => {
    const { container } = render(<Title>Content</Title>);
    const element = container.querySelector('h1');
    expect(element.style.fontSize === TitleSize.LARGE);
  });

  it('Should take medium size', () => {
    const { container } = render(<Title size="medium">Content</Title>);
    const element = container.querySelector('h1');
    expect(element.style.fontSize === TitleSize.MEDIUM);
  });

  it('Should take small size', () => {
    const { container } = render(<Title size="small">Content</Title>);
    const element = container.querySelector('h1');
    expect(element.style.fontSize === TitleSize.SMALL);
  });

  it('Should take font color', () => {
    const { container } = render(<Title color="#fff">Content</Title>);
    const element = container.querySelector('h1');
    expect(element.style.color === '#fff');
  });
});
