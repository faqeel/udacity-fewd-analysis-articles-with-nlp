import { handleSubmit } from '../src/client/js/formHandler';

describe('Testing the existence of handleSubmit()', () => {
	test('handleSubmit() is defined', () => {
		expect(handleSubmit).toBeDefined();
	});
});
