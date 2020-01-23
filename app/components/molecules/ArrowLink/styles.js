/**
 *
 * ArrowLink Styled Components
 *
 * Molecule
 */

import IconAtom from 'atoms/Icon';
import styled from 'styled-components';
import Color from 'utils/color';

export const Wrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  position: relative;
  z-index: 0;

  &::before {
    content: '';
    display: block;
    background-color: ${Color.pink.fade(0.1).string()};
    height: 3px;
    width: 0%;
    transition: all 0.3s ease;
    opacity: 0;
    position: absolute;
    bottom: 8px;
    left: 0;
    z-index: -1;
  }

  &:hover {
    &::before {
      width: 100%;
      opacity: 1;
    }
  }

  a {
    text-decoration: none !important;
  }

  p {
    margin-bottom: 0 !important;
  }
`;

export const Icon = styled(IconAtom)`
  padding-left: 4px;
`;
