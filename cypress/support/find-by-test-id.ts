export function findByTestId(subject: any, id: string) {
	return subject.find(`[test-id=${id}]`);
}

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace Cypress {
		interface Chainable {
			/**
			 * Custom command to select DOM element of specific selector by test-id attribute.
			 *
			 * @example cy.get('header').findByTestId('btnLogin')
			 */
			findByTestId(id: string): ReturnType<typeof findByTestId>;
		}
	}
}

Cypress.Commands.add(
	'findByTestId',
	{
		prevSubject: 'element',
	},
	findByTestId,
);
