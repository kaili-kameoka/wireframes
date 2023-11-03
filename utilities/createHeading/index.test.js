import createHeading from './index.js';

describe('createHeading', () => {
	it('should create a heading level 1 that displays the text "Hello World!".',
			() => {
				const heading = createHeading(1, 'Hello World!');
				expect(heading).toHaveTextContent('Hello World!');
			});

	it('should should throw an error if the provided level is less than 1',
			() => {
				expect(() => {
					createHeading(-2, 'Hello World!');
				}).
						toThrow('The level must be between 1 and 6 inclusive.');

			});

	it('should create a heading level 6 if the provided level is greater than 6',
			() => {
				expect(() => {
					createHeading(7, 'Hello World!');
				}).
						toThrowError('The level must be between 1 and 6 inclusive.');
			});
	it('should create a paragraph with the h1 class', () => {
		const heading = createHeading(1, 'Hello World!', 'p');
		expect(heading.classList).toContain('h1');
	});
});