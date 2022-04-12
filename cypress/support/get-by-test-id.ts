export function getByTestId(id: string, parent?: string) {
	const testIdSelector = `[test-id=${id}]`;
	const fullSelector = typeof parent === 'string' ? `${parent} ${testIdSelector}` : testIdSelector;
	return cy.get(fullSelector);
}

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace Cypress {
		interface Chainable {
			/**
			 * Custom command to select DOM element of document by test-id attribute.
			 *
			 * @example cy.getByTestId('btnLogin')
			 */
			getByTestId(id: string, parent?: string): ReturnType<typeof getByTestId>;
		}
	}
}

Cypress.Commands.add('getByTestId', getByTestId);
