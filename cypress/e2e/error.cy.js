describe('error handling', () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api.openbrewerydb.org/v1/breweries", {
      statusCode: 500
    })

    cy.intercept(
      "GET",
      "https://api.openbrewerydb.org/v1/breweries?by_state=Colorado", {
      statusCode: 500,
    })
  })

  it('should display an error page when the dropdown menu fails to fetch states for the home page', () => {
    cy.visit('localhost:3000')
    cy.get('section').should('have.class', 'error-page')
    cy.get('.error-message').should('have.text', 'A server error occured while we were trying to fetch your breweries. Please try again.')
  })

  it('should display an error page when the breweries for the grid fail to fetch', () => {
    cy.visit('localhost:3000/Colorado')
    cy.get('section').should('have.class', 'error-page')
    cy.get('.error-message').should('have.text', 'A server error occured while we were trying to fetch your breweries. Please try again.')
  })
})