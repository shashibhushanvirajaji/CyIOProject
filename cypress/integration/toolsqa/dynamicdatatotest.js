describe('cypress testing',()=>{

    ['mouseover', 'mouseout', 'mouseenter', 'mouseleave'].forEach((elementt)=>{
        it('test'+elementt,()=>{
            cy.log(elementt)
           
        })
    })

    ['english','telugu','tamil'].forEach((language)=>{

        it('looping array '+ language,()=>{
           cy.log(language)
        })

    })
    
})