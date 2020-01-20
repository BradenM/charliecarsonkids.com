/**
 *
 * IconButton Styled Components
 *
 * Atom
 */

import styled from 'styled-components';
import Color from 'utils/color';

export const Wrapper = styled.div`
  padding: ${props => props.padding};
  transition: background-color 400ms ease-in-out;
  border-radius: 50%;

  div:first-child {
    padding: 2px;
  }

  &:hover {
    cursor: pointer;
    background-color: ${Color.nude.lighten(0.1).string()};
  }
`;
