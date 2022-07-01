/* eslint-disable import/no-extraneous-dependencies */
import { defineConfig } from 'cypress';

const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');

export default defineConfig({
	viewportWidth: 1280,
	e2e: {
		baseUrl: 'http://host.docker.internal:4200',
		specPattern: 'cypress/e2e/docs/**/*.cy.ts',
		video: false,
		setupNodeEvents(on, config) {
			getCompareSnapshotsPlugin(on, config);

			on(
				'before:browser:launch',
				(
					browser: Cypress.Browser,
					launchOptions: Cypress.BrowserLaunchOptions,
				) => {
					if (browser.name === 'chrome') {
						launchOptions.args.push('--lang=pl');
					}
					return launchOptions;
				},
			);
		},
	},
});
