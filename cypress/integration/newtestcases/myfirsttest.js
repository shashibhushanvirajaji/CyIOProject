/// <reference types="cypress" />

describe('my first test suite',()=>{
    
    it('my first test case',()=>{
        cy.visit('http://automationpractice.com/index.php')

       // cy.get(".sf-with-ul:visible").should('have.length',2)
      // cy.get("#search_query_top").type("Blouse").type('{enter}')
        //cy.contains('Women').click()
        //cy.contains('Casual Dresses').click({force:true})

        cy.get('.login').click()
        cy.get('#email').type('shashi.virajaji@gmail.com')
        cy.get('#passwd').type('shashi12')

        cy.get('#SubmitLogin > span').click()

        cy.get("cy.get('.sf-menu > :nth-child(2) > .sf-with-ul')").click()
    })

 
})
