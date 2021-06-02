import {caughtBall, uncaughtBall} from '../fixtures/srcData'

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
      .get('button').get('button > img').eq(0).should('have.attr', 'src', uncaughtBall)
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

  it('should change image of pokeball when clicked', () => {
    cy.get('.card-display')
      .get('.pokemon-card')
      .eq(0)
      .get('button').get('button > img').eq(0).should('have.attr', 'src', uncaughtBall)
      .get('button').get('button > img').eq(0).click()
      .get('button').get('button > img').eq(0).should('have.attr', 'src', caughtBall)
  })
})
