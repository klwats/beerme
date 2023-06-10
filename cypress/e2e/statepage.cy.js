describe("State specific page", () => {
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

  it("should allow a user to click a state then display the header and name of the state selected", () => {
    cy.get("#states").select("Colorado");
    cy.get(".submit").click();
    cy.wait("@breweries")
    cy.url().should("include", "/breweries/Colorado");
    cy.contains("h1", "Colorado");
    cy.contains("h1", "BeerMe")
  }
  )

  it("should display a grid with all the breweries in that state", () => {
    cy.get("#states").select("Colorado");
    cy.get(".submit").click();
    cy.wait("@breweries");
    cy.get("h2").should("have.length", 3);
    cy.get("h2").first().contains("10");
    cy.get("a").last().contains("degree");
  })
})