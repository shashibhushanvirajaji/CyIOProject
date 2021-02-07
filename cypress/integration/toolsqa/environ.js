describe('validating environment variables',function(){
    it('test to check environment variables',function(){
        cy.visit(Cypress.env('url'))
        
    })
})