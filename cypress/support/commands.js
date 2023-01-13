import "@testing-library/cypress/add-commands"
import loginData from "../fixtures/login-data.json"
const standardUser = loginData.usernames[0]
const password = loginData.password

before(() => {
  cy.configureCypressTestingLibrary({ testIdAttribute: "data-test" })
})

Cypress.Commands.add("login", (username, password) => {
  // Better approach is to make an API call using cy.request()
  cy.visit("/")
  cy.findByTestId("username").type(username)
  cy.findByTestId("password").type(password)
  cy.findByRole("button", { name: "Login" }).click()
})
