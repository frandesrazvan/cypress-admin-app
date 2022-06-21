/// <reference types = "cypress" />

context('Return Case', () => {
    describe('Returns', () => {
        beforeEach(() => {
            cy.visit(Cypress.env('admin_url'))
            cy.adminLogin({ url: Cypress.env('return_case_url')} )
        })

        it('C78 - Returns', () => {
            // preconditions
            cy.get('.MuiToolbar-root > .MuiGrid-justify-content-xs-space-between > :nth-child(1)')
                .click()
            cy.findByText(/RB Luxury - QA/)
                .click()
            // 

            // 1
            cy.get('.MuiTabs-flexContainer > .Mui-selected')
                .should('contain', 'Pending Requests')
 
            // 2 
            cy.contains('Approve')
                .first()
                .click()
            cy.get('.MuiSnackbar-root > .MuiPaper-root')
                .should('exist')
                .should('contain', 'Return Approved')

            // 3
            cy.contains('Deny')
                .first()
                .click()
            cy.get('.MuiDialogContent-root')
                .should('exist')
                .should('be.visible')
            cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
                .should('exist')
            cy.get('.MuiDialogContent-root > .MuiBox-root > .MuiTypography-root')
                .should('contain', '*')
            cy.contains('Cancel')
                .first()
                .should('be.enabled')

            // 4 
            cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
                .type('The return item needs to have the tags')
            cy.findByText(/Deny Request/)
                .should('be.enabled')

            // 5
            cy.findByText(/Deny Request/)
                .click()
            cy.get('.MuiDialogContent-root')
                .should('not.exist')
            cy.get('.MuiSnackbar-root > .MuiPaper-root')
                .should('exist')
                .should('be.visible')
                .should('contain', 'Return Denied')
        })

        it.only('C79 - Returns - with item detail', () => {
            // preconditions
            cy.get('.MuiToolbar-root > .MuiGrid-justify-content-xs-space-between > :nth-child(1)')
                .click()
            cy.findByText(/RB Luxury - QA/)
                .click()
            // 

            // 1
            cy.get('.MuiButtonBase-root.MuiTab-root.MuiTab-textColorPrimary.Mui-selected')
                .should('have.attr', 'aria-selected', 'true')
            cy.wait(6000)

            // 2
            cy.get('.MuiTableBody-root > tr > td')
                .first()
                .click()
            cy.url()
                .should('match', /https:\/\/admin.(.+).returnbear.com\/return-case(.+)/)

            // 3
            cy.contains('Deny Return Request')
                .click()
            cy.get('.MuiPaper-root.MuiDialog-paper.MuiDialog-paperScrollPaper.MuiDialog-paperWidthXs.MuiPaper-elevation24.MuiPaper-rounded')
                .should('exist')
                .should('be.visible')
            cy.get('.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputMultiline.MuiOutlinedInput-inputMultiline')
                .should('exist')
                .should('be.visible')
            cy.get('.MuiButtonBase-root.MuiButton-root.MuiButton-contained.MuiButton-containedSecondary.Mui-disabled.Mui-disabled')
                .should('be.enabled')

            // 4
            cy.get('.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputMultiline.MuiOutlinedInput-inputMultiline')
                .type('The return item needs to have the tags')
            cy.contains('Deny Request')
                .should('be.enabled')

            // 5
            cy.contains('Deny Request')
                .click()
            cy.contains('Deny Return Request')
                .should('not.exist')
            cy.contains('Approve Return Request')
                .should('not.exist')
            cy.get('[data-testid="tagChip"]')
                .should('contain', 'DENIED')
        })
    })
})