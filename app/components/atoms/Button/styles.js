/**
 *
 * Styled Components for Button
 *
 * Atom
 */

import bsButton from 'react-bootstrap/Button';
import styled from 'styled-components';
import Color from 'utils/color';

const accentDark = Color.dark.darken(0.6).string();

export const BaseButton = styled(bsButton)`
  border-radius: 0px;
  cursor: pointer;
  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
`;

export const OutlineDark = styled(BaseButton)`
  &:hover {
    background-color: ${Color.dark.string()};
  }
`;

export const OutlineLight = styled(BaseButton)``;

export const Dark = styled(BaseButton)`
  background-color: ${accentDark};
  background-image: none;
  color: #f2f2f2;

  &:hover {
    background-color: ${Color.dark.string()};
    background-image: none;
  }

  &:focus {
    background-image: none;
    background-color: ${accentDark};
  }
`;
