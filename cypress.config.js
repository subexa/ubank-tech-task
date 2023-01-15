import { defineConfig } from "cypress"
import plugin from "cypress-mochawesome-reporter/plugin.js"

export default defineConfig({
  reporter: "cypress-mochawesome-reporter",
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    chromeWebSecurity: false,
    setupNodeEvents(on, config) {
      plugin(on)
    },
  },
})
