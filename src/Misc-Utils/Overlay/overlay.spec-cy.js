context('Actions', () => {
  beforeEach(() => {
    cy.visit(
      'http://localhost:9002/?path=/story/misc-utils-overlay-ui-react--variations',
    )
  })

  it('shows on button click & hides on overlay click', function() {
    cy.get('data-cy=overlay').should('not.be.visible')
    cy.get('data-cy=show-button').click()
    cy.get('data-cy=overlay').should('be.visible')
    cy.get('data-cy=overlay').click()
    cy.get('data-cy=overlay').should('not.be.visible')
  })
})
