describe('Shop Page E2E Test', () => {
  it('should display the shop page and products', () => {
    cy.visit('/shop');
    cy.url().should('include', '/shop');
    cy.get('[data-testid="shop-page"]', { timeout: 10_000 }).should('exist');
    cy.get('[data-testid="product-grid"]', { timeout: 10_000 }).should('exist');
  });

  it('should display error message', () => {
    cy.intercept('GET', '/api/products', { statusCode: 500 }).as('getProducts');
    cy.visit('/shop');
    cy.get('[data-testid="error-message"]', { timeout: 10_000 }).should('exist');
  });

  it('should contain filter panel', () => {
    cy.visit('/shop');
    cy.get('[data-testid="filter-panel"]', { timeout: 10_000 }).should('exist');
  });

  it('go to product page', () => {
    cy.visit('/shop');
    cy.get('[data-testid="product"]').first().click();
    cy.url().should('include', '/product');
  });
});
