import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Footer from '../components/Footer/Footer';

describe('<Footer />', () => {
  beforeEach(() => {
    cy.mount(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>,
    );
  });

  it('renders footer component without errors', () => {
    cy.get('a').contains('CONTACT').should('exist');
    cy.get('a').contains('TERMS OF SERVICE').should('exist');
    cy.get('span').contains('2024 Energetics.').should('exist');
    cy.get('span').contains('Terms of use').should('exist');
  });
});
