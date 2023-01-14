import loginData from "../fixtures/login-data.json"

const standardUser = loginData.usernames[0]
const password = loginData.password

const invalidUsername = loginData.invalidUsername
const invalidPassword = loginData.invalidPassword

describe("Login/Logout User Journey", () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Login using valid credentials", () => {
    cy.findByTestId("username").type(standardUser)
    cy.findByTestId("password").type(password)
    cy.findByRole("button", { name: "Login" }).click()
    cy.url().should("contain", "inventory.html")
    cy.contains("Products")
  })

  it("Login using invalid credentials", () => {
    cy.findByTestId("username").type(invalidUsername)
    cy.findByTestId("password").type(invalidPassword)
    cy.findByRole("button", { name: "Login" }).click()
    cy.findByTestId("error").should(
      "contain",
      "Epic sadface: Username and password do not match any user in this service"
    )
    cy.url().should("eq", "https://www.saucedemo.com/")
  })

  it("Error message on empty credentials", () => {
    cy.findByRole("button", { name: "Login" }).click()
    cy.findByTestId("error").should(
      "contain",
      "Epic sadface: Username is required"
    )
    cy.url().should("eq", "https://www.saucedemo.com/")
  })

  it("Logout user", () => {
    cy.login(standardUser, password)
    cy.openBurgerMenu()
    cy.findByRole("link", { name: "Logout" }).click()
    cy.url().should("eq", "https://www.saucedemo.com/")
  })
})
