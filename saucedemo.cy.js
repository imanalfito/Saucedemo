/// <reference types = "cypress" />

describe('Testing' , () => {
    it('User Fixture data', () => {
        const users = cy.fixture('users.json')
        cy.visit('https://www.saucedemo.com/')
        
        cy.get('#user-name').clear()
        Cy.get('#user-name').type(username)
        cy.get('#password').type(users.standard_user.password)
        cy.get('#login-button').click()

        
    });
});