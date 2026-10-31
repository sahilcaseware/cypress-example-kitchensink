/// <reference types="cypress" />

context('Commands menu navigation', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  const pages = ['Querying', 'Traversal', 'Actions', 'Window', 'Viewport']

  pages.forEach((name) => {
    const slug = name.toLowerCase()

    it(`opens ${name} from the Commands dropdown`, () => {
      cy.get('.navbar-nav').contains('Commands').click()
      cy.get('.dropdown-menu').contains(name).click()

      cy.location('pathname').should('eq', `/commands/${slug}`)
      cy.get('h1').should('have.text', name)

      cy.screenshot(`commands-${slug}`)
    })
  })
})
