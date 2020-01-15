import color from 'color';
import { createGlobalStyle } from 'styled-components';
import './style/custom.scss';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Montserrat', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Poppins', Georgia, Times, 'Times New Roman', serif;
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
`;

export const CustomColors = {
  pink: '#ffd1dc',
  red: '#b2565b',
  blue: '#45749d',
  yellow: '#ffa942',
  tan: '#ffeecf',
  nude: '#ffd2bf',
  green: '#82b97a',
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

export const Color = name => color(Theme[name]);

export default GlobalStyle;
