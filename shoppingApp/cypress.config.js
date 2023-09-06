const { defineConfig } = require("cypress");

module.exports = {
  // other Cypress configuration settings
  pageLoadTimeout: 120000,

  e2e: {
    setupNodeEvents(on, config) {
    },
  },
};
