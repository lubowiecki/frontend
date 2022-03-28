const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');

// Plugins enable you to tap into, modify, or extend the internal behavior of Cypress
// For more info, visit https://on.cypress.io/plugins-api

/// <reference types="cypress" />

/**
 * @type {Cypress.PluginConfig}
 */
module.exports = (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {
	addMatchImageSnapshotPlugin(on, config);
};
