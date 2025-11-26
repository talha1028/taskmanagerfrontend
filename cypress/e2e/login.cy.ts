describe('Login Page', () => {
  it('should login successfully', () => {
    cy.visit('http://localhost:4200/login');

    cy.get('#email').type('admin@example.com');
    cy.get('#password').type('12345678');

    cy.intercept('POST', '/auth/login', {
      statusCode: 200,
      body: { message: 'Logged in successfully' }
    }).as('loginRequest');

    cy.get('#loginbutton').click();

    cy.wait('@loginRequest').its('response.statusCode').should('eq', 200);

    cy.url().should('include', '/home');

  });
});
