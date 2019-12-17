/**
 *
 * Title
 *
 * Atom
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';

export const TitleSize = {
  SMALL: '1.75em',
  MEDIUM: '2.25em',
  LARGE: '3em',
};

const Title = styled.h1`
  font-size: ${props => TitleSize[props.size.toUpperCase()]};
  color: ${props => props.color};
  margin-bottom: 0.25em;
`;

Title.defaultProps = {
  size: 'large',
  color: 'inherit',
};

Title.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
};

export default Title;
