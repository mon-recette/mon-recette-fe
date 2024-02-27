describe('Should display ingredients and instructions', () => {
  beforeEach(() => { 
    cy.intercept('GET', 'https://mon-recette-be-8176efe67145.herokuapp.com/api/v1/searches?term=https://www.awickedwhisk.com/homemade-chicken-ravioli-recipe-3/', {
    statusCode: 200,
    fixture:'awickedwhisk_chicken.json',
  })
  
  })

  it('should return ingredients and instructions when link is provided, and saves the recipe', () => {
    cy.visit('http://localhost:3000/home')
      .get('.search-input')
      .type('https://www.awickedwhisk.com/homemade-chicken-ravioli-recipe-3/')
      .get('.search-button')
      .click()

    cy.url()
      .should('contain', 'www.awickedwhisk.com');

    cy.get('h2')
      .should('contain', 'Saved Homemade Chicken Ravioli Recipe')
    
    cy.get('.scroll')
      .children()
      .first()
      .should('contain', 'Ingredients')
      .should('contain', 'Ravioli Dough')
      .should('contain', '300 large eggs')

    cy.get('.scroll')
      .children()
      .next()
      .should('contain', 'Instruction')
      .should('contain', 'Make dough')
      .should('contain', 'Make chicken')
      .should('contain', 'Mix them together')
      .should('contain', 'Remove and serve with your favorite sauce.')

    cy.get('.scroll')
      .children()
      .next()
      .get('.saved_btn')
      .click()
    
    cy.get('h3')
      .should('contain', 'Recipe has been saved')
  })
});