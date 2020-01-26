/**
 *
 * NewsletterForm
 *
 * Molecule
 */

import Text from 'atoms/Text';
import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import * as S from './styles';

const NewsletterForm = () => (
  <S.Wrapper className="p-4 newsletter">
    <div className="newsletter--title pt-4">
      <S.Text size={4}>Want 15% off?</S.Text>
    </div>
    <div className="newsletter--body w-50 py-4">
      <Text variant="h6" className="font-weight-normal">
        Enter your email to get 15% off your first order, stay up to date on new
        arrivals and get early access to sales and promotions!
      </Text>
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
