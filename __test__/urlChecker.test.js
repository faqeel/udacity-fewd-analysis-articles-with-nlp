import { isUrl } from '../src/client/js/urlChecker';

describe('Testing the URL validation functionality', () => {
	test('Check "www.google.com" to be valid', () => {
		expect(isUrl('www.google.com')).toBe(true);
	});

	test('Check "regexr.com" to be valid', () => {
		expect(isUrl('regexr.com')).toBe(true);
	});

	test('Check "https://google.us.edi?34535/534534?dfg=g&fg" to be valid', () => {
		expect(isUrl('https://google.us.edi?34535/534534?dfg=g&fg')).toBe(true);
	});

	test('Check "http://RegExr.com?2rjl6" to be valid', () => {
		expect(isUrl('http://RegExr.com?2rjl6')).toBe(true);
	});

	test('Check "adobe.com/go/flex" to be valid', () => {
		expect(isUrl('adobe.com/go/flex')).toBe(true);
	});

	test('Check "Text" to be invalid', () => {
		expect(isUrl('Text')).toBe(false);
	});

	test('Check "Hello, World!" to be invalid', () => {
		expect(isUrl('Hello, World')).toBe(false);
	});

	test('Check an empty string to be invalid', () => {
		expect(isUrl('')).toBe(false);
	});

	test('Check a number to be invalid', () => {
		expect(isUrl(25)).toBe(false);
	});

	test('Check null to be invalid', () => {
		expect(isUrl(null)).toBe(false);
	});
});
