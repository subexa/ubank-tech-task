describe("Logout user", () => {
  it("Logout user", () => {
    cy.standardUserLogin()
    cy.openBurgerMenu()
    cy.findByRole("link", { name: "Logout" }).click()
    cy.url().should("eq", "https://www.saucedemo.com/")
  })
})
