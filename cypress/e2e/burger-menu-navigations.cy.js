describe("Burger menu navigations", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.standardUserLogin()
    cy.openBurgerMenu()
  })

  it("Clicks on ALL ITEMS", () => {
    cy.findByRole("link", { name: "All Items" })
    cy.url().should("contain", "inventory.html")
  })

  // TODO: Other Navigation items
})
