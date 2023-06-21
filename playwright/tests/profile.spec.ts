import AxeBuilder from '@axe-core/playwright';
import { test, expect } from '@playwright/test';

test.describe('Strona główna, ', () => {
	test('should not have any automatically detectable accessibility issues', async ({
		page,
	}) => {
		await page.goto('/');

		const accessibilityScanResults = await new AxeBuilder({
			page,
		}).analyze();

		expect(accessibilityScanResults.violations).toEqual([]);
	});

	test('widzę stronę.', async ({ page }) => {
		await page.goto('/');
		await expect(page).toHaveScreenshot();
	});
});
