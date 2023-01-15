GitHub url: https://github.com/subexa/ubank-tech-task

# Cypress Test for uBank on [SauceDemo](https://www.saucedemo.com/)

### Steps to run Cypress UI tests locally

1. Clone the repo
2. Install nodejs version 18 https://nodejs.org/en/download/package-manager/
3. Run `npm install`
4. Run `npm run cy:open` for headed mode
5. Run `npm run cy:run` for headless mode
6. Test report generated at `cypress/reports`

# REST API funtional testing using [Supertest library](https://github.com/ladjs/supertest)

## Response schema validation using [Yup](https://github.com/jquense/yup)

### To run api tests locally

1. Clone the repo
2. Install nodejs version 18 https://nodejs.org/en/download/package-manager/
3. Run `npm install`
4. Run `npm run test:api`
5. Test report generated at `api-tests/reports`

# Steps to run tests on the ci

1. Go to Github Actions https://github.com/subexa/trovio-tech-task/actions/workflows/cypress.yml
2. On `Cypress Tests` workflow, click on `Run workflow`
3. Use the Use workflow from `main` branch and click `Run workflow`
