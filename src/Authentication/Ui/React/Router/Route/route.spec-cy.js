/* eslint-disable cypress/no-unnecessary-waiting */
import { cypressVisitBaseUrl } from '../../../../../../.storybook/contants'

context('Route: Authentication', () => {
  beforeEach(() => {
    cy.visit(`${cypressVisitBaseUrl}routing-react-router--route`)
  })

  it('if signed out, redirect private pages to login', function() {
    cy.get('[data-cy="page-public"]').contains('Public Page')
    cy.get('[data-cy="signinStatus"]').contains('(Signed Out)')
    cy.get('[data-cy="button-private1"]').click()
    cy.get('[data-cy="page-login"]').contains('Login Page')
    cy.get('[data-cy="button-signin"]').click()
    cy.wait(3000)
    cy.get('[data-cy="button-private1"]').click()
    cy.get('[data-cy="page-private1"]').contains('Private Page 1')
  })
})
