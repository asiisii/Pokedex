describe('Caught Page', () => {
  beforeEach(() => {
    cy.visit('/caught')
  })

  it('should show url change to caught pokemon section', () => {
    cy.url().should('eq', 'http://localhost:3000/caught')
  })

  it('should show navbar on load', () => {
    cy.get('header')
      .get('a').eq(0).contains('Home')
      .get('a').eq(1).contains('Show Caught')
      .get('h1').contains('Pokédex')
  })
})
