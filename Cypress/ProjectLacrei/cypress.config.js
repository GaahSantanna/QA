const { defineConfig } = require("cypress");
const cucumber = requiere ("cypress-cucumber-preprocesser/steps").default

module.exports = defineConfig({
  allowCypressEnv: false,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/step-definitions"
  },
});
