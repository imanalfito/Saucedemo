describe('My First Tst', () => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io')

        // cy.pause()

        cy.contains('type').click()
        //should be on a new url which include '/commaand/action'
        cy.url().should('include', '/commands/actions')

        //get an input, type into it and verify that the value has been update
        cy.get('.action-email')
        .type('fake@email.com').should('have.value', 'fake@email.com')
    })
})