describe("Home Page", () => {
  beforeEach(() => {
    cy.interceptPokmemon()
    cy.visit('/')
  })

  it('should be able to see Pokemon cards', () => {
    cy.get('.card-display').children().should('have.length', 9)
  })

  it('1st card has name of Bulbasaur', () => {
    cy.get('.card-display')
      .get('.pokemon-card')
      .eq(0)
      .contains('bulbasaur')
      .find('img')
      .should('have.attr', 'src', 'https://pokeres.bastionbot.org/images/pokemon/1.png')
      .get('#1')
  })

  it('4th card has name of Charmander', () => {
    cy.get('.card-display')
      .get('.pokemon-card')
      .eq(3)
      .contains('charmander')
      .find('img')
      .should('have.attr', 'src', 'https://pokeres.bastionbot.org/images/pokemon/4.png')
      .get('#4')
  })
})