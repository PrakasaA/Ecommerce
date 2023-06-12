class homePage
{

userNameBox()
{
    return cy.get(':nth-child(1) > .form-control');
}

TwoWayDataBinding()
{
    return cy.get(':nth-child(4) > .ng-untouched');
}

Gender()
{
    return cy.get('select');
}
PasswordBox()
{
    return cy.get('#exampleInputPassword1')
}
EmailBox()
{
    return cy.get(':nth-child(2) > .form-control');
}

EmploymentStatStud()
//student
{
    return cy.get(':nth-child(2) > .form-check-label')
}

EmploymentStatEm()
{
    return cy.get(':nth-child(3) > .form-check-label')
}

DateOfBirth()
{
    return cy.get(':nth-child(8) > .form-control')
}

SubmitButton()
{
    return cy.get('.btn')
}
Alert()
{
    return cy.get('.alert')
}

shopButton()
{
    return cy.get(':nth-child(2) > .nav-link')
}
}

export default homePage;
