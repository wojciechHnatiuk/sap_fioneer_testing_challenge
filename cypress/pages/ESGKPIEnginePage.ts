import { appTranslations } from 'translations/appTranslations'

import { BasePage } from './BasePage'

export class ESGKPIEnginePage extends BasePage {
  // Selectors
  selectors = {
    // Add any specific selectors for this page if needed
  }

  // URL verification - uses inherited verifyURL method
  verifyESGKPIEngineURL(): this {
    this.verifyURL('/esg-kpi-engine')
    return this
  }

  // Title verification - implements abstract method
  verifyPageTitle(language: keyof typeof appTranslations): this {
    cy.title().should('equal', appTranslations[language].kpiEngine.pageTitle)
    return this
  }

  // Content verification
  verifyPageContent(language: keyof typeof appTranslations): this {
    cy.isVisibleContentMultiple([
      appTranslations[language].kpiEngine.heading,
      appTranslations[language].kpiEngine.description,
    ])
    return this
  }

  // Combined verification method
  verifyESGKPIEnginePage(language: keyof typeof appTranslations): this {
    this.verifyESGKPIEngineURL()
    this.verifyPageTitle(language)
    this.verifyPageContent(language)
    return this
  }
}

// Export singleton instance
export const esgKPIEnginePage = new ESGKPIEnginePage()
