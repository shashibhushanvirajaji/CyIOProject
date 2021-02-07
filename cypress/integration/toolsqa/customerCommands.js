

describe('testing custom commands',function(){
    it('validate custom commands',function(){
        cy.visit('http://shop.demoqa.com/my-account/')
       
        //cy.log(cy.get('.post').getText())
        cy.clickButton('Register')
    })
})