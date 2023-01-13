import { Language } from '@cypress/helpers/language';

import { SnapshotOptions } from './snapshot-options';

export function checkScreenshot(name: string, language: Language, options?: SnapshotOptions): any {
	if (Cypress.env('VISUAL_REGRESION_DISABLED') === true) {
		return cy;
	}

	const wait: number = options?.wait ?? 1000;
	const testThreshold: number = options?.testThreshold ?? 0;

	return cy.wait(wait)
		.compareSnapshot(`${name}--${language}`, testThreshold, options?.retryOptions);
}
