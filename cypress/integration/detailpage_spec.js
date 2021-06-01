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

  
})