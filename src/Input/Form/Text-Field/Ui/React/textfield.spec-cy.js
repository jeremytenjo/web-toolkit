import { cypressVisitBaseUrl } from '../../../../../../.storybook/contants'

context('Textfield Validation', () => {
  beforeEach(() => {
    cy.visit(`${cypressVisitBaseUrl}input-form-textfield--validation`)
  })

  it('Required - On initial Load input field should not show error message but if submitted it will show error messages', function() {
    cy.get('[data-cy="textfield_errorMessages"]').should('not.be.visible')
    cy.get('button[data-cy="textfield_submitButton"]').click()
    cy.get('[data-cy="textfield_errorMessages"]').should('be.visible')
  })
})
