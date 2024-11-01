import React from 'react';

import MainPropositions from '../components/MainPropositions/MainPropositions';

describe('<MainPropositions />', () => {
  it('renders loading state', () => {
    cy.intercept('GET', '/api/products', {
      delay: 1000,
      statusCode: 200,
      body: [],
    }).as('getProducts');

    cy.mount(<MainPropositions />);
    cy.get('[data-testid="loading"]').should('exist');
  });

  it('renders no products message when there are no products', () => {
    cy.intercept('GET', '/api/products', {
      statusCode: 200,
      body: [],
    }).as('getProductsEmpty');

    cy.mount(<MainPropositions />);
    cy.wait('@getProductsEmpty');
    cy.get('[data-testid="no-products"]').should('exist').and('contain.text', 'No main propositions available');
  });
});
