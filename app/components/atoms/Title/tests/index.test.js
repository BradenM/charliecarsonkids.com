/**
 *
 * Tests for Title
 *
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import Title from '../index';

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
    expect(element.classList.contains('display-1'));
  });

  it('Should take medium size', () => {
    const { container } = render(<Title size={2}>Content</Title>);
    const element = container.querySelector('h1');
    expect(element.classList.contains('display-2'));
  });

  it('Should add classes', () => {
    const { container } = render(
      <Title className="font-weight-bold">Content</Title>,
    );
    const element = container.querySelector('h1');
    expect(element.classList.contains('display-2'));
    expect(element.classList.contains('font-weight-bold'));
  });

  it('Should take font color', () => {
    const { container } = render(<Title color="#fff">Content</Title>);
    const element = container.querySelector('h1');
    expect(element.style.color === '#fff');
  });
});
