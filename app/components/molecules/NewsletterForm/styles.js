/**
 *
 * NewsletterForm Styled Components
 *
 * Molecule
 */

import TitleAtom from 'atoms/Title';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';
import styled from 'styled-components';
import Color from 'utils/color';

const accentDark = Color.dark.darken(0.5).string();
const bgColor = Color.primary.fade(0.5).string();

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${bgColor};

  &--title {
    text-align: center;
  }
`;

export const Text = styled(TitleAtom)`
  font-family: 'Adelaide', cursive;
`;

export const Form = styled(FormControl)`
  border-radius: 0;
  padding: 1.75rem;
  border: 3px solid ${accentDark};
  border-right-width: 0px;
  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: 400;

  &:focus {
    border: 3px solid ${accentDark};
    border-right-width: 0px;

    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.1);
  }
`;

export const Submit = styled(Button)`
  font-family: 'Montserrat', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  border-radius: 0;
  background-color: ${accentDark};
  border: 3px solid ${accentDark};
  color: #f2f2f2;

  &:hover {
    background-color: ${accentDark} !important;
  }

  &:focus {
    background-color: ${accentDark};
  }
`;
