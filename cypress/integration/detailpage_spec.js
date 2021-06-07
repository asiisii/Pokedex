import {caughtBall, uncaughtBall} from '../fixtures/srcData'

describe('Detail page', () => {
  beforeEach(() => {
    cy.interceptPokmemon()
      .visit('http://localhost:3000/login')
      .get('form input[type="email"]').type('test@gmail.com')
      .get('form input[type="password"]').type('123456')
      .get('button').click()
      .get('div > .pokemon-card').eq(0).click()
  })

  it('should be on pokemon details page', () => {
    cy.url().should('eq', 'http://localhost:3000/1')
  })

  it('should display loading msg while retreving pokemon info', () => {
    cy.get('body').then(body => {
      if(body.get('.loading')) {
        cy.contains('Loading...catching Pokemons')
      }
    })
  })

  it('should have info header', () => {
    cy.get('.info-header > a')
      .contains('Go back')
      .get('h1').contains('BULBASAUR')
      .get('button').contains('Regular Form')
      .get('button').contains('Shiny Form')
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
      .should('have.attr', 'src', 'https://play.pokemonshowdown.com/sprites/xyani/bulbasaur.gif')
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
      .get('a').click()
      .url().should('eq', 'http://localhost:3000/')
      .get('h1').contains('Pokédex')
  })

  it('should have ivysaur info', () => {
    cy.wait(1000)
      .get('a').click()
      .get('.pokemon-card').eq(1).click()
      .url().should('eq', 'http://localhost:3000/2')
      .get('.info-header > a')
      .get('h1').contains('IVYSAUR')
      .get('button').contains('Regular Form')
      .get('button').contains('Shiny Form')
      .get('.pokemon-info')
      .find('img').eq(1)
      .should('have.attr', 'src', 'https://play.pokemonshowdown.com/sprites/xyani/ivysaur.gif')
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

  it('should change the image to shiny form when Shiny Form button is clicked', () => {
    cy.get('img').eq(1)
      .should('have.attr', 'src', 'https://play.pokemonshowdown.com/sprites/xyani/bulbasaur.gif')
      .get('button').contains('Shiny Form').click()
      .get('img').eq(1)
      .should('have.attr', 'src', 'https://play.pokemonshowdown.com/sprites/ani-shiny/bulbasaur.gif')
  })

  it('should change the image back to regular form when Regular Form button is clicked', () => {
    cy.get('img').eq(1)
      .should('have.attr', 'src', 'https://play.pokemonshowdown.com/sprites/xyani/bulbasaur.gif')
      .get('button').contains('Shiny Form').click()
      .get('img').eq(1)
      .should('have.attr', 'src', 'https://play.pokemonshowdown.com/sprites/ani-shiny/bulbasaur.gif')
      .get('button').contains('Regular Form').click()
      .get('img').eq(1)
      .should('have.attr', 'src', 'https://play.pokemonshowdown.com/sprites/xyani/bulbasaur.gif')
  })

})
