/// <reference types = "cypress" />

context('Welcome to ReturnBear Page', () => {
    beforeEach(() => {
        // 1
        cy.visit(Cypress.env('admin_url'))
    })

    it('C74 - Login with valid credentials', () => {
        cy.adminLogin({ url: Cypress.env('return_case_url')} )
    })

    it('C75 - Login with invalid email', () => {
        // 2
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input')
            .type('Email')
        cy.findByRole('button', { name: 'Log In' })
            .should('be.disabled')

        // 3
        cy.get('input[type="password"]')
            .type(Cypress.env('admin_password'))
        cy.findByRole('button', { name: 'Log In' })
            .should('be.enabled')

        // 4
        cy.findByRole('button', { name: 'Log In' })
            .click()
        cy.get('.MuiAlert-message')
            .should('contain', 'Unable to authenticate, please try again or contact customer service.')
        cy.url()
            .should('contain', '/login')
    })

    it('C76 - Login with invalid password', () => {
        // 2
        cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input')
            .type('razvan@returnbear.com')
        cy.findByRole('button', { name: 'Log In' })
            .should('be.disabled')

        // 3
        cy.get('input[type="password"]')
            .type('invalid-password')
        cy.findByRole('button', { name: 'Log In' })
            .should('be.enabled')

        // 4
        cy.findByRole('button', { name: 'Log In' })
            .click()
        cy.get('.MuiAlert-message')
            .should('contain', 'Unable to authenticate, please try again or contact customer service.')
        cy.url()
            .should('contain', '/login')
    })
})