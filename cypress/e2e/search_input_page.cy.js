describe('Should display the home page with search', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://mon-recette-be-8176efe67145.herokuapp.com/api/v1/searches?term=chicken', {
      statusCode: 200,
      fixture: 'chicken_search.json',
    }).as('searchRequest');

    cy.visit('http://localhost:3000/home');
  })

  it('should show the home page and display an error message when nothing is entered', () => {
    cy.visit('http://localhost:3000/home')
      .get('.header')
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
      .should('contain', 'Logout')
      .get('.main-logo')
      .should('exist')
      .get('.search-bar')
      .should('exist')
      .get('.search-input')
      .should('have.attr', 'placeholder', 'Enter link or search term')
      .get('.search-button')
      .click()
      .get('h2')
      .should('contain', 'Please fill out the search input');
  });

  it('should be able to search for an ingredient and display recipes', () => {
    cy.intercept('GET', 'https://mon-recette-be-8176efe67145.herokuapp.com/api/v1/searches?term=chicken', {
      statusCode: 200,
      fixture: 'chicken_search.json',
    }).as('searchRequest');

    cy.visit('http://localhost:3000/home')
      .get('.search-input')
      .type('chicken')
      .get('.search-button')
      .click()
      .url()
      .should('contain', '/filteredrecipes');

    cy.wait(1000);

    cy.get('.media-scroll')
      .children().should('have.length', 25)
      .get('.media-scroll')
      .children()
      .first()
      .within(() => {
        cy.get('h3')
          .should('contain', 'Chicken Handi')
          .get('.small-recipe-card-img')
          .should('exist');
      });

    cy.get('.media-scroll')
      .children()
      .last()
      .within(() => {
        cy.get('h3')
          .should('contain', 'Jerk chicken with rice & peas')
          .get('.small-recipe-card-img')
          .should('exist');
      });
  });
});