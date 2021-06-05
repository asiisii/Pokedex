describe('Sign up', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login')
      .get('a').contains('Sign Up').click()
  })

  it('should render the signup form', () => {
    cy.contains('h2', 'Start your Adventure')
      .get('label').eq(0).contains('Email')
      .get('form input[type="email"]')
      .get('label').eq(1).contains('Password')
      .get('label').eq(2).contains('Confirm Password')
      .get('form input[type="password"]').should('have.length', 2)
      .get('form input[type]')
      .get('button').contains('Sign Up')
      .get('p').contains('Already have an account')
      .get('a').contains('Login')
  })

  it('should be able to type in inputs and see value updated', () => {
    cy.get('form input[type="email"]').type('testing@gmail.com')
      .should('have.value', 'testing@gmail.com')
      .get('form input[type="password"]').eq(0).type('123456')
      .should('have.value', '123456')
      .get('form input[type="password"]').eq(1).type('123456')
      .should('have.value', '123456')
  })

  it.skip('should be able to fill out form, make new account, and redirect to home page', () => {
    cy.get('form input[type="email"]').type('testing@gmail.com')
      .get('form input[type="password"]').eq(0).type('123456')
      .get('form input[type="password"]').eq(1).type('123456')
      .get('button').click()
      .url().should('eq', 'http://localhost:3000/')
      .get('h1').eq(0).contains('Pokédex')
  })

  it('should return an error if email input is left blank', () => {
    cy.get('form input[type="email"]')
      .get('form input[type="password"]').eq(0).type('123456')
      .get('form input[type="password"]').eq(1).type('123456')
      .get('button').click()
      .get('form input[type="email"]:invalid')
  })

  it('should return an error if password input is left empty', () => {
    cy.get('form input[type="email"]').type('testing@gmail.com')
      .get('form input[type="password"]').eq(0)
      .get('form input[type="password"]').eq(1).type('123456')
      .get('button').click()
      .get('form input[type="password"]:invalid')
  })

  it('should return an error if confirm password input is left empty', () => {
    cy.get('form input[type="email"]').type('testing@gmail.com')
      .get('form input[type="password"]').eq(0).type('123456')
      .get('form input[type="password"]').eq(1)
      .get('button').click()
      .get('form input[type="password"]:invalid')
  })

  it('should return an error if passwords do not match', () => {
    cy.get('form input[type="email"]').type('testing@gmail.com')
      .get('form input[type="password"]').eq(0).type('123456')
      .get('form input[type="password"]').eq(1).type('1')
      .get('button').click()
      .get('h2').eq(1).contains('Passwords do not match')
  })
})
