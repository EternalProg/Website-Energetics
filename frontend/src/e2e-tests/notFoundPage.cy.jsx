describe('Not Found Page E2E Test', () => {
  it('should display the 404 error message and homepage button', () => {
    cy.visit('/non-existing-page');

    cy.get('h2').contains('404 ERROR').should('exist');

    cy.get('p').contains('This page not found').should('exist');

    cy.get('button').contains('HOMEPAGE').should('exist');
  });

  it('should navigate to the homepage when the homepage button is clicked', () => {
    cy.visit('/non-existing-page');

    cy.get('button').contains('HOMEPAGE').click();

    cy.url().should('eq', 'http://localhost:3000/');
  });
});
