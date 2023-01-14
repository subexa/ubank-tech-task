describe("Checkout flow tests", () => {
  beforeEach(() => {
    cy.visit("/")
    cy.standardUserLogin()
  })

  it("Empty cart", () => {
    cy.resetAppState()
    cy.get("#shopping_cart_container").click()
    cy.url().should("contain", "cart.html")
  })

  //TODO: Checkout flow tests
})
