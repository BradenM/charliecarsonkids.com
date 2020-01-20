/**
 *
 * PosterImage Styled Components
 *
 * Organism
 */

import TextAtom from 'atoms/Text';
import bsImage from 'react-bootstrap/Image';
import styled from 'styled-components';
import Color from 'utils/color';

export const Image = styled(bsImage)`
  object-fit: cover;
  height: 24rem;
  cursor: pointer;
`;

export const Text = styled(TextAtom)`
  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 100%;
    cursor: pointer;
    transition: height 0.25s;
    background-color: ${Color.primary.string()};
  }

  &:hover {
    &:after {
      height: 3px;
    }
  }
`;
