describe('Frontend', () => {
	it('Visits the initial project page', () => {
		cy.visit('/');
		cy.checkScreenshot('home', 'pl');
	});
});
