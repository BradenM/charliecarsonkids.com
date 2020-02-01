/**
 *
 * FeaturedProducts
 *
 * Organism
 */

import { useQuery } from '@apollo/react-hooks';
import { GetFeaturedProducts } from 'api/queries/products.graphql';
import FeaturedProduct from 'molecules/FeaturedProduct';
import PropTypes from 'prop-types';
import React from 'react';

export const FeaturedProducts = ({ ItemContainer, ...props }) => {
  const { loading, data } = useQuery(GetFeaturedProducts);
  return (
    <>
      {!loading &&
        data.products.edges.map(({ node }) => (
          <ItemContainer key={`container_${node.id}`} {...props}>
            <FeaturedProduct
              title={node.name}
              imageSrc={node.thumbnail2x.url}
              price={node.pricing.priceRange.start.net.amount}
              key={node.id}
              toLink={{
                pathname: `/product/${node.slug}`,
                state: {
                  productId: node.id,
                },
              }}
            />
          </ItemContainer>
        ))}
    </>
  );
};

FeaturedProduct.defaultProps = {
  ItemContainer: children => <div>{children}</div>,
};

FeaturedProducts.propTypes = {
  ItemContainer: PropTypes.func,
};

export default FeaturedProducts;
