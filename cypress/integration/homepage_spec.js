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
      .get('button').eq(0).get('button > img').should('have.attr', 'alt', 'Pokeball')
      // .get('button').eq(0).find('img').contains('uncaughtBall.png')
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

  it('should show navbar on load', () => {
    cy.get('header')
      .get('a').eq(0).contains('Home')
      .get('a').eq(1).contains('Show Caught')
      .get('h1').contains('Pokédex')
  })
})
