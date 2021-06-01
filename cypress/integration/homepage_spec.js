describe("Home Page", () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('should be able to see Pokemon cards', () => {
    cy.get('.card-display').children().should('have.length', 151)
  })
})