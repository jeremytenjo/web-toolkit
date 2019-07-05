context('Overlay', () => {
  beforeEach(() => {
    cy.visit(
      'http://localhost:9002/iframe.html?id=misc-utils-overlay-ui-react--variations',
    )
  })

  it('shows on button click & hides on overlay click', function() {
    cy.get('[data-cy="overlay"]').should('not.be.visible')
    cy.get('button[data-cy="show-button"]').click()
    cy.get('[data-cy="overlay"]').should('be.visible')
    cy.get('[data-cy="overlay"]').click()
    cy.get('[data-cy="overlay"]').should('not.be.visible')
  })
})
