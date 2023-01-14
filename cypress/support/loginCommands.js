import "@testing-library/cypress/add-commands"
import loginData from "../fixtures/login-data.json"

Cypress.Commands.add("login", (username, password) => {
  // Better approach is to make an API call using cy.request()
  cy.visit("/")
  cy.findByTestId("username").type(username)
  cy.findByTestId("password").type(password)
  cy.findByRole("button", { name: "Login" }).click()
})

Cypress.Commands.add("standardUserLogin", () => {
  const standardUser = loginData.usernames[0]
  const password = loginData.password
  cy.visit("/")
  cy.findByTestId("username").type(standardUser)
  cy.findByTestId("password").type(password)
  cy.findByRole("button", { name: "Login" }).click()
})
