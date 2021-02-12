
import locator from '../condenast/locators';

describe('title check', function () {

    specify.skip('title checking', function () {
        cy.fixture('titles').then(function (testdata) {
            testdata.forEach(element => {
                const websitetitle = element.title
                const websiteurl = element.url
                cy.visit(websiteurl)
                cy.title().should('eq', websitetitle)
                cy.screenshot('homepage')
            });
        })

    })

    it.skip('navigators',()=>{

        cy.visit('https://www.condenast.com/')
        cy.viewport(1024,1024)
        cy.get(locator.locators.about).click()       
        
    })

    it.skip('subscription',function(){

       cy.visit('https://www.condenast.com/')
       cy.get(':nth-child(1) > .navigation__text').then(function($element){
            const href = $element.prop('href')
            cy.visit(href)
            cy.url().should('contain','https://www.condenast.com/about')
       })
       
       //cy.get('input#field_1',{force:true}).type('shashibhushan').should('have.text','shashibhushan')

    })

    context('checking each',function(){
        cy.visit('https://www.condenast.com/')
    })
})