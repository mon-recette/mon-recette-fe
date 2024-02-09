describe('Should visit saved recipes', () => {

  it('should be able to navigate to saved recipes page', () => {
    cy.visit('http://localhost:3000');
    // login
    cy.get('.background')
      .get('section')
      .get('input[type=text]').type('test@test.com')
      .get('input[type=password]').type('1234')
      .get('button').click()
      .url().should('include', '/home');
    // navigate to saved recipes
    cy.get('.header')
      .find('li')
      .contains('Saved Recipes')
      .click()
      .url().should('include', '/saved');
    // should have multiple saved recipes
    cy.get('.saved-recipes-page').should('exist')
    cy.get('.scroll');
    });
  });

  it('displays a message when no saved recipes are found', () => {
    cy.visit('http://localhost:3000');
    // login
    cy.get('.background')
      .get('section')
      .get('input[type=text]').type('test@test.com')
      .get('input[type=password]').type('1234')
      .get('button').click()
      .url().should('include', '/home');
    // navigate to saved recipes
    cy.get('.header')
      .find('li')
      .contains('Saved Recipes')
      .click()
      .url().should('include', '/saved');
    cy.fixture('empty_saved_recipes.json').then((emptySavedRecipes) => {
        cy.intercept('GET', '/api/saved', emptySavedRecipes).as('getSavedRecipes');
      });
    cy.get('.saved-recipes-page').should('exist')
    cy.contains('.saved-recipes-page', 'No saved recipes found! Add some!').should('exist');
  });
