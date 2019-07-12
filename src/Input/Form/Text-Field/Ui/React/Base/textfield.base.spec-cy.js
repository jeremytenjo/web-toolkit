import { cypressVisitBaseUrl } from '../../../../../../../.storybook/contants'

context('Textfiel: Base', () => {
  beforeEach(() => {
    cy.visit(`${cypressVisitBaseUrl}input-form-textfield--base`)
  })

  it('Should render styped text', function() {
    cy.get('[data-cy="textfield"]')
      .first()
      .type('hello')
    cy.get('[data-cy="textfield"]').should('value', 'hello')
  })

  it('Should clear input if when clear buton clicked', function() {
    cy.get('[data-cy="textfield"]')
      .first()
      .type('hello')
    cy.get('[data-cy="textfield"]').should('value', 'hello')
    cy.get('[data-cy="textfield_closeIcon"]')
      .first()
      .click()
    cy.get('[data-cy="textfield"]').should('value', '')
  })
})
