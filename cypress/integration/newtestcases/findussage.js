describe('testing find command',()=>{
    specify('test find command',()=>{
        cy.visit('http://testautomationpractice.blogspot.com/')
        cy.get('#sidebar-left-1').find('div.widget.HTML').click({multiple : true})
        //cy.get('#HTML1')
    })
})