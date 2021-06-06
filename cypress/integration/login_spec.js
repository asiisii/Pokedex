describe('Login Page', () => {
  beforeEach(() => {
    cy.interceptPokmemon()
    cy.visit('http://localhost:3000/login')
  })

  it('should render the login form', () => {
    cy.contains('h2', 'Continue Adventure')
      .get('label').eq(0).contains('Email')
      .get('form input[type="email"]')
      .get('label').eq(1).contains('Password')
      .get('form input[type="password"]')
      .get('button').contains('Login')
      .get('p').contains('Need an account?')
      .get('a').contains('Sign Up')
  })

  it('should be able to type in inputs and see value updated', () => {
    cy.get('form input[type="email"]').type('test@gmail.com')
      .should('have.value', 'test@gmail.com')
      .get('form input[type="password"]').type('123456')
      .should('have.value', '123456')
  })

  it('should be able to fill out form and redirect to homepage', () => {
    cy.get('form input[type="email"]').type('test@gmail.com')
      .get('form input[type="password"]').type('123456')
      .get('button').click()
      .url().should('eq', 'http://localhost:3000/')
      .get('h1').eq(0).contains('Pokédex')
  })

  it('should return an error if email input is left empty', () => {
    cy.get('form input[type="email"]')
      .get('form input[type="password"]').type('123456')
      .get('button').click()
      .get('form input[type="email"]:invalid')
  })

  it('should return an error if password input is left empty', () => {
    cy.get('form input[type="email"]').type('test@gmail.com')
      .get('form input[type="password"]')
      .get('button').click()
      .get('form input[type="password"]:invalid')
  })

  it('should return error message if password is put in incorrectly', () => {
    cy.get('form input[type="email"]').type('test@gmail.com')
      .get('form input[type="password"]').type('1')
      .get('button').click()
      .wait(1000)
      .get('h2').eq(1).contains('Email or password is incorrect')
  })

  it('should return error message if email is put in incorrectly', () => {
    cy.get('form input[type="email"]').type('tt@gmail.com')
      .get('form input[type="password"]').type('123456')
      .get('button').click()
      .wait(1000)
      .get('h2').eq(1).contains('Email or password is incorrect')
  })

  it('should return an error if @ symbol is left out of email', () => {
    cy.get('form input[type="email"]').type('testgmail.com')
      .get('form input[type="password"]').type('123456')
      .get('button').click()
      .get('form input[type="email"]:invalid')
  })

  it('should redirect to sign up component when Sign Up is clicked', () => {
    cy.get('a').contains('Sign Up').click()
      .url().should('eq', 'http://localhost:3000/signup')
      .get('h2').contains('Start your Adventure')
  })
})

describe.only('Error', () => {
  it('should display error message for 404 status code', () => {
    cy.intercept('https://pokeapi.co/api/v2/pokemon?limit=151', {
      statusCode: 404
    })
    
  })
})
