import * as axe from 'axe-core';
import { Options } from 'cypress-axe';
import * as R from 'ramda';

type A11yCheckConfig = {
	context?: string | Node | axe.ContextObject,
	options?: Options,
	violationCallback?: ((violations: axe.Result[]) => void) | undefined,
	skipFailures?: boolean,
}

export class A11y {
	/**
	 * Init Axe after page load
	 *
	 * Run after each navigation
	 */
	static init(configurationOptions: axe.Spec = {}) {
		cy.injectAxe();
		cy.configureAxe(configurationOptions);

		return cy;
	}

	/**
	 * Run A11y check
	 */
	static check(config: A11yCheckConfig = {}): void {
		const configWithDefaults: A11yCheckConfig = R.mergeDeepRight({
			context: {},
			options: {
				rules: {},
			},
		}, config) as A11yCheckConfig;

		const {
			context, options, violationCallback, skipFailures,
		} = configWithDefaults;

		cy.checkA11y(context, options, violationCallback, skipFailures);
	}
}
