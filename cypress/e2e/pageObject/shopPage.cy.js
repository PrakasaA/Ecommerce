class shopPage
{
itemName()
{
    return cy.get('.card-title')
}
addCartItem()
{
    return cy.get('button.btn')
}
priceTag()
{
    return cy.get('h5')
}
itemDesc()
{
    return cy.get('p.card-text')
}     
checkOutButton()
{
    return cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link')
}
homeButton()
{
    return cy.get('.navbar > .navbar-nav > :nth-child(1) > .nav-link')
}

}

export default shopPage;
