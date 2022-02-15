import { Options } from 'cypress-image-snapshot';

type Language = string;

interface MatchImageSnapshotOptions {
	snapshotOptions?: Options;
	wait?: number;
}

function checkScreenshot(name: string, language: Language, options?: MatchImageSnapshotOptions) {
	const wait: number = options?.wait ?? 0;

	const snapshotOptions: Options = {
		...options?.snapshotOptions,
	};

	// eslint-disable-next-line cypress/no-unnecessary-waiting
	return cy.wait(wait).matchImageSnapshot(`${name}--${language}`, snapshotOptions);
}

declare global {
	// eslint-disable-next-line @typescript-eslint/no-namespace
	namespace Cypress {
		interface Chainable {
			/**
			 * Custom command to check visual regression.
			 *
			 * @example cy.checkScreenshot('homePage', 'pl')
			 */
			checkScreenshot(name: string, language: Language, options?: MatchImageSnapshotOptions): ReturnType<typeof checkScreenshot>;
		}
	}
}

Cypress.Commands.add('checkScreenshot', checkScreenshot);
