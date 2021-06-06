import {caughtBall, uncaughtBall} from '../fixtures/srcData'

describe('Detail page', () => {
  beforeEach(() => {
    cy.interceptPokmemon()
    cy.visit('http://localhost:3000/login')
      .get('form input[type="email"]').type('test@gmail.com')
      .get('form input[type="password"]').type('123456')
      .get('button').click()
      .get('div > .pokemon-card').eq(0).click()
  })

  it('should be on pokemon details page', () => {
    cy.url().should('eq', 'http://localhost:3000/1')
  })

  it('should have header contents', () => {
    cy.get('header')
      .get('a').eq(0).contains('Home')
      .get('h1').contains('Pokédex')
      .get('a').eq(1).contains('Show Caught')
      .get('button').contains('Log out')
  })

  it('should have info header', () => {
    cy.get('.info-header > a')
      .contains('Go back')
      .get('h1').contains('BULBASAUR')
      .get('img').eq(0)
      .should('have.attr', 'src', uncaughtBall)
  })

  it('should change pokeball on click', () => {
    cy.get('.info-header > a')
      .get('img').eq(0).click()
      .should('have.attr', 'src', caughtBall)
  })

  it('should have bulbasaur info', () => {
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

  it('should go back to home page when click on go back', () => {
    cy.wait(1000)
      .get('a').eq(2).click()
      .url().should('eq', 'http://localhost:3000/')
      .get('h1').contains('Pokédex')
  })

  it('should have ivysaur info', () => {
    cy.wait(1000)
      .get('a').eq(2).click()
      .get('.pokemon-card').eq(1).click()
      .url().should('eq', 'http://localhost:3000/2')
      .get('.info-header > a')
      .get('h1').contains('ivysaur')
      .get('.pokemon-info')
      .find('img').eq(1)
      .should('have.attr', 'src', 'https://pokeres.bastionbot.org/images/pokemon/2.png')
      .get('p').eq(0)
      .contains('Weight: 130')
      .get('p').eq(1)
      .contains('Height: 10')
      .get('p').eq(2)
      .contains('Types: grass | poison')
      .get('p').eq(3)
      .contains('Abilities: overgrow | chlorophyll')
      .get('p').eq(4)
      .contains('Moves: swords-dance | cut | bind')
  })

  it('should logout account once Log out button is clicked', () => {
    cy.get('button').contains('Log out').click()
      .url().should('eq', 'http://localhost:3000/login')
      .get('h2').contains('Continue Adventure')
  })
})
