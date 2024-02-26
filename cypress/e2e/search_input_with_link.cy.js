describe('Should display ingredients and instructions', () => {
  beforeEach(() => { 
    cy.intercept('GET', 'http://localhost:3000/home/https%3A%2F%2Fwww.awickedwhisk.com%2Fhomemade-chicken-ravioli-recipe-3%2F', {
    statusCode: 200,
    fixture:'awickedwhisk_chicken.json',
  })
  
  })

  it('should return ingredients and instructions when link is provided', () => {
    cy.visit('http://localhost:3000/home')
      .get('.search-input')
      .type('https://www.awickedwhisk.com/homemade-chicken-ravioli-recipe-3/')
      .get('.search-button')
      .click()
    cy.intercept('GET', 'http://localhost:3000/home/https%3A%2F%2Fwww.awickedwhisk.com%2Fhomemade-chicken-ravioli-recipe-3%2F', {
        statusCode: 200,
        fixture:'awickedwhisk_chicken.json',
      })
      
      .url()
      .should('contain', 'www.awickedwhisk.com');

    cy.wait(1000);
    
    cy.get('h2')
      .should('contain', 'Saved Homemade Chicken Ravioli Recipe')
    
    cy.get('.scroll')
      .children().should('have.length', 2)
      .first()
      .within(() => {
      });
    cy.children().should('have.length', 44)
  })
});