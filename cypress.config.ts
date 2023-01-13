import { defineConfig } from 'cypress';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const getCompareSnapshotsPlugin = require('cypress-image-diff-js/dist/plugin');

export default defineConfig({
	viewportWidth: 1280,
	e2e: {
		baseUrl: 'http://localhost:4201',
		specPattern: 'cypress/e2e/**/*.e2e-spec.ts',
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

	component: {
		devServer: {
			framework: 'angular',
			bundler: 'webpack',
		},
		specPattern: '**/*.cy.ts',
	},

});
