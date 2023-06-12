/// <reference types="cypress" />
import shopPage from '../pageObject/shopPage.cy'

describe('shopPage',()=> 
{
 it('chooseItem',()=> {
   const shop = new shopPage
    
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get('h1').should('have.text','Shop Name')
    

    //pick item and add to cart
    cy.selectProduct('Blackberry')

    shop.checkOutButton().click()

    //verify product and checkout
    cy.get(':nth-child(1) > :nth-child(4) > strong').should('have.text','₹. 50000')
   
    cy.get(':nth-child(3) > :nth-child(5) > .btn').click()

    //select coutry
    cy.get('#country').type('indo')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('.checkbox > label').click()
    cy.get('.ng-untouched > .btn').click()
    cy.get('.alert').then((element)=>
    {
      const actualText=element.text()
      expect(actualText.includes('Success')).to.be.true
    })

    })

 })
