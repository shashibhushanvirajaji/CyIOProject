describe('API Test',function(){

    specify('GET', function(){
        cy.request({
            method : 'GET',           
            url : 'https://jsonplaceholder.cypress.io/comments'
        })
        .then((response)=>{
            expect(response.body).to.have.property('name')
        })
    })
})