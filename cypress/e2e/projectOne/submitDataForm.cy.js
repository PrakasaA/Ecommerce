/// <reference types="cypress" />
import homePage from '../pageObject/homePage.cy'


describe('User submit data form', ()=> 
{
it('submitData',function() {
    const home = new homePage
    cy.fixture('example').then(function(user){
        
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
    
        home.userNameBox().type(user.name)
        home.EmailBox().type(user.email)
        home.Gender().select(user.gender)
        home.DateOfBirth().type(user.dateOfbirth)
        home.TwoWayDataBinding().should('have.value',user.name)
        home.SubmitButton().click()
        home.Alert().then((element)=>{
            const actualText=element.text()
            expect(actualText.includes('Success!')).to.be.true
        })
    })

})
    
})