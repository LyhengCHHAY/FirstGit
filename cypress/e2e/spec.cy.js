describe('Navigate to registration page', () => {
  it('by clicking the Sign up button on login page', () => {
    cy.visit('https://deploy.taastests.com/auth/login')

    cy.contains('Sign Up').click()
  })
})

describe('Input data', () => {
  it('into company name', () => {
    cy.visit('https://deploy.taastests.com/auth/registration')

    //Input company name
    cy.get('.TuiFormInput_wrapInput__gRWLP')
        .find('[name="company_name"]').type('Wuba LuLu')

    //Input phone number
    cy.get('.TuiFormInput_wrapInput__gRWLP')
        .find('[name="company_phone"]').type('+855966190277')

    //Select company country
    // cy.get('.TuiDropdownList_inputDropdownList__5lrOB ')
    //     .find('[id = "company_country"]')
    //     .select('Cambodia').should('have.value', 'Cambodia')

     cy.get('select#company_country')
         .select('Cambodia')
         .should('have.value', 'Cambodia')

    //Input admin email address
    cy.get('.TuiFormInput_wrapInput__gRWLP')
        .find('[name="admin_email"]').type('chhay.lyheng007@gmail.com')

    //Input admin name
    cy.get('.TuiFormInput_wrapInput__gRWLP')
        .find('[name="admin_name"]').type('Fox')

    cy.contains('Register organisation').click()
  })
})