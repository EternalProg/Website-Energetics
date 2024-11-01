import React from 'react';

import FilterPanel from '../components/FilterPanel/FilterPanel';

describe('<FilterPanel />', () => {
  beforeEach(() => {
    cy.mount(<FilterPanel />);
  });

  it('should render in price slider', () => {
    cy.get('[data-testid="filterToogle"]').should('exist');
  });

  it('should render in price slider', () => {
    cy.get('[data-testid="sortDropdown"]').should('exist');
  });

  it('should render search input', () => {
    cy.get('input[placeholder="Search..."]').should('exist');
  });

  it('should render category dropdown', () => {
    cy.get('[data-testid="categoryDropdown"]').should('exist');
  });

  it('should render on sale toggle', () => {
    cy.get('label').contains('On sale').parent().find('input[type="checkbox"]').should('exist');
  });

  it('should render in stock toggle', () => {
    cy.get('label').contains('In stock').parent().find('input[type="checkbox"]').should('exist');
  });
});
