import { findByTestId } from './find-test-id';
import { getByTestId } from './get-test-id';

export class TestId {
	/**
	 * Add testId commands
	 */
	static addCommands(): void {
		Cypress.Commands.add(
			'findByTestId',
			{
				prevSubject: 'element',
			},
			findByTestId,
		);

		Cypress.Commands.add('getByTestId', getByTestId);
	}
}
