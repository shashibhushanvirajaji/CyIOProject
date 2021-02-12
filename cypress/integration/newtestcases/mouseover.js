describe('testing mouse over functionality', function(){

    it('testing mouse over', function(){

        cy.visit('http://automationpractice.com/index.php')
        cy.get('ul.sf-menu.clearfix.menu-content.sf-js-enabled.sf-arrows>li:nth-of-type(2)').trigger('mouseover')
        cy.contains('CASUAL DRESSES').click()
    })

})