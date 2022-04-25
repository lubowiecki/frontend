import { getByTestId } from '.';

declare global {
	namespace Cypress {
		interface Chainable {
			/**
			 * Custom command to select DOM element by test-id attribute.
			 *
			 * @example cy.getByTestId('btnLogin')
			 */
			getByTestId(
				id: string,
				parent?: string
			): ReturnType<typeof getByTestId>;
		}
	}
}
