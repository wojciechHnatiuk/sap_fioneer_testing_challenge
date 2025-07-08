import { VIEWPORTS } from 'cypress/support/requirementVars'
import { appTranslations } from 'translations/appTranslations'

import { contactUsPage, esgKPIEnginePage, homePage } from '../pages'

const LANGUAGES_TO_TEST = Object.keys(appTranslations) as Array<keyof typeof appTranslations>

describe('SAP Fioneer home page tests', () => {
  beforeEach(() => {
    homePage.visit()
  })
  VIEWPORTS.forEach(viewport => {
    LANGUAGES_TO_TEST.forEach(language => {
      it(`(test 1) should verify that financial solutions section is displayed correctly in ${language} on ${viewport.name}`, () => {
        homePage
          .setViewport(viewport.width, viewport.height)
          .verifyPageTitle(language)
          .verifyFinancialSolutionsArticle(language, viewport.name)
      })

      it(`(test 2) should verify that ESG KPI Engine redirection from the Products > Finance & ESG on ${viewport.name}`, () => {
        homePage
          .setViewport(viewport.width, viewport.height)
          .navigateToESGKPIEngine(language, viewport.name)
        esgKPIEnginePage.verifyESGKPIEnginePage(language)
      })
      it(`test 3 should verify the get in touch redirection and check if the email validation works in ${language} on ${viewport.name}`, () => {
        homePage.setViewport(viewport.width, viewport.height).navigateToContactUs(language)
        contactUsPage.verifyContactUsPage(language).testEmailValidation(language, 'invalid-email')
      })
    })
  })
})
