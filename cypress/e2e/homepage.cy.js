
describe("Home Page", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api.openbrewerydb.org/v1/breweries",
      {
        statusCode: 200,
        body: [
          {
            state: "Oregon"
          },
          {
            state: "California"
          },
          {
            state: "Colorado"
          },
          {
            state: "Oregon"
          },
        ],
      },
    ).as("states");

    cy.fixture("Colorado.json")
      .as("breweries")
    cy.intercept(
      "GET",
      "https://api.openbrewerydb.org/v1/breweries?by_state=Colorado",
      {
        statusCode: 200,
        fixture: "Colorado.json"
      }
    )
      .as("breweries");
    cy.visit("localhost:3000")
  });

  it("should render the home page", () => {

    cy.get(".header-link").should("contain", "BeerMe");
    cy.get(".title").should("contain", "Where We Drinkin?");
    cy.get(".submit").should("exist")
    cy.get(".dropdown-menu").should("exist")
  });

  it("should render a dropdown list of states", () => {
    cy.get(".dropdown-menu")
      .find("option")
      .should("have.length", 4)
      .should("contain", "Oregon");
  });

  it("should allow users to select a state", () => {
    cy.get("#states").select("Colorado");
    cy.get(".submit").click();
    cy.url().should("include", "/breweries/Colorado");
    cy.contains("h1", "Colorado");
  })


})