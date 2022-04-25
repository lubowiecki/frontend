import { Language } from '@cypress/helpers/language';

import { checkScreenshot } from '.';
import { SnapshotOptions } from './snapshot-options';

declare global {
	namespace Cypress {
		interface Chainable {

			/**
			 * Custom command to check visual regression.
			 *
			 * @example cy.checkScreenshot('homePage', Language.Pl)
			 */
			checkScreenshot(name: string, language: Language, options?: SnapshotOptions): ReturnType<typeof checkScreenshot>;
		}
	}
}
