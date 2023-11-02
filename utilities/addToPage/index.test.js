import addToPage from './index.js';
import { getByText } from '@testing-library/dom';

function createElement() {
	const el = document.createElement('p');
	el.textContent = 'Hello World!';
	return el;
}

describe('addToPage', () => {
	it('should add a paragraph with the text "Helo World!".', () => {

		addToPage(createElement());

		const body = document.querySelector('body');
		expect(getByText(body, 'Hello World!')).toBeDefined();
	});
});