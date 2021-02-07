describe('testing home page',()=>{

    before( function(){
       
        cy.visit(Cypress.env('tricentisenv'))
        var title = cy.title()
        cy.get('.ico-login').click()
    })
    
    it('validate error message for wrong credentials',()=>{

        cy.get('#Email').type('shashi.virajaji@gmail.com')
        cy.get('#Email').should('have.value','shashi.virajaji@gmail.com')
        cy.get('#Password').type('Shashi@12')
        cy.get('form > .buttons > .button-1').should('be.enabled')
        cy.get('form > .buttons > .button-1').click()
        
        cy.get('.validation-summary-errors').should('be.visible')
        cy.get('.validation-summary-errors').then(($element)=>{
                var errormessage = $element.text()
               if(errormessage.includes('unsucessful'))
               {
                   cy.log('expected message displayed')
               }
        })

        cy.get('#RememberMe').click().should('be.checked')
    })

    specify('validating top menu links',()=>{
        cy.get('div.header-menu>ul.top-menu>li').should('have.length',7)
        cy.get('.inactive').each(($element,index,$list)=>{
           cy.log($element.text())           
        })
    })

    it.s
})