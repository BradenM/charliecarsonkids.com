/**
 *
 * NewsletterForm
 *
 * Molecule
 */

import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import * as S from './styles';

const NewsletterForm = () => (
  <S.Wrapper className="p-4 newsletter">
    <div className="newsletter--title m-2 p-4">
      <S.Text size={4}>Want 15% off?</S.Text>
    </div>
    <div className="newsletter--form m-2">
      <InputGroup>
        <S.Form type="email" placeholder="Your Email" />
        <InputGroup.Append>
          <S.Submit variant="outline-dark" type="submit">
            SIGN UP
          </S.Submit>
        </InputGroup.Append>
      </InputGroup>
    </div>
  </S.Wrapper>
);

NewsletterForm.propTypes = {};

export default NewsletterForm;
