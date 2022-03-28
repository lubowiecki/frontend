describe('Frontend :: User', () => {
	it('Visits the User page', () => {
		cy.visit('/user');

		cy.get('input[formControlName="firstname"]').should('have.value', 'firstname');

		cy.checkScreenshot('user', 'en');
	});
});
