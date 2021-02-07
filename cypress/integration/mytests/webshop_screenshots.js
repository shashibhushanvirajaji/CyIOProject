

describe('taking screen shots ',function(){

    it('take screenshot',function(){       
        cy.visit('http://demowebshop.tricentis.com/')        
        cy.get('#small-searchterms').first().screenshot('searchitems')        
    })
})