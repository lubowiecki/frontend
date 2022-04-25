export function findByTestId(subject: any, id: string) {
	return subject.find(`[test-id=${id}]`);
}
