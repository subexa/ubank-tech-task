import "@testing-library/cypress/add-commands"

before(() => {
  cy.configureCypressTestingLibrary({ testIdAttribute: "data-test" })
})

Cypress.Commands.add("Login", (username, password) => {
  // cy.request()
})
