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



})