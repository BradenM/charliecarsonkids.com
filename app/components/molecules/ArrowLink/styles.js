/**
 *
 * ArrowLink Styled Components
 *
 * Molecule
 */

import IconAtom from 'atoms/Icon';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-content: center;
  align-items: center;

  p {
    margin-bottom: 0 !important;
  }
`;

export const Icon = styled(IconAtom)`
  padding-left: 4px;
`;
