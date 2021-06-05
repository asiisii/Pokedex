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
    cy.get('form input[type="email"]').type('test@gmail.com')
      .should('have.value', 'test@gmail.com')
      .get('form input[type="password"]').eq(0).type('123456')
      .should('have.value', '123456')
      .get('form input[type="password"]').eq(1).type('123456')
      .should('have.value', '123456')
  })
})
