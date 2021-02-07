class HomePage
{
    getSignIn()
    {
        return cy.get("a[title='Log in to your customer account']")
    }
    getEmailAddress()
    {
        return cy.get("#email")
    }
    getPassword()
    {
        return cy.get('#passwd')
    }
    getSubmit()
    {
        return cy.get('#SubmitLogin')
    }

}
export default HomePage