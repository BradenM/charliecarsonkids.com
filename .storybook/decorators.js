/*
 * Storybook Decorators
 *
 */

import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle, { Theme } from '../app/global-styles';

export const withTheme = storyFn => (
  <>
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  </>
);
