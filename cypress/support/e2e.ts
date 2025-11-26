// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'
// cypress/support/e2e.ts

/// <reference types="cypress" />

Cypress.Commands.add('login', (email: string, password: string) => {
  cy.request({
    method: 'POST',
    url: 'http://localhost:3000/auth/login', // your backend login endpoint
    body: { email, password }
  }).then((resp) => {
    // store token in localStorage (or wherever your app expects it)
    window.localStorage.setItem('token', resp.body.token);
  });
});
