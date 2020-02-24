/**
 *
 * Toast
 *
 * Molecule
 */

import PropTypes from 'prop-types';
import React, { useState } from 'react';
import * as S from './styles';

const Toast = ({ content }) => {
  const [show, setShow] = useState(false);
  return (
    <S.Wrapper aria-live="polite" aria-atomic="true">
      <S.Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
        <S.Body>{content}</S.Body>
      </S.Toast>
    </S.Wrapper>
  );
};
Toast.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Toast;
