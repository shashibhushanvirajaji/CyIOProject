describe('testing with multiple sets of data',()=>{
  
    specify('launch application',function(){
        cy.visit('http://shop.demoqa.com/my-account/')
    })
    it('enter details',function(){
        cy.fixture('example').then(function(testdata){
            testdata.forEach(element => {
                const usernamID =  element.username
                
                cy.get("#reg_username").clear()
                cy.get("#reg_username").type(usernamID)
                
                cy.wait(3000)
            });
        })
    })
})