describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('opens with App Bar title', () => {
    cy.visit ('/');
    cy.get('[data-cy=app-top-bar]').should('contain', 'Thrift Shift');
  });

});