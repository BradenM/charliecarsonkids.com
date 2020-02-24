/**
 *
 * Toast Styled Components
 *
 * Molecule
 */

import bsToast from 'react-bootstrap/Toast';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  min-height: 100px;
`;

export const Toast = styled(bsToast)`
  position: absolute;
  top: 0;
  left: 0;
`;

export const THead = styled(bsToast.Header)``;

export const TBody = styled(bsToast.Body)``;
