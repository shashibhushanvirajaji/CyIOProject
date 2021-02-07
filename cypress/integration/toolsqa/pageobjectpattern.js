
import MyAccountPage from '../../support/pageObjects/MyAccountPage'

describe('page object pattern',function(){
  
    it('testing page object',function(){
        const accountpage = new  MyAccountPage()

        accountpage.visit()
        accountpage.getusername().type("adsfadsf")
        accountpage.getemailaddress().type('adfdsf@gmail.com')
        accountpage.getpassword().type('password').type('{enter}')

        cy.get('.woocommerce-password-strength').then(($element)=>{
            const message = $element.text()
            if(message.includes('Very weak - Please enter a stronger password.'))
            cy.log('matching')
        })
    })
})