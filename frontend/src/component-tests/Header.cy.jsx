import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Header from '../components/Header/Header';

describe('<Header />', () => {
  beforeEach(() => {
    cy.mount(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
  });

  it('should render logo', () => {
    cy.get('[data-testid="logo"]').should('exist');
  });

  it('should render authorization icon', () => {
    cy.get('[data-testid="authorizationIcon"]').should('exist');
  });

  it('should render shopping cart', () => {
    cy.get('[data-testid="shopCart"]').should('exist');
  });
});
