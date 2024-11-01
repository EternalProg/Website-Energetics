import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import ProductGrid from '../components/ProductGrid/ProductGrid';

describe('<ProductGrid />', () => {
  const mockProducts = [
    {
      _id: '1',
      name: 'Test Product 1',
      price: 100,
      image: 'test-image-1.jpg',
      category: 'Test Category 1',
      description: 'Test Description 1',
      productDetails: 'Test Details 1',
      isMainProposition: false,
    },
    {
      _id: '2',
      name: 'Test Product 2',
      price: 200,
      image: 'test-image-2.jpg',
      category: 'Test Category 2',
      description: 'Test Description 2',
      productDetails: 'Test Details 2',
      isMainProposition: false,
    },
    {
      _id: '3',
      name: 'Test Product 3',
      price: 300,
      image: 'test-image-3.jpg',
      category: 'Test Category 3',
      description: 'Test Description 3',
      productDetails: 'Test Details 3',
      isMainProposition: false,
    },
    {
      _id: '4',
      name: 'Test Product 4',
      price: 400,
      image: 'test-image-4.jpg',
      category: 'Test Category 4',
      description: 'Test Description 4',
      productDetails: 'Test Details 4',
      isMainProposition: false,
    },
    {
      _id: '5',
      name: 'Test Product 5',
      price: 500,
      image: 'test-image-5.jpg',
      category: 'Test Category 5',
      description: 'Test Description 5',
      productDetails: 'Test Details 5',
      isMainProposition: false,
    },
    {
      _id: '6',
      name: 'Test Product 6',
      price: 600,
      image: 'test-image-6.jpg',
      category: 'Test Category 6',
      description: 'Test Description 6',
      productDetails: 'Test Details 6',
      isMainProposition: false,
    },
  ];

  beforeEach(() => {
    cy.mount(
      <MemoryRouter>
        <ProductGrid products={mockProducts} />
      </MemoryRouter>,
    );
  });

  it('renders the product grid', () => {
    cy.get('[data-testid="product-grid"]').should('exist');
  });

  it('renders the products', () => {
    cy.get('[data-testid="products"]').children().should('have.length', mockProducts.length);
  });

  it('renders the pagination', () => {
    cy.get('[data-testid="pagination"]').should('exist');
  });

  it('renders the previous button', () => {
    cy.get('[data-testid="prev-button"]').should('exist');
  });

  it('renders the next button', () => {
    cy.get('[data-testid="next-button"]').should('exist');
  });

  it('renders the page buttons', () => {
    const totalPages = Math.ceil(mockProducts.length / 6);
    for (let index = 1; index <= totalPages; index++) {
      cy.get(`[data-testid="page-button-${index}"]`).should('exist');
    }
  });
});
