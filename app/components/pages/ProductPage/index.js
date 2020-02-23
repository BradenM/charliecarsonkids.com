/**
 *
 * ProductPage
 *
 * Pages
 */

import { useQuery } from '@apollo/react-hooks';
import { ProductDetails } from 'api/queries/products.graphql';
import Button from 'atoms/Button';
import RichTextContent from 'atoms/RichTextContent';
import Text from 'atoms/Text';
import ProductGallery from 'molecules/ProductGallery';
import React from 'react';
import Col from 'react-bootstrap/Col';
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
      <S.Wrapper fluid>
        <Row className="no-gutters">
          <Col xs={8}>
            <ProductGallery
              images={data.product.images.map(i => ({
                original: i.url,
                thumbnail: i.url,
              }))}
            />
          </Col>

          <Col xs={4}>
            <Row className="flex-column justify-content-right align-items-end pl-4">
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
                <Row className="justify-content-start">
                  {data.product.variants.map(prod => (
                    <Col xs={3}>
                      <div className="d-flex justify-content-center">
                        <Button variant="outline-dark">{prod.name}</Button>
                      </div>
                    </Col>
                  ))}
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </S.Wrapper>
    </section>
  );
};

ProductPage.propTypes = {};

export default ProductPage;
