/**
 * Create a heading element
 * @param level number A number from 1 to 6 (inclusive) that corresponds to the level of the heading to be created.
 * @param text string The text to display in the heading.
 * @returns {HTMLElement} The Heading element that can be appended tothe DOM
 */
export default function createHeading (level, text) {
	let element;
	if (level < 1) {
		element = document.createElement('h1');
	} else if (level > 6) {
		element = document.createElement('h6');
	} else {
		element = document.createElement(`h${level}`)
	}

	element.textContent = text;
	return element;
}
