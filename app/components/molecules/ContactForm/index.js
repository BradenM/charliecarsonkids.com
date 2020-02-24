/**
 *
 * ContactForm Styled Components
 *
 * Molecule
 */

import Button from 'atoms/Button';
import * as Form from 'atoms/Form';
import Input from 'atoms/Input';
import Text from 'atoms/Text';
import React from 'react';
import styled from 'styled-components';

const Messages = {
  contactUsInfo: 'Have a burning question to ask? Shoot away!',
  submit: 'Submit',
};

const LargeInput = styled(Input)`
  padding-bottom: 10rem;
`;

const ContactForm = () => (
  <Form.Wrapper>
    <Form.Header>
      <Text variant="h1" font="GT Walsheim Regular">
        Contact Us
      </Text>
      <Text>{Messages.contactUsInfo}</Text>
    </Form.Header>
    <Form.Body>
      <Input name="name" placeholder="Name" />
      <Input name="email" placeholder="Email Address" />
      <Input name="order" placeholder="Order # (If applicable)" />
      <LargeInput name="details" placeholder="How can we help you?" />
      <Button type="submit" className="px-4 py-3" variant="dark">
        {Messages.submit}
      </Button>
    </Form.Body>
  </Form.Wrapper>
);

export default ContactForm;
