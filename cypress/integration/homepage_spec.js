describe("Home Page", () => {
  beforeEach(() => {
    cy.interceptPokmemon()
    cy.visit('/')
  })

  it('should be able to see Pokemon cards', () => {
    cy.get('.card-display').children().should('have.length', 9)
  })
})