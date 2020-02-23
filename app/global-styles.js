import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'GT Walsheim Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }

  body.fontLoaded {
    font-family: 'GT Walsheim Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
      Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji';
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
    height: 100%;
    width: 100%;
  }

  p,
  label {
    font-family: 'GT Walsheim Pro', Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

@media (max-width: 1200px) {
  legend {
    font-size: calc(1.275rem + 0.3vw);
  }
  h1,
  .h1 {
    font-size: calc(1.375rem + 1.5vw);
  }
  h2,
  .h2 {
    font-size: calc(1.325rem + 0.9vw);
  }
  h3,
  .h3 {
    font-size: calc(1.3rem + 0.6vw);
  }
  h4,
  .h4 {
    font-size: calc(1.275rem + 0.3vw);
  }

  .display-1 {
    font-size: calc(1.725rem + 5.7vw);
  }
  .display-2 {
    font-size: calc(1.675rem + 5.1vw);
  }
  .display-3 {
    font-size: calc(1.575rem + 3.9vw);
  }
  .display-4 {
    font-size: calc(1.475rem + 2.7vw);
  }
  .close {
    font-size: calc(1.275rem + 0.3vw);
  }
}

a,
a:hover,
a:focus {
  outline: none;
}
`;

export const CustomColors = {
  pink: '#F8C3BA',
  red: '#b2565b',
  blue: '#45749d',
  yellow: '#ffa942',
  tan: '#ffeecf',
  nude: '#ffd2bf',
  green: '#82b97a',
  dark: '#343a40',
  light: '#f2f2f2',
};

export const BrandColors = {
  primary: CustomColors.pink,
  success: CustomColors.green,
  info: CustomColors.blue,
  warning: CustomColors.yellow,
  danger: CustomColors.red,
};

export const Theme = {
  ...BrandColors,
  ...CustomColors,
};

export default GlobalStyle;
