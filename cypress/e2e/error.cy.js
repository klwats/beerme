// describe('error handling', () => {
//   beforeEach(() => {
//     cy.intercept(
//       "GET",
//       "https://api.openbrewerydb.org/v1/breweries", {
//       statusCode: 500,
//     })

//     cy.intercept(
//       "GET",
//       "https://api.openbrewerydb.org/v1/breweries?by_state=Colorado", {
//       statusCode: 500,
//     })

//   })
//   it('should display an error message when the dropdown menu for states fails to fetch for the home page', () => {
//     cy.visit('localhost:3000')
//     cy.get('section').should('have.class', 'error-page')
//     cy.get('.error-message').should('have.text', 'There was an error fetching the breweries.')
//   })
// })