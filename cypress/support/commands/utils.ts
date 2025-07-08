Cypress.Commands.add('cleanStateReload', () => {
	cy.clearCookies().clearLocalStorage().reload()
})

Cypress.Commands.add(
	'getIframeBody',
	(selector: string): Cypress.Chainable<JQuery<HTMLElement>> => {
		return cy
			.get(selector)
			.its('0.contentDocument.body')
			.should('not.be.empty')
			.then((body) => cy.wrap(body))
	}
)
Cypress.Commands.add(
	'clickContaining',
	(text: string): Cypress.Chainable<VoidFunction> => {
		return cy.contains(text).click()
	}
)
Cypress.Commands.add(
	'clickSelector',
	(selector: string): Cypress.Chainable<VoidFunction> => {
		return cy.get(selector).click()
	}
)
