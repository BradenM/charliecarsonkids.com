/**
 *
 * Input Styled Components
 *
 * Atom
 */

import FormControl from 'react-bootstrap/FormControl';
import styled from 'styled-components';
import Color from 'utils/color';

const accentDark = Color.dark.darken(0.5).string();

export const BaseInput = styled(FormControl)`
  border-radius: 0;
  border: 1px solid ${accentDark};
  font-weight: 400;
  padding: 1.25rem;

  &:focus {
    border: 1px solid ${accentDark};
    box-shadow: 5px 5px 5px 0px rgba(0, 0, 0, 0.1);
  }

  &::placeholder {
    color: ${accentDark};
  }
`;
