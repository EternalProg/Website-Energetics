describe('Home Page E2E Test', () => {
  it('should visit the home page and display the main components', () => {
    cy.intercept('GET', '/api/products');
    cy.visit('/');
    cy.url().should('include', '/');
    cy.get('[data-testid="homePage"]', { timeout: 20_000 }).should('exist');
  });

  it('should display the error message', () => {
    cy.intercept('GET', '/api/products', { statusCode: 500 }).as('getProducts');
    cy.visit('/');
    cy.url().should('include', '/');
    cy.wait('@getProducts', { timeout: 20_000 });
    cy.get('[data-testid="error-message"]', { timeout: 20_000 }).should('exist');
  });
});
