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
      .get('form input[type="password"]')
      .get('label').eq(2).contains('Confirm Password')
      .get('button').contains('Sign Up')
      .get('p').contains('Already have an account')
      .get('a').contains('Login')
  })
})
