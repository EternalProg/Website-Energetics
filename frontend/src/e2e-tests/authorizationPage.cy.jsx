describe('Authorization Page E2E Test', () => {
  it('should visit the authorization page and display the main components', () => {
    cy.visit('/auth');
    cy.url().should('include', '/auth');
    cy.get('[data-testid="authorizationPage"]', { timeout: 10_000 }).should('exist');
    cy.get('[data-testid="authToggle"]', { timeout: 10_000 }).should('exist');
    cy.get('[data-testid="signInButton"]', { timeout: 10_000 }).should('exist');
    cy.get('[data-testid="registerButton"]', { timeout: 10_000 }).should('exist');
    cy.get('[data-testid="authForm"]', { timeout: 10_000 }).should('exist');
  });

  it('should display the sign in form', () => {
    cy.visit('/auth');
    cy.url().should('include', '/auth');
    cy.get('[data-testid="signInButton"]').click();
    cy.get('[data-testid="signInForm"]', { timeout: 10_000 }).should('exist');
  });

  it('should display the register form', () => {
    cy.visit('/auth');
    cy.url().should('include', '/auth');
    cy.get('[data-testid="registerButton"]').click();
    cy.get('[data-testid="registerForm"]', { timeout: 10_000 }).should('exist');
  });
});
