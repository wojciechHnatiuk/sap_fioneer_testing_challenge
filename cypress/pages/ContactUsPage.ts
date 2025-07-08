import { appTranslations } from 'translations/appTranslations'

import { BasePage } from './BasePage'

export class ContactUsPage extends BasePage {
  // Selectors
  selectors = {
    form: 'form[method="post"]',
    emailInput: 'input[name="email"]',
  }

  // URL verification - uses inherited verifyURL method
  verifyContactUsURL(): this {
    this.verifyURL('/contact-sales')
    return this
  }

  // Title verification - implements abstract method
  verifyPageTitle(language: keyof typeof appTranslations): this {
    cy.title().should('equal', appTranslations[language].contactUs.pageTitle)
    return this
  }

  // Form interaction methods
  fillEmailField(email: string): this {
    cy.get(this.selectors.emailInput).type(email).should('have.value', email)
    return this
  }

  waitForValidation(): this {
    cy.wait(1000) // wait for validation to trigger
    return this
  }

  verifyEmailValidationError(language: keyof typeof appTranslations): this {
    cy.isVisibleContent(appTranslations[language].contactUs.validation.emailValidation)
    return this
  }

  // Combined method for email validation test
  testEmailValidation(
    language: keyof typeof appTranslations,
    invalidEmail: string = 'invalid-email'
  ): this {
    cy.contains(appTranslations[language].contactUs.heading)
      .parent()
      .within(() => {
        cy.get(this.selectors.form).within(() => {
          this.fillEmailField(invalidEmail)
          this.waitForValidation()
          this.verifyEmailValidationError(language)
        })
      })
    return this
  }

  // Combined verification method
  verifyContactUsPage(language: keyof typeof appTranslations): this {
    this.verifyContactUsURL()
    this.verifyPageTitle(language)
    return this
  }
}

// Export singleton instance
export const contactUsPage = new ContactUsPage()
