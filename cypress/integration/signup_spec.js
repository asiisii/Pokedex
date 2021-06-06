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

  it('should be able to fill out form, make new account, and redirect to home page', () => {
    const getId = new Date().valueOf()
    cy.get('form input[type="email"]').type(`testing${getId}@gmail.com`)
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

  it('should return an error if @ symbol is left out of email', () => {
    cy.get('form input[type="email"]').type('testinggmail.com')
      .get('form input[type="password"]').eq(0).type('123456')
      .get('form input[type="password"]').eq(1).type('123456')
      .get('button').click()
      .get('form input[type="email"]:invalid')
  })
  
  it.only('should say loading while retreving the data', () => {
    cy.get('a').contains('Login').click()
      .get('body').then(body => {
        if(body.get('.loading')) {
          cy.contains('Loading...')
        }
      })
  })
  
  it('should redirect to login component when Login is clicked', () => {
    cy.get('a').contains('Login').click()
      .url().should('eq', 'http://localhost:3000/login')
      .get('h2').contains('Continue Adventure')
  })

})
