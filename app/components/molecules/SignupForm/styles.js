/**
 *
 * SignupForm Styled Components
 *
 * Molecule
 */

import bsForm from 'react-bootstrap/Form';
import styled from 'styled-components';

export const Form = styled(bsForm)`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  width: 75%;
  text-align: center;
  align-self: center;
  flex-wrap: wrap;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  input {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
`;
