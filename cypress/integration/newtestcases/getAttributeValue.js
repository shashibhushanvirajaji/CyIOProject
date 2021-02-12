describe('attribute value',function(){
  
    it('working with attributes', function(){

        cy.visit('https://www.google.com/')

        cy.get('.gLFyf').should('have.prop')
        cy.get('.gLFyf').then(function(attr)
        {
            cy.log(attr.prop('type'))
        })
    })
    
})