export function getByTestId(id: string, parent?: string) {
	const testIdSelector = `[test-id=${id}]`;
	const fullSelector = typeof parent === 'string' ? `${parent} ${testIdSelector}` : testIdSelector;
	return cy.get(fullSelector);
}
