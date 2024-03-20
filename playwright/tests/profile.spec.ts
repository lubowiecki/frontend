import AxeBuilder from '@axe-core/playwright';
import { A11y } from '@playwright/modules/a11y.po';
import { test, expect } from '@playwright/test';

test.describe('Strona główna, ', () => {
	test('should not have any automatically detectable accessibility issues', async ({
		page,
	}) => {
		await page.goto('/');

		await A11y.analyze(page);
	});

	test('widzę stronę.', async ({ page }) => {
		await page.goto('/');

		await expect(page).toHaveScreenshot();
	});
});
