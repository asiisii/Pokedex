import {caughtBall} from '../fixtures/srcData'

describe('Caught Page', () => {
  beforeEach(() => {
    cy.visit('/')
      .get('button').get('button > img').eq(0).click()
      .get('button').get('button > img').eq(1).click()
      .get('button').get('button > img').eq(2).click()
      .get('header > a').eq(1).click()
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

  it('should show caught pokemon once pokeball is clicked', () => {
    cy.get('.card-display').children().should('have.length', 3)
      .get('button').get('button > img').should('have.attr', 'src', caughtBall)
  })

  it('should allow user to click pokeball and see favorited pokemon leave caught page', () => {
    cy.get('button').get('button > img').eq(0).click()
      .get('.card-display').children().should('have.length', 2)
      .get('h1').eq(1).contains('ivysaur')
  })

  it('should take user back to home page once clicked', () => {
    cy.get('header > a').eq(0).click()
      .url().should('eq', 'http://localhost:3000/')
  })
})
