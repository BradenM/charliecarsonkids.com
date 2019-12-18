/**
 *
 * Title
 *
 * Atom
 */

import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1.attrs(({ size, className }) => ({
  className: `display-${size} ${className}`,
}))`
  color: ${props => props.color};
  margin-bottom: 0.25em;
`;

Title.defaultProps = {
  size: 1,
  color: 'inherit',
  className: '',
};

Title.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  className: PropTypes.string,
};

export default Title;
