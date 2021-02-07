/// <reference types="cypress" />
declare namespace Cypress {
    interface Chainable<Subject> {
      /**
       * add the button label name
       * @example
       * cy.clickButton(labelName)
       */
   //  selectProduct(productName: String, size: String , color: String): Chainable<any>
         clickButton(label : String): Chainable<any>
    }
  }