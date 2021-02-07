import { default as HomePage } from "../../support/pageObject/HomePage"

describe('understanding framework', function(){

    before(function(){
        //cy.fixture('example').should('exist')
        cy.fixture('example').then(function(testdata){
            this.tdata = testdata
        })
    })

    it('Home page login', function(){

        const homePage = new HomePage()
        cy.visit(Cypress.env("url"))
        homePage.getSignIn().click()
        homePage.getEmailAddress().type(this.tdata.emailaddress)
        homePage.getPassword().type(this.tdata.password)
        homePage.getSubmit().click()
        // cy.log(this.tdata.name)
        // cy.AddTwoNumbers(2,5)   // adding  custom command  ... to commands.js

        //// "technologies" : ["Selenium","toscca","UFT","Rest Assured","TestNG"]
        // this.tdata.technologies.forEach(function(element) {
        //     cy.log(element)
        // });
    })

    
})