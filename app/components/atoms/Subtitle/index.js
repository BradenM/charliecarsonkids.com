/**
 *
 * Subtitle
 *
 * Atom
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';

export const SubtitleSize = {
  SMALL: '1.35em',
  MEDIUM: '1.5em',
  LARGE: '1.75em',
};

const Subtitle = styled.h2`
  font-size: ${props => SubtitleSize[props.size.toUpperCase()]};
  color: ${props => props.color};
`;

Subtitle.defaultProps = {
  size: 'large',
  color: 'inherit',
};

Subtitle.propTypes = {
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  color: PropTypes.string,
};

export default Subtitle;
