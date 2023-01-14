import "@testing-library/cypress/add-commands"
import loginData from "../fixtures/login-data.json"

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

Cypress.Commands.add("standardUserLogin", () => {
  const standardUser = loginData.usernames[0]
  const password = loginData.password
  cy.visit("/")
  cy.findByTestId("username").type(standardUser)
  cy.findByTestId("password").type(password)
  cy.findByRole("button", { name: "Login" }).click()
})

Cypress.Commands.add("checkSortingByName", (className, sortingValue) => {
  cy.get(className).then((items) => {
    let listOfProducts = []
    for (let i = 0; i < items.length; i++) {
      listOfProducts.push(items[i].innerHTML)
    }

    let sortedListsOfProducts
    if (sortingValue === "asc") {
      sortedListsOfProducts = listOfProducts.slice().sort()
    } else {
      sortedListsOfProducts = listOfProducts.slice().sort().reverse()
    }
    expect(listOfProducts).to.have.ordered.members(sortedListsOfProducts)
  })
})

Cypress.Commands.add("checkSortingByPrice", (className, sortingValue) => {
  cy.get(className).then((items) => {
    let listOfProducts = []
    let priceSortedList = []
    for (let i = 0; i < items.length; i++) {
      let priceString = items[i].innerHTML.slice(1)
      listOfProducts.push(Number(priceString))
    }

    if (sortingValue === "asc") {
      priceSortedList = listOfProducts.slice().sort(function (a, b) {
        return a - b
      })
    } else {
      priceSortedList = listOfProducts
        .slice()
        .sort(function (a, b) {
          return a - b
        })
        .reverse()
    }

    expect(listOfProducts).to.have.ordered.members(priceSortedList)
  })
})
