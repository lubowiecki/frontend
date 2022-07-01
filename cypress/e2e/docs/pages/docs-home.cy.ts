describe('Docs', () => {
	it('Visits the initial project page', () => {
		cy.visit('/');

		cy.checkScreenshot('docs-home', 'pl');
	});
});
