const sortingOptions = [
  "Name (A to Z)",
  "Name (Z to A)",
  "Price (low to high)",
  "Price (high to low)",
]

describe("Products page", () => {
  beforeEach(() => {
    cy.standardUserLogin()
  })

  it("Product page contents", () => {
    cy.url().should("contain", "inventory.html")

    cy.contains("Products")
    cy.get(".app_logo").should("exist")
    cy.findAllByRole("button", { name: "Open Menu" }).should("exist")
    cy.get("#shopping_cart_container").should("exist")

    cy.get(".active_option").should("contain", "Name (A to Z)")

    cy.get(".inventory_list").should("exist")
    cy.get(".inventory_item").should("exist")
    cy.get(".inventory_item_description").should("exist")
    cy.get(".pricebar").should("exist")
    cy.findAllByRole("button", {
      name: "Add to cart",
    }).should("exist")

    cy.get(".footer").should("exist")
  })

  it("Selects a specific product", () => {
    cy.get(".inventory_item").first().children().first().click()
    cy.url().should("contain", "/inventory-item.html?id=4")

    cy.get(".inventory_details_img_container").should("exist")
    cy.get(".inventory_details_name").should("exist")

    cy.findByTestId("back-to-products").click()
    cy.url().should("eq", "https://www.saucedemo.com/inventory.html")
  })

  it("Order of products", () => {
    cy.checkSortingByName(".inventory_item_name", "asc")

    cy.findByTestId("product_sort_container").select("Name (Z to A)")
    cy.checkSortingByName(".inventory_item_name", "desc")

    cy.findByTestId("product_sort_container").select("Price (low to high)")
    cy.checkSortingByPrice(".inventory_item_price", "asc")

    cy.findByTestId("product_sort_container").select("Price (high to low)")
    cy.checkSortingByPrice(".inventory_item_price", "desc")
  })

  // TODO: Add to Cart
  // TODO: Remove from Cart
})
