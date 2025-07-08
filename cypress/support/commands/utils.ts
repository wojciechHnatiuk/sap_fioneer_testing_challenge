Cypress.Commands.add('clickContaining', (text: string): Cypress.Chainable<VoidFunction> => {
  return cy.contains(text).click()
})
Cypress.Commands.add('clickSelector', (selector: string): Cypress.Chainable<VoidFunction> => {
  return cy.get(selector).click()
})
