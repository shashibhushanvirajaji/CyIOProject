describe('testing webtables',()=>{

    it('web table checking',()=>{
        cy.visit('http://testautomationpractice.blogspot.com/')
        
        cy.get('table[name=\'BookTable\']').should('be.visible')   
    
        cy.get("table[name='BookTable']>tbody>tr").eq(1).find('td')
        .each(($el,index,$list)=>{
            cy.log($el.text())
        })
        
        cy.get("table[name='BookTable']>tbody>tr").eq(3).within(()=>{
            cy.get('td').each(($ele,index, $listt)=>{
                cy.log($ele.text())                
            })
        })

       

       // cy.get("table[name='BookTable']").contains('Amit').parent('tr').eq(1).each(($element,index,$list))
  
        
    })
    it('using within ',()=>{
        cy.visit('http://testautomationpractice.blogspot.com/')
        cy.get("table[name='BookTable']>tbody>tr").eq(2).within(()=>{
            cy.get('td').eq(1).contains('Selenium')
            
        })
    })
})