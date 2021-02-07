describe('testing framework',()=>{

   
        
    it('test case ',()=>{
        cy.visit('https://rahulshettyacademy.com/angularpractice/')       
        cy.get(':nth-child(2) > .nav-link').click()
        var phones =  ['iphone X','Samsung Note 8','Nokia Edge','Blackberry']
        phones.forEach(phonename => {
        cy.get('.card-body > .card-title > a').each(($element,index,$list)=>{
            const mobilename = $element.text()
            cy.log('phone name = '+mobilename)
            if(mobilename.includes(phonename))
            {
                cy.get('.card-footer > .btn').eq(index).click()
                cy.wait(5000)
            }
        })
        })
       
           
       

        })
    })
  
