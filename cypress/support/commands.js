Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function(){
    cy.get('#firstName').type('Victor')
    cy.get('#lastName').type('Zarzar')
    cy.get('#email').type('victorzarzar58@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.contains('button', 'Enviar').click()
})

