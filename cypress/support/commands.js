import "@testing-library/cypress/add-commands"

before(() => {
  cy.configureCypressTestingLibrary({ testIdAttribute: "data-test" })
})
