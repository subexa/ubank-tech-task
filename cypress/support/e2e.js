import "cypress-mochawesome-reporter/register"
import "./commands"

before(() => {
  cy.configureCypressTestingLibrary({ testIdAttribute: "data-test" })
})
