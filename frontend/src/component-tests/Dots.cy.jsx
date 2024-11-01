import React from 'react';

import Dots from '../components/Dots/Dots';

describe('<Dots />', () => {
  beforeEach(() => {
    cy.mount(<Dots />);
  });

  it('should render in price slider', () => {
    cy.get('[data-testid="dotsContainer"]').should('exist');
  });
});
