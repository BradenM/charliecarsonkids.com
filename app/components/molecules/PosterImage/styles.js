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

export const Wrapper = styled.div`
  position: relative;
`;

export const Image = styled(bsImage)`
  object-fit: fit;
  height: 24rem;
  cursor: pointer;
`;

export const Text = styled(TextAtom)`
  position: relative;
  cursor: pointer;
  &::after {
    content: '';
    padding-top: 1px;
    display: block;
    width: 100%;
    cursor: pointer;
    transition: border 0.4s;
    border-bottom: 2px solid ${Color.primary.string()};
    position: absolute;
  }

  &.active,
  &:hover {
    &::after {
      border-bottom: 4px solid ${Color.primary.string()};
    }
  }
`;
