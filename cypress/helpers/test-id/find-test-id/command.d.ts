import { findByTestId } from '.';

declare global {
	namespace Cypress {
		interface Chainable {
			/**
			 * Custom command to select DOM element by test-id attribute.
			 *
			 * @example cy.get('header').findByTestId('btnLogin')
			 */
			findByTestId(id: string): ReturnType<typeof findByTestId>;
		}
	}
}
