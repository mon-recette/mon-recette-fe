describe('Should visit the login page', () => {

  it('should show login for username and email', () => {
    cy.visit('http://localhost:3000');
    cy.get('.header')
      .should('exist')
      .get('li')
      .should('contain', 'Mon Recette')
      .get('.navbar')
      .should('exist')
      .get('.nav_links')
      .should('exist')
      .get('li')
      .should('contain', 'Saved Recipes')
      .get('li')
      .should('contain', 'Logout');
    cy.get('.background')
      .should('exist')
      .get('section')
      .should('exist')
  });
});