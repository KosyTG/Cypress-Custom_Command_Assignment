// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('clickAnyElement',(element) => {
    cy.get(element).should('be.visible').and('exist').click()
})

Cypress.Commands.add('typeAnyTextAnywhere', (fields, text) => { 
    cy.get(fields).should('be.visible').type(text)
})

Cypress.Commands.add('isMessageVisible', (element, message) => {
    cy.get(element).should('be.visible').and('contain', message);

})
