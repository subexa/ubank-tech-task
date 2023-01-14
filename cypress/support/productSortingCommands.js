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
