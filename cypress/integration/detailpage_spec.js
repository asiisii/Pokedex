import {caughtBall, uncaughtBall} from '../fixtures/srcData'

describe('Detail page', () => {
  beforeEach(() => {
    cy.interceptPokmemon()
    cy.visit('/1')
  })

  it('should be on pokemon details page', () => {
    cy.url()
      .should('eq', 'http://localhost:3000/1')
  })

  it('should have header contents', () => {
    cy.get('header')
      .get('a').eq(0).contains('Home')
      .get('h1').contains('Pokédex')
      .get('a').eq(1).contains('Show Caught')
  })

  it('should have info header', () => {
    cy.get('.info-header > a')
      .contains('Go back')
      .get('h1').contains('bulbasaur')
      .get('img').eq(0)
      .should('have.attr', 'src', uncaughtBall)
  })

  it.only('should have bulbasaur info', () => {
    cy.get('.pokemon-info')
      .find('img').eq(1)
      .should('have.attr', 'src', 'https://pokeres.bastionbot.org/images/pokemon/1.png')
      .get('p').eq(0)
      .contains('Weight: 69')
      .get('p').eq(1)
      .contains('Height: 7')
      .get('p').eq(2)
      .contains('Types: grass')
      .get('p').eq(3)
      .contains('Abilities: overgrow')
      .get('p').eq(4)
      .contains('Moves: razor-wind | swords-dance')
    
  })
})