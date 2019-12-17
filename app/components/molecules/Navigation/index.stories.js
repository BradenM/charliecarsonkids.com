/**
 *
 * Stories for Navigation
 *
 * Molecule
 */

import React from 'react';
import StoryRouter from 'storybook-react-router';
import styled from 'styled-components';
import Navigation from '.';

const NavBackground = styled.div`
  padding-top: 5em;
  padding-bottom: 5em;
  background-color: gray;
`;

export default {
  title: 'Design|Molecules/Navigation',
  component: Navigation,
  decorators: [
    StoryRouter(),
    story => <NavBackground>{story()}</NavBackground>,
  ],
};

export const defaultNavigation = () => <Navigation />;
