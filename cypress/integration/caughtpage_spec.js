import {caughtBall} from '../fixtures/srcData'

describe('Caught Page', () => {
  beforeEach(() => {
    cy.interceptPokmemon()
      .visit('http://localhost:3000/login')
      .get('form input[type="email"]').type('test@gmail.com')
      .get('form input[type="password"]').type('123456')
      .get('button').click()
      .get('button').get('button > img').eq(0).click()
      .get('button').get('button > img').eq(1).click()
      .get('button').get('button > img').eq(2).click()
      .get('div > a').eq(1).click()
  })

  it('should show url change to caught pokemon section', () => {
    cy.url().should('eq', 'http://localhost:3000/caught')
  })

  it('should let user know page is empty', () => {
    cy.get('button').get('button > img').eq(0).click()
      .get('button').get('button > img').eq(0).click()
      .get('button').get('button > img').eq(0).click()

  })

  it('should show navbar on load', () => {
    cy.get('header')
      .get('a').eq(0).contains('Home')
      .get('a').eq(1).contains('Show Caught')
      .get('h1').contains('Pokédex')
      .get('button').contains('Log out')
  })

  it('should show caught pokemon once pokeball is clicked', () => {
    cy.get('.card-display').children().should('have.length', 3)
      .get('button').get('button > img').should('have.attr', 'src', caughtBall)
  })

  it('should allow user to click pokeball and see favorited pokemon leave caught page', () => {
    cy.get('button').get('button > img').eq(0).click()
      .get('.card-display').children().should('have.length', 2)
      .get('h1').eq(3).contains('ivysaur')
  })

  it('should take user back to home page once clicked', () => {
    cy.get('div > a').eq(0).click()
      .url().should('eq', 'http://localhost:3000/')
  })

  it('should logout account once Log out button is clicked', () => {
    cy.get('button').contains('Log out').click()
      .url().should('eq', 'http://localhost:3000/login')
      .get('h2').contains('Continue Adventure')
  })
})
