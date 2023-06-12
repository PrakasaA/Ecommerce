class checkOutPage
{
    continueShopButton()
    {
        return cy.get(':nth-child(3) > :nth-child(5) > .btn')
    }
    
    editLocation()
    {
        return cy.get('#country')
    }

    checkBox()
    {
        return cy.get('.checkbox > label')
    }

    purchaseButton()
    {
        return cy.get('.ng-untouched > .btn')
    }

    alertSucces()
    {
        return cy.get('.alert')
    }
    suggestBox()
    {
        return cy.get('.suggestions > ul > li > a')
    }
}

export default checkOutPage;