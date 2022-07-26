import * as R from 'ramda';

import { checkScreenshot } from './check-screenshot';
import { Options } from './options';

const compareSnapshotCommand = require('cypress-image-diff-js/dist/command');

export class VisualRegression {
	/**
	 * Add visual regression commands
	 *
	 * @param options
	 * default:
	 * {
			customSnapshotsDir: 'cypress/screenshots',
			failureThreshold: 0,
			failureThresholdType: 'percent',
			customDiffConfig: { threshold: 0 },
		}
	 */
	static addCommands(options: Options = {}): void {
		const defaultOptions: Options = {
			blackout: ['app-language-switcher'],
			capture: 'fullPage',
		};

		compareSnapshotCommand(R.mergeDeepRight(defaultOptions, options));

		Cypress.Commands.add('checkScreenshot', checkScreenshot);
	}

	/**
	 * Generate html report
	 */
	static generateReport(): void {
		cy.task('generateReport');
	}
}
