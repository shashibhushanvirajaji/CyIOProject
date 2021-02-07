describe("Tools QA Cypress Testing", () => {

    beforeEach(function () {

        cy.visit("https://demoqa.com/")
        cy.screenshot('demoHomePage')
    })
    
    it("Validate links in interactions section", function () {
        // Clicking on Interactions Menu Item
        cy.get(':nth-child(5) > :nth-child(1) > .avatar > svg').should('be.focused')
        cy.get(':nth-child(5) > :nth-child(1) > .avatar > svg').click();
        //Verify number of items present under the interactions Tab
        cy.screenshot('interactions')
        cy.get(':nth-child(5) > .element-list > .menu-list > li').should('have.length', 5);
      
      })
})