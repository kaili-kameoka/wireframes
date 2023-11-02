/**
 * Apend an element to the body
 *
 * @param element HTMLElement
 */
export default function addToPage(element) {
	const body = document.querySelector('body');
	body.appendChild(element);
}
