import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Slide from '../components/Slide/Slide';

describe('<Slide />', () => {
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

  beforeEach(() => {
    cy.mount(
      <MemoryRouter>
        <Slide product={mockProduct} />
      </MemoryRouter>,
    );
  });

  it('renders the slide', () => {
    cy.get('[data-testid="slide"]').should('exist');
  });

  it('renders the product info', () => {
    cy.get('[data-testid="product-info"]').should('exist');
  });

  it('renders the product name', () => {
    cy.get('[data-testid="product-name"]').should('exist').and('contain', mockProduct.name);
  });

  it('renders the product price', () => {
    cy.get('[data-testid="product-price"]').should('exist').and('contain', `$${mockProduct.price}`);
  });

  it('renders the product description', () => {
    cy.get('[data-testid="product-description"]').should('exist').and('contain', mockProduct.description);
  });

  it('renders the product link', () => {
    cy.get(`[data-testid="product-link-${mockProduct._id}"]`).should('exist');
  });

  it('renders the view product button', () => {
    cy.get('[data-testid="view-product-btn"]').should('exist');
  });

  it('renders the product image', () => {
    cy.get('[data-testid="product-image"]').should('exist').and('have.attr', 'src', mockProduct.image);
  });
});
