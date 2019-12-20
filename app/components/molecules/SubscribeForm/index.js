/**
 *
 * SubscribeForm
 *
 * Molecule
 */

import Text from 'atoms/Text';
import PropTypes from 'prop-types';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import FormControl from 'react-bootstrap/FormControl';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

const SubscribeForm = ({ title, body, className }) => (
  <Container className={className} fluid>
    <Row className="flex-column justify-content-center align-content-center align-items-center">
      <Col xs={9} md={7} className="p-3">
        <Text
          variant="h3"
          className="text-justify text-center mb-3"
          color="light"
        >
          {title}
        </Text>
        <Text color="light" className="text-center m-0">
          {body}
        </Text>
      </Col>
      <Col xs={9}>
        <div className="p-3">
          <InputGroup>
            <FormControl type="email" placeholder="Your Email" />
            <InputGroup.Append>
              <Button variant="outline-light">Submit</Button>
            </InputGroup.Append>
          </InputGroup>
        </div>
      </Col>
    </Row>
  </Container>
);

SubscribeForm.defaultProps = {
  body:
    "Don't miss out on any deals and stay up to date with the latest trends.",
  title: 'Subscribe to our Newsletter',
  className: 'bg-dark p-4 rounded',
};

SubscribeForm.propTypes = {
  body: PropTypes.string,
  title: PropTypes.string,
  className: PropTypes.string,
};

export default SubscribeForm;
