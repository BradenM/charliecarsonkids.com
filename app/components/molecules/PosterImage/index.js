/**
 *
 * PosterImage
 *
 * Molecule
 */

import PropTypes from 'prop-types';
import React from 'react';
import * as S from './styles';

const PosterImage = ({ imageSrc }) => (
  <div>
    <S.Image src={imageSrc} fluid />
    <div className="d-flex">
      <S.Text variant="h6">Some Text</S.Text>
    </div>
  </div>
);

PosterImage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
};

export default PosterImage;
