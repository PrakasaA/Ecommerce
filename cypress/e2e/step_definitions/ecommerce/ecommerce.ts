import {Given, When, Then} from "@badeball/cypress-cucumber-preprocessor"
import cypress from "cypress";
import homePage from '../../pageObject/homePage.cy'
import shopPage from "../../pageObject/shopPage.cy";
import checkOutPage from "../../pageObject/checkOutPage.cy";
const home = new homePage
const shop = new shopPage
const checkOut = new checkOutPage



Given('User Open Ecommerce Page',()=> {
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
})

When('User Submit Data',()=> {
    
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

When('User go to shop page',()=>{
    home.shopButton().click()
})

When('User add item to cart',()=> {
    shop.itemName().each(($el, index, $list) => {
        if($el.text().includes('Blackberry'))
        {
           shop.addCartItem().eq(index).click()
        }
      })
})

When('checkout the item',()=> {
    shop.checkOutButton().click()
    checkOut.continueShopButton().click()
    checkOut.editLocation().type('indo')
    checkOut.suggestBox().click()
    checkOut.checkBox().click()
    checkOut.purchaseButton().click()
    
})

Then('User succesfully checkout',()=> {
    checkOut.alertSucces().then((element)=>
    {
      const actualText=element.text()
      expect(actualText.includes('Success')).to.be.true
    })
})



