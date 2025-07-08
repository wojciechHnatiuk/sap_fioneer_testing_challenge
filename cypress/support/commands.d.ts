/**
 * @namespace Cypress
 * @interface Chainable
 * @template Subject
 *
 * Custom Cypress commands for interceptors, assertions, and utilities.
 */
declare namespace Cypress {
	interface Chainable<_Subject = any> {
		//ASSERTIONS

		/**
		 * Asserts that the specified text is visible in the DOM.
		 * @param {string} text - The text content to check for visibility.
		 * @returns {Cypress.Chainable<VoidFunction>} Chainable for further commands.
		 */
		isVisibleContent(text: string): Cypress.Chainable<VoidFunction>

		/**
		 * Asserts that all specified texts are visible in the DOM.
		 * @param {string[]} texts - Array of text contents to check for visibility.
		 * @returns {Cypress.Chainable<VoidFunction>} Chainable for further commands.
		 */
		isVisibleContentMultiple(texts: string[]): Cypress.Chainable<VoidFunction>

		/**
		 * Asserts that the element matching the selector is visible.
		 * @param {string} selector - The CSS selector of the element.
		 * @returns {Cypress.Chainable<VoidFunction>} Chainable for further commands.
		 */
		isVisibleElement(selector: string): Cypress.Chainable<VoidFunction>

		/**
		 * Asserts that all elements matching the selectors are visible.
		 * @param {string[]} selectors - Array of CSS selectors.
		 * @returns {Cypress.Chainable<VoidFunction>} Chainable for further commands.
		 */
		isVisibleElementMultiple(
			selectors: string[]
		): Cypress.Chainable<VoidFunction>

		/**
		 * Asserts that the specified text is not visible in the DOM.
		 * @param {string} text - The text content to check for invisibility.
		 * @returns {Cypress.Chainable<VoidFunction>} Chainable for further commands.
		 */
		isNotVisibleContent(text: string): Cypress.Chainable<VoidFunction>

		/**
		 * Asserts that all specified texts are not visible in the DOM.
		 * @param {string[]} texts - Array of text contents to check for invisibility.
		 * @returns {Cypress.Chainable<VoidFunction>} Chainable for further commands.
		 */
		isNotVisibleContentMultiple(
			texts: string[]
		): Cypress.Chainable<VoidFunction>

		/**
		 * Asserts that the element matching the selector is not visible.
		 * @param {string} selector - The CSS selector of the element.
		 * @returns {Cypress.Chainable<VoidFunction>} Chainable for further commands.
		 */
		isNotVisibleElement(selector: string): Cypress.Chainable<VoidFunction>

		/**
		 * Asserts that all elements matching the selectors are not visible.
		 * @param {string[]} selectors - Array of CSS selectors.
		 * @returns {Cypress.Chainable<VoidFunction>} Chainable for further commands.
		 */
		isNotVisibleElementMultiple(
			selectors: string[]
		): Cypress.Chainable<VoidFunction>

		/**
		 * Clears cookies and local storage, then reloads the page.
		 * @returns {Cypress.Chainable<VoidFunction>} Chainable for further commands.
		 */
		cleanStateReload(): Cypress.Chainable<VoidFunction>

		//UTILITIES
		/**
		 * Gets the body of an iframe specified by the selector.
		 * @param {string} selector - The CSS selector of the iframe.
		 * @returns {Cypress.Chainable<JQuery<HTMLElement>>} Chainable for the iframe body.
		 */
		getIframeBody(selector: string): Cypress.Chainable<JQuery<HTMLElement>>

		/**
		 * Clicks on an element containing the specified text.
		 * @param {string} text - The text content to search for in the element.
		 * @returns {Cypress.Chainable<VoidFunction>} Chainable for further commands.
		 */
		clickContaining(text: string): Cypress.Chainable<VoidFunction>

		/**
		 * Clicks on an element specified by the selector.
		 * @param {string} selector - The CSS selector of the element to click.
		 * @returns {Cypress.Chainable<VoidFunction>} Chainable for further commands.
		 */
		clickSelector(selector: string): Cypress.Chainable<VoidFunction>
	}
}
