import React from 'react';

import PriceSlider from '../components/PriceSlider/PriceSlider';

describe('<PriceSlider />', () => {
  beforeEach(() => {
    cy.mount(<PriceSlider />);
  });

  it('displays initial min and max prices', () => {
    cy.get('[data-testid="min-price"]').should('exist').and('contain.text', 'Min: $350');
    cy.get('[data-testid="max-price"]').should('exist').and('contain.text', 'Max: $10000');
  });

  it('price slider should exist', () => {
    cy.get('[data-testid="price-slider"]').should('exist');
  });

  it('progress bar should exist', () => {
    cy.get('[data-testid="progress-bar"]').should('exist');
  });
});
