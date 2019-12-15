/**
 *
 * Img
 *
 * Renders an image, enforcing use of an alt tag.
 */

import PropTypes from 'prop-types';
import React from 'react';

function Img(props) {
  return <img className={props.className} src={props.src} alt={props.alt} />;
}

Img.propTypes = {
  className: PropTypes.string,
  src: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
  alt: PropTypes.string.isRequired,
};

export default Img;
