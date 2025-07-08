import { appTranslations } from 'translations/appTranslations'

export abstract class BasePage {
  // Common viewport method
  setViewport(width: number, height: number): this {
    cy.viewport(width, height)
    return this
  }

  // Common URL verification with custom path
  verifyURL(expectedPath: string): this {
    cy.url().should('include', expectedPath)
    return this
  }

  // Abstract method that must be implemented by child classes
  abstract verifyPageTitle(language: keyof typeof appTranslations): this
}
