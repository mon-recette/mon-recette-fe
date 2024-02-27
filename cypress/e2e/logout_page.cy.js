describe('Should log a user out', () => {
  it('should log out user when you click log out button', () => {
    cy.visit('http://localhost:3000/home') 
    cy.get('a[href="/"]').click()
    cy.url().should('eq', 'http://localhost:3000/');
  });
});