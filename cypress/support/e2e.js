import "./commands"

before(() => {
  cy.configureCypressTestingLibrary({ testIdAttribute: "data-test" })
})
