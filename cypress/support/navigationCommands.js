Cypress.Commands.add("openBurgerMenu", () => {
  cy.findByRole("button", { name: "Open Menu" }).click()
})

Cypress.Commands.add("resetAppState", () => {
  cy.openBurgerMenu()
  cy.findByRole("link", { name: "Reset App State" }).click()
  cy.get(".shopping_cart_badge").should("not.exist")
})
