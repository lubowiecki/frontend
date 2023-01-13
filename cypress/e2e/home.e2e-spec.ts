import { A11y } from '@cypress/helpers/a11y';
import { Language } from '@cypress/helpers/language';
import { HomePage } from '@cypress/page-objects/pages/home.po';

describe('Strona główna, ', () => {
	it('widzę stronę.', () => {
		HomePage.navigateTo();
		HomePage.isCurrentPath();

		A11y.init();
		cy.checkScreenshot('home', Language.Pl);
		A11y.check();
	});
});
