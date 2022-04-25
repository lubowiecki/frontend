import { RetryOptions } from '../retry-options';

declare global {
	namespace Cypress {
		interface Chainable {
            /**
             * @param name The name of the snapshots that will be generated
             * @param testThreshold
			 * A number between 0 and 1 that represents the allowed percentage of pixels that can be different between the two snapshots
             * @param retryOptions @default
			 * { limit: 0, timeout: Cypress.config('defaultCommandTimeout'), delay: Cypress.config('defaultCommandTimeout') / 5 }
             * @example cy.compareSnapshot('empty-canvas', 0.1)
             */
            compareSnapshot(
                name: string,
                testThreshold?: number,
                retryOptions?: RetryOptions
            ): Chainable<Element>;
		}
	}
}
