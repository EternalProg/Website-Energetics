import React from 'react';

import Input from '../components/Input/Input';

describe('<Input />', () => {
  it('renders the input and label elements', () => {
    cy.mount(<Input type="text" placeholder="Enter text" value="" onChange={() => {}} />);

    cy.get('[data-testid="input-element"]').should('exist');

    cy.get('[data-testid="input-label"]').should('exist').and('contain.text', 'Enter text');
  });

  it('calls onChange when input value changes', () => {
    const handleChange = cy.stub();
    cy.mount(<Input type="text" placeholder="Enter text" value="" onChange={handleChange} />);

    cy.get('[data-testid="input-element"]').type('Hello');
  });
});
