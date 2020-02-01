/**
 *
 * PlainLink
 *
 * Atom
 */

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const PlainLink = styled(Link)`
  text-decoration: inherit;
  color: inherit;
  &:hover {
    color: inherit;
    text-decoration: inherit;
  }
`;

PlainLink.propTypes = Link.propTypes;

export default PlainLink;
