import { appTranslations } from 'translations/appTranslations'

import { BasePage } from './BasePage'

export class HomePage extends BasePage {
  // Selectors
  selectors = {
    nav: {
      first: 'nav:first',
      second: 'nav:eq(1)',
      hamburgerButton: 'button[aria-label="Open menu"]',
    },
    header: 'header',
    article: 'article',
    links: 'a',
    carousel: {
      previous: 'button[data-glide-dir="<"]',
      next: 'button[data-glide-dir=">"]',
      leftBullet: 'button[aria-label="Go to slide 0"]',
      middleBullet: 'button[aria-label="Go to slide 1"]',
      rightBullet: 'button[aria-label="Go to slide 2"]',
      activeBulletClass: 'glide__bullet--active',
    },
  }

  // Navigation methods
  visit(): this {
    cy.visit('/')
    return this
  }

  // Title verification - implements abstract method
  verifyPageTitle(language: keyof typeof appTranslations): this {
    cy.title().should('equal', appTranslations[language].mainPageTitle)
    return this
  }

  // Financial Solutions Article methods
  verifyFinancialSolutionsArticleTitle(language: keyof typeof appTranslations): this {
    cy.contains(appTranslations[language].finantialSolutionsArticle.title)
      .scrollIntoView()
      .should('be.visible')
      .and('have.length', 1)
    return this
  }

  verifyFinancialSolutionsDesktopView(language: keyof typeof appTranslations): this {
    const { banking, insurance, finance } =
      appTranslations[language].finantialSolutionsArticle.categories

    cy.isVisibleContentMultiple([
      banking.title,
      banking.description,
      insurance.title,
      insurance.description,
      finance.title,
      finance.descpription,
    ])

    const categories = Object.keys(
      appTranslations[language].finantialSolutionsArticle.categories
    ) as Array<'banking' | 'insurance' | 'finance'>
    const solutionPaths = ['/banking', '/insurance', '/finance-esg']

    categories.forEach((_category, index) => {
      cy.get('a')
        .eq(index)
        .should('have.attr', 'href')
        .then((href: string) => {
          expect(href).to.include(solutionPaths[index])
        })

      cy.get('a')
        .eq(index)
        .should(element => {
          const classList = element.attr('class')?.split(/\s+/) || []

          expect(classList).to.include.members([
            'shadow',
            'no-underline',
            'text-black-hover',
            'justify-content-between',
            'flex-column',
            'd-flex',
            'h-100',
          ])
        })
    })
    return this
  }

  verifyFinancialSolutionsMobileView(language: keyof typeof appTranslations): this {
    const categories = Object.keys(
      appTranslations[language].finantialSolutionsArticle.categories
    ) as Array<'banking' | 'insurance' | 'finance'>
    const solutionPaths = ['/banking', '/insurance', '/finance-esg']

    categories.forEach((category, index) => {
      cy.get('a')
        .eq(index)
        .should(
          'contain',
          appTranslations[language].finantialSolutionsArticle.categories[category].title
        )
        .and('have.attr', 'href')
        .then((href: string) => {
          expect(href).to.include(solutionPaths[index])
        })

      cy.clickSelector(this.selectors.carousel.next).then(() => {
        const bulletSelectors = [
          this.selectors.carousel.leftBullet,
          this.selectors.carousel.middleBullet,
          this.selectors.carousel.rightBullet,
        ]
        bulletSelectors.forEach((selector, bulletIndex) => {
          if (bulletIndex === index) {
            cy.get(selector).should('have.class', this.selectors.carousel.activeBulletClass)
          } else {
            cy.get(selector).should('not.have.class', this.selectors.carousel.activeBulletClass)
          }
        })
      })
    })
    return this
  }

  verifyFinancialSolutionsArticle(
    language: keyof typeof appTranslations,
    viewportName: string
  ): this {
    this.verifyFinancialSolutionsArticleTitle(language)

    cy.contains(appTranslations[language].finantialSolutionsArticle.title)
      .closest('article')
      .within(() => {
        cy.then(() => {
          switch (viewportName) {
            case 'desktop':
              this.verifyFinancialSolutionsDesktopView(language)
              break
            case 'mobile':
              this.verifyFinancialSolutionsMobileView(language)
              break
          }
        })
      })
    return this
  }

  // Navigation to ESG KPI Engine methods
  navigateToESGKPIEngineDesktop(language: keyof typeof appTranslations): this {
    cy.get(this.selectors.nav.first)
      .within(() => {
        cy.contains(appTranslations[language].nav.products).click()
      })
      .clickContaining(appTranslations[language].nav.financeESG.title)
      .clickContaining(appTranslations[language].nav.financeESG.kpiEngine)
    return this
  }

  navigateToESGKPIEngineMobile(language: keyof typeof appTranslations): this {
    cy.get(this.selectors.header).within(() => {
      cy.get(this.selectors.nav.hamburgerButton).last().click()
    })
    cy.get(this.selectors.nav.second).within(() => {
      cy.contains(appTranslations[language].nav.products).click()
      cy.clickContaining(appTranslations[language].nav.financeESG.title)
      cy.clickContaining(appTranslations[language].nav.financeESG.kpiEngine)
    })
    return this
  }

  navigateToESGKPIEngine(language: keyof typeof appTranslations, viewportName: string): this {
    switch (viewportName) {
      case 'desktop':
        this.navigateToESGKPIEngineDesktop(language)
        break
      case 'mobile':
        this.navigateToESGKPIEngineMobile(language)
        break
    }
    return this
  }

  // Get in touch navigation
  navigateToContactUs(language: keyof typeof appTranslations): this {
    cy.contains(appTranslations[language].getInTouch.button).scrollIntoView().click()
    return this
  }
}

// Export singleton instance
export const homePage = new HomePage()
