describe('Caught Page', () => {
  beforeEach(() => {
    cy.visit('/caught')
  })

  it('should show url change to caught pokemon section', () => {
    cy.url().should('eq', 'http://localhost:3000/caught')
  })
})
