describe("Inventory Item", () => {
  beforeEach(() => {
    cy.standardUserLogin()
  })

  it("Selects a specific product", () => {
    cy.get(".inventory_item").first().children().first().click()
    cy.url().should("contain", "/inventory-item.html?id=4")

    cy.get(".inventory_details_img_container").should("exist")
    cy.get(".inventory_details_name").should("exist")

    cy.findByTestId("back-to-products").click()
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html")
  })
})
