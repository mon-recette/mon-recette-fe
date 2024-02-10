describe('Should visit the login page', () => {
  it('should show login for username and email and allow user to log in', () => {
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
      .get('input[type=text]')
      .type('test@test.com')
      .get('input[type=password]')
      .type('1234')
      .get('button')
      .click()
      .url()
      .should('include', '/home');
  });

  it('should show a friendly user message when input field are not filled out properly', () => {
    cy.visit('http://localhost:3000')
      .get('section')
      .should('exist')
      .get('button')
      .click()
      .get('[data-test="search-error-message"]')
      .should('contain', 'Please fill out all input fields')
      .get('input[type=text]')
      .type('test@gmail.com')
      .get('input[type=password]')
      .type('1234')
      .get('button')
      .click();
    cy.get('[data-test="search-error-message"]').should(
      'contain',
      'Invalid username or password',
    );
  });
});
