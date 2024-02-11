describe('Should visit saved recipes', () => {
  it('should be able to navigate to saved recipes page', () => {
    cy.visit('http://localhost:3000');

    cy.get('.background')
      .get('section')
      .get('input[type=text]')
      .type('test@test.com')
      .get('input[type=password]')
      .type('1234')
      .get('button')
      .click()
      .url()
      .should('include', '/home');

    cy.intercept('GET', '/api/saved', { fixture: 'saved_recipes.json' }).as(
      'getSavedRecipes',
    );

    cy.get('.header')
      .find('li')
      .contains('Saved Recipes')
      .click()
      .url()
      .should('include', '/saved');

    cy.get('.saved-recipes-page').should('exist');
    cy.get('.scroll-saved-page').should('exist');
    cy.get('.scroll-saved-page > :nth-child(1)').within(() => {
      cy.get('h3').should('contain', "Another Wings")
      .get('.show_details_btn').should('exist')
      .click()
      cy.get('.dropdown').should('contain', 'Ingredients')
      cy.get('.dropdown').should('contain', '24 chicken wing sections')
      cy.get('.dropdown').should('contain', '1/2 cup butter, melted')
      cy.get('.dropdown').should('contain', '1 cup chopped green onions')
      cy.get('.dropdown').should('contain', 'Optional toppings: Seeded jalapeno slices, salsa, sour cream and guacamole')
      cy.get('.dropdown').should('contain', 'Instructions')
      cy.get('.dropdown').should('contain', '1. Preheat oven to 350°.')
      cy.get('.dropdown').should('contain', '2. Dip wing sections in butter, then roll in crushed nacho chips.')
      cy.get('.dropdown').should('contain', '3. Return to oven and bake until cheese is melted, about 15 minutes.')
      cy.get('.dropdown').should('contain', '3. Return to oven and bake until cheese is melted, about 15 minutes.')
      cy.get('.dropdown').should('contain', '4. Serve with optional toppings as desired.')
      
      
    })
  });

  it('displays a message when no saved recipes are found', () => {
    cy.visit('http://localhost:3000');

    // login
    cy.get('.background')
      .get('section')
      .get('input[type=text]')
      .type('test@test.com')
      .get('input[type=password]')
      .type('1234')
      .get('button')
      .click()
      .url()
      .should('include', '/home');

    // Intercept the API request before navigating to saved recipes
    cy.intercept('GET', '/api/saved', {
      fixture: 'empty_saved_recipes.json',
    }).as('getEmptySavedRecipes');

    // Navigate to saved recipes
    cy.get('.header').find('li').contains('Saved Recipes').click();

    // Should display a message when no saved recipes are found
    cy.get('.saved-recipes-page').should('exist');
    cy.contains(
      '.saved-recipes-page',
      'No saved recipes found! Add some!',
    ).should('exist');
  });
});
