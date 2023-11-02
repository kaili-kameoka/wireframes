/**
 * Create a heading element
 * @param {number} level - A number from 1 to 6 (inclusive) that corresponds to the level of the heading to be created.
 * @param {string} text - The text to display in the heading.
 * @param {string} elementType - The type of element to be used if not a heading.
 * @returns {HTMLElement} - The Heading element that can be appended tothe DOM
 */
export default function createHeading(level, text, elementType) {
	const levelErrorMessage = 'The level must be between 1 and 6 inclusive.';

	if (level < 1 || level > 6) {
		throw Error(levelErrorMessage);
	}

	const headingLevelText = `h${level}`;
	const element = document.createElement(elementType || headingLevelText);

	if (elementType) {
		element.classList.add(headingLevelText);
	}

	element.textContent = text;
	return element;
}
