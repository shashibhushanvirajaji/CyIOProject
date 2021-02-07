
describe('data driven testing', function () {

    ['fixtureone', 'fixturetwo'].forEach((indexes) => {


        beforeEach(indexes, function () {
            
            cy.fixture(indexes).then(function (data) {
                this.data = data
            })
        })
        specify('test case '+ indexes, function () {
            cy.visit('https://shop.demoqa.com/my-account/');
            cy.get('#reg_username').type(this.data.username);
            cy.get('#reg_email').type(this.data.emailaddress);
            cy.get('#reg_password').type(this.data.password)

        })
    })
})

