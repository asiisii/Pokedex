describe('Login Page', () => {
  beforeEach(() => {
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
})
