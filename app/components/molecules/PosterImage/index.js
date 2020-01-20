/**
 *
 * PosterImage
 *
 * Molecule
 */

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import * as S from './styles';

const PosterImage = ({ imageSrc, title }) => {
  const [active, setActive] = useState(0);
  return (
    <div onMouseEnter={() => setActive(1)} onMouseLeave={() => setActive(0)}>
      <S.Image src={imageSrc} fluid />
      <div className="d-flex">
        <S.Text variant="h6" className={active ? 'active' : ''}>
          {title}
        </S.Text>
      </div>
    </div>
  );
};

PosterImage.defaultProps = {
  title: 'Some Text',
};

PosterImage.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string,
};

export default PosterImage;
