import React from 'react';
import { MemoryRouter } from 'react-router-dom';

import Slider from '../components/Slider/Slider';

describe('<Slider />', () => {
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
  ];

  beforeEach(() => {
    cy.mount(
      <MemoryRouter>
        <Slider products={mockProducts} />
      </MemoryRouter>,
    );
  });

  it('renders the slider container', () => {
    cy.get('[data-testid="slider-container"]').should('exist');
  });
});
