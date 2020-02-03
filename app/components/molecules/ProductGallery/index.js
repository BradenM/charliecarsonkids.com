/**
 *
 * ProductGallery
 *
 * Molecule
 */

import PropTypes from 'prop-types';
import React from 'react';
// import styled from 'styled-components';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

const ProductGallery = ({ images }) => (
  <ImageGallery
    items={images}
    showNav={false}
    thumbnailPosition="left"
    showPlayButton={false}
    showFullscreenButton={false}
    autoplay
  />
);

ProductGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      original: PropTypes.string,
      thumbnail: PropTypes.string,
    }),
  ).isRequired,
};

export default ProductGallery;
