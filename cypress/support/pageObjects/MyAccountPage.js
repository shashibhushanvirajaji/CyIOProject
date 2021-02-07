
class MyAccountPage {

    visit() {
        cy.visit("http://shop.demoqa.com/my-account/")
    }

    getusername() {
        return cy.get('#reg_username')
    }

    getemailaddress() {
        return cy.get('#reg_email')
    }

    getpassword() {
        return cy.get('#reg_password')
    }
}

export default MyAccountPage