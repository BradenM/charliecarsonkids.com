/**
 *
 * LoginForm Styled Components
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

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;

  input {
    margin-bottom: 0.35rem;
    margin-top: 0.35rem;
  }

  button {
    margin-top: 0.5rem;
  }
`;
