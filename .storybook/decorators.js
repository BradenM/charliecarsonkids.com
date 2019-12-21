/*
 * Storybook Decorators
 *
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { Theme } from '../app/global-styles';

export const withTheme = storyFn => (
  <div>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  </div>
);
