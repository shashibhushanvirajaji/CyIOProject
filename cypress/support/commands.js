// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('AddTwoNumbers',(num1,num2)=>{
    cy.log(num1+num2)
})

Cypress.Commands.add('clickButton',(label)=>{
    cy.get('button').contains(label).click()
})


Cypress.Commands.add('getText', { prevSubject: 'element' }, 
    ($element) => {
        return $element.text()
     })

// Command to get element from a frame.

Cypress.Commands.add("getIframeElement", (iframeLocator, elementLocator) => { 
    cy.get(iframeLocator).then($element=> {
    const $body = $element.contents().find('body')
    let stripe = cy.wrap($body)
    stripe.find(elementLocator).eq(0)
})
})
