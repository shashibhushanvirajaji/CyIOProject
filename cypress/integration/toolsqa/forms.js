describe("sCypress Testing", () => {

    beforeEach(function () {

        cy.visit("https://demoqa.com/")
      
    })

    it("validate text boxes", () => {

        cy.get(':nth-child(6) > :nth-child(1) > .avatar > svg').scrollIntoView()
        
       
        cy.get(':nth-child(2) > :nth-child(1) > .card-body > h5').then(($element)=>{
            cy.log($element.text())
                })

        cy.get(':nth-child(2) > :nth-child(1) > .avatar > svg').click()
        cy.get(':nth-child(2) > .element-list > .menu-list > #item-0 > .text').click()
        cy.get('#firstName').should('be.enabled').focus()
        .should('have.attr','placeholder','First Name').type("shashi",{delay:150}).blur()
        
        cy.get('#firstName').should('be.enabled').type("slow typing",{delay:250})

        cy.get('#hobbies-checkbox-1').check({force: true}).should('be.checked')
        cy.get('#hobbies-checkbox-2').check({force: true}).should('be.checked')
        cy.get('#hobbies-checkbox-3').check({force: true}).should('be.checked')


    })



})