/**
 *
 * Tests for FeaturedProducts
 *
 * Organism
 */

import { render } from '@testing-library/react';
import GetFeaturedProducts from 'api/queries/products.graphql';
import { PlaceholderURL } from 'utils/getStatic';
import { withMockProvider } from 'utils/testHelpers';
import FeaturedProducts from '../index';

const mocks = [
  {
    request: {
      query: GetFeaturedProducts,
    },
    result: {
      data: {
        products: [
          {
            node: {
              id: 'productId',
              name: 'Product Name',
              slug: 'product-name',
              minimumVariantPrice: {
                amount: 30,
                currency: 'USD',
              },
              images: [
                {
                  url: PlaceholderURL('200'),
                },
              ],
            },
          },
        ],
      },
    },
  },
];

describe('<FeaturedProducts />', () => {
  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    render(withMockProvider(FeaturedProducts, mocks));
    expect(spy).not.toHaveBeenCalled();
  });
});
