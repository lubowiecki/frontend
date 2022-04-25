import { Language } from '@cypress/helpers/language';

import { SnapshotOptions } from './snapshot-options';

export function checkScreenshot(name: string, language: Language, options?: SnapshotOptions) {
	const wait: number = options?.wait ?? 0;
	const testThreshold: number = options?.testThreshold ?? 0;

	// eslint-disable-next-line cypress/no-unnecessary-waiting
	return cy.wait(wait).compareSnapshot(`${name}--${language}`, testThreshold, options?.retryOptions);
}
