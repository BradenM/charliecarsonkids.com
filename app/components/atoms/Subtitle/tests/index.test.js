/**
 *
 * Tests for Subtitle
 *
 *
 */

import { render } from '@testing-library/react';
import React from 'react';
import Subtitle, { SubtitleSize } from '../index';

describe('<Subtitle />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(<Subtitle />);
    expect(spy).not.toHaveBeenCalled();
  });

  it('Should display passed content', () => {
    const { container } = render(<Subtitle>Content</Subtitle>);
    const element = container.querySelector('h2');
    expect(element.textContent === 'Content');
  });

  it('Should default to large size', () => {
    const { container } = render(<Subtitle>Content</Subtitle>);
    const element = container.querySelector('h2');
    expect(element.style.fontSize === SubtitleSize.LARGE);
  });

  it('Should take medium size', () => {
    const { container } = render(<Subtitle size="medium">Content</Subtitle>);
    const element = container.querySelector('h2');
    expect(element.style.fontSize === SubtitleSize.MEDIUM);
  });

  it('Should take small size', () => {
    const { container } = render(<Subtitle size="small">Content</Subtitle>);
    const element = container.querySelector('h2');
    expect(element.style.fontSize === SubtitleSize.SMALL);
  });

  it('Should take font color', () => {
    const { container } = render(<Subtitle color="#fff">Content</Subtitle>);
    const element = container.querySelector('h2');
    expect(element.style.color === '#fff');
  });
});
