import { Language } from '@cypress/helpers/language';

describe('Frontend :: Home', () => {
	it('Visits the initial project page', () => {
		cy.visit('/');

		cy.get('input[formControlName="firstname"]').should('have.value', 'firstname');

		cy.checkScreenshot('home', Language.Pl);
	});
});
