describe('Create User Page', () => {
  it('should create a new user', () => {
    cy.visit('http://localhost:4200/signup');

    cy.get('input[name="name"]').type('Talha');
    cy.get('input[name="email"]').type('talha@test.com');
    cy.get('input[name="password"]').type('123456');
    cy.get('select[name="role"]').select('user');

    cy.intercept('POST', '/users/createuser', {
      statusCode: 200,
      body: { message: 'User Created' }
    }).as('createUser');

    cy.get('button[type="submit"]').click();

    cy.wait('@createUser').its('response.statusCode').should('eq', 200);

    
  });
});
