import locator from './Locators'
describe('Demo Test',()=>{

    it('Validating linking in landing page',()=>{
        cy.visit('http://demowebshop.tricentis.com/')
        cy.get(locator.Locators.register).should('be.visible')

        
    })
})