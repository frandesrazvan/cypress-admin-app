/// <reference types = "cypress" />

const first_image = "https://pbs.twimg.com/media/D8Dp0c5WkAAkvME.jpg"
const second_image = "https://aot-wpengine.netdna-ssl.com/wp-content/uploads/2014/04/animal_facts-e1396431549968.jpg"
const third_image = "https://www.kickassfacts.com/wp-content/uploads/2022/04/Peanut-Statue.jpg"
const customer_service_email = "testing@returnbear.com"
const customer_service_email2 = "razvan123@returnbear.com"
const return_policy_link = "https://basiksco.com/pages/return-policy"
const welcome_message = "Welcome to our qa store!"
const return_policy_error_message = "Returns policy URL is required"
const shopping_link = "https://rb-basiks.myshopify.com"
const shopping_link_error_message = "Shopping link is required"
const customer_service_email_error_message = "Customer service email address is required"
const welcome_message_error_message = "Welcome message is required"
const page_update_success_message = "Customer Portal Theme Updated"
const tag_text = "UNDERWEAR"

context('Settings', () => {
    describe('Consumer Portal Theme', () => {
        it('C68 - Consumer Portal Theme functionalities', () => {
            // preconditions
            cy.visit(Cypress.env('admin_url'))
            cy.adminLogin({ url: Cypress.env('return_case_url')} )
            //

             // 1
            cy.get('.MuiToolbar-root > .MuiGrid-justify-content-xs-space-between > :nth-child(1)')
                .click()
            cy.findByText(/RB Luxury - QA/)
                .click()
    
            // 2
            cy.contains('Settings')
                .click()
            cy.url()
                .should('eq', Cypress.env('settings_url'))
            
            // 3
            cy.contains('Customize consumer portal')
                .click()
            cy.url()
                .should('eq', Cypress.env('settings_consumer_portal_url'))
    
            // 4
            cy.get('.MuiGrid-root.MuiGrid-container:nth-child(1) > div > div > div > div > button')
                .first()
                .click()
            cy.get('.uploadcare--panel.uploadcare--dialog__panel')
                .should('exist')
                .should('be.visible')
            cy.contains('Choose a local file')
                .should('exist')
                .should('be.visible')
    
            // 5
            cy.get('.uploadcare--menu.uploadcare--panel__menu > div > :nth-child(4)')
                .click()
            cy.get('.uploadcare--input')
                .should('exist')
                .should('be.visible')
    
            // 6
            cy.get('.uploadcare--input')
                .type(first_image)
    
            // 7
            cy.get('.uploadcare--form > .uploadcare--button')
                .click()
            cy.get('.uploadcare--tab__header > .uploadcare--text')
                .should('contain', 'Add this image?')
            cy.get('.uploadcare--tab_name_preview > .uploadcare--footer > .uploadcare--button_primary')
                .should('exist')
    
            // 8
            cy.get('.uploadcare--tab_name_preview > .uploadcare--footer > .uploadcare--button_primary')
                .click()
            cy.get('.uploadcare--panel.uploadcare--dialog__panel')
                .should('not.exist')
            cy.get('.uploadcare--widget__button.uploadcare--widget__button_type_remove') 
                .first()
                .should('exist')
                .should('contain', 'Remove')
    
            // 9
            cy.get('.MuiGrid-root.MuiGrid-container:nth-child(3) > div > div > div > div > button')
                .first()
                .click()
            cy.get('.uploadcare--panel.uploadcare--dialog__panel')
                .should('exist')
                .should('be.visible')
            cy.contains('Choose a local file')
                .should('exist')
                .should('be.visible')
    
            // 10
            cy.get('.uploadcare--menu.uploadcare--panel__menu > div > :nth-child(4)')
                .click()
            cy.get('.uploadcare--input')
                .should('exist')
                .should('be.visible')
    
            // 11
            cy.get('.uploadcare--input')
                .type(second_image)
    
            // 12
            cy.get('.uploadcare--form > .uploadcare--button')
                .click()
            cy.get('.uploadcare--tab__header > .uploadcare--text')
                .should('contain', 'Add this image?')
            cy.get('.uploadcare--tab_name_preview > .uploadcare--footer > .uploadcare--button_primary')
                .should('exist')
    
            // 13
            cy.get('.uploadcare--tab_name_preview > .uploadcare--footer > .uploadcare--button_primary')
                .click()
            cy.get('.uploadcare--panel.uploadcare--dialog__panel')
                .should('not.exist')
            cy.get('.uploadcare--widget__button.uploadcare--widget__button_type_remove') 
                .eq(1)
                .should('exist')
                .should('contain', 'Remove')
    
            // 14
            cy.get('.MuiGrid-root.MuiGrid-container:nth-child(2) > div > div > div > div > button')
                .first()
                .click()
            cy.get('.uploadcare--panel.uploadcare--dialog__panel')
                .should('exist')
                .should('be.visible')
            cy.contains('Choose a local file')
                .should('exist')
                .should('be.visible')
    
            // 15
            cy.get('.uploadcare--menu.uploadcare--panel__menu > div > :nth-child(4)')
                .click()
            cy.get('.uploadcare--input')
                .should('exist')
                .should('be.visible')
    
            // 16
            cy.get('.uploadcare--input')
                .type(third_image)
    
            // 17
            cy.get('.uploadcare--form > .uploadcare--button')
                .click()
            cy.get('.uploadcare--tab__header > .uploadcare--text')
                .should('contain', 'Add this image?')
            cy.get('.uploadcare--tab_name_preview > .uploadcare--footer > .uploadcare--button_primary')
                .should('exist')
    
            // 18
            cy.get('.uploadcare--tab_name_preview > .uploadcare--footer > .uploadcare--button_primary')
                .click()
            cy.get('.uploadcare--panel.uploadcare--dialog__panel')
                .should('not.exist')
            cy.get('.uploadcare--widget__button.uploadcare--widget__button_type_remove') 
                .eq(2)
                .should('exist')
                .should('contain', 'Remove')
    
            // 19
            cy.get('.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedStart.MuiOutlinedInput-inputAdornedStart')
                .eq(0)
                .click()
            cy.get('.MuiInputAdornment-root.MuiInputAdornment-positionStart > div > div > div > div')
                .eq(0)
                .should('exist')
                .should('be.visible')
    
            // 20
            cy.get('div[title="#D0021B"]')
                .click()
            cy.get('body')
                .click(100, 100)
    
            // 21
            cy.get('.MuiInputBase-input.MuiOutlinedInput-input.MuiInputBase-inputAdornedStart.MuiOutlinedInput-inputAdornedStart')
                .eq(1)
                .click()
            cy.get('.MuiInputAdornment-root.MuiInputAdornment-positionStart > div > div > div > div')
                .should('exist')
                .should('be.visible')
    
            // 22
            cy.get('div[title="#7ED321"]')
                .click()
            cy.get('body')
                .click(100, 100)
                
            // 23
            cy.get('.MuiGrid-grid-md-12 > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
                .click()
                .clear()
            cy.get('.MuiBox-root > .MuiPaper-root > .MuiAlert-message > .MuiTypography-root')
                .should('exist')
                .should('be.visible')
                .should('contain', welcome_message_error_message)
    
            // 24
            cy.get('.MuiGrid-grid-md-12 > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
                .type(welcome_message)
            cy.get('.MuiBox-root > .MuiPaper-root > .MuiAlert-message > .MuiTypography-root')
                .should('not.exist')
    
            // 25
            cy.get('#demo-customized-select')
                .click()
            cy.get('[aria-expanded="true"]')
                .should('exist')
    
            // 26
            cy.contains('Roboto')
                .click({force: true})
            cy.get('body')
                .click(20, 50)
    
            // 27
            cy.get(':nth-child(4) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
                .clear()
            cy.get('.MuiAlert-message > .MuiTypography-root')
                .should('exist')
                .should('be.visible')
                .should('contain', customer_service_email_error_message)
    
            // 28
            cy.get(':nth-child(4) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
                .type(customer_service_email)
            cy.get('.MuiAlert-message > .MuiTypography-root')
                .should('not.exist')
    
            // 29
            cy.get(':nth-child(5) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
                .clear()
            cy.get(':nth-child(5) > .MuiBox-root > .MuiPaper-root > .MuiAlert-message > .MuiTypography-root')
                .should('exist')
                .should('contain', return_policy_error_message)
    
            // 30
            cy.get(':nth-child(5) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
                .type(return_policy_link)
            cy.get(':nth-child(5) > .MuiBox-root > .MuiPaper-root > .MuiAlert-message > .MuiTypography-root')
                .should('not.exist')
    
            // 31
            cy.get(':nth-child(6) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
                .clear()
            cy.get(':nth-child(6) > .MuiBox-root > .MuiPaper-root > .MuiAlert-message > .MuiTypography-root')
                .should('exist')
                .should('contain', shopping_link_error_message)
    
            // 32
            cy.get(':nth-child(6) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
                .type(shopping_link)
    
            // 33
            cy.contains('Save Changes')
                .click()
            cy.get('[data-testid="successIndicator"]')
                .should('exist')
                .should('be.visible')
                .should('contain', page_update_success_message)
    
            // 34 
            cy.get(':nth-child(4) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
                .clear()
            cy.get('.MuiAlert-message > .MuiTypography-root')
                .should('exist')
                .should('be.visible')
                .should('contain', customer_service_email_error_message)
    
            // 35
            cy.get(':nth-child(4) > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
                .type(customer_service_email2)
            cy.get('.MuiAlert-message > .MuiTypography-root')
                .should('not.exist')
    
            // 36
            cy.contains('Discard Changes')
                .click()
            cy.contains(customer_service_email2)
                .should('not.exist')
        })

        it('C80 - Consumer Portal Theme functionalities reflexion on Consumer Portal', () => {
            // preconditions
            cy.consumerPortalThemeFunctionalities({ 
                first_image: first_image, 
                second_image: second_image, 
                third_image: third_image,
                welcome_message_error_message: welcome_message_error_message,
                welcome_message: welcome_message,
                customer_service_email_error_message: customer_service_email_error_message,
                customer_service_email: customer_service_email,
                return_policy_error_message: return_policy_error_message,
                return_policy_link: return_policy_link,
                shopping_link_error_message: shopping_link_error_message,
                shopping_link: shopping_link,
                page_update_success_message: page_update_success_message,
                customer_service_email_error_message: customer_service_email_error_message,
                customer_service_email2: customer_service_email2,
            })

            cy.visit(Cypress.env('locate_order_url'))
            cy.wait(4000)
            cy.get('input[name="email"]')
                .type("razvan@returnbear.com")
            cy.findByRole('button', { name: 'Start Return' })
                .should('be.disabled') 
            cy.get('.TextInput_inputLabel__fLH8a.TextInput_shiftedDown__c0QW2')
                .type(2845)
            cy.findByRole('button', { name: 'Start Return' })
                .should('be.enabled')

            // 1
            cy.get('.StoreThemeLayout_container__-Egt1')
                .should('have.css', '--background-image-url', 'url(https\:\/\/ucarecdn\.com\/cf077082-dfc4-49fa-b144-273dac0100d4\/)')
                .should('have.css', '--background-image-url-mobile', 'url(https\:\/\/ucarecdn\.com\/3464768b-b0d9-4849-a150-95ad4ea70953\/)')
            cy.get('.Button_container__XDNIn/OrderLookup_startReturnButton__IRWpr')
                .should('have.css', '--button-text-color', '#7ed321')
                .should('have.css', '--button-background-color', '#d0021b')
            cy.get('.DefaultAppPage_title__pKX5F')
                .should('have.value', welcome_message)
            cy.get('.OrderLookup_questionsLink__D0s9V > a')
                .should('have.value', customer_service_email)
            cy.get('.StoreThemeLayout_footerLink__rLS1h')
                .should('have.attr', 'href', return_policy_link)
        })
    })
    
    describe('Return Policy Configuration', () => {
        beforeEach(() => {
            cy.visit(Cypress.env('admin_url'))
            cy.adminLogin({ url: Cypress.env('return_case_url')} )
        })

        it('C70 - Return Policy Configuration functionalities', () => {
            // 1
            cy.get('.MuiToolbar-root > .MuiGrid-justify-content-xs-space-between > :nth-child(1)')
                .click()
            cy.findByText(/RB Luxury - QA/)
                .click()
    
            // 2
            cy.contains('Settings')
                .click()
            cy.url()
                .should('eq', Cypress.env('settings_url'))
            
            // 3
            cy.contains('Configure return policy')
                .click()
            cy.url()
                .should('eq', Cypress.env('settings_return_policy_url'))
    
            // 4
            cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
                .clear()
                .should('be.empty')
    
            // 5
            cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
                .type(30)
            cy.get('.MuiInputAdornment-root > .MuiButtonBase-root > .MuiButton-label')
                .should('be.visible')
                .click()
    
            // 6
            cy.contains('Add Policy Rule')
                .click()
            cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input"]')
                .should('exist')
                .should('be.visible')
            cy.contains('Save Policy Rule')
                .should('exist')
                .should('be.visible')
                .should('be.enabled')
            cy.contains('Cancel')
                .should('exist')
                .should('be.visible')
    
            // 7
            cy.contains('Save Policy Rule')
                .click()
            cy.get('.MuiAlert-message')
                .should('exist')
                .should('be.visible')
                .should('contain', 'The policy rule text is required.')
    
            // 8
            cy.contains('Cancel')
                .click()
            cy.get('.jss222 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
                .should('not.exist')
            cy.contains('Save Policy Rule')
                .should('not.exist')
            cy.contains('Cancel')
                .should('not.exist')
            cy.contains('Add Policy Rule')
                .should('exist')
    
            // 9
            cy.contains('Add Policy Rule')
                .click()
            cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input"]')
                .should('exist')
                .should('be.visible')
            cy.contains('Save Policy Rule')
                .should('exist')
                .should('be.visible')
                .should('be.enabled')
            cy.contains('Cancel')
                .should('exist')
                .should('be.visible')
            
            // 10
            cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input"]')
                .type('I have the receipt')
    
            // 11
            cy.contains('Save Policy Rule')
                .click()
            cy.get('.MuiTable-root')
                .should('contain', 'I have the receipt')
            cy.get('input[class="MuiInputBase-input MuiOutlinedInput-input"]')
                .should('not.exist')
            cy.contains('Save Policy Rule')
                .should('not.exist')
            cy.contains('Cancel')
                .should('not.exist')
            cy.contains('Add Policy Rule')
                .should('exist')
            cy.get('.MuiTypography-root')
                .should('exist')
                .should('be.visible')
                .should('contain', 'Policy Rule Successfully Added!')
            
            // 12
            cy.contains('View sample checklist here.')
                .click()
            cy.get('.MuiDialogContent-root')
                .should('exist')
                .should('be.visible')
    
            // 13
            cy.get('.MuiGrid-grid-xs-1 > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root')
                .click()
            cy.get('.MuiDialogContent-root')
                .should('not.exist')
    
            // 14
            cy.get('.MuiTableRow-root.MuiTableRow-head:nth-child(4) > th > button')
                .click()
            cy.get('.MuiTable-root')
                .should('not.contain', 'I have the receipt')
        })
    })

    describe('Shipping', () => {
        it('C71 - Shipping Settings functionalities', () => {
            // 1
            cy.get('.MuiToolbar-root > .MuiGrid-justify-content-xs-space-between > :nth-child(1)')
                .click()
            cy.findByText(/RB Luxury - QA/)
                .click()
    
            // 2
            cy.contains('Settings')
                .click()
            cy.url()
                .should('eq', Cypress.env('settings_url'))
            
            // 3
            cy.contains('Set shipping preferences')
                .click()
            cy.url()
                .should('eq', Cypress.env('settings_shipping_courier_url'))
    
            // 4
            cy.contains('ReturnBear Shipping')
                .first()
                .click()
        
             // 5
            cy.contains('Connect Your Own Carrier')
                .first() 
                .click()
            cy.get('.MuiDialog-container > .MuiPaper-root') 
                .should('exist')
                .should('be.visible')
                .should('contain', 'Contact Us')    
    
            // 6
            cy.contains('Close')
                .click()
            cy.get('.MuiDialog-container > .MuiPaper-root') 
                .should('not.exist')
                
            // 7
            cy.get('.MuiIconButton-label > input[type="checkbox"]')
                .eq(1)
                .click()
            cy.get('.MuiDialog-container > .MuiPaper-root')
                .should('exist')
                .should('be.visible')
                .should('contain', 'Contact Us')  
    
            // 8
            cy.contains('Close')
                .click()
            cy.get('.MuiDialog-container > .MuiPaper-root') 
                .should('not.exist')
    
            // 9
            cy.contains('Automatically select the lowest cost shipping option for each US return.')
                .click()
    
            // 10
            cy.contains('Default to your own connected carrier account and pricing for each US return.')
                .click()
            cy.get('.MuiDialog-container > .MuiPaper-root') 
                .should('exist')
                .should('be.visible')
                .should('contain', 'Contact Us') 
    
            // 11
            cy.contains('Close')
                .click()
            cy.get('.MuiDialog-container > .MuiPaper-root') 
                .should('not.exist')
    
            // 12
            cy.get('.MuiIconButton-label > input')
                .eq(6)
                .check()
    
            // 13
            cy.contains('Save changes')
                .click()
            cy.get('[data-testid="successIndicator"]')
                .should('exist')
                .should('be.visible')
                .should('contain', 'Updated Carrier')
    
            // 14
            cy.get('.MuiIconButton-label > input')
                .eq(6)
                .uncheck()
                .should('not.be.checked')
    
            // 15
            cy.contains('Discard changes')
                .click()
            cy.get('.MuiIconButton-label > input')
                .eq(6)
                .should('be.checked')
        })
    })

    describe('Payout Methods', () => {
        it('C73 - Payout Methods functionalities', () => {
            // 1
            cy.get('.MuiToolbar-root > .MuiGrid-justify-content-xs-space-between > :nth-child(1)')
                .click()
            cy.contains('RB Luxury - QA')
                .click()
    
            // 2
            cy.contains('Settings')
                .click()
            cy.url()
                .should('eq', Cypress.env('settings_url'))
            
            // 3
            cy.contains('Enable payout methods')
                .click()
            cy.url()
                .should('eq', Cypress.env('settings_payout_methods_url'))
            cy.contains('Save Changes')
                .should('be.disabled')
    
            // 4
            cy.get('span.MuiIconButton-label > input')
                .eq(2)
                .click()
            cy.contains('Save Changes')
                .should('be.enabled')
    
            // 5
            cy.get('span.MuiIconButton-label > input')
                .eq(3)
                .uncheck()
                .should('not.be.checked')
    
            // 6
            cy.get('span.MuiIconButton-label > input')
                .eq(3)
                .check()
            cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
                .should('exist')
                .should('be.visible')
            cy.get('.MuiGrid-container > :nth-child(2) > .MuiInputBase-root')
                .should('exist')
                .should('be.visible')
    
            // 7
            cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
                .eq(6)
                .clear()
                .type('7005901226141')
    
            // 8
            cy.get('.MuiGrid-container > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input')
                .clear()
                .type(15)
    
            // 9
            cy.contains('Save Changes')
                .click()
            cy.get('[data-testid="successIndicator"]')
                .should('exist')
                .should('contain', 'Payout Methods Updated')
            cy.contains('Save Changes')
                .should('be.disabled')
    
            // 10
            cy.get('span.MuiIconButton-label > input')
                .eq(2)
                .uncheck()
            cy.contains('Save Changes')
                .should('be.enabled')
    
            // 11
            cy.contains('Discard Changes')
                .click()
            cy.get('span.MuiIconButton-label > input')
                .eq(3)
                .should('be.checked')
            cy.get('.MuiGrid-container > :nth-child(2) > .MuiInputBase-root > .MuiInputBase-input')
                .should('have.value', 15)
        })
    })

    describe('Automation', () => {
        it('C77 - Automation Rules functionalities', () => {
            // 1
            cy.get('.MuiToolbar-root > .MuiGrid-justify-content-xs-space-between > :nth-child(1)')
                .click()
            cy.contains('RB Luxury - QA')
                .click()
    
            // 2
            cy.contains('Settings')
                .click()
            cy.url()
                .should('eq', Cypress.env('settings_url'))
            
            // 3
            cy.contains('Manage Automation Rules')
                .click()
            cy.url()
                .should('eq', Cypress.env('settings_automation_url'))
    
            // 4
            cy.contains('Add new automation')
                .click()
            cy.url()
                .should('eq', Cypress.env('settings_automation_new_url'))
            cy.contains('Save Automation')
                .should('be.enabled')
    
            // 5
            cy.contains('Save Automation')
                .click()
            cy.get('.MuiAlert-message')
                .eq(0)
                .should('exist')
                .should('be.visible')
                .should('contain', 'Rule name is required')
            cy.get('.MuiAlert-message')
                .eq(1)
                .should('exist')
                .should('be.visible')
                .should('contain', 'At least 1 condition is required.')
            cy.get('.MuiAlert-message')
                .eq(2)
                .should('exist')
                .should('be.visible')
                .should('contain', 'Outcome is required')
    
            // 6
            cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
                .type('First Rule')
    
            // 7
            cy.contains('Add a new condition')
                .click()
            cy.get('.MuiSelect-root.MuiSelect-select.MuiSelect-selectMenu.MuiInputBase-input.MuiInput-input')
                .should('have.attr', 'aria-expanded', 'true')
            
            // 8
            cy.contains('Total Item Value')
                .click()
            cy.get('.MuiGrid-root.MuiGrid-container.MuiGrid-item.MuiGrid-grid-xs-9')
                .should('exist')
                .should('be.visible')
    
            // 9    
            cy.get('.MuiSelect-root.MuiSelect-select.MuiSelect-selectMenu.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input')
                .eq(1)
                .click()
            cy.get('.MuiSelect-root.MuiSelect-select.MuiSelect-selectMenu.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input')
                .eq(1)
                .should('have.attr', 'aria-expanded', 'true')
    
            // 10
            cy.contains('Less Than')
                .click()
            
            // 11
            cy.get('.MuiInputBase-root.MuiOutlinedInput-root.MuiInputBase-fullWidth.MuiInputBase-formControl')
                .type(20)
    
            // 12
            cy.get('.MuiSelect-root.MuiSelect-select.MuiSelect-selectMenu.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input')
                .eq(2)
                .click()
            cy.get('.MuiSelect-root.MuiSelect-select.MuiSelect-selectMenu.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input')
                .eq(2)
                .should('have.attr', 'aria-expanded', 'true')
    
            // 13
            cy.get('.MuiTypography-root.MuiTypography-body1')
                .contains('$')
                .click()
    
            // 14
            cy.contains('Add a new outcome')
                .click()
            cy.get('.MuiSelect-root.MuiSelect-select.MuiSelect-selectMenu.MuiInputBase-input.MuiInput-input')
                .eq(1)
                .should('have.attr', 'aria-expanded', 'true')
    
            // 15
            cy.contains('payout method')
                .click()
            cy.get('.MuiGrid-grid-xs-10 > .MuiGrid-container')
                .should('exist')
                .should('be.visible')
    
            // 16
            cy.get('.MuiSelect-root.MuiSelect-select.MuiSelect-selectMenu.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input')
                .eq(3)
                .click()
                .should('have.attr', 'aria-expanded', 'true')
    
            // 17
            cy.contains('Refund')
                .click()
            cy.get('input[name="outcome.selectedTargets"]')
                .should('have.value', 'REFUND')
            cy.get('body')
                .click(50, 20)
    
            // 18
            cy.get('.MuiInputBase-input.MuiOutlinedInput-input')
                .eq(5)
                .type('Market Policy')
    
            // 19
            cy.contains('Save Automation')
                .click()
            cy.get('[data-testid="successIndicator"]')
                .should('exist')
                .should('be.visible')
                .should('contain', 'Rule created')
            cy.url()
                .should('contain', Cypress.env('settings_automation_url'))
    
            // 20
            cy.get('.MuiGrid-root.MuiGrid-item > svg[class="MuiSvgIcon-root"]')
                .eq(1)
                .click()
            cy.contains('Add a new outcome')
                .should('be.visible')
    
            // 21
            cy.contains('Discard Changes')
                .click()
            cy.get('.MuiGrid-grid-xs-10 > .MuiGrid-container')
                .should('be.visible')    
    
            // 22
            cy.go('back')    
            cy.url()
                .should('eq', Cypress.env('settings_automation_url'))
    
            // 23
            cy.get('.MuiIconButton-label > svg[class="MuiSvgIcon-root"]')
                .first()
                .click()
            cy.url()
                .should('contain', Cypress.env('settings_automation_url'))
    
            // 24
            cy.go('back')    
            cy.url()
                .should('eq', Cypress.env('settings_automation_url'))
    
            // 25  
            cy.get('.MuiIconButton-label > svg[class="MuiSvgIcon-root"]')
                .eq(1)
                .click()
            cy.get('.MuiDialog-container > .MuiPaper-root')
                .should('exist')
                .should('be.visible')
                .should('contain', 'Delete rule')
    
            // 26
            cy.contains('Cancel')
                .click()
            cy.get('.MuiDialog-container > .MuiPaper-root')
                .should('not.exist')
            
            // 27
            cy.get('.MuiIconButton-label > svg[class="MuiSvgIcon-root"]')
                .eq(1)
                .click()
            cy.get('.MuiDialog-container > .MuiPaper-root')
                .should('exist')
                .should('be.visible')
                .should('contain', 'Delete rule')
    
            // 28
            cy.contains('Confirm')
                .click()
            cy.get('.MuiGrid-root.MuiGrid-container')
                .should('not.contain', 'First Rule')
        })

        it.only('C93 - Automation Rule - Tag functionality', () => {
            // preconditions
            cy.visit(Cypress.env('admin_url'))
            cy.adminLogin({ url: Cypress.env('return_case_url')} )
            cy.get('.MuiToolbar-root > .MuiGrid-justify-content-xs-space-between > :nth-child(1)')
                .click()
            cy.findByText(/RB Luxury - QA/)
                .click()
            cy.contains('Settings')
                .click()
            cy.contains('Manage Automation Rules')
                .click()
            //

            // 1
            cy.contains('Add new automation')
                .click()
            cy.url()
                .should('eq', Cypress.env('settings_automation_new_url'))

            // 2
            cy.get('.MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input')
                .type('Underwear rule')

            // 3
            cy.contains('Add a new condition')
                .click()
            cy.get('.MuiSelect-root.MuiSelect-select.MuiSelect-selectMenu.MuiInputBase-input.MuiInput-input')
                .should('have.attr', 'aria-expanded', 'true')

            // 4
            // cy.findByText(/Tag/)
            //     .click()
            cy.contains('Tag')
                .click()
            cy.get('.MuiSelect-root.MuiSelect-select.MuiSelect-selectMenu.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input')
                .should('exist')
            cy.get('input[placeholder="TAG*"]')
                .should('exist')

            // 5
            cy.contains('Operator*')
                .click()
            // solution 1
            cy.get('.MuiSelect-root.MuiSelect-select.MuiSelect-selectMenu.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input')
                .eq(1)
                
            // solution 2
            // cy.get('#mui-component-select-conditions[0].operator')
            //     .should('have.attr', 'aria-expanded', 'true')
            cy.get('.MuiList-root.MuiMenu-list.MuiList-padding > li')
                .should('exist')
                .should('be.visible')
            cy.get('.MuiList-root.MuiMenu-list.MuiList-padding > li:nth-child(1)')
                .should('exist')
                .should('be.visible')

            // 6
            cy.contains('Equal')
                .click()

            // 7
            cy.get('input[placeholder="TAG*"]')
                .type(tag_text)
                
            // 8 
            cy.contains('Add a new outcome')
                .click()
            cy.get('.MuiSelect-root.MuiSelect-select.MuiSelect-selectMenu.MuiInputBase-input.MuiInput-input')
                .should('exist')

            // 9
            cy.contains('payout method')
                .click()
            cy.get('.MuiSelect-root.MuiSelect-select.MuiSelect-selectMenu.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input')
                .first()
                .should('exist')
            cy.get('.MuiInputBase-input.MuiOutlinedInput-input')
                .first()
                .should('exist')

            // 10
            cy.get('.MuiSelect-root.MuiSelect-select.MuiSelect-selectMenu.MuiSelect-outlined.MuiInputBase-input.MuiOutlinedInput-input')
                .eq(2)
                .click()
                .should('have.attr', 'aria-expanded', 'true')
            cy.get('.MuiList-root.MuiMenu-list.MuiList-padding > li')
                .should('exist')
            cy.get('.MuiList-root.MuiMenu-list.MuiList-padding > li:nth-child(1)')
                .should('exist')
            cy.get('.MuiList-root.MuiMenu-list.MuiList-padding > li:nth-child(2)')
                .should('exist')

            // 11
            cy.contains('Store Credit')
                .click()
            cy.get('.MuiButtonBase-root.MuiListItem-root.MuiMenuItem-root.Mui-selected.MuiMenuItem-gutters.MuiListItem-gutters.MuiListItem-button.Mui-selected')
                .eq(1)
                .should('have.attr', 'aria-selected', 'true')

            // 12
            cy.contains('Refund')
                .click()
            cy.get('.MuiButtonBase-root.MuiListItem-root.MuiMenuItem-root.Mui-selected.MuiMenuItem-gutters.MuiListItem-gutters.MuiListItem-button.Mui-selected')
                .eq(2)
                .should('have.attr', 'aria-selected', 'true')
            cy.get('body')
                .click(50, 15)

            // 13
            cy.get('.MuiInputBase-input.MuiOutlinedInput-input')
                .eq(4)
                .type('Underwear cannot be exchanged')

            // 14
            cy.contains('Save Automation')
                .click()
            cy.get('[data-testid="successIndicator"]')
                .should('exist')
                .should('be.visible')
                .should('contain', 'Rule created')
            cy.url()
                .should('eq', Cypress.env('settings_automation_url'))
        })
    })
})