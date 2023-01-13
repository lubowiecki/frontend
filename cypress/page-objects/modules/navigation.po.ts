export class NavigationPage {
	static navigateTo(path: string) {
		return cy.visit(path);
	}
}
