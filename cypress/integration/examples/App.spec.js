describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('opens with App Bar title', () => {
    cy.visit ('/');
    cy.get('[data-cy=AppTopBar]').should('contain', 'Thrift Shift');
  });

  it('shows Winter courses when Winter is selected', () => {
    cy.visit ('/');
    cy.get('[data-cy=MenuButton]').click();
    cy.get('[data-cy=SideList]').should('contain' ,'Your Items');
  });

});