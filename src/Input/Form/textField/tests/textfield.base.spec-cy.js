import { cypressVisitBaseUrl } from '../../../../../.storybook/contants'

context('Textfield: Base', () => {
  beforeEach(() => {
    cy.visit(`${cypressVisitBaseUrl}input-form-text-field--all-styles`)
  })

  it('Should render typed text', function() {
    cy.get('[data-cy="default_textfield"]').type('hello')
    cy.get('[data-cy="default_textfield"]').should('value', 'hello')
  })

  it('Should clear input if when clear buton clicked', function() {
    cy.get('[data-cy="default_textfield"]').type('hello')
    cy.get('[data-cy="default_textfield"]').should('value', 'hello')
    cy.get('[data-cy="textfield_closeIcon"]')
      .first()
      .click()
    cy.get('[data-cy="default_textfield"]').should('value', '')
  })
})
