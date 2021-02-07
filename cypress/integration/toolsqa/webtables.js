describe("cypress testing", function () {
    it('working with tables', () => {
        cy.visit("https://demoqa.com/")
        cy.get(':nth-child(1) > :nth-child(1) > .avatar > svg > path').click()
        cy.get(':nth-child(1) > .element-list > .menu-list > #item-3').click()
        // cy.get('#addNewRecordButton').click()
        // cy.get('#firstName').type('')
        // cy.get('#submit').click()

        cy.get('.rt-tbody>div').should('have.length', 10)
        var counter = 0
        var notblank = 0
        for (let index = 1; index <= 10; index++) {
            cy.get('.rt-tbody > :nth-child(' + index + ') > .rt-tr > :nth-child(1)',{log:false}).then(($element) => {
                var cellValue = $element.text()
                cy.log(cellValue)
                if(cellValue===""){
                    counter = counter+1
                }
            })
        }
        cy.log('no of blank rows = ' + counter)
    })
})