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
    <div
      className="d-flex flex-column justify-content-center align-items-start"
      onMouseEnter={() => setActive(1)}
      onMouseLeave={() => setActive(0)}
    >
      <div>
        <S.Image src={imageSrc} fluid />
      </div>
      <div className="align-self-start">
        <S.Text variant="h6" className={active ? 'active py-1' : 'py-1'}>
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
