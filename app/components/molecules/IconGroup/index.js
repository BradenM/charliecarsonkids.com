/**
 *
 * IconGroup
 *
 * Molecule
 */

import PropTypes from 'prop-types';
import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import styled from 'styled-components';

const BorderlessItem = styled(ListGroup.Item)`
  border: 0;
  padding: 0 0.4em 0 0.4em;
  background-color: transparent;
`;

const IconGroup = ({ children, containerClass, ...props }) => (
  <ListGroup horizontal className={`border-0 ${containerClass}`}>
    {children.map((child, i) => (
      // eslint-disable-next-line react/no-array-index-key
      <BorderlessItem {...props} key={`iconchild_${i}`}>
        {child}
      </BorderlessItem>
    ))}
  </ListGroup>
);

IconGroup.defaultProps = {
  containerClass: '',
};

IconGroup.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  containerClass: PropTypes.string,
};

export default IconGroup;
