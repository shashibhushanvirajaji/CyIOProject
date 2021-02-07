describe("Tools QA Cypress Testing", () => {

    beforeEach(function () {

        cy.visit("https://demoqa.com/")
    })

    it("validate linked in widgets section", () => {

        // using eq command
        cy.get(".card-body>h5").eq(0).should('contain','Elements') 

        // using find command
        cy.get('.category-cards').find('div.card.mt-4.top-card').should('have.length',6)

        cy.get(":nth-child(4) > :nth-child(1) > .avatar > svg").click()
        cy.get(".accordion>:nth-child(1)").click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-5').click()  // {log:false} - skips printing the command in cypress log
        cy.get("#linkWrapper>p>a").should("have.length", 9)
       
    })

})