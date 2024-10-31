describe('Product Page E2E Test', () => {
  it('should display the product details and similar items', () => {
    cy.visit('/');
    cy.get('button').contains('View Product').click();
    cy.url().should('include', '/product/');
    cy.get('[data-testid="product-name"]', { timeout: 10_000 }).should('exist');
    cy.get('[data-testid="product-price"]', { timeout: 10_000 }).should('exist');
    cy.get('[data-testid="product-description"]', { timeout: 10_000 }).should('exist');
    cy.get('[data-testid="similar-items"]', { timeout: 10_000 }).should('exist');
  });

  it('should increase and decrease product quantity', () => {
    cy.visit('/');
    cy.get('button').contains('View Product').click();
    cy.get('[data-testid="product-quantity"]', { timeout: 10_000 }).should('contain', '1');
    cy.get('[data-testid="increase-quantity"]').click();
    cy.get('[data-testid="product-quantity"]', { timeout: 10_000 }).should('contain', '2');
    cy.get('[data-testid="decrease-quantity"]').click();
    cy.get('[data-testid="product-quantity"]', { timeout: 10_000 }).should('contain', '1');
  });
});
