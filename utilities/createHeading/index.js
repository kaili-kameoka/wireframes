/**
 * Create a heading element
 * @param {number} level - A number from 1 to 6 (inclusive) that corresponds to the level of the heading to be created.
 * @param {string} text - The text to display in the heading.
 * @returns {HTMLElement} - The Heading element that can be appended tothe DOM
 */
export default function createHeading (level, text) {
	const levelErrorMessage = "The level must be between 1 and 6 inclusive.";

	if (level < 1 || level > 6) {
		throw Error(levelErrorMessage);
	}

	const element = document.createElement(`h${level}`);

	element.textContent = text;
	return element;

}
