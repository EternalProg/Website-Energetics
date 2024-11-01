import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import ShopTheLatest from '../components/ShopTheLatest/ShopTheLatest';

describe('<ShopTheLatest />', () => {
  beforeEach(() => {
    cy.mount(
      <MemoryRouter>
        <ShopTheLatest />
      </MemoryRouter>,
    );
  });

  it('renders the component', () => {
    cy.get('[data-testid="shop-the-latest"]').should('exist');
  });

  it('renders the title', () => {
    cy.get('[data-testid="shop-the-latest-title"]').should('exist');
  });

  it('renders the "View All" link', () => {
    cy.get('[data-testid="view-all-link"]').should('exist');
  });

  it('renders the products', () => {
    cy.get('[data-testid="products"]').children().should('have.length', 6);
  });

  it('renders each product link', () => {
    cy.get('[data-testid^="product-link-"]').should('have.length', 6);
  });
});
