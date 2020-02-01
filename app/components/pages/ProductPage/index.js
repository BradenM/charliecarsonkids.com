/**
 *
 * ProductPage
 *
 * Pages
 */

import { useQuery } from '@apollo/react-hooks';
import { ProductDetails } from 'api/queries/products.graphql';
import RichTextContent from 'atoms/RichTextContent';
import Text from 'atoms/Text';
import React from 'react';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Spinner from 'react-bootstrap/Spinner';
import { useLocation } from 'react-router-dom';
import * as S from './styles';

const ProductPage = () => {
  const {
    state: { productId },
  } = useLocation();
  const { data, loading } = useQuery(ProductDetails, {
    variables: {
      id: productId,
    },
  });
  if (loading) return <Spinner animation="grow" />;
  return (
    <section className="product--content-container my-4">
      <Container>
        <Row>
          <Col>
            <Row>
              <Col xs={3}>
                <p>Image Scroller goes here</p>
              </Col>
              <Col xs={9}>
                <S.ImgWrapper>
                  <Image src={data.product.images[0].url} fluid />
                </S.ImgWrapper>
              </Col>
            </Row>
          </Col>

          <Col>
            <Row className="flex-column">
              <Col>
                <S.TitleWrapper className="mb-3">
                  <Text
                    variant="h1"
                    font="GT Walsheim Regular"
                    className="font-weight-light mb-0"
                  >
                    {data.product.name}
                  </Text>
                  <Text variant="h5">
                    ${data.product.pricing.priceRange.start.net.amount}
                  </Text>
                </S.TitleWrapper>
              </Col>

              <Col>
                <RichTextContent content={data.product.descriptionJson} />
              </Col>

              <Col>
                <p>Product Attrs</p>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

ProductPage.propTypes = {};

export default ProductPage;
