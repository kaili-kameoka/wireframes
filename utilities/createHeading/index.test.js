import createHeading from './index.js';
import { getByRole } from '@testing-library/dom';

describe('createHeading', () => {
	it('should create a heading level 1 that displays the text "Hello World!".', () => {
		const heading = createHeading(1, "Hello World!");
		const container = document.createElement('div');
		container.appendChild(heading);
		expect(getByRole(container, 'heading', {level: 1})).toHaveTextContent("Hello World!")
	});

	it('should should create a headingl level 1 if the provided level is less than 1',
			() => {
				const heading = createHeading(-2, "Hello World!");
				const container = document.createElement('div');
				container.appendChild(heading);
				expect(getByRole(container, 'heading', {level: 1})).toHaveTextContent("Hello World!")
			});

	it('should create a heading level 6 if the provided level is greater than 6',
			() => {
				const heading = createHeading(7, "Hello World!");
				const container = document.createElement('div');
				container.appendChild(heading);
				expect(getByRole(container, 'heading', {level: 6})).toHaveTextContent("Hello World!")
			});
});