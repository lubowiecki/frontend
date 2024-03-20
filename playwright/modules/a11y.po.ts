import { Page, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

export class A11y {
	static async analyze(page: Page, disableRules: string[] = []) {
		const accessibilityScanResults = await new AxeBuilder({ page })
			.withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
			.disableRules([...disableRules])
			.analyze();

		return expect(accessibilityScanResults.violations).toEqual([]);
	}
}
