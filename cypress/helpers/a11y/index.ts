import * as axe from 'axe-core';
import { Options } from 'cypress-axe';
import * as R from 'ramda';

export class A11y {
	/**
	 * Init Axe after page load
	 *
	 * Run after each navigation
	 */
	static init(configurationOptions: any = {}) {
		cy.injectAxe();
		cy.configureAxe(configurationOptions);

		return cy;
	}

	/**
	 * Run A11y check
	 */
	static check(
		context: string | Node | axe.ContextObject = {
			exclude: [],
		},
		options: Options = {},
		violationCallback?: ((violations: any[]) => void) | undefined,
		skipFailures?: boolean | undefined,
	): void {
		const optionsWithDefaults: Options = R.mergeDeepRight({
			rules: {},
		}, options);

		cy.checkA11y(context, optionsWithDefaults, violationCallback, skipFailures);
	}
}
