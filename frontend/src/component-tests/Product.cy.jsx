import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Product from '../components/Product/Product';

describe('<Product />', () => {
  it('renders', () => {
    const mockProduct = {
      _id: '1',
      name: 'Test Product',
      price: 100,
      image: 'test-image.jpg',
      category: 'Test Category',
      description: 'Test Description',
      productDetails: 'Test Details',
      isMainProposition: false,
    };
    cy.mount(
      <MemoryRouter>
        <Product
          product={mockProduct}
          classNames={{
            product: 'test-product',
            productImage: 'test-image',
            productName: 'test-name',
            productPrice: 'test-price',
          }}
        />
      </MemoryRouter>,
    );
  });
});
