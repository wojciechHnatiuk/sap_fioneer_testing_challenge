# SAP Fioneer QA Automation Challenge - Solution

## 🚀 Quick Start

```bash
# Clone, install, and run tests
git clone <repository-url>
cd sap_interview
npm install
npm run cy:run  # Headless mode for quick execution
npm run cy:open # Interactive mode to see tests execute
```

## 📋 Assignment Requirements ✅

**Framework**: Cypress with TypeScript ✅  
**Tests**: All 3 required tests implemented ✅  
**Reporting**: GitHub Actions CI/CD ✅  
**Documentation**: Complete setup guide ✅

## 🧪 Test Implementation

### Test 1: Financial Services Section

- Navigate to SAP Fioneer homepage
- Verify "End-to-end solutions for financial services" section displays correctly

### Test 2: ESG KPI Engine Navigation

- Navigate Products → Finance & ESG → ESG KPI Engine
- Verify redirection to "Stay audit-ready with the ESG KPI Engine | SAP Fioneer"

### Test 3: Contact Form Validation

- Click "Get in touch" button
- Verify redirection to "Get in touch with an expert | SAP Fioneer"
- Test email validation with invalid input ("342323")
- Verify validation message appears

## 🏗️ Architecture

**Page Object Model**: Clean, maintainable structure with singleton pattern

```
cypress/
├── e2e/home-page.cy.ts          # Main test suite
├── pages/                       # Page objects (HomePage, ContactUsPage, etc.)
└── support/                     # Custom commands and utilities
```

**Key Features**:

- Abstract base class for consistent page object implementation
- Method chaining for readable test flow
- Cross-browser testing (Chrome, Firefox, Edge)
- Responsive testing (Desktop 1920x1080, Mobile 375x667)
- Custom Cypress commands for enhanced readability

## 🎯 Test Execution

Each test runs across:

- **2 viewports**: Desktop and mobile
- **Different navigation patterns**: Main menu vs hamburger menu
- **Total executions**: 6 test runs (3 tests × 2 viewports)

Expected result: ✅ All tests pass

## 🔧 CI/CD Pipeline

GitHub Actions workflow automatically:

- Runs tests across Chrome, Firefox, and Edge browsers
- Captures screenshots and videos on failures
- Caches dependencies for faster builds
- Uploads test artifacts for debugging

**🎬 See the pipeline in action**: [Latest test run](https://github.com/wojciechHnatiuk/sap_fioneer_testing_challenge/actions/runs/16144608931)

## 📊 Value-Added Features

Beyond basic requirements:

- Professional Page Object Model architecture
- Cross-browser compatibility testing
- Responsive design validation
- Automated CI/CD pipeline
- Git hooks with ESLint for code quality enforcement
- Comprehensive error handling and reporting
- Tests ready for multiple languages testing (Often responsive design tests work well with different translations and varying texts length)

---
