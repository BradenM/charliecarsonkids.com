/**
 *
 * ProductCard Styled Components
 *
 * Molecule
 */

import Card from 'react-bootstrap/Card';
import styled from 'styled-components';

export const Wrapper = styled(Card)`
  border: 0;
  text-align: left;
  cursor: pointer;
  background-color: transparent;
`;

export const Img = styled(Card.Img)`
  height: 16rem;
  object-fit: cover;
`;

export const Title = styled(Card.Title)`
  font-size: 1rem;
  font-family: 'Poppins', 'GT Walsheim Pro', Georgia, Times, 'Times New Roman',
    serif;
`;
export const Subtitle = styled(Card.Subtitle)`
  font-size: 0.75rem;
  font-weight: 600;
`;
