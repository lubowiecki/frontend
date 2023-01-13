import { NavigationPage } from '../modules/navigation.po';

export class HomePage {
	static navigateTo() {
		return NavigationPage.navigateTo('/');
	}

	static isCurrentPath() {
		return cy.title().should('contain', 'Strona główna');
	}
}
