/**
 *
 * Footer Styled Components
 *
 * Organism
 */

import Text from 'atoms/Text';
import Container from 'react-bootstrap/Container';
import styled from 'styled-components';
import Color from 'utils/color';

export const Wrapper = styled(Container)`
  .footer {
    border-top: 1px solid #dcdcd2;
    border-bottom: 1px solid #dcdcd2;

    div:nth-child(2) {
      text-align: center !important;
      li {
        text-align: center !important;
      }
    }
  }
`;

export const FooterList = styled.ul`
  list-style: none;
  justify-content: center;
  align-items: center;
  list-style-position: inside;
  cursor: pointer;

  li {
    text-align: left;
    a {
      font-size: 0.9rem;
      color: ${Color.dark.string()};
      font-family: 'Poppins', 'GT Walsheim Pro', Georgia, Times,
        'Times New Roman', serif;
    }
  }
`;

export const FooterText = styled(Text)`
  font-family: 'Poppins', 'GT Walsheim Pro', Georgia, Times, 'Times New Roman',
    serif;
  font-weight: 200;
  margin: 0;
`;
